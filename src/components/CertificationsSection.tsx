import React from 'react';
import { Award, Shield, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { FadeIn } from './FadeIn';

const ACCENT_MAP = {
  magenta: 'from-[#B600A8]/35 via-[#7621B0]/15 to-transparent',
  purple: 'from-[#7621B0]/35 via-[#18011F]/20 to-transparent',
  orange: 'from-[#BE4C00]/35 via-[#B600A8]/15 to-transparent',
  violet: 'from-[#7721B1]/35 via-[#646973]/15 to-transparent',
};

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28 border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 8.2vw, 105px)' }}
          >
            Certifications &amp; Professional Learning
          </h2>
          <p className="text-center text-[#D7E2EA]/70 text-sm sm:text-base font-light max-w-2xl mx-auto mb-14 sm:mb-20">
            Verified industry learning across cloud machine learning, big data
            analytics, and cybersecurity fundamentals.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <FadeIn key={cert.title} delay={index * 0.1} y={24}>
              <div className="group relative h-full rounded-[32px] border border-[#D7E2EA]/20 bg-[#111115] p-7 sm:p-9 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D7E2EA]/45 hover:shadow-[0_24px_60px_rgba(182,0,168,0.16)]">
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${ACCENT_MAP[cert.accent]} opacity-50 group-hover:opacity-85 transition-opacity duration-500`}
                />

                <div className="relative z-10 h-full flex flex-col justify-between rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C]/75 p-6">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-widest border border-[#D7E2EA]/25 text-[#BBCCD7]">
                        {cert.title.includes('Ethical') ? (
                          <Shield size={13} />
                        ) : cert.title.includes('Continuous') ? (
                          <Sparkles size={13} />
                        ) : (
                          <Award size={13} />
                        )}
                        Credential 0{index + 1}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-mono">
                        VERIFIED TRACK
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#D7E2EA]">
                      {cert.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium uppercase tracking-wider text-[#B600A8]">
                      {cert.issuer}
                    </p>
                  </div>

                  <p className="mt-5 pt-4 border-t border-[#D7E2EA]/10 text-sm text-[#D7E2EA]/75 font-light leading-relaxed">
                    {cert.focus}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};