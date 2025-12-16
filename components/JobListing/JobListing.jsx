import React from "react";
import { Briefcase, MapPin, GraduationCap, Users } from "lucide-react";
import { LiquidGlass } from "@liquidglass/react";

const JobCard = ({ title, tags, details, highlighted = false }) => (
  <div
    className={`relative p-6 rounded-3xl border transition-all duration-300 ${"bg-white/5 border-white/10 hover:border-white/20"} backdrop-blur-md`}
  >
    {/* Card Header */}
    <div className="flex justify-between items-start mb-6">
      <div className="flex gap-4">
        <div className="bg-white p-2 rounded-xl h-12 w-12 flex items-center justify-center">
          <div className="text-blue-600 font-bold text-xl">✚</div>
        </div>
        <div>
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <div className="flex gap-2 mt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`text-xs px-3 py-1 rounded-full border ${
                  tag.type === "blue"
                    ? "bg-blue-900/50 border-blue-500 text-blue-200"
                    : "bg-orange-900/50 border-orange-500 text-orange-200"
                }`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
        Apply Now
      </button>
    </div>

    {/* Job Details Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-6">
      {details.map((detail, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 text-gray-300 text-sm"
        >
          {detail.icon}
          <span>{detail.text}</span>
        </div>
      ))}
    </div>

    {/* Footer Description */}
    <div className="pt-4 border-t border-white/10">
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        Provide patient care, administer medications, and collaborate with
        physicians in a supportive clinical environment.
      </p>
      <span className="text-gray-200 text-xs italic">Posted 1 week ago</span>
    </div>
  </div>
);

const JobListings = () => {
  const jobs = [
    {
      title: "Registered Nurse",
      tags: [
        { label: "Full time", type: "blue" },
        { label: "Onsite", type: "orange" },
      ],
      details: [
        { icon: <Users size={16} />, text: "Any Gender" },
        { icon: <GraduationCap size={16} />, text: "Bsc Nurse" },
        { icon: <Briefcase size={16} />, text: "1-3 Years of Experience" },
        { icon: <MapPin size={16} />, text: "Niagara" },
      ],
    },
    {
      title: "Registered Nurse",
      highlighted: true,
      tags: [
        { label: "Part-time", type: "blue" },
        { label: "Onsite", type: "orange" },
      ],
      details: [
        { icon: <Users size={16} />, text: "Any Gender" },
        { icon: <GraduationCap size={16} />, text: "Bsc Nurse" },
        { icon: <Briefcase size={16} />, text: "1-3 Years of Experience" },
        { icon: <MapPin size={16} />, text: "Niagara" },
      ],
    },
    // Add more jobs as needed...
  ];

  return (
    <section
      className="py-20 px-4 pt-[130px] min-h-screen bg-cover bg-top"
      style={{
        backgroundImage: "url('./assets/images/about-bg.svg')",
      }}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Easily apply to multiple jobs with one click!
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse open roles and apply instantly to positions that match your
            skills.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
