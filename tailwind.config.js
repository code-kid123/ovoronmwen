/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        benin: {
          green: '#064e3b',
          'green-dark': '#033a2b',
          'green-darker': '#022c22',
          'green-light': '#065f46',
          'green-mid': '#047857',
          bronze: '#d97706',
          'bronze-light': '#e8930c',
          'bronze-dark': '#b45309',
          gold: '#f59e0b',
          'gold-light': '#fbbf24',
          cream: '#fef3c7',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -6px rgba(2, 44, 34, 0.12)',
        'card-hover': '0 24px 48px -16px rgba(2, 44, 34, 0.28)',
        glow: '0 0 40px -8px rgba(245, 158, 11, 0.45)',
        'glow-green': '0 0 40px -8px rgba(6, 78, 59, 0.45)',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '13': '3.25rem',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(3deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'modal-pop': {
          '0%': { opacity: '0', transform: 'scale(0.92) translateY(12px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'drawer-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-6deg)' },
          '75%': { transform: 'rotate(6deg)' },
        },
        'progress-bar': {
          '0%': { width: '0%' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        'toast-in': {
          '0%': { opacity: '0', transform: 'translate(-50%, 14px)' },
          '100%': { opacity: '1', transform: 'translate(-50%, 0)' },
        },
        'drop-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px) scale(0.97)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'ping-soft': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '80%, 100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        pop: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '60%': { transform: 'scale(1.12)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease forwards',
        'fade-in': 'fade-in 0.5s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'ticker': 'ticker 32s linear infinite',
        'modal-pop': 'modal-pop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'drawer-in': 'drawer-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'pulse-ring': 'pulse-ring 1.8s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'toast-in': 'toast-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'drop-in': 'drop-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'ping-soft': 'ping-soft 1.6s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pop': 'pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
    },
  },
  plugins: [],
}