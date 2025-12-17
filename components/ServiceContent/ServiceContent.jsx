"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ----------------------------------
   Rare / Premium Animations
---------------------------------- */

// Mask reveal (vertical wipe)
const maskReveal = {
  hidden: {
    clipPath: "inset(0 0 100% 0)",
  },
  show: {
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1], // cubic-bezier (editorial)
    },
  },
};

// Depth zoom (no slide)
const depthZoom = {
  hidden: {
    scale: 1.05,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

// Image float-in
const imageFloat = {
  hidden: {
    scale: 1.08,
    filter: "blur(12px)",
  },
  show: {
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

export default function ServiceContent({ service }) {
  return (
    <div
      className="min-h-screen bg-cover bg-top"
      style={{
        backgroundImage: "url('/assets/images/service-bg.svg')",
      }}
    >
      <div className="container mx-auto px-6 py-[140px]">
        {/* GLASS WRAPPER */}
        <motion.div
          variants={depthZoom}
          initial="hidden"
          animate="show"
          className="backdrop-blur-md border border-white/20 shadow-md rounded-3xl overflow-hidden"
        >
          <div
            className={`flex items-center md:flex-row flex-col ${
              service.image ? "text-left" : "text-center"
            }`}
          >
            {/* TEXT MASK REVEAL */}
            <motion.div
              variants={maskReveal}
              initial="hidden"
              animate="show"
              className={`md:p-10 py-8 md:px-14 px-8 ${
                service.image ? "md:w-1/2 w-full" : "w-full"
              }`}
            >
              <h1 className="text-3xl md:text-4xl text-white font-bold mb-6">
                {service.title}
              </h1>

              <p
                className={`text-white/80 leading-relaxed ${
                  service.image
                    ? "text-justify"
                    : "md:text-center text-justify md:w-2/3 w-full mx-auto"
                }`}
                dangerouslySetInnerHTML={{
                  __html: service.description,
                }}
              />
            </motion.div>

            {/* IMAGE FLOAT */}
            {service.image && (
              <motion.div
                variants={imageFloat}
                initial="hidden"
                animate="show"
                className="md:w-[600px] w-full rounded-2xl overflow-hidden py-10 px-10"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl object-cover"
                  priority
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
