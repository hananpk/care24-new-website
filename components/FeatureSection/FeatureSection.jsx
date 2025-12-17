"use client";

import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const LiquidGlass = dynamic(
  () => import("@liquidglass/react").then((mod) => mod.LiquidGlass),
  { ssr: false }
);

const FeatureCard = ({ feature }) => {
  return (
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

const FeatureSection = ({ features, heading, description }) => {
  const gridCols = features.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {heading && (
          <div>
            <h3 className="font-bold text-3xl mb-2 text-center text-white">
              {heading}
            </h3>
            <p className="text-gray-100 text-center text-xl mb-8">
              {description}
            </p>
          </div>
        )}

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-6`}>
          {features?.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
