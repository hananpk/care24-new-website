"use client";

import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LiquidGlass } from "@liquidglass/react";
import { TfiAngleRight } from "react-icons/tfi";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const servicesData = [
  "Palliative Care",
  "Respite Care",
  "In Home Child Care",
  "Autism Care",
  "Brain Injury",
  "Alzheimers & Dementia Care",
  "Nursing & Medical Care",
  "Home Isolation Patient Management",
  "In Service Education",
  "Way to Volunteers",
];

const headerVariants = {
  hidden: {
    y: -80,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const Header = () => {
  const pathname = usePathname();

  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
        document.body.classList.remove("overflow-hidden");
      }
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    if (pathname.startsWith("/services")) {
      setMobileServicesOpen(true);
    }
  }, [pathname]);

  const isActive = (path) => pathname === path;
  const isServicesActive = pathname.startsWith("/services");

  const getServicePath = (service) =>
    `/services/${service
      .toLowerCase()
      .replace(/ & /g, "-")
      .replace(/ /g, "-")}`;

  const handleMobileMenu = () => {
    setMobileMenuOpen((s) => !s);
    document.body.classList.toggle("overflow-hidden");
  };

  const getColumns = (data) => {
    const half = Math.ceil(data.length / 2);
    return {
      col1: data.slice(0, half),
      col2: data.slice(half),
    };
  };

  const { col1, col2 } = getColumns(servicesData);

  /* ---------------- Desktop Mega Menu ---------------- */
  const MegaMenu = () => (
    <div
      className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] rounded-3xl border border-gray-200/30 shadow-xl z-40"
      style={{
        backgroundColor: "rgba(1, 43, 94, 1)",
        opacity: isServicesHovered ? 1 : 0,
        visibility: isServicesHovered ? "visible" : "hidden",
      }}
      onMouseEnter={() => setIsServicesHovered(true)}
      onMouseLeave={() => setIsServicesHovered(false)}
    >
      <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-white p-6">
        {[col1, col2].map((col, colIndex) => (
          <div key={colIndex}>
            {col.map((service, index) => {
              const path = getServicePath(service);
              const active = pathname === path;

              return (
                <div
                  key={index}
                  className={`mb-2 rounded-3xl px-3 py-2 border-2 transition duration-200 ${
                    active
                      ? "border-[#49bad9]/30 text-[#49bad9]"
                      : "border-transparent hover:border-[#49bad9]/10 hover:text-[#49bad9]"
                  }`}
                >
                  <Link href={path}>{service}</Link>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.header
      variants={headerVariants}
      initial={false}
      animate={isScrolled ? "visible" : "visible"}
      className={`w-full z-[99999] transition-all ${
        isScrolled
          ? "fixed top-0 left-0 right-0 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "absolute top-0 left-0 right-0"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" aria-label="Home">
            <div className="w-[120px] h-[40px] relative">
              <Image
                src={IMAGES.logo}
                alt="logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-white">
              <li>
                <Link
                  href="/"
                  className={`${
                    isActive("/") ? "text-[#49bad9]" : "hover:text-[#49bad9]"
                  }`}
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
                  className={`flex items-center gap-2 ${
                    isServicesActive ? "text-[#49bad9]" : "hover:text-[#49bad9]"
                  }`}
                >
                  Services
                </button>
                <MegaMenu />
              </li>

              <li>
                <Link
                  href="/about"
                  className={`${
                    isActive("/about")
                      ? "text-[#49bad9]"
                      : "hover:text-[#49bad9]"
                  }`}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className={`${
                    isActive("/careers")
                      ? "text-[#49bad9]"
                      : "hover:text-[#49bad9]"
                  }`}
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`${
                    isActive("/contact")
                      ? "text-[#49bad9]"
                      : "hover:text-[#49bad9]"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex">
            <LiquidGlass
              borderRadius={200}
              elasticity={1}
              blur={2}
              className="border-2 border-white/10 hover:scale-[1.03]"
            >
              <Link
                href="/contact"
                className="px-6 py-2 text-white flex items-center"
              >
                Appointment <TfiAngleRight className="ml-2" />
              </Link>
            </LiquidGlass>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white relative z-10"
            onClick={handleMobileMenu}
          >
            {mobileMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 bg-[#012b5e] h-screen text-white transition-all pt-16 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md ${
              pathname === "/"
                ? "text-[#49bad9] bg-white/5"
                : "hover:bg-white/5"
            }`}
          >
            Home
          </Link>

          {/* SERVICES ACCORDION */}
          <button
            onClick={() => setMobileServicesOpen((s) => !s)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5"
          >
            <span
              className={`${
                isServicesActive ? "text-[#49bad9]" : "text-white"
              }`}
            >
              Services
            </span>
            <TfiAngleRight
              className={`transition-transform ${
                mobileServicesOpen ? "rotate-90" : ""
              }`}
            />
          </button>

          {mobileServicesOpen && (
            <div className="ml-3 space-y-1">
              {servicesData.map((service) => {
                const path = getServicePath(service);
                return (
                  <Link
                    key={service}
                    href={path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                      document.body.classList.remove("overflow-hidden");
                    }}
                    className={`block px-3 py-2 rounded-md ${
                      pathname === path
                        ? "text-[#49bad9] bg-white/5"
                        : "hover:bg-white/5"
                    }`}
                  >
                    {service}
                  </Link>
                );
              })}
            </div>
          )}

          {["/about", "/careers", "/contact"].map((path) => (
            <Link
              key={path}
              href={path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                pathname === path
                  ? "text-[#49bad9] bg-white/5"
                  : "hover:bg-white/5"
              }`}
            >
              {path.replace("/", "")}
            </Link>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
