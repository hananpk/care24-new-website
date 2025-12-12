import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import LiquidGlass from "../LiquidGlass/LiquidGlass";
import { Autoplay } from "swiper/modules";

import { IMAGES } from "@/lib/assets";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ria George",
    role: "World traveller",
    description:
      "Ria George is an icon who explored different cultures and parts the world through the food and humanity.",
    rating: 5.0,
    date: "Jan 10",
    avatar: IMAGES.avatar,
  },
  {
    id: 2,
    name: "Ria George",
    role: "World traveller",
    description:
      "Ria George is an icon who explored different cultures and parts the world through the food and humanity.",
    rating: 5.0,
    date: "Jan 10",
    avatar: IMAGES.avatar,
  },
  {
    id: 3,
    name: "Ria George",
    role: "World traveller",
    description:
      "Ria George is an icon who explored different cultures and parts the world through the food and humanity.",
    rating: 5.0,
    date: "Jan 10",
    avatar: IMAGES.avatar,
  },
  {
    id: 4,
    name: "Alex Smith",
    role: "Food Blogger",
    description:
      "This is a dummy review to ensure the swiper has enough content to scroll through.",
    rating: 5.0,
    date: "Feb 15",
    avatar: IMAGES.avatar,
  },
];

const TestimonialCard = ({ testimonial }) => {
  const { name, role, description, rating, date, avatar } = testimonial;

  const stars = Array(5)
    .fill(0)
    .map((_, i) => <FaStar key={i} className="w-5 h-5 text-yellow-500" />);

  return (
    <LiquidGlass className="border border-blue-600/30 min-h-[345px]">
      <div
        className="relative p-6 md:p-8 rounded-3xl shadow-xl overflow-hidden h-full"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(30, 64, 175, 0.1) 1px, transparent 1px), radial-gradient(circle at 50% 50%, rgba(30, 64, 175, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      >
        <div className="flex items-center flex-col mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
              fill
            />
          </div>

          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-sm font-thin text-gray-400">{role}</p>
          </div>
        </div>

        <p className="text-gray-300 mb-6 text-sm">{description}</p>

        <div className="flex justify-between items-center border-t border-gray-700 pt-4">
          <div className="flex items-center space-x-2">
            <div className="flex">{stars}</div>
            <span className="text-base font-semibold text-white">
              {rating.toFixed(1)}
            </span>
          </div>

          <span className="text-base text-gray-400">{date}</span>
        </div>
      </div>
    </LiquidGlass>
  );
};

const Testimonial = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <LiquidGlass className="px-12 py-2 text-white mb-4">
            <span>Happy Faces</span>
          </LiquidGlass>
          <h2 className="text-2xl sm:text-5xl font-bold text-white tracking-tight">
            What community are saying
          </h2>
        </div>

        <Swiper
          spaceBetween={10}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="p-2">
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
