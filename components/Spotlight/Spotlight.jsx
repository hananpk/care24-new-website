"use client";

import { LiquidGlass } from "@liquidglass/react";
import React from "react";
import { motion } from "framer-motion";
import "./Spotlight.css";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const word = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 10,
  },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    filter: "blur(14px)",
    y: -10,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

const AnimatedText = ({ text, className }) => {
  return (
    <motion.div
      className={`flex flex-wrap justify-center ${className}`}
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {text.split(" ").map((wordText, i) => (
        <motion.span
          key={i}
          variants={word}
          className="mr-3 inline-block whitespace-nowrap"
        >
          {wordText}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Spotlight = () => {
  return (
    <div className="relative h-screen w-full spotlight">
      <div className="absolute z-10 w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LiquidGlass
          borderRadius={30}
          elasticity={1}
          blur={4}
          saturation={0.7}
          className="border border-white/20"
        >
          <div className="py-10 px-10 text-center">
            <AnimatedText
              text="We are one of the best"
              className="text-2xl md:text-6xl text-white mb-3"
            />
            <AnimatedText
              text="Home & Community Provider"
              className="text-2xl md:text-6xl text-white font-bold"
            />
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
};

export default Spotlight;
