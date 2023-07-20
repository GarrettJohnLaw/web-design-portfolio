import { ReactElement } from "react";
import ServiceCard, { ServiceCardProps } from "../ServiceCard";

export interface ServicesSectionProps {
  title: string;
  services: ServiceCardProps[];
}

const ServicesSection = ({ title, services }: ServicesSectionProps): ReactElement => {
  const serviceCards = services.map((service: ServiceCardProps) => {
    return <ServiceCard {...service} />;
  });
  return (
    <div className="p-4">
      <h1 className="huge-font text-white text-center display-4">{title}</h1>;
      <div className="row justify-content-between text-center py-md-5 text-white">{serviceCards}</div>
    </div>
  );
};
export default ServicesSection;
