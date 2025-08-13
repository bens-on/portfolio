"use client";

import React from "react";

/**
 * Realistic printed circuit board background with actual PCB elements:
 * copper traces, solder mask, component footprints, vias, and proper layout.
 */
export function DefenseGradient(): React.ReactElement {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* PCB substrate background */}
      <div
        className="absolute inset-0 opacity-95"
        style={{
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        }}
      />
      
      {/* Realistic PCB pattern */}
      <svg
        className="absolute inset-0 opacity-60 mix-blend-multiply"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          {/* Copper trace pattern */}
          <pattern id="copper-traces" width="16" height="16" patternUnits="userSpaceOnUse">
            {/* Main power traces */}
            <path d="M0 2 L16 2" stroke="#B8860B" strokeWidth="0.8" opacity="0.9">
              <animate attributeName="opacity" values="0.7;1.0;0.7" dur="4s" repeatCount="indefinite" />
            </path>
            <path d="M0 14 L16 14" stroke="#B8860B" strokeWidth="0.8" opacity="0.9">
              <animate attributeName="opacity" values="0.7;1.0;0.7" dur="4.5s" repeatCount="indefinite" />
            </path>
            
            {/* Signal traces */}
            <path d="M2 0 L2 16" stroke="#CD853F" strokeWidth="0.4" opacity="0.8">
              <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M14 0 L14 16" stroke="#CD853F" strokeWidth="0.4" opacity="0.8">
              <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.5s" repeatCount="indefinite" />
            </path>
            <path d="M0 6 L16 6" stroke="#CD853F" strokeWidth="0.4" opacity="0.8">
              <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.2s" repeatCount="indefinite" />
            </path>
            <path d="M0 10 L16 10" stroke="#CD853F" strokeWidth="0.4" opacity="0.8">
              <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.8s" repeatCount="indefinite" />
            </path>
            
            {/* Vias (through-hole connections) */}
            <circle cx="2" cy="2" r="0.8" fill="#B8860B" opacity="0.9" />
            <circle cx="14" cy="14" r="0.8" fill="#B8860B" opacity="0.9" />
            <circle cx="2" cy="14" r="0.6" fill="#CD853F" opacity="0.8" />
            <circle cx="14" cy="2" r="0.6" fill="#CD853F" opacity="0.8" />
            <circle cx="8" cy="8" r="0.5" fill="#CD853F" opacity="0.7" />
            
            {/* Solder pads */}
            <circle cx="4" cy="4" r="1.2" fill="#B8860B" opacity="0.8" />
            <circle cx="12" cy="12" r="1.2" fill="#B8860B" opacity="0.8" />
            <circle cx="4" cy="12" r="1.0" fill="#CD853F" opacity="0.7" />
            <circle cx="12" cy="4" r="1.0" fill="#CD853F" opacity="0.7" />
          </pattern>
          
          {/* Component footprints pattern */}
          <pattern id="component-footprints" width="32" height="32" patternUnits="userSpaceOnUse">
            {/* DIP IC package */}
            <rect x="8" y="6" width="16" height="8" fill="none" stroke="#8B4513" strokeWidth="0.3" opacity="0.8" />
            <rect x="10" y="7" width="12" height="6" fill="none" stroke="#8B4513" strokeWidth="0.2" opacity="0.6" />
            <circle cx="10" cy="8" r="0.4" fill="#B8860B" opacity="0.9" />
            <circle cx="10" cy="12" r="0.4" fill="#B8860B" opacity="0.9" />
            <circle cx="22" cy="8" r="0.4" fill="#B8860B" opacity="0.9" />
            <circle cx="22" cy="12" r="0.4" fill="#B8860B" opacity="0.9" />
            
            {/* SMD resistor */}
            <rect x="4" y="20" width="6" height="2" fill="#CD853F" opacity="0.8" />
            <rect x="3.5" y="19.5" width="7" height="3" fill="none" stroke="#8B4513" strokeWidth="0.2" opacity="0.6" />
            
            {/* SMD capacitor */}
            <rect x="22" y="20" width="2" height="4" fill="#CD853F" opacity="0.8" />
            <rect x="21.5" y="19.5" width="3" height="5" fill="none" stroke="#8B4513" strokeWidth="0.2" opacity="0.6" />
            
            {/* Power connector */}
            <rect x="12" y="26" width="8" height="4" fill="none" stroke="#8B4513" strokeWidth="0.4" opacity="0.8" />
            <circle cx="14" cy="28" r="0.6" fill="#B8860B" opacity="0.9" />
            <circle cx="18" cy="28" r="0.6" fill="#B8860B" opacity="0.9" />
            
            {/* Ground plane connections */}
            <path d="M0 16 L32 16" stroke="#B8860B" strokeWidth="1.2" opacity="0.7">
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="5s" repeatCount="indefinite" />
            </path>
          </pattern>
          
          {/* Solder mask pattern */}
          <pattern id="solder-mask" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill="#228B22" opacity="0.3" />
            <circle cx="4" cy="4" r="0.8" fill="none" stroke="#228B22" strokeWidth="0.2" opacity="0.4" />
          </pattern>
          
          {/* Silk screen pattern */}
          <pattern id="silkscreen" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Component labels */}
            <text x="6" y="12" fontSize="1.5" fill="#FFFFFF" opacity="0.4" fontFamily="monospace">IC1</text>
            <text x="6" y="24" fontSize="1.2" fill="#FFFFFF" opacity="0.3" fontFamily="monospace">R1</text>
            <text x="26" y="24" fontSize="1.2" fill="#FFFFFF" opacity="0.3" fontFamily="monospace">C1</text>
            <text x="14" y="32" fontSize="1.2" fill="#FFFFFF" opacity="0.3" fontFamily="monospace">PWR</text>
            
            {/* Arrow indicators */}
            <path d="M30 8 L34 8 M32 6 L34 8 L32 10" stroke="#FFFFFF" strokeWidth="0.2" opacity="0.3" fill="none" />
            <path d="M8 30 L8 34 M6 32 L8 34 L10 32" stroke="#FFFFFF" strokeWidth="0.2" opacity="0.3" fill="none" />
          </pattern>
          
          {/* Gradient overlay for depth */}
          <linearGradient id="pcb-depth" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#2d2d2d" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Fade mask */}
          <mask id="pcb-fade">
            <rect width="100%" height="100%" fill="url(#radial-pcb)" />
          </mask>
          <radialGradient id="radial-pcb">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="70%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* PCB substrate base */}
        <rect width="100%" height="100%" fill="#2d2d2d" />
        
        {/* Copper traces layer */}
        <rect width="100%" height="100%" fill="url(#copper-traces)" />
        
        {/* Component footprints layer */}
        <rect width="100%" height="100%" fill="url(#component-footprints)" opacity="0.4" />
        
        {/* Solder mask layer */}
        <rect width="100%" height="100%" fill="url(#solder-mask)" opacity="0.2" />
        
        {/* Silk screen layer */}
        <rect width="100%" height="100%" fill="url(#silkscreen)" opacity="0.15" />
        
        {/* Depth overlay */}
        <rect
          width="100%"
          height="100%"
          fill="url(#pcb-depth)"
          mask="url(#pcb-fade)"
        />
      </svg>
      
      {/* Subtle blur for realism */}
      <div className="absolute inset-0 backdrop-blur-[0.2px]" />
    </div>
  );
}

export default DefenseGradient;


