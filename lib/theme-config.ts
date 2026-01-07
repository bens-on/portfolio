/**
 * Theme Configuration - Centralized theme configuration for easy theme switching
 * This file provides a single source of truth for theme values and makes it easy
 * to switch between different visual styles
 */

import { colors, gradients, shadows, spacing } from './design-tokens';

export type ThemeVariant = 'default' | 'minimal' | 'vibrant' | 'professional';

export interface ThemeConfig {
  name: string;
  colors: {
    background: string;
    foreground: string;
    accent: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  };
  gradients: {
    primary: string;
    secondary: string;
    nav: string;
  };
  shadows: {
    card: string;
    cardHover: string;
    glow: string;
  };
  spacing: {
    section: string;
    content: string;
  };
}

/**
 * Default theme configuration
 */
export const defaultTheme: ThemeConfig = {
  name: 'default',
  colors: {
    background: colors.background,
    foreground: colors.foreground,
    accent: {
      primary: colors.accent.primary.DEFAULT,
      secondary: colors.accent.secondary.DEFAULT,
      tertiary: colors.accent.tertiary.DEFAULT,
    },
  },
  gradients: {
    primary: gradients.primary,
    secondary: gradients.secondary,
    nav: gradients.nav,
  },
  shadows: {
    card: shadows.card,
    cardHover: shadows.cardHover,
    glow: shadows.glowPrimary,
  },
  spacing: {
    section: spacing['2xl'],
    content: spacing.md,
  },
};

/**
 * Minimal theme - reduced colors and effects
 */
export const minimalTheme: ThemeConfig = {
  name: 'minimal',
  colors: {
    background: colors.background,
    foreground: colors.foreground,
    accent: {
      primary: colors.foreground,
      secondary: colors.foreground,
      tertiary: colors.foreground,
    },
  },
  gradients: {
    primary: `linear-gradient(135deg, ${colors.foreground} 0%, ${colors.foreground} 100%)`,
    secondary: `linear-gradient(135deg, ${colors.foreground} 0%, ${colors.foreground} 100%)`,
    nav: `linear-gradient(90deg, transparent 0%, transparent 100%)`,
  },
  shadows: {
    card: shadows.sm,
    cardHover: shadows.md,
    glow: 'none',
  },
  spacing: {
    section: spacing.xl,
    content: spacing.sm,
  },
};

/**
 * Vibrant theme - enhanced colors and effects
 */
export const vibrantTheme: ThemeConfig = {
  name: 'vibrant',
  colors: {
    background: colors.background,
    foreground: colors.foreground,
    accent: {
      primary: colors.accent.primary.light,
      secondary: colors.accent.secondary.light,
      tertiary: colors.accent.tertiary.light,
    },
  },
  gradients: {
    primary: gradients.tertiary,
    secondary: gradients.secondary,
    nav: gradients.nav,
  },
  shadows: {
    card: shadows.card,
    cardHover: shadows.xl,
    glow: shadows.glowSecondary,
  },
  spacing: {
    section: spacing['3xl'],
    content: spacing.lg,
  },
};

/**
 * Professional theme - subtle, corporate-friendly
 */
export const professionalTheme: ThemeConfig = {
  name: 'professional',
  colors: {
    background: colors.background,
    foreground: colors.foreground,
    accent: {
      primary: colors.accent.primary.dark,
      secondary: colors.accent.secondary.dark,
      tertiary: colors.accent.tertiary.dark,
    },
  },
  gradients: {
    primary: `linear-gradient(135deg, ${colors.accent.primary.dark} 0%, ${colors.accent.secondary.dark} 100%)`,
    secondary: `linear-gradient(135deg, ${colors.accent.secondary.dark} 0%, ${colors.accent.tertiary.dark} 100%)`,
    nav: `linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.05) 50%, transparent 100%)`,
  },
  shadows: {
    card: shadows.md,
    cardHover: shadows.lg,
    glow: 'none',
  },
  spacing: {
    section: spacing['2xl'],
    content: spacing.md,
  },
};

/**
 * Theme registry - all available themes
 */
export const themes: Record<ThemeVariant, ThemeConfig> = {
  default: defaultTheme,
  minimal: minimalTheme,
  vibrant: vibrantTheme,
  professional: professionalTheme,
};

/**
 * Get theme configuration by variant
 */
export function getTheme(variant: ThemeVariant = 'default'): ThemeConfig {
  return themes[variant];
}

/**
 * Apply theme to CSS variables (for runtime theme switching)
 */
export function applyTheme(theme: ThemeConfig): void {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  
  // Apply colors
  root.style.setProperty('--background', theme.colors.background);
  root.style.setProperty('--foreground', theme.colors.foreground);
  root.style.setProperty('--accent-primary', theme.colors.accent.primary);
  root.style.setProperty('--accent-secondary', theme.colors.accent.secondary);
  root.style.setProperty('--accent-tertiary', theme.colors.accent.tertiary);
  
  // Apply gradients
  root.style.setProperty('--gradient-primary', theme.gradients.primary);
  root.style.setProperty('--gradient-secondary', theme.gradients.secondary);
  root.style.setProperty('--gradient-nav', theme.gradients.nav);
  
  // Apply shadows
  root.style.setProperty('--shadow-card', theme.shadows.card);
  root.style.setProperty('--shadow-card-hover', theme.shadows.cardHover);
  root.style.setProperty('--shadow-glow-primary', theme.shadows.glow);
  
  // Apply spacing
  root.style.setProperty('--section-spacing-sm', theme.spacing.section);
  root.style.setProperty('--content-gap-sm', theme.spacing.content);
}

/**
 * Get current theme variant from localStorage or default
 */
export function getCurrentThemeVariant(): ThemeVariant {
  if (typeof window === 'undefined') return 'default';
  
  const stored = localStorage.getItem('theme-variant');
  if (stored && stored in themes) {
    return stored as ThemeVariant;
  }
  
  return 'default';
}

/**
 * Save theme variant to localStorage
 */
export function saveThemeVariant(variant: ThemeVariant): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('theme-variant', variant);
}

