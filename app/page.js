"use client";
import AppointmentSection from "@/components/AppointmentSection/AppointmentSection";
import CoreSectionStacked from "@/components/CoreSection/CoreSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Spotlight from "@/components/Spotlight/Spotlight";
import SupportSection from "@/components/SupportSection/SupportSection";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Spotlight />
      <FeatureSection />
      <SupportSection />
      <AppointmentSection />
      <CoreSectionStacked />
      <Testimonial />
      <FAQSection />
    </>
  );
}
