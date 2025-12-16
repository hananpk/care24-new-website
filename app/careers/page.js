"use client";

import FeatureSection from "@/components/FeatureSection/FeatureSection";
import JobListings from "@/components/JobListing/JobListing";
import ProgressSection from "@/components/ProgressSection/ProgressSection";
import { IMAGES } from "@/lib/assets";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <JobListings />
    </>
  );
}
