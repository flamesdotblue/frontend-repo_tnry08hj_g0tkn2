import React from 'react';

// OrbitX logo: stylized orbit around an "O" with a spark, neon radium green accent
const Logo = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Core O */}
        <circle cx="24" cy="24" r="9.5" stroke="#39FF14" strokeWidth="2.5" fill="rgba(57,255,20,0.06)" />
        {/* Orbit ring */}
        <ellipse cx="24" cy="24" rx="18" ry="8.5" stroke="rgba(57,255,20,0.7)" strokeWidth="1.6" transform="rotate(-18 24 24)" />
        {/* Spark */}
        <circle cx="36" cy="17" r="2.8" fill="#39FF14" />
        <g filter="url(#glow)">
          <circle cx="36" cy="17" r="2.8" fill="#39FF14" />
        </g>
        <defs>
          <filter id="glow" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <span className="text-lg font-semibold tracking-tight">OrbitX</span>
    </div>
  );
};

export default Logo;
