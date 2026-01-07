/**
 * Design Tokens - TypeScript constants for programmatic access to design system values
 * These values correspond to CSS custom properties defined in globals.css
 */

// Color Values
export const colors = {
  background: '#0a0a0a',
  foreground: '#ededed',
  accent: {
    primary: {
      DEFAULT: '#06b6d4', // cyan
      hover: '#0891b2',
      light: '#67e8f9',
      dark: '#0e7490',
    },
    secondary: {
      DEFAULT: '#10b981', // emerald
      hover: '#059669',
      light: '#6ee7b7',
      dark: '#047857',
    },
    tertiary: {
      DEFAULT: '#8b5cf6', // violet
      hover: '#7c3aed',
      light: '#c4b5fd',
      dark: '#6d28d9',
    },
    red: {
      DEFAULT: '#ef4444', // red
      hover: '#dc2626',
      light: '#f87171',
      dark: '#b91c1c',
    },
  },
} as const;

// Gradient Definitions
export const gradients = {
  primary: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
  secondary: 'linear-gradient(135deg, #10b981 0%, #8b5cf6 100%)',
  tertiary: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
  nav: 'linear-gradient(90deg, rgba(16, 185, 129, 0) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(139, 92, 246, 0) 100%)',
  overlay: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 100%)',
  cardOverlay: 'linear-gradient(to top, rgba(10, 10, 10, 0.8) 0%, transparent 100%)',
  text: 'linear-gradient(135deg, #06b6d4 0%, #10b981 50%, #8b5cf6 100%)',
} as const;

// Shadow Presets
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  glowPrimary: '0 0 20px rgba(6, 182, 212, 0.3)',
  glowSecondary: '0 0 20px rgba(16, 185, 129, 0.3)',
  card: '0 4px 20px rgba(0, 0, 0, 0.15)',
  cardHover: '0 8px 30px rgba(0, 0, 0, 0.2)',
} as const;

// Border Radius Scale
export const borderRadius = {
  sm: '0.375rem', // 6px
  md: '0.5rem', // 8px
  lg: '0.75rem', // 12px
  xl: '1rem', // 16px
  '2xl': '1.5rem', // 24px
  full: '9999px',
} as const;

// Spacing Scale
export const spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '6rem', // 96px
} as const;

// Animation Durations (in milliseconds)
export const durations = {
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 700,
  slowest: 1000,
} as const;

// Animation Easing Functions
export const easing = {
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
} as const;

// Opacity Levels
export const opacity = {
  disabled: 0.4,
  subtle: 0.6,
  muted: 0.7,
  default: 0.8,
  strong: 0.9,
  full: 1,
} as const;

// Border Opacity
export const borderOpacity = {
  subtle: 0.1,
  default: 0.15,
  strong: 0.2,
} as const;

// Background Opacity
export const bgOpacity = {
  subtle: 0.4,
  default: 0.6,
  strong: 0.8,
} as const;

// Breakpoint Values (matching Tailwind defaults)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Animation Configs
export const animations = {
  fadeInUp: {
    keyframes: {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    duration: '0.8s',
    easing: 'ease-out',
  },
} as const;

