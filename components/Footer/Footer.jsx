// Footer.jsx
"use client";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { IMAGES } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="bg-[#10243a] text-white/90">
      <div className="mx-auto px-6 md:px-12 py-16">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div>
            <div className="flex items-center">
              <div className="w-40 h-40 relative">
                {/* Example: use your Image component / asset */}
                <Image
                  src={IMAGES.logo}
                  alt="Care24"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <p className="text-white/60 max-w-sm leading-relaxed">
              Care24 will provide an unparalleled experience as the most trusted
              partner for health care.
            </p>

            <div className="mt-8">
              <div className="inline-flex items-center gap-6 bg-[#21435a] px-6 py-4 rounded-full shadow-md">
                <div className="text-4xl font-extrabold text-white">4.8</div>
                <div className="flex flex-col">
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.374-2.455a1 1 0 00-1.175 0L5.21 18.95c-.785.57-1.84-.196-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L1.217 9.294c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.05 2.927z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.374-2.455a1 1 0 00-1.175 0L5.21 18.95c-.785.57-1.84-.196-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L1.217 9.294c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.05 2.927z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.374-2.455a1 1 0 00-1.175 0L5.21 18.95c-.785.57-1.84-.196-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L1.217 9.294c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.05 2.927z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.374-2.455a1 1 0 00-1.175 0L5.21 18.95c-.785.57-1.84-.196-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L1.217 9.294c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.05 2.927z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.374-2.455a1 1 0 00-1.175 0L5.21 18.95c-.785.57-1.84-.196-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L1.217 9.294c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.05 2.927z" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/80">30k Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 md:mt-0">
            <div>
              <h4 className="text-lg font-semibold text-white/95 mb-6">
                About product
              </h4>
              <ul className="space-y-4 text-white/60">
                <li>
                  <a className="hover:text-white" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    How it works
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Reviews
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Subscribe
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white/95 mb-6">
                Need Help?
              </h4>
              <ul className="space-y-4 text-white/60">
                <li className="text-sm">Call us directly?</li>
                <li className="text-white font-semibold">+1 (289) 407 2788</li>
                <li className="text-sm mt-3">Need live support?</li>
                <li className="text-white font-semibold">info@care24inc.ca</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white/95 mb-6">
                Connect with us
              </h4>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20"
                >
                  <FaFacebookF className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20"
                >
                  <FaInstagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20"
                >
                  <FaTwitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20"
                >
                  <FaLinkedinIn className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20"
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
