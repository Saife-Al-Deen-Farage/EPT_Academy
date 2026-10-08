import React from 'react';

interface EPTLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  light?: boolean;
  animated?: boolean;
}

export const EPTLogo: React.FC<EPTLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  light = false,
  animated = true,
}) => {
  const sizeMap = {
    sm: { w: 36, h: 36, textH: 14 },
    md: { w: 46, h: 46, textH: 18 },
    lg: { w: 68, h: 68, textH: 24 },
    xl: { w: 100, h: 100, textH: 34 },
  };

  const { w, h } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon Emblem */}
      <svg
        width={w}
        height={h}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 transition-transform duration-300 ${animated ? 'hover:scale-105' : ''}`}
      >
        <defs>
          <linearGradient id="eptNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="eptGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Circular Navy Arc (Left/Top) */}
        <path
          d="M 60 40 A 75 75 0 0 1 150 50"
          stroke="#1E3A8A"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />

        {/* Bottom Left Arc to Circuit */}
        <path
          d="M 45 125 A 75 75 0 0 1 35 90"
          stroke="#1E3A8A"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />

        {/* Golden Amber Tech Crescent Arc (Right) */}
        <path
          d="M 148 65 A 72 72 0 0 1 110 158"
          stroke="url(#eptGoldGrad)"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
        />

        {/* Digital Pixel Cubes (Golden-Amber Accent) */}
        <rect x="156" y="52" width="10" height="10" rx="1.5" fill="#F59E0B" />
        <rect x="170" y="52" width="8" height="8" rx="1" fill="#F59E0B" />
        <rect x="170" y="66" width="9" height="9" rx="1.5" fill="#D97706" />
        <rect x="156" y="66" width="7" height="7" rx="1" fill="#F59E0B" />

        {/* Top Open Knowledge Book */}
        <g transform="translate(100, 52)">
          {/* Left page */}
          <path
            d="M 0 -2 Q -15 -14 -30 -6 Q -15 2 0 6 Z"
            fill="#1E3A8A"
          />
          <path
            d="M -2 -1 Q -14 -11 -26 -4"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right page */}
          <path
            d="M 0 -2 Q 15 -14 30 -6 Q 15 2 0 6 Z"
            fill="#1E3A8A"
          />
          <path
            d="M 2 -1 Q 14 -11 26 -4"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Graduation Mortarboard Cap (Left side of EPT) */}
        <g transform="translate(68, 70)">
          {/* Cap Rhombus Diamond Top */}
          <polygon
            points="0,-16 28,-3 0,10 -28,-3"
            fill="#1E3A8A"
            stroke="#2563EB"
            strokeWidth="1.5"
          />
          {/* Skullcap skull under base */}
          <path
            d="M -16 1 C -16 12 16 12 16 1 Z"
            fill="#0F172A"
          />
          {/* Golden Tassel Button & Cord */}
          <circle cx="0" cy="-3" r="2.5" fill="#F59E0B" />
          <path
            d="M 0 -3 Q -18 -2 -22 14"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Tassel fringe */}
          <polygon
            points="-22,14 -20,23 -24,23"
            fill="#F59E0B"
          />
        </g>

        {/* Stylized "EPT" Typography */}
        <text
          x="108"
          y="118"
          fontSize="50"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          letterSpacing="1"
          fill="#1E3A8A"
          textAnchor="middle"
          style={{ fontStyle: 'italic' }}
        >
          EPT
        </text>

        {/* Technology Circuit Lines (3 curved traces flowing right with connection nodes) with animated electricity flow */}
        <g stroke="#2563EB" strokeWidth="3" fill="none" strokeLinecap="round">
          {/* Trace 1 */}
          <path d="M 52 142 Q 85 146 118 122 L 126 122" className="animate-circuit-flow opacity-90" />
          <circle cx="126" cy="122" r="3.5" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" className="animate-pulse" />

          {/* Trace 2 */}
          <path d="M 64 148 Q 98 152 134 126 L 142 126" className="animate-circuit-flow opacity-80" style={{ animationDelay: '0.4s' }} />
          <circle cx="142" cy="126" r="3.5" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />

          {/* Trace 3 */}
          <path d="M 78 154 Q 110 156 148 116 L 156 116" className="animate-circuit-flow opacity-70" style={{ animationDelay: '0.8s' }} />
          <circle cx="156" cy="116" r="3.5" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </g>
      </svg>

      {/* Typography Lockup */}
      {variant === 'full' && (
        <div className="flex flex-col text-start justify-center">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-black tracking-tight ${
                size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : size === 'xl' ? 'text-3xl' : 'text-lg'
              } ${light ? 'text-white' : 'text-slate-100'}`}
              style={{ letterSpacing: '0.02em' }}
            >
              EPT ACADEMY
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1px] w-3 bg-amber-400/80" />
            <span
              className={`font-semibold tracking-wider uppercase text-amber-400 ${
                size === 'sm' ? 'text-[8.5px]' : size === 'lg' ? 'text-[12px]' : size === 'xl' ? 'text-[14px]' : 'text-[10px]'
              }`}
              style={{ letterSpacing: '0.08em' }}
            >
              ENGLISH PLUS TECHNOLOGY
            </span>
            <span className="h-[1px] w-3 bg-amber-400/80" />
          </div>
        </div>
      )}
    </div>
  );
};
