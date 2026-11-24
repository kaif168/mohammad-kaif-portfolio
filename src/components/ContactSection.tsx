import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 pb-20 sm:pt-32 sm:pb-24 border-t border-[#D7E2EA]/10 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[360px] h-[260px] sm:w-[680px] sm:h-[340px] rounded-full bg-gradient-to-t from-[#7621B0]/25 via-[#B600A8]/15 to-transparent blur-[120px]"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.6rem, 9.5vw, 128px)' }}
          >
            Let&apos;s Build Something Great.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={24} className="mt-6 max-w-xl">
          <p className="text-[#D7E2EA]/80 text-base sm:text-lg font-light leading-relaxed">
            Have an idea, a project, or an opportunity? Let&apos;s connect and
            create something meaningful.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} y={24} className="mt-10 w-full max-w-3xl">
          <div className="rounded-[32px] border border-[#D7E2EA]/20 bg-[#121216]/90 backdrop-blur-md p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#B600A8] shrink-0 mt-1" />
              <div>
                <span className="block text-[11px] uppercase tracking-widest text-[#D7E2EA]/50">
                  Location
                </span>
                <p className="text-sm font-medium text-[#D7E2EA] mt-0.5">
                  {PROFILE.fullName}
                </p>
                <p className="text-xs text-[#D7E2EA]/75">{PROFILE.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={18} className="text-[#7621B0] shrink-0 mt-1" />
              <div>
                <span className="block text-[11px] uppercase tracking-widest text-[#D7E2EA]/50">
                  Phone
                </span>
                <a
                  href={PROFILE.phoneHref}
                  className="text-sm font-medium text-[#D7E2EA] hover:text-[#B600A8] transition-colors mt-0.5 inline-block"
                >
                  {PROFILE.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} className="text-[#BE4C00] shrink-0 mt-1" />
              <div className="min-w-0">
                <span className="block text-[11px] uppercase tracking-widest text-[#D7E2EA]/50">
                  Email
                </span>
                <a
                  href={PROFILE.emailHref}
                  className="text-sm font-medium text-[#D7E2EA] hover:text-[#B600A8] transition-colors mt-0.5 inline-block break-all"
                >
                  {PROFILE.email}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.35}
          y={20}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <ContactButton label="Contact Me" href={PROFILE.phoneHref} />

          <a
            href={PROFILE.emailHref}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors"
          >
            <Mail size={15} />
            Email Me
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/60 text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA] transition-colors"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/60 text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA] transition-colors"
          >
            <Github size={15} />
            GitHub
          </a>
        </FadeIn>
      </div>
    </section>
  );
};