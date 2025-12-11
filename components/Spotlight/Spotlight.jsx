import { IMAGES } from "@/lib/assets";
import { LiquidGlass } from "@liquidglass/react";
import Image from "next/image";
import React from "react";
import "./Spotlight.css";

const Spotlight = () => {
  return (
    <div className="relative h-screen w-full spotlight">
      {/* <Image src={IMAGES.bg} alt="bg" objectFit="cover" /> */}
      <div className="absolute z-10 w-[80%] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
        <LiquidGlass
          borderRadius={30}
          elasticity={1}
          blur={4}
          contrast={1}
          brightness={1}
          saturation={1}
          className="border border-white/20"
        >
          <div className="py-10 px-10 text-center">
            <h1 className="text-2xl md:text-6xl text-white mb-2">
              {" "}
              We are one of the best{" "}
            </h1>
            <h1 className="text-2xl md:text-6xl text-white font-bold">
              Home & Community Provider
            </h1>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
};

export default Spotlight;
