"use client";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Spotlight from "@/components/Spotlight/Spotlight";
import SupportSection from "@/components/SupportSection/SupportSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Spotlight />
      <FeatureSection />
      <SupportSection />
    </div>
  );
}
