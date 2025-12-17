"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const useCountUp = (end, duration = 1200) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration]);

  return value;
};

const rowVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
};

const circleVariants = {
  hidden: { pathLength: 0 },
  show: (value) => ({
    pathLength: value / 100,
    transition: {
      duration: 1.4,
      ease: "easeOut",
    },
  }),
};

const ResponsiveStats = () => {
  const stats = [
    { label: "Health Care Professionals", value: 93 },
    { label: "Happy Customers", value: 98 },
    { label: "Success", value: 90 },
  ];

  const circumference = 175.9;

  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
        {stats.map((item, index) => {
          const animatedValue = useCountUp(item.value, 1000 + index * 300);

          return (
            <motion.div
              key={index}
              variants={rowVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index}
              className="flex flex-col md:flex-row md:items-center w-full gap-4 md:gap-0"
            >
              {/* LABEL */}
              <div
                className="border border-white/30 rounded-full px-6 py-3 md:px-8 md:py-4 
                           w-full md:w-auto md:min-w-[280px] text-center md:text-left
                           text-white text-base md:text-lg font-medium"
              >
                {item.label}
              </div>

              <div className="hidden md:block flex-grow h-[1px] bg-white/20 mx-2"></div>

              <div className="flex justify-center md:block">
                <div className="relative flex items-center justify-center w-16 h-16 md:ml-4">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 64 64"
                  >
                    {/* Background */}
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      className="text-white/10"
                    />

                    {/* Animated Progress */}
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeLinecap="round"
                      className="text-cyan-400"
                      variants={circleVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      custom={item.value}
                    />
                  </svg>

                  {/* NUMBER */}
                  <span className="absolute text-white text-xs font-bold font-mono">
                    {animatedValue}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ResponsiveStats;
