/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper:  '#FFFFFF',
        canvas: '#FAFAFA',
        ink: {
          DEFAULT: '#0F0F12',
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#0F0F12',
        },
        rose: {
          50:  '#FBF1F6',
          100: '#F5DCEA',
          200: '#EDB8D5',
          300: '#E394BF',
          400: '#DC72A8',
          500: '#D63384', // Brand desaturated pink
          600: '#B82672',
          700: '#971F5D',
          800: '#741748',
          900: '#511033',
        },
        amber: {
          50:  '#FAF6E6',
          100: '#F4ECC2',
          200: '#EDDD8B',
          300: '#E6CD56',
          400: '#E6B800', // Brand desaturated yellow
          500: '#C99F00',
          600: '#A68300',
          700: '#806600',
          800: '#5C4900',
          900: '#3D3000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'extra-tight': '-0.025em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        // Diffusion shadows (low, wide, slightly tinted)
        'diffusion-sm': '0 8px 24px -12px rgba(15, 15, 18, 0.08)',
        'diffusion':    '0 20px 40px -15px rgba(15, 15, 18, 0.08)',
        'diffusion-lg': '0 32px 64px -20px rgba(15, 15, 18, 0.12)',
        // Glass inner refraction
        'glass-edge':   'inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 12px 32px -16px rgba(15, 15, 18, 0.18)',
        // Tinted accent shadows (subtle, never neon)
        'rose-soft':    '0 16px 36px -12px rgba(214, 51, 132, 0.18)',
        'amber-soft':   '0 16px 36px -12px rgba(230, 184, 0, 0.18)',
      },
      animation: {
        'marquee':       'marquee 40s linear infinite',
        'marquee-slow':  'marquee 60s linear infinite',
        'shimmer':       'shimmer 2.5s ease-in-out infinite',
        'pulse-soft':    'pulse-soft 3s ease-in-out infinite',
        'float-y':       'float-y 8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%':       { opacity: '1' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%':       { opacity: '1',   transform: 'scale(1.05)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
