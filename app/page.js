"use client";
import AppointmentSection from "@/components/AppointmentSection/AppointmentSection";
import CoreSectionStacked from "@/components/CoreSection/CoreSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Spotlight from "@/components/Spotlight/Spotlight";
import SupportSection from "@/components/SupportSection/SupportSection";
import Testimonial from "@/components/Testimonial/Testimonial";
import { IMAGES } from "@/lib/assets";

export default function Home() {
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

  return (
    <>
      <Spotlight />
      <FeatureSection
        features={FEATURES}
        heading={" Happy 10000+ people"}
        description={"We are here to oversee your Health with"}
      />
      <SupportSection />
      <AppointmentSection />
      <CoreSectionStacked />
      <Testimonial />
      <FAQSection />
    </>
  );
}
