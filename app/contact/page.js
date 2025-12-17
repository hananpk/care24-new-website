"use client";

import ContactFooter from "@/components/ContactFooter/ContactFooter";
import ContactForm from "@/components/ContactForm/ContactForm";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import JobListings from "@/components/JobListing/JobListing";
import ProgressSection from "@/components/ProgressSection/ProgressSection";
import { IMAGES } from "@/lib/assets";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-top pt-[140px]"
      style={{
        backgroundImage: "url('./assets/images/about-bg.svg')",
      }}
    >
      <ContactForm />
      <ContactFooter />
    </div>
  );
}
