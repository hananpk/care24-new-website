"use client";

import { IMAGES } from "@/lib/assets";
import { LiquidGlass } from "@liquidglass/react";
import Image from "next/image";
import React from "react";

const FEATURES = [
  {
    title: "24 X 7 Customer Service",
    description: "Care24 office in Niagara Region is available to help 24/7.",
    icon: IMAGES.customer_care,
  },
  {
    title: "Top Quality Management",
    description:
      "Care24 management approach to long term success through Customer satisfaction.",
    icon: IMAGES.top_quality,
  },
  {
    title: "Compassionate and Dedicated Care",
    description:
      "Our best care is revealed through the smallest acts of kindness.",
    icon: IMAGES.dedicated_care,
  },
  {
    title: "Professional Care providers",
    description:
      "Care24 ensures consistency of quality through highly qualified health care workers.",
    icon: IMAGES.care_provider,
  },
];

const FeatureCard = ({ feature }) => {
  return (
    // card wrapper sets the card's min height so all cards match
    <div className="w-full">
      <LiquidGlass
        borderRadius={20}
        elasticity={4}
        blur={3}
        contrast={1}
        brightness={1}
        saturation={1}
        className="w-full h-full block border border-white/20 hover:scale-[1.04] "
      >
        <div
          className="min-h-[220px] md:min-h-[240px] flex flex-col items-start px-6 py-8 rounded-2xl 
                        transition duration-300"
        >
          <div className="w-20 h-20 mb-6 mx-auto flex items-center justify-center rounded-full bg-white/4">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={56}
              height={56}
              className="object-contain"
            />
          </div>

          <h4 className="text-white text-lg font-semibold mb-2 !text-left">
            {feature.title}
          </h4>
          <p className="text-white/90 text-sm leading-relaxed text-left">
            {feature.description}
          </p>
        </div>
      </LiquidGlass>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="font-bold text-3xl mb-2 text-center text-white">
          Happy 10000+ people
        </h3>
        <p className="text-gray-100 text-center text-xl mb-8">
          We are here to oversee your Health with
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
