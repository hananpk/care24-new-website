import React from "react";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import { IMAGES } from "@/lib/assets";
import Image from "next/image";

const ContactFooter = () => {
  const contactDetails = [
    {
      icon: IMAGES.location,
      title: "Head office address",
      content: (
        <p className="text-gray-300 leading-relaxed">
          5828 Ferry st, Niagara falls L2G1S9 <br /> Canada
        </p>
      ),
    },
    {
      icon: IMAGES.support_icon,
      title: "Assistance",
      content: (
        <div className="flex flex-col gap-1">
          <a
            href="tel:+12896862000"
            className="text-gray-300 hover:text-cyan-400 underline decoration-white/30 underline-offset-4"
          >
            +1 (289) 686 2000
          </a>
          <a
            href="tel:+12896962000"
            className="text-gray-300 hover:text-cyan-400 underline decoration-white/30 underline-offset-4"
          >
            +1 (289) 696 2000
          </a>
          <a
            href="tel:+12896869000"
            className="text-gray-300 hover:text-cyan-400 underline decoration-white/30 underline-offset-4"
          >
            +1 (289) 686 9000
          </a>
        </div>
      ),
    },
    {
      icon: IMAGES.mail,
      title: "Mail for information",
      content: (
        <a
          href="mailto:info@care24inc.ca"
          className="text-gray-300 hover:text-cyan-400 underline decoration-white/30 underline-offset-4"
        >
          info@care24inc.ca
        </a>
      ),
    },
  ];

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9594236.860599471!2d-125.53214899405292!3d54.04992333220502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5309b282a82419b5%3A0xb0a9479a409b8e9e!2sAlberta%2C%20Canada!5e0!3m2!1sen!2sin!4v1765967098391!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mx-auto mb-8 w-full md:w-2/3 px-4 h-[300px] md:h-[450px]"
      />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
        {contactDetails.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-6">
            <div className="p-4 rounded-full hover:border-cyan-400 transition-colors duration-300">
              <Image src={item.icon} alt="Icon" width={40} height={40} />
            </div>

            <div className="space-y-4">
              <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                {item.title}
              </h3>
              <div className="text-sm md:text-base font-light">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactFooter;
