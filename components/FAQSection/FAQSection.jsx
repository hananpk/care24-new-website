"use client";
import React, { useRef, useState, useEffect } from "react";

const faqData = [
  {
    q: "What services does a homecare agency provide?",
    a: "Homecare agencies provide services such as nursing care, personal care, medication management, companionship, and assistance with activities of daily living. Specific offerings depend on the agency and the care plan.",
  },
  {
    q: "Can Home Health Aid administer medication?",
    a: "Yes — depending on licensing and agency policy. Medication administration by aides varies by jurisdiction and by the type of medication. Nurses handle more complex medication tasks.",
  },
  {
    q: "During what hours can I reach Care24 if I have a problem?",
    a: "Care24 offers 24/7 customer support so you can reach us any time for urgent help. For routine questions, regular office hours apply.",
  },
  {
    q: "What can I expect to happen first day?",
    a: "On the first day a caregiver will arrive, review the care plan, meet family members, and begin services. Any initial assessments and instructions will be completed.",
  },
];

function AccordionItem({ id, q, a, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [maxH, setMaxH] = useState("0px");

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    function update() {
      setMaxH(isOpen ? `${el.scrollHeight}px` : "0px");
    }
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isOpen]);

  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className="w-full">
      <button
        id={`faq-${id}`}
        aria-controls={`faqpanel-${id}`}
        aria-expanded={isOpen}
        onClick={onToggle}
        onKeyDown={handleKey}
        className="w-full text-left py-6 px-2 md:px-4 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400"
      >
        <span className="text-lg md:text-xl text-white/95 font-medium">
          {q}
        </span>
        <svg
          className={`w-6 h-6 text-white/80 transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>

      <div
        id={`faqpanel-${id}`}
        role="region"
        aria-labelledby={`faq-${id}`}
        style={{ maxHeight: maxH }}
        className="overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] px-2 md:px-4"
      >
        <div ref={contentRef} className="py-4">
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            {a}
          </p>
        </div>
      </div>
      <div className="h-px bg-white/5 mt-2" />
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const left = faqData.filter((_, i) => i % 2 === 0);
  const right = faqData.filter((_, i) => i % 2 === 1);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div>
          <div className="md:pr-12 mb-8">
            <h2 className="text-5xl md:text-6xl font-light text-white leading-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-white/70 max-w-xl">
              If you don’t find an answer here, contact our support and we'll be
              happy to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              {left.map((item, idx) => {
                const realIndex = idx * 2;
                return (
                  <AccordionItem
                    key={realIndex}
                    id={realIndex}
                    q={item.q}
                    a={item.a}
                    isOpen={openIndex === realIndex}
                    onToggle={() => toggleIndex(realIndex)}
                  />
                );
              })}
            </div>

            <div className="space-y-2">
              {right.map((item, idx) => {
                const realIndex = idx * 2 + 1;
                return (
                  <AccordionItem
                    key={realIndex}
                    id={realIndex}
                    q={item.q}
                    a={item.a}
                    isOpen={openIndex === realIndex}
                    onToggle={() => toggleIndex(realIndex)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
