import React from 'react';
import { motion } from 'framer-motion';

type MotionTag = 'div' | 'section' | 'article' | 'header' | 'footer' | 'span' | 'p';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: MotionTag;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
}) => {
  const animationProps = {
    initial: { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, margin: '50px', amount: 0 },
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
    className,
  };

  switch (as) {
    case 'section':
      return <motion.section {...animationProps}>{children}</motion.section>;
    case 'article':
      return <motion.article {...animationProps}>{children}</motion.article>;
    case 'header':
      return <motion.header {...animationProps}>{children}</motion.header>;
    case 'footer':
      return <motion.footer {...animationProps}>{children}</motion.footer>;
    case 'span':
      return <motion.span {...animationProps}>{children}</motion.span>;
    case 'p':
      return <motion.p {...animationProps}>{children}</motion.p>;
    default:
      return <motion.div {...animationProps}>{children}</motion.div>;
  }
};