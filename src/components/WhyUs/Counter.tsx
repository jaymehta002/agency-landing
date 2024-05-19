'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

type CounterProps = {
  from: number;
  to: number;
  duration?: number;
};

const Counter: React.FC<CounterProps> = ({ from, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: false }); // Set once to false to trigger every time it's in view

  const fadeInUp = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  useEffect(() => {
    if (!inView) return;

    const start = from;
    const end = to;
    const increment = (end - start) / (duration * 60); // Assuming 60fps

    let current = start;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        clearInterval(interval);
        setCount(end);
      } else {
        setCount(current);
      }
    }, 1000 / 60); // 60 times per second

    return () => clearInterval(interval);
  }, [inView, from, to, duration]);

  return (
    <motion.span
      ref={ref}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.5 }}
    >
      {Math.floor(count)}
    </motion.span>
  );
};

export default Counter;
