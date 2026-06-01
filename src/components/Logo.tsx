import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  iconSize?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  iconSize = 38
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 
        This SVG is meticulously designed to replicate the creator's circular 4-swoosh swirl.
        We use premium drop-shadow filters inside the SVG to recreate the 3-dimensional overlapping thickness 
        and shadows seen in your original visual.
      */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-700 hover:rotate-360 cursor-pointer filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
      >
        <defs>
          {/* Bevel drop shadow for the 3D overlapping effect */}
          <filter id="layer-shadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="-2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.65" />
          </filter>

          {/* Gradients matching your exact logo colors */}
          <linearGradient id="red-swoosh" x1="40" y1="40" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff4553" />
            <stop offset="40%" stopColor="#ea2e3f" />
            <stop offset="100%" stopColor="#9a101d" />
          </linearGradient>

          <linearGradient id="orange-swoosh" x1="160" y1="40" x2="40" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffd24d" />
            <stop offset="35%" stopColor="#fca71a" />
            <stop offset="100%" stopColor="#c26402" />
          </linearGradient>

          <linearGradient id="green-swoosh" x1="160" y1="160" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#81ec45" />
            <stop offset="45%" stopColor="#59d533" />
            <stop offset="100%" stopColor="#258509" />
          </linearGradient>

          <linearGradient id="blue-swoosh" x1="40" y1="160" x2="160" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="40%" stopColor="#00befc" />
            <stop offset="100%" stopColor="#006c9e" />
          </linearGradient>

          <linearGradient id="inner-blue-swoosh" x1="70" y1="130" x2="130" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00d8ff" />
            <stop offset="100%" stopColor="#005d9c" />
          </linearGradient>
        </defs>

        {/* 
          Main Swirl construction using smooth bezier paths curve formulas 
          to match the elegant spiraling design.
        */}
        <g filter="url(#layer-shadow)">
          {/* Red Swoosh (Top-Left quadrant curve) */}
          <path
            d="M 100,20 
               C 135,20 162,35 162,35
               C 125,50 110,85 110,105
               C 100,85 70,68 46,78
               C 46,78 62,35 100,20 Z"
            fill="url(#red-swoosh)"
          />

          {/* Orange-Yellow Swoosh (Top-Right quadrant curve) */}
          <path
            d="M 180,100 
               C 180,135 165,162 165,162
               C 150,125 115,110 95,110
               C 115,100 132,70 122,46
               C 122,46 165,62 180,100 Z"
            fill="url(#orange-swoosh)"
          />

          {/* Green Swoosh (Bottom-Right quadrant curve) */}
          <path
            d="M 100,180 
               C 65,180 38,165 38,165
               C 75,150 90,115 90,95
               C 100,115 130,132 154,122
               C 154,122 138,165 100,180 Z"
            fill="url(#green-swoosh)"
          />

          {/* Exterior Blue Swoosh (Bottom-Left quadrant curve) */}
          <path
            d="M 20,100 
               C 20,65 35,38 35,38
               C 50,75 85,90 105,90
               C 85,100 68,130 78,154
               C 78,154 35,138 20,100 Z"
            fill="url(#blue-swoosh)"
          />

          {/* 
            Inner Glowing Cyan swoosh wrap (Bottom center-right area)
            Creates that beautiful dual-layer overlap inside the core
          */}
          <path
            d="M 68,130
               C 82,145 110,135 125,120
               C 105,115 88,95 80,78
               C 70,95 60,112 68,130 Z"
            fill="url(#inner-blue-swoosh)"
            opacity="0.95"
          />
        </g>

        {/* Center smooth dark core hole */}
        <circle cx="100" cy="100" r="18" fill="#0a0c10" />
      </svg>

      {showText && (
        <span className="font-sans font-black text-2xl tracking-[0.04em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-[#eaeded] to-[#999fa3] filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]">
          GENCY<span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400">POP</span>
        </span>
      )}
    </div>
  );
};
