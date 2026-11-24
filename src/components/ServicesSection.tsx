import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { FadeIn } from './FadeIn';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="what-i-bring"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 pb-28 sm:pb-36"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 140px)' }}
          >
            What I Bring
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.1} y={24}>
              <div
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
                style={{
                  borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                  borderBottom:
                    index === SERVICES.length - 1
                      ? '1px solid rgba(12, 12, 12, 0.15)'
                      : 'none',
                }}
              >
                <span
                  className="font-black text-[#0C0C0C] leading-none shrink-0 sm:w-[170px] md:w-[220px]"
                  style={{ fontSize: 'clamp(3rem, 9.5vw, 130px)' }}
                >
                  {service.number}
                </span>

                <div className="flex flex-col gap-2">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide leading-tight"
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2rem)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C]/65 leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)' }}
                  >
                    {service.description}
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