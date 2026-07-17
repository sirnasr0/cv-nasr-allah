/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F7F3',
        'paper-dim': '#EEF1EA',
        ink: '#0E1F1A',
        pine: '#0E2E26',
        emerald: {
          DEFAULT: '#1F6F54',
          soft: '#2E8A6B',
          deep: '#0B3A2C',
        },
        signal: '#8FF7C0',
        sage: '#6B7A74',
        line: '#DCE3DD',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(2.75rem, 6vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 4vw, 3.75rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem, 2.6vw, 2.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(14, 31, 26, 0.04), 0 8px 24px -8px rgba(14, 31, 26, 0.08)',
        'lift': '0 4px 12px rgba(14, 31, 26, 0.06), 0 24px 48px -16px rgba(14, 31, 26, 0.16)',
        'glow': '0 0 0 1px rgba(31, 111, 84, 0.12), 0 0 32px rgba(143, 247, 192, 0.25)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
