import React from 'react';
import { Code2, Cpu, Globe, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { FadeIn } from './FadeIn';

const CATEGORY_ICONS = [Code2, Globe, Cpu, Wrench];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative z-10 w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 10.5vw, 135px)' }}
          >
            Technical Skills
          </h2>
          <p className="text-center text-[#D7E2EA]/70 text-sm sm:text-base font-light max-w-2xl mx-auto mb-14 sm:mb-20">
            Core languages, frameworks, AI foundations, and development tools I
            work with to build functional software systems.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((group, idx) => {
            const Icon = CATEGORY_ICONS[idx % CATEGORY_ICONS.length];
            return (
              <FadeIn key={group.category} delay={idx * 0.1} y={28}>
                <div className="group relative h-full rounded-[32px] border border-[#D7E2EA]/15 bg-[#121216] p-7 sm:p-9 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D7E2EA]/40 hover:shadow-[0_24px_60px_rgba(118,33,176,0.2)]">
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${group.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/15 text-[#D7E2EA] group-hover:border-[#B600A8]/60 transition-colors">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-wider text-[#D7E2EA]">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#D7E2EA]/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2.5 sm:gap-3">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-[#0C0C0C] text-[#D7E2EA] border border-[#D7E2EA]/20 group-hover:border-[#D7E2EA]/35 hover:!border-[#B600A8] hover:bg-[#B600A8]/10 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};