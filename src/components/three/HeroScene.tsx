import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useIsMobile, useReducedMotion } from '@/lib/useIsMobile'

const EMERALD = new THREE.Color('#1F6F54')
const SIGNAL = new THREE.Color('#8FF7C0')

type NodeData = {
  positions: Float32Array
  colors: Float32Array
  sizes: Float32Array
  count: number
}

function buildNodes(count: number): NodeData {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    // Distribution en ellipsoïde aplatie, plus dense au centre
    const r = Math.pow(Math.random(), 0.6) * 4.2
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)

    const x = r * Math.sin(phi) * Math.cos(theta)
    const y = r * Math.sin(phi) * Math.sin(theta) * 0.55
    const z = r * Math.cos(phi) * 0.7

    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z

    const mixed = EMERALD.clone().lerp(SIGNAL, Math.random() * 0.6)
    colors[i * 3] = mixed.r
    colors[i * 3 + 1] = mixed.g
    colors[i * 3 + 2] = mixed.b

    sizes[i] = Math.random() * 0.06 + 0.02
  }

  return { positions, colors, sizes, count }
}

function buildEdges(nodeData: NodeData, maxDist: number, maxPerNode: number) {
  const { positions, count } = nodeData
  const linePositions: number[] = []

  for (let i = 0; i < count; i++) {
    const ix = positions[i * 3]
    const iy = positions[i * 3 + 1]
    const iz = positions[i * 3 + 2]

    const candidates: { j: number; d: number }[] = []

    for (let j = i + 1; j < count; j++) {
      const jx = positions[j * 3]
      const jy = positions[j * 3 + 1]
      const jz = positions[j * 3 + 2]
      const d = Math.hypot(ix - jx, iy - jy, iz - jz)
      if (d < maxDist) candidates.push({ j, d })
    }

    candidates.sort((a, b) => a.d - b.d)
    candidates.slice(0, maxPerNode).forEach(({ j }) => {
      linePositions.push(ix, iy, iz, positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2])
    })
  }

  return new Float32Array(linePositions)
}

function Graph() {
  const groupRef = useRef<THREE.Group>(null)
  const { viewport } = useThree()

  const nodeCount = viewport.width < 6 ? 34 : 56

  const nodeData = useMemo(() => buildNodes(nodeCount), [nodeCount])
  const edgePositions = useMemo(() => buildEdges(nodeData, 1.35, 2), [nodeData])

  const target = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    if (!groupRef.current) return

    // Parallax doux : le graphe suit légèrement la souris
    target.current.x = state.pointer.x * 0.22
    target.current.y = state.pointer.y * 0.14

    groupRef.current.rotation.y += delta * 0.045
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      target.current.y,
      0.03,
    )
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      target.current.x * 0.3,
      0.03,
    )
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodeData.positions, 3]}
            count={nodeData.count}
            array={nodeData.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[nodeData.colors, 3]}
            count={nodeData.count}
            array={nodeData.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.075}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edgePositions, 3]}
            count={edgePositions.length / 3}
            array={edgePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#1F6F54" transparent opacity={0.16} depthWrite={false} />
      </lineSegments>
    </group>
  )
}

export function HeroScene() {
  const isMobile = useIsMobile(768)
  const reducedMotion = useReducedMotion()

  if (isMobile || reducedMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Graph />
        </Suspense>
      </Canvas>
    </div>
  )
}
