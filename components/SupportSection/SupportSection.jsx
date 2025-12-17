"use client";

import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
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

export default function SupportSection() {
  const contacts = [
    {
      phone: "+1(289) 407 2788",
      text: "Care 24 provide high quality professional and compassionate care in various aspects of health.",
    },
    {
      phone: "+1(289) 241 6516",
      text: "Care 24 provide high quality professional and compassionate care in various aspects of health.",
    },
    {
      phone: "+1(289) 686 2000",
      text: "Care 24 provide high quality professional and compassionate care in various aspects of health.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative lg:col-span-6 flex justify-center lg:justify-start"
        >
          <div className="w-[320px] sm:w-[360px] md:w-[420px] lg:w-[460px] relative">
            <div className="relative md:h-[420px] lg:h-[480px]">
              <Image
                src={IMAGES.support}
                alt="support big"
                width={420}
                height={500}
                className="object-contain h-full"
              />
            </div>
          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <div className="lg:col-span-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-semibold mb-8 text-white"
          >
            We Support
          </motion.h2>

          <div className="relative pl-6">
            {/* TIMELINE SVG */}
            <motion.svg
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transformOrigin="top"
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute left-0 top-6 h-[80%]"
              width="24"
              viewBox="0 0 24 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#9FD6FF" strokeWidth="1.2" strokeLinecap="round">
                <path d="M12 0 V380" />
              </g>
              <circle cx="12" cy="48" r="4" fill="#9FD6FF" />
              <circle cx="12" cy="160" r="4" fill="#9FD6FF" />
              <circle cx="12" cy="280" r="4" fill="#9FD6FF" />
            </motion.svg>

            {/* CONTACT ITEMS */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-10"
            >
              {contacts.map((c, i) => (
                <motion.div key={i} variants={itemVariants} className="pl-8">
                  <p className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                    <Link
                      href={`tel:${c.phone}`}
                      className="hover:text-[#9FD6FF] transition-colors"
                    >
                      {c.phone}
                    </Link>
                  </p>
                  <p className="text-sm sm:text-base text-gray-400 max-w-xl">
                    {c.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
