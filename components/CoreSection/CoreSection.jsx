"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiquidGlass from "../LiquidGlass/LiquidGlass";
import { IMAGES } from "@/lib/assets";
import Image from "next/image";

const cards = [
  {
    image: IMAGES.vision,
    title: "Vision",
    description:
      "Care24 will provide an unparalleled experience as the most trusted partner for health care.",
  },
  {
    image: IMAGES.mission,
    title: "Mission",
    description:
      "To inspire hope and contribute to health and well-being by providing the best care to every patient through integrated clinical practice, education and research.",
  },
  {
    image: IMAGES.value,
    title: "Value",
    description:
      "Our Relationship with the People We Serve: The patient always comes first. We are dedicated to patient care. We treat each person with respect and dignity.",
  },
];

const StackedCard = ({ item, i, scrollYProgress }) => {
  const totalCards = cards.length;
  const segmentDuration = 1 / totalCards;
  const startSegment = i * segmentDuration;
  const endSegment = (i + 1) * segmentDuration;

  const inputRange = [
    startSegment,
    startSegment + segmentDuration * 0.15,
    endSegment - segmentDuration * 0.15,
    endSegment,
  ];

  const scale = useTransform(scrollYProgress, inputRange, [0.9, 1, 1, 0.9]);

  const y = useTransform(scrollYProgress, inputRange, [50, 0, 0, -50]);

  const opacity = useTransform(scrollYProgress, inputRange, [0, 1, 1, 0]);

  return (
    <motion.div
      style={{ scale, y, opacity, zIndex: totalCards - i }}
      className="absolute top-[80px] w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between p-6 md:p-10"
    >
      <div className="bg-transparent relative md:mb-0 mb-10">
        <h3 className="text-4xl font-bold text-[#fff] mb-4">{item.title}</h3>
        <p className="text-gray-200 opacity-70 text-md leading-relaxed md:w-[50%] w-full">
          {item.description}
        </p>
      </div>

      <div>
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={300}
          className="object-contain"
        />
      </div>
    </motion.div>
  );
};

const CoreSectionStacked = () => {
  const containerRef = useRef(null);

  const scrollHeight = `${cards.length * 150}vh`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative py-20 md:px-20">
      <motion.div className="text-center mb-20 sticky md:top-[100px] top-[50px]">
        <p className="text-sm font-semibold tracking-wider text-[#fff] uppercase">
          About Us
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-[#fff]">
          Vision, Mission & Value
        </h2>
      </motion.div>

      <div
        ref={containerRef}
        style={{ height: scrollHeight }}
        className="relative px-6"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          {cards.map((item, i) => (
            <StackedCard
              key={i}
              item={item}
              i={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSectionStacked;
