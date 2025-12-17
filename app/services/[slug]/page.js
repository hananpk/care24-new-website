import ServiceContent from "@/components/ServiceContent/ServiceContent";
import { servicesData } from "@/lib/serviceData";

import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) return notFound();

  return <ServiceContent service={service} />;
}
