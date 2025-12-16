"use client";

import FeatureSection from "@/components/FeatureSection/FeatureSection";
import ProgressSection from "@/components/ProgressSection/ProgressSection";
import { IMAGES } from "@/lib/assets";
import Image from "next/image";

export default function Home() {
  const FEATURES = [
    {
      title: "Passion for the job",
      description:
        "It’s really important that you are passionate about what you do.",
      icon: IMAGES.passion,
    },
    {
      title: "Good communication skills",
      description:
        "Effective communication is one of the significant skills for the health care professionals.",
      icon: IMAGES.communication,
    },
    {
      title: "Ability to multitask",
      description:
        "Multitasking enables health care organizations to improve the quality of care, safety, effectiveness and job satisfaction.",
      icon: IMAGES.multitask,
    },
  ];
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-top pt-[140px]"
        style={{
          backgroundImage: "url('./assets/images/about-bg.svg')",
        }}
      >
        <div>
          <h2 className="text-center text-4xl mb-2 font-bold text-white">
            We are here to oversee your Health with
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full mt-8 lg:mt-0">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={IMAGES.about}
                  alt="Healthcare Professional Team"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Right Side: Content & Stats */}
            <div className="py-10 lg:py-24 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-4xl font-bold leading-tight text-white">
                  How we make a <br /> Difference
                </h2>
                <p className="text-lg text-blue-100 max-w-xl leading-relaxed">
                  When we think of people who work in healthcare, we tend to
                  think of people who are caring, kind and patient. While this
                  may be true, there is more to being a health professional than
                  having a kind heart.
                </p>
              </div>

              {/* Stats Row */}
              <div className="flex gap-12 pt-4">
                <div>
                  <div className="text-5xl font-bold text-white">480</div>
                  <div className="text-sm uppercase tracking-wider text-blue-200 mt-2">
                    User reviews
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-white">269</div>
                  <div className="text-sm uppercase tracking-wider text-blue-200 mt-2">
                    Awards winning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeatureSection features={FEATURES} />
        <ProgressSection />
      </div>
    </>
  );
}
