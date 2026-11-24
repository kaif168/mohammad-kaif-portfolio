import React from 'react';
import { motion } from 'framer-motion';

interface Floating3DObjectProps {
  variant: 'orb' | 'torus' | 'prism' | 'cube';
  className?: string;
  duration?: number;
}

export const Floating3DObject: React.FC<Floating3DObjectProps> = ({
  variant,
  className = '',
  duration = 6,
}) => {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: variant === 'orb' ? [0, 6, 0] : [-4, 4, -4],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {variant === 'orb' && (
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_24px_38px_rgba(182,0,168,0.28)]">
          <defs>
            <radialGradient id="orbGrad" cx="32%" cy="28%" r="70%">
              <stop offset="0%" stopColor="#F5E1FF" />
              <stop offset="28%" stopColor="#B600A8" />
              <stop offset="68%" stopColor="#42106B" />
              <stop offset="100%" stopColor="#0C0C0C" />
            </radialGradient>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D7E2EA" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#BE4C00" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7621B0" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="56" fill="url(#orbGrad)" />
          <ellipse
            cx="100"
            cy="104"
            rx="84"
            ry="24"
            transform="rotate(-22 100 104)"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="7"
          />
        </svg>
      )}

      {variant === 'torus' && (
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_24px_38px_rgba(118,33,176,0.3)]">
          <defs>
            <linearGradient id="torusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BBCCD7" />
              <stop offset="45%" stopColor="#7621B0" />
              <stop offset="80%" stopColor="#B600A8" />
              <stop offset="100%" stopColor="#18011F" />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="58"
            fill="none"
            stroke="url(#torusGrad)"
            strokeWidth="28"
          />
          <circle
            cx="100"
            cy="100"
            r="58"
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.18"
            strokeWidth="4"
            strokeDasharray="65 180"
          />
        </svg>
      )}

      {variant === 'prism' && (
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_24px_38px_rgba(190,76,0,0.28)]">
          <defs>
            <linearGradient id="prismFace1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D7E2EA" />
              <stop offset="55%" stopColor="#7721B1" />
              <stop offset="100%" stopColor="#18011F" />
            </linearGradient>
            <linearGradient id="prismFace2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BE4C00" />
              <stop offset="60%" stopColor="#B600A8" />
              <stop offset="100%" stopColor="#280938" />
            </linearGradient>
          </defs>
          <polygon points="100,22 172,138 100,176" fill="url(#prismFace2)" />
          <polygon points="100,22 28,138 100,176" fill="url(#prismFace1)" />
          <polyline
            points="28,138 100,22 172,138 100,176 28,138"
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.25"
            strokeWidth="2"
          />
        </svg>
      )}

      {variant === 'cube' && (
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_24px_38px_rgba(187,204,215,0.2)]">
          <defs>
            <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D7E2EA" />
              <stop offset="100%" stopColor="#646973" />
            </linearGradient>
            <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7621B0" />
              <stop offset="100%" stopColor="#18011F" />
            </linearGradient>
            <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B600A8" />
              <stop offset="100%" stopColor="#BE4C00" />
            </linearGradient>
          </defs>
          <polygon points="100,28 164,64 100,100 36,64" fill="url(#cubeTop)" />
          <polygon points="36,64 100,100 100,172 36,136" fill="url(#cubeLeft)" />
          <polygon points="164,64 100,100 100,172 164,136" fill="url(#cubeRight)" />
        </svg>
      )}
    </motion.div>
  );
};