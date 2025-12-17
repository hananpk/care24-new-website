"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const LiquidGlass = dynamic(
  () => import("@liquidglass/react").then((mod) => mod.LiquidGlass),
  { ssr: false }
);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const FeatureCard = ({ feature }) => {
  return (
    <motion.div variants={cardVariants} className="w-full">
      <LiquidGlass
        borderRadius={20}
        elasticity={4}
        blur={3}
        contrast={1}
        brightness={1}
        saturation={1}
        className="w-full h-full block border border-white/20 
                   transition-transform duration-300 hover:scale-[1.04]"
      >
        <div className="min-h-[220px] md:min-h-[240px] flex flex-col items-start px-6 py-8 rounded-2xl">
          {/* ICON */}
          <div className="w-20 h-20 mb-6 mx-auto flex items-center justify-center rounded-full bg-white/5">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={56}
              height={56}
              className="object-contain"
            />
          </div>

          {/* TITLE */}
          <h4 className="text-white text-lg font-semibold mb-2 text-left">
            {feature.title}
          </h4>

          {/* DESCRIPTION */}
          <p className="text-white/90 text-sm leading-relaxed text-left">
            {feature.description}
          </p>
        </div>
      </LiquidGlass>
    </motion.div>
  );
};

/* --------------------------------------------------
   Feature Section
-------------------------------------------------- */
const FeatureSection = ({ features = [], heading, description }) => {
  const gridCols = features.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3";

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADING */}
        {heading && (
          <div className="mb-10">
            <h3 className="font-bold text-3xl mb-2 text-center text-white">
              {heading}
            </h3>
            {description && (
              <p className="text-gray-100 text-center text-xl">{description}</p>
            )}
          </div>
        )}

        {/* ANIMATED GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-6`}
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
