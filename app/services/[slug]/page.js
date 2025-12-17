import { servicesData } from "@/lib/serviceData";
import { LiquidGlass } from "@liquidglass/react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) return notFound();

  return (
    <div
      className="min-h-screen bg-cover bg-top"
      style={{
        backgroundImage: "url('/assets/images/service-bg.svg')",
      }}
    >
      <div className="container mx-auto px-6 py-[140px]">
        <div className="backdrop-blur-md border border-white/20 shadow-md rounded-3xl">
          <div
            className={`flex justify-between items-center md:flex-row flex-col ${
              service.image ? "text-left" : "text-center"
            }`}
          >
            <div
              className={`md:p-10 py-8 md:px-14 px-8 w-1/2  ${
                service.image ? "md:w-1/2 w-full" : "w-full"
              }`}
            >
              <h1 className="text-3xl md:text-4xl text-white font-bold mb-6">
                {service.title}
              </h1>
              <p
                className={`text-white/80 leading-relaxed ${
                  service.image
                    ? "text-justify"
                    : "md:text-center text-justify md:w-2/3 w-full mx-auto"
                }`}
                dangerouslySetInnerHTML={{ __html: service.description }}
              ></p>
            </div>

            {service.image && (
              <div className="md:w-[600px] w-full rounded-2xl overflow-hidden py-10 px-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
