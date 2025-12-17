import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <div>
      <section className="relative min-h-screen py-16 px-6 lg:px-24 flex items-center overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="relative h-[400px] md:h-[600px] w-full">
            <Image
              src={IMAGES.support}
              alt="Support"
              fill
              className="object-contain"
            />
          </div>

          <div className="text-white space-y-8">
            <h2 className="text-5xl font-bold mb-8">Contact Us</h2>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name *</label>
                <input
                  type="text"
                  placeholder="Write your name"
                  className="w-full bg-white text-gray-800 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email*</label>
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full bg-white text-gray-800 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone*</label>
                <input
                  type="tel"
                  placeholder="+1(___)_________"
                  className="w-full bg-white text-gray-800 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message*</label>
                <input
                  type="text"
                  placeholder="Write your message"
                  className="w-full bg-white text-gray-800 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="w-full md:w-2/3 !mx-auto bg-[#4FC3D9] hover:bg-[#3db0c5] text-white font-bold py-4 rounded-full text-xl shadow-lg transition-transform active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
