import React from 'react';
import { GraduationCap } from 'lucide-react';
import { ABOUT_BIO, EDUCATION } from '../data/portfolioData';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { Floating3DObject } from './Floating3DObject';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[100px] sm:w-[150px] md:w-[200px]"
      >
        <Floating3DObject variant="orb" duration={6.5} />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[6%] left-[3%] sm:left-[6%] md:left-[9%] w-[90px] sm:w-[130px] md:w-[175px]"
      >
        <Floating3DObject variant="cube" duration={7.2} />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[100px] sm:w-[150px] md:w-[200px]"
      >
        <Floating3DObject variant="torus" duration={6.8} />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[6%] right-[3%] sm:right-[6%] md:right-[9%] w-[105px] sm:w-[155px] md:w-[205px]"
      >
        <Floating3DObject variant="prism" duration={7.5} />
      </FadeIn>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 150px)' }}
          >
            About Me
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 md:mt-16 max-w-[680px]">
          <AnimatedText
            text={ABOUT_BIO}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        <FadeIn delay={0.15} y={24} className="mt-12 sm:mt-14 w-full max-w-xl">
          <div className="relative rounded-3xl border border-[#D7E2EA]/20 bg-[#121216]/90 backdrop-blur-md p-6 sm:p-8 text-left shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#B600A8]/30 to-[#7621B0]/30 border border-[#D7E2EA]/15 text-[#D7E2EA]">
                  <GraduationCap size={22} />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#BBCCD7] font-semibold">
                  Education
                </span>
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider border border-[#D7E2EA]/25 text-[#D7E2EA]">
                {EDUCATION.duration}
              </span>
            </div>

            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-[#D7E2EA] leading-snug">
              {EDUCATION.degree}
            </h3>
            <p className="mt-1 text-sm sm:text-base text-[#D7E2EA]/75 font-light">
              {EDUCATION.institution}
            </p>

            <div className="mt-5 pt-4 border-t border-[#D7E2EA]/10 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">
                Academic Standing
              </span>
              <span className="text-sm sm:text-base font-bold text-[#D7E2EA] tracking-wide">
                CGPA: {EDUCATION.cgpa}
              </span>
            </div>
          </div>
        </FadeIn>

        <div className="mt-14 sm:mt-16 md:mt-20">
          <ContactButton label="Contact Me" href="#contact" />
        </div>
      </div>
    </section>
  );
};