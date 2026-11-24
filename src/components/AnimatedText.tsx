import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-20">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 text-[#D7E2EA]"
      >
        {char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let runningIndex = 0;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wordIdx) => {
        const wordStart = runningIndex;
        runningIndex += word.length + 1;

        return (
          <span key={`${word}-${wordIdx}`} className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIdx) => {
              const globalIdx = wordStart + charIdx;
              const start = globalIdx / totalChars;
              const end = (globalIdx + 1) / totalChars;
              return (
                <Char
                  key={`${char}-${charIdx}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
            {wordIdx < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </p>
  );
};