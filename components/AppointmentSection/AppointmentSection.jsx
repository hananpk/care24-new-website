"use client";

import React from "react";
import { FiPhone, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";
import LiquidGlass from "../LiquidGlass/LiquidGlass";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.55,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AppointmentSection() {
  return (
    <section className="w-full py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-8 rounded-[30px] 
                   border border-white/10 p-10 backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between h-full"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Schedule an Appointment
              </h2>

              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                Secure your time slot with our certified experts or call us for
                immediate support.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex gap-6 mt-14"
            >
              <motion.div variants={iconVariants}>
                <LiquidGlass
                  className="rounded-full h-20 w-20 flex items-center justify-center"
                  radius={999}
                >
                  <FiPhone className="text-3xl text-white" />
                </LiquidGlass>
              </motion.div>

              <motion.div variants={iconVariants}>
                <LiquidGlass
                  className="rounded-full h-20 w-20 flex items-center justify-center"
                  radius={999}
                >
                  <FiCalendar className="text-3xl text-white" />
                </LiquidGlass>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10"
          >
            {/* CARD 1 */}
            <motion.div variants={fadeUp}>
              <LiquidGlass className="rounded-[30px] p-8 w-full">
                <div className="flex justify-between w-full flex-col md:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Schedule an Appointment
                    </h3>
                    <p className="text-white/80 mt-1">
                      8 a.m. to 5 p.m. (Mon–Fri) Eastern time.
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0">
                    <LiquidGlass className="px-10 py-3 rounded-full text-white font-semibold cursor-pointer w-full">
                      Book Now
                    </LiquidGlass>
                  </div>
                </div>
              </LiquidGlass>
            </motion.div>

            {/* CARD 2 */}
            <motion.div variants={fadeUp}>
              <LiquidGlass className="rounded-[30px] p-8 w-full">
                <div className="flex justify-between w-full flex-col md:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Schedule an Appointment
                    </h3>
                    <p className="text-white/80 mt-1">
                      8 a.m. to 5 p.m. (Mon–Fri) Eastern time.
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0">
                    <LiquidGlass className="px-10 py-3 rounded-full text-white font-semibold cursor-pointer w-full">
                      Call Now
                    </LiquidGlass>
                  </div>
                </div>
              </LiquidGlass>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
