import React from 'react';
import { BookOpen, CheckCircle2, Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { FadeIn } from './FadeIn';

export const AchievementsSection: React.FC = () => {
  const featured = ACHIEVEMENTS.find((a) => a.isFeaturedResearch);
  const others = ACHIEVEMENTS.filter((a) => !a.isFeaturedResearch);

  return (
    <section
      id="achievements"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28 border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-14 sm:mb-20"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 145px)' }}
          >
            Achievements
          </h2>
        </FadeIn>

        {featured && (
          <FadeIn delay={0.1} y={30} className="mb-8 sm:mb-10">
            <div className="relative rounded-[36px] sm:rounded-[48px] border-2 border-[#D7E2EA]/30 bg-gradient-to-br from-[#1A1025] via-[#121216] to-[#0C0C0C] p-6 sm:p-10 md:p-12 overflow-hidden shadow-[0_30px_80px_rgba(118,33,176,0.22)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-tr from-[#B600A8]/30 to-[#BE4C00]/25 blur-3xl"
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B600A8]/60 bg-[#B600A8]/15 text-xs uppercase tracking-[0.2em] text-[#D7E2EA] mb-5">
                    <Trophy size={14} className="text-[#BE4C00]" />
                    Research Recognition
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#D7E2EA] leading-tight">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-widest text-[#BBCCD7] font-medium">
                    {featured.subtitle}
                  </p>
                  <p className="mt-4 text-base sm:text-lg text-[#D7E2EA]/85 font-light leading-relaxed max-w-2xl">
                    {featured.description}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-3xl border border-[#D7E2EA]/20 bg-[#0C0C0C]/90 p-6 shadow-2xl">
                    <div className="flex items-center justify-between pb-4 border-b border-[#D7E2EA]/10">
                      <div className="flex items-center gap-2.5">
                        <BookOpen size={18} className="text-[#B600A8]" />
                        <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]">
                          IEEE // SCOPUS INDEXED
                        </span>
                      </div>
                      <span className="text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#7621B0]/30 text-[#D7E2EA]">
                        BMS
                      </span>
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="h-3 w-4/5 rounded-full bg-[#D7E2EA]/20" />
                      <div className="h-2.5 w-full rounded-full bg-[#D7E2EA]/10" />
                      <div className="h-2.5 w-11/12 rounded-full bg-[#D7E2EA]/10" />
                      <div className="h-2.5 w-3/4 rounded-full bg-[#D7E2EA]/10" />
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#D7E2EA]/10 flex items-center justify-between text-xs text-[#BBCCD7]">
                      <span>Project Implementation Paper</span>
                      <span className="font-semibold text-[#D7E2EA]">
                        Published &amp; Presented
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((item, idx) => (
            <FadeIn key={item.title} delay={(idx + 1) * 0.1} y={24}>
              <div className="h-full rounded-[28px] border border-[#D7E2EA]/15 bg-[#121216] p-6 sm:p-7 flex flex-col justify-between hover:border-[#D7E2EA]/40 transition-colors duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <CheckCircle2 size={20} className="text-[#B600A8]" />
                    <span className="text-xs font-mono text-[#D7E2EA]/40">
                      0{idx + 2}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#D7E2EA]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-[#BBCCD7]">
                    {item.subtitle}
                  </p>
                </div>
                <p className="mt-4 pt-4 border-t border-[#D7E2EA]/10 text-sm text-[#D7E2EA]/75 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};