import React from "react";

const ResponsiveStats = () => {
  const stats = [
    { label: "Health Care Professionals", value: 93 },
    { label: "Happy Customers", value: 98 },
    { label: "Success", value: 90 },
  ];

  // SVG Circumference for r=28 (2 * pi * 28)
  const circumference = 175.9;

  return (
    <section className=" w-full py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center w-full gap-4 md:gap-0"
          >
            {/* 1. Label Pill - Scales width on mobile, fixed min-width on desktop */}
            <div
              className="border border-white/30 rounded-full px-6 py-3 md:px-8 md:py-4 
                            w-full md:w-auto md:min-w-[280px] text-center md:text-left
                            text-white text-base md:text-lg font-medium"
            >
              {item.label}
            </div>

            {/* 2. Connecting Line - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block flex-grow h-[1px] bg-white/20 mx-2"></div>

            {/* 3. Progress Circle - Centered on mobile, right-aligned on desktop */}
            <div className="flex justify-center md:block">
              <div className="relative flex items-center justify-center w-16 h-16 md:ml-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    className="text-white/10"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={
                      circumference - (circumference * item.value) / 100
                    }
                    strokeLinecap="round"
                    className="text-cyan-400 transition-all duration-1000 ease-in-out"
                  />
                </svg>
                <span className="absolute text-white text-xs font-bold font-mono">
                  {item.value}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResponsiveStats;
