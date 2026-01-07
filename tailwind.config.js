/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'header': ['var(--font-space-grotesk)', '"Neue Haas Grotesk Display"', '"Söhne"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        'body': ['var(--font-inconsolata)', '"Courier New"', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: {
          primary: {
            DEFAULT: 'var(--accent-primary)',
            hover: 'var(--accent-primary-hover)',
            light: 'var(--accent-primary-light)',
            dark: 'var(--accent-primary-dark)',
          },
          secondary: {
            DEFAULT: 'var(--accent-secondary)',
            hover: 'var(--accent-secondary-hover)',
            light: 'var(--accent-secondary-light)',
            dark: 'var(--accent-secondary-dark)',
          },
          tertiary: {
            DEFAULT: 'var(--accent-tertiary)',
            hover: 'var(--accent-tertiary-hover)',
            light: 'var(--accent-tertiary-light)',
            dark: 'var(--accent-tertiary-dark)',
          },
          red: {
            DEFAULT: 'var(--accent-red)',
            hover: 'var(--accent-red-hover)',
            light: 'var(--accent-red-light)',
            dark: 'var(--accent-red-dark)',
          },
        },
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'glow-primary': 'var(--shadow-glow-primary)',
        'glow-secondary': 'var(--shadow-glow-secondary)',
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        'full': 'var(--radius-full)',
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
      },
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
        'slower': 'var(--duration-slower)',
        'slowest': 'var(--duration-slowest)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--ease-smooth)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-tertiary': 'var(--gradient-tertiary)',
        'gradient-nav': 'var(--gradient-nav)',
        'gradient-overlay': 'var(--gradient-overlay)',
        'gradient-card-overlay': 'var(--gradient-card-overlay)',
        'gradient-text': 'var(--gradient-text)',
      },
    },
  },
  plugins: [],
}

