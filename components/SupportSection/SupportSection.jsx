import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// SupportSection.jsx
// Props:
//  - images: { big: string, small: string }
// Example: <SupportSection images={{ big: '/assets/elderly.jpg', small: '/assets/nurse.jpg' }} />

export default function SupportSection({ images = {} }) {
  const big = images.big || "/images/support-big.jpg";
  const small = images.small || "/images/support-small.jpg";

  const contacts = [
    {
      phone: "+1(289) 407 2788",
      text: "Care 24 provide high quality professional and compassionate care in various aspects of health.",
    },
    {
      phone: "+1(289) 241 6516",
      text: "Care 24 provide high quality professional and compassionate care in various aspects of health.",
    },
    {
      phone: "+1(289) 686 2000",
      text: "Care 24 provide high quality professional and compassionate care in various aspects of health.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="relative lg:col-span-6 flex justify-center lg:justify-start">
          <div className="w-[320px] sm:w-[360px] md:w-[420px] lg:w-[460px] relative">
            <div className="relative md:h-[420px] lg:h-[480px]">
              <Image
                src={IMAGES.support}
                alt="support big"
                width={420}
                height={500}
                className="object-contain h-full"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-white">
            We Support
          </h2>

          <div className="relative pl-6">
            <svg
              className="absolute left-0 top-6 h-[80%]"
              width="24"
              viewBox="0 0 24 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#9FD6FF" strokeWidth="1.2" strokeLinecap="round">
                <path d="M12 0 V380" />
              </g>
              {/* three dots at intervals */}
              <circle cx="12" cy="48" r="4" fill="#9FD6FF" />
              <circle cx="12" cy="160" r="4" fill="#9FD6FF" />
              <circle cx="12" cy="280" r="4" fill="#9FD6FF" />
            </svg>

            <div className="space-y-10">
              {contacts.map((c, i) => (
                <div key={i} className="pl-8">
                  <p className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                    <Link href={`tel:${c.phone}`}>{c.phone}</Link>
                  </p>
                  <p className="text-sm sm:text-base text-gray-400 max-w-xl">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
