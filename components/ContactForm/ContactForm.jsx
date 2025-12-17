"use client";

import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const regex = {
  name: /^[a-zA-Z\s.'-]{2,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  phone: /^\d{10,15}$/,
  message: /^.{10,500}$/,
};

const ContactForm = () => {
  const API_URL = "https://backend.care24inc.ca/api/v1/contact-form/";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!regex.name.test(formData.name.trim())) {
      newErrors.name = "Please enter a valid name (min 2 characters).";
    }

    if (!regex.email.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!regex.phone.test(phoneDigits)) {
      newErrors.phone = "Phone number must be 10–15 digits.";
    }

    if (!regex.message.test(formData.message.trim())) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error while typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setStatus({ message: "Processing your request...", type: "loading" });

    const payload = {
      name: formData.name.trim(),
      email_address: formData.email.trim(),
      phone_number: formData.phone.replace(/\D/g, "") || null,
      message: formData.message.trim(),
    };

    try {
      const response = await axios.post(API_URL, payload, {
        headers: { "Content-Type": "application/json" },
        referrerPolicy: "no-referrer",
      });

      if (response.status >= 200 && response.status < 300) {
        setStatus({
          message: "Success! Your message has been sent.",
          type: "success",
        });

        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setStatus({
        message:
          error?.response?.data?.message ||
          "Submission failed. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen py-16 px-6 lg:px-24 flex items-center overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[600px] w-full"
        >
          <Image
            src={IMAGES.support}
            alt="Support"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* FORM */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white space-y-8"
        >
          <motion.h2 variants={fadeUp} className="text-5xl font-bold">
            Contact Us
          </motion.h2>

          {status.message && (
            <div
              className={`rounded-xl px-4 py-3 text-sm font-medium ${
                status.type === "success"
                  ? "bg-green-100 text-green-800"
                  : status.type === "error"
                  ? "bg-red-100 text-red-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {status.message}
            </div>
          )}

          <motion.form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />

            <Input
              label="Email *"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <Input
              label="Phone *"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            <motion.div variants={fadeUp} className="space-y-2">
              <label className="text-sm font-medium">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white text-gray-800 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-cyan-400"
              />
              {errors.message && (
                <p className="text-red-400 text-xs">{errors.message}</p>
              )}
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-2/3 bg-[#4FC3D9] hover:bg-[#3db0c5]
                           disabled:opacity-60 text-white font-bold py-4 rounded-full text-xl"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

const Input = ({ label, error, ...props }) => (
  <motion.div variants={fadeUp} className="space-y-2">
    <label className="text-sm font-medium">{label}</label>
    <input
      {...props}
      className="w-full bg-white text-gray-800 rounded-xl px-4 py-4
                 outline-none focus:ring-2 focus:ring-cyan-400"
    />
    {error && <p className="text-red-400 text-xs">{error}</p>}
  </motion.div>
);

export default ContactForm;
