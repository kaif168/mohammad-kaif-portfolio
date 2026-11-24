import React from 'react';
import { PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 md:px-10 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#D7E2EA]/60">
        <p>&copy; 2026 {PROFILE.fullName}. All Rights Reserved.</p>
        <div className="flex items-center gap-6 uppercase tracking-wider text-xs">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D7E2EA] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D7E2EA] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE.emailHref}
            className="hover:text-[#D7E2EA] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};