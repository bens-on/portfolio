/**
 * Style Utilities - Helper functions for generating styles programmatically
 */

import { gradients, shadows, durations, easing } from './design-tokens';

/**
 * Generate a gradient string from color stops
 */
export function createGradient(
  direction: 'to right' | 'to left' | 'to top' | 'to bottom' | 'to top right' | 'to top left' | 'to bottom right' | 'to bottom left' | number,
  ...colorStops: string[]
): string {
  if (typeof direction === 'number') {
    return `linear-gradient(${direction}deg, ${colorStops.join(', ')})`;
  }
  return `linear-gradient(${direction}, ${colorStops.join(', ')})`;
}

/**
 * Generate a radial gradient
 */
export function createRadialGradient(
  shape: 'circle' | 'ellipse' = 'circle',
  position: string = 'center',
  ...colorStops: string[]
): string {
  return `radial-gradient(${shape} at ${position}, ${colorStops.join(', ')})`;
}

/**
 * Get a gradient by name
 */
export function getGradient(name: keyof typeof gradients): string {
  return gradients[name];
}

/**
 * Generate a shadow with optional color and blur
 */
export function createShadow(
  x: number = 0,
  y: number = 0,
  blur: number = 0,
  spread: number = 0,
  color: string = 'rgba(0, 0, 0, 0.1)'
): string {
  return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
}

/**
 * Get a shadow preset by name
 */
export function getShadow(name: keyof typeof shadows): string {
  return shadows[name];
}

/**
 * Generate multiple shadows (for layered effects)
 */
export function createLayeredShadow(...shadows: string[]): string {
  return shadows.join(', ');
}

/**
 * Generate a glow effect
 */
export function createGlow(
  color: string,
  intensity: number = 0.3,
  blur: number = 20
): string {
  return `0 0 ${blur}px ${color.replace('rgb', 'rgba').replace(')', `, ${intensity})`)}`;
}

/**
 * Generate animation class name with duration and easing
 */
export function getAnimationClass(
  animation: string,
  duration: keyof typeof durations = 'normal',
  easingFunction: keyof typeof easing = 'smooth'
): string {
  const durationMs = durations[duration];
  const easingValue = easing[easingFunction];
  return `${animation} ${durationMs}ms ${easingValue}`;
}

/**
 * Generate a transition string
 */
export function createTransition(
  properties: string | string[],
  duration: keyof typeof durations = 'normal',
  easingFunction: keyof typeof easing = 'smooth',
  delay: number = 0
): string {
  const props = Array.isArray(properties) ? properties.join(', ') : properties;
  const durationMs = durations[duration];
  const easingValue = easing[easingFunction];
  const delayMs = delay > 0 ? ` ${delay}ms` : '';
  return `${props} ${durationMs}ms ${easingValue}${delayMs}`;
}

/**
 * Generate responsive utility classes
 */
export function getResponsiveClass(
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string
): string {
  const classes = [base];
  if (sm) classes.push(`sm:${sm}`);
  if (md) classes.push(`md:${md}`);
  if (lg) classes.push(`lg:${lg}`);
  if (xl) classes.push(`xl:${xl}`);
  return classes.join(' ');
}

/**
 * Generate a text gradient class
 */
export function getTextGradientClass(): string {
  return `bg-gradient-to-r bg-clip-text text-transparent`;
}

/**
 * Generate opacity utility
 */
export function getOpacityClass(level: 'disabled' | 'subtle' | 'muted' | 'default' | 'strong' | 'full'): string {
  const opacityMap = {
    disabled: 'opacity-40',
    subtle: 'opacity-60',
    muted: 'opacity-70',
    default: 'opacity-80',
    strong: 'opacity-90',
    full: 'opacity-100',
  };
  return opacityMap[level];
}

/**
 * Generate border opacity utility
 */
export function getBorderOpacityClass(level: 'subtle' | 'default' | 'strong'): string {
  const opacityMap = {
    subtle: 'border-opacity-10',
    default: 'border-opacity-15',
    strong: 'border-opacity-20',
  };
  return opacityMap[level];
}

/**
 * Generate background opacity utility
 */
export function getBgOpacityClass(level: 'subtle' | 'default' | 'strong'): string {
  const opacityMap = {
    subtle: 'bg-opacity-40',
    default: 'bg-opacity-60',
    strong: 'bg-opacity-80',
  };
  return opacityMap[level];
}

/**
 * Combine multiple class names (utility function)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

