import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FadeIn } from './FadeIn';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-40 w-full">
      <FadeIn delay={0} y={-20} duration={0.6}>
        <nav
          aria-label="Primary Navigation"
          className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
        >
          <div className="hidden sm:flex w-full items-center justify-between gap-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.25rem] hover:opacity-70 transition-opacity duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex sm:hidden w-full items-center justify-between">
            <a
              href="#hero"
              className="text-[#D7E2EA] font-semibold uppercase tracking-widest text-sm"
            >
              MK // DEV
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className="p-2 rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="sm:hidden absolute left-4 right-4 top-20 z-50 rounded-3xl border border-[#D7E2EA]/20 bg-[#0C0C0C]/95 backdrop-blur-xl p-6 shadow-2xl">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#D7E2EA] font-medium uppercase tracking-wider text-base py-1 border-b border-[#D7E2EA]/10 last:border-none hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </FadeIn>
    </header>
  );
};