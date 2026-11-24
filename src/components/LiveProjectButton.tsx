import React from 'react';

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'Explore Project',
  href,
  onClick,
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer whitespace-nowrap';

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${baseClasses} ${className}`}
      >
        {label}
      </button>
    );
  }

  return (
    <a
      href={href ?? '#projects'}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`${baseClasses} ${className}`}
    >
      {label}
    </a>
  );
};