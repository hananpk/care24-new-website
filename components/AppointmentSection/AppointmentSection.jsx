"use client";
// import { LiquidGlass } from "@liquidglass/react";
import { FiPhone } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import LiquidGlass from "../LiquidGlass/LiquidGlass";

export default function AppointmentSection() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 rounded-[30px] border border-white/10 p-10 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Schedule an Appointment
              </h2>

              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                Secure your time slot with our certified experts or call us for
                immediate support.
              </p>
            </div>

            <div className="flex gap-6 mt-14">
              <LiquidGlass
                className="rounded-full h-20 w-20 flex items-center justify-center"
                radius={999}
              >
                <FiPhone className="text-3xl text-white" />
              </LiquidGlass>
              <LiquidGlass
                className="rounded-full h-20 w-20 flex items-center justify-center"
                radius={999}
              >
                <FiCalendar className="text-3xl text-white" />
              </LiquidGlass>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-7 space-y-10">
            <LiquidGlass className="rounded-[30px] p-8 w-full ">
              <div className="flex justify-between w-full flex-col md:flex-row">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Schedule an Appointment
                  </h3>
                  <p className="text-white/80 mt-1">
                    8 a.m. to 5 p.m. (Mon–Fri) Eastern time.
                  </p>
                </div>

                <div className="mt-4 md:mt-0">
                  <LiquidGlass className="px-10 py-3 rounded-full text-white font-semibold cursor-pointer w-full">
                    Book Now
                  </LiquidGlass>
                </div>
              </div>
            </LiquidGlass>

            {/* CARD 2 */}
            <LiquidGlass className="rounded-[30px] p-8 w-full ">
              <div className="flex justify-between w-full flex-col md:flex-row">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Schedule an Appointment
                  </h3>
                  <p className="text-white/80 mt-1">
                    8 a.m. to 5 p.m. (Mon–Fri) Eastern time.
                  </p>
                </div>

                <div className="mt-4 md:mt-0">
                  <LiquidGlass className="px-10 py-3 rounded-full text-white font-semibold cursor-pointer w-full">
                    Call Now
                  </LiquidGlass>
                </div>
              </div>
            </LiquidGlass>
          </div>
        </div>
      </div>
    </section>
  );
}
