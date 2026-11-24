import React, { useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { Navbar } from './Navbar';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { Floating3DObject } from './Floating3DObject';

export const HeroSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] rounded-full bg-gradient-to-tr from-[#7621B0]/30 via-[#B600A8]/20 to-[#BE4C00]/20 blur-[110px]" />
      </div>

      <Floating3DObject
        variant="orb"
        duration={7}
        className="hidden sm:block absolute top-[32%] left-[4%] md:left-[7%] w-16 md:w-24 lg:w-28 z-10 opacity-85"
      />
      <Floating3DObject
        variant="prism"
        duration={6.2}
        className="hidden sm:block absolute top-[30%] right-[4%] md:right-[7%] w-16 md:w-24 lg:w-28 z-10 opacity-85"
      />

      <Navbar />

      <div className="relative z-20 px-4 sm:px-6 md:px-10 pt-3 sm:pt-2 flex flex-col items-center text-center">
        <div className="overflow-hidden w-full">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-center text-[clamp(2rem,7.8vw,8.6rem)]">
              HI, I&apos;M MOHAMMAD KAIF
            </h1>
          </FadeIn>
        </div>

        <FadeIn delay={0.25} y={24} className="mt-2 sm:mt-3 max-w-3xl">
          <p className="text-[#D7E2EA] text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.18em]">
            BUILDING IDEAS INTO INTELLIGENT DIGITAL EXPERIENCES.
          </p>
          <p className="mt-1 text-[#D7E2EA]/70 text-xs sm:text-sm font-light tracking-wide">
            {PROFILE.roleLine}
          </p>
        </FadeIn>
      </div>

      <div className="relative z-10 flex-1 flex items-end justify-center px-4 pt-5 pb-2 sm:pb-0">
        <FadeIn delay={0.55} y={30} className="flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <div className="relative h-[290px] sm:h-[340px] md:h-[42vh] lg:h-[46vh] min-h-[260px] max-h-[460px] aspect-[4/5] rounded-t-[160px] rounded-b-[40px] sm:rounded-b-none overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-full bg-gradient-to-b from-[#B600A8]/25 via-[#7621B0]/15 to-transparent blur-2xl -z-10"
              />

              {!imgError ? (
                <>
                  <img
                    src={PROFILE.photoPath}
                    alt="Mohammad Kaif — Software Developer, AI & ML Enthusiast, Android App Developer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top select-none"
                    draggable={false}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_52%,rgba(12,12,12,0.72)_100%)]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/65 to-transparent"
                  />
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#141418] border border-[#D7E2EA]/20 rounded-t-[160px] rounded-b-3xl">
                  <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold mb-2">
                    Portrait Required
                  </span>
                  <p className="text-sm text-[#D7E2EA] font-medium">
                    Place your uploaded photograph at
                  </p>
                  <code className="mt-2 px-3 py-1.5 rounded-lg bg-[#0C0C0C] text-xs text-[#BBCCD7] border border-[#D7E2EA]/15">
                    public/images/mohammad-kaif.jpg
                  </code>
                </div>
              )}
            </div>
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-30 w-full px-6 md:px-10 pb-6 sm:pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <FadeIn delay={0.35} y={20} className="max-w-[280px] sm:max-w-[300px] md:max-w-[340px]">
          <p className="text-[#D7E2EA]/80 text-xs sm:text-sm font-light leading-relaxed mb-1.5">
            A Computer Science Engineering student passionate about AI, software
            development, Android applications, and innovative technology.
          </p>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.15rem)' }}
          >
            Turning innovative ideas into meaningful digital experiences.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.5}
          y={20}
          className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto justify-start sm:justify-end"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/60 text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA] transition-all duration-200 whitespace-nowrap"
          >
            Explore My Work
            <ArrowDownRight size={16} />
          </a>
          <ContactButton label="Contact Me" href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};