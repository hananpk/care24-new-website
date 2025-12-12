"use client";
import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LiquidGlass } from "@liquidglass/react";
import { TfiAngleRight } from "react-icons/tfi";
import { HiMenu, HiX } from "react-icons/hi";

const servicesData = [
  "Home Health Care",
  "Palliative Care",
  "Respite Care",
  "In Home Child Care",
  "Autism Care",
  "Brain Injury",
  "Alzheimers & Dementia Care",
  "Nursing & Medical Care",
  "Home Isolation Patient Management",
  "In Service Education",
  "Volunteers",
];

const Header = () => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const getColumns = (data) => {
    const half = Math.ceil(data.length / 2);
    const col1 = data.slice(0, half);
    const col2 = data.slice(half);
    return { col1, col2 };
  };

  const { col1, col2 } = getColumns(servicesData);

  const MegaMenu = () => (
    <div
      className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] rounded-3xl border border-gray-200/30 shadow-xl transition-opacity duration-300 pointer-events-auto z-40"
      style={{
        backgroundColor: "rgba(1, 43, 94, 1)",
        opacity: isServicesHovered ? 1 : 0,
        visibility: isServicesHovered ? "visible" : "hidden",
      }}
      onMouseEnter={() => setIsServicesHovered(true)}
      onMouseLeave={() => setIsServicesHovered(false)}
    >
      <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-white p-6">
        <div>
          {col1.map((service, index) => (
            <div
              key={index}
              className="mb-2 rounded-3xl transition duration-200 px-3 py-2 border-2 border-transparent hover:border-[#49bad9]/10 hover:text-[#49bad9]"
            >
              <Link
                href={`/services/${service
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(/ /g, "-")}`}
                className="block"
              >
                {service}
              </Link>
            </div>
          ))}
        </div>
        <div>
          {col2.map((service, index) => (
            <div
              key={index}
              className="mb-2 rounded-3xl transition duration-200 px-3 py-2 border-2 border-transparent hover:border-[#49bad9]/10 hover:text-[#49bad9]"
            >
              <Link
                href={`/services/${service
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(/ /g, "-")}`}
                className="block"
              >
                {service}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header className="w-full absolute top-0 left-0 right-0 z-[99999]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" aria-label="Home">
              <div className="w-[120px] h-[40px] relative">
                <Image
                  src={IMAGES.logo}
                  alt="logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-white">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#49bad9] transition-colors duration-200"
                >
                  Home
                </Link>
              </li>

              <li
                className="relative"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={isServicesHovered}
                  className="flex items-center gap-2 hover:text-[#49bad9] transition-colors duration-200"
                >
                  Services
                </button>

                <MegaMenu />
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-[#49bad9] transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-[#49bad9] transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#49bad9] transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right actions (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <LiquidGlass
              borderRadius={200}
              elasticity={1}
              className="transition duration-200 border-2 border-white/10 hover:scale-[1.03]"
              blur={2}
              contrast={1}
              brightness={1}
              saturation={1}
            >
              <Link
                href={"/"}
                className="px-6 py-2 text-white flex items-center whitespace-nowrap"
              >
                Appointment{" "}
                <span className="ml-2 text-sm">
                  <TfiAngleRight />
                </span>
              </Link>
            </LiquidGlass>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((s) => !s)}
              className="p-2 rounded-md text-white hover:bg-white/5 transition"
            >
              {mobileMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed inset-x-0 top-[64px] bg-[#012b5e] text-white z-40 transform origin-top transition-transform duration-200 ${
          mobileMenuOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-white/5"
              >
                Home
              </Link>
            </li>

            {/* Mobile Services collapsible */}
            <li>
              <button
                onClick={() => setMobileServicesOpen((s) => !s)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5"
                aria-expanded={mobileServicesOpen}
              >
                <span>Services</span>
                <span
                  className={`transition-transform ${
                    mobileServicesOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <TfiAngleRight />
                </span>
              </button>

              <div
                className={`mt-2 overflow-hidden transition-[max-height] duration-300 ${
                  mobileServicesOpen ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="grid grid-cols-1 gap-1">
                  {servicesData.map((service, idx) => (
                    <Link
                      key={idx}
                      href={`/services/${service
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/ /g, "-")}`}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="block px-4 py-2 rounded-lg hover:bg-white/5"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-white/5"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-white/5"
              >
                Careers
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-white/5"
              >
                Contact Us
              </Link>
            </li>

            <li className="pt-2">
              <LiquidGlass
                borderRadius={200}
                elasticity={1}
                className="w-full block transition duration-200 border-2 border-white/10"
                blur={2}
                contrast={1}
                brightness={1}
                saturation={1}
              >
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-2xl max-auto block text-center px-4 py-3 text-white"
                >
                  Appointment{" "}
                  <span className="ml-2 inline-block">
                    <TfiAngleRight />
                  </span>
                </Link>
              </LiquidGlass>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
