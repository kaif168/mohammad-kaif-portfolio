import React, { useEffect, useRef, useState } from 'react';
import { MARQUEE_TECH_ROW_1, MARQUEE_TECH_ROW_2 } from '../data/portfolioData';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.offsetTop;
      const offset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Items = [
    ...MARQUEE_TECH_ROW_1,
    ...MARQUEE_TECH_ROW_1,
    ...MARQUEE_TECH_ROW_1,
    ...MARQUEE_TECH_ROW_1,
  ];

  const row2Items = [
    ...MARQUEE_TECH_ROW_2,
    ...MARQUEE_TECH_ROW_2,
    ...MARQUEE_TECH_ROW_2,
    ...MARQUEE_TECH_ROW_2,
  ];

  return (
    <section
      ref={sectionRef}
      aria-label="Core Technologies Marquee"
      className="w-full bg-[#0C0C0C] pt-16 sm:pt-24 md:pt-32 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3 sm:gap-4">
        <div
          className="flex items-center gap-3 w-max"
          style={{
            transform: `translate3d(${scrollOffset - 420}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {row1Items.map((tech, idx) => (
            <div
              key={`r1-${tech}-${idx}`}
              className="group relative flex items-center gap-4 px-7 py-5 sm:px-10 sm:py-7 rounded-2xl border border-[#D7E2EA]/15 bg-[#121216] hover:border-[#B600A8]/60 transition-colors duration-300"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#B600A8] to-[#BE4C00] shrink-0" />
              <span className="hero-heading text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>

        <div
          className="flex items-center gap-3 w-max"
          style={{
            transform: `translate3d(${-(scrollOffset - 120)}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {row2Items.map((tech, idx) => (
            <div
              key={`r2-${tech}-${idx}`}
              className="group relative flex items-center gap-4 px-7 py-5 sm:px-10 sm:py-7 rounded-2xl border border-[#D7E2EA]/15 bg-[#121216] hover:border-[#7621B0]/60 transition-colors duration-300"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#7621B0] to-[#D7E2EA] shrink-0" />
              <span className="text-[#D7E2EA] text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};