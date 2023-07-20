import { ReactElement, FC } from "react";
import ServiceSection, { ServicesSectionProps } from "../../components/ServicesSection";
import { ButtonProps } from "../../components/ServiceCard";

const Home: FC = (): ReactElement => {
  const services: ServicesSectionProps[] = [
    {
      title: "Web Design Services",
      services: [
        {
          title: "Portfolio Package",
          bulletPoints: ["3-5 pages", "A refined website experience", "A responsive and mobile-first design"],
          price: "$499+",
          button: { href: "/get-started", value: "Get Started", className: "btn btn-warning" },
        },
        {
          title: "Small Business Package",
          bulletPoints: ["6-8 pages", "All of Portfolio Package and:", "Basic Search Engine Optimization"],
          price: "$999+",
          button: { href: "/get-started", value: "Get Started", className: "btn btn-light" },
        },
        {
          title: "Ecommerce Package",
          bulletPoints: [
            "8-12 pages",
            "All of Small Business Package and:",
            "A storefront up to 15 products",
            "Opportunity for blog package",
          ],
          price: "$999+",
          button: { href: "/get-started", value: "Get Started", className: "btn btn-secondary" },
        },
      ],
    },
    {
      title: "Web Hosting Services",
      services: [
        {
          title: "Basic",
          bulletPoints: ["3-5 pages", "A refined website experience", "A responsive and mobile-first design"],
          price: "$499+",
          button: { href: "/get-started", value: "Get Started", className: "btn btn-warning" },
        },
      ],
    },
    {
      title: "Graphic Design Services",
      services: [
        {
          title: "Basic Logo Package",
          bulletPoints: ["1 Custom Logo Design"],
          price: "$100",
          button: { href: "/get-started", value: "Get Started", className: "btn btn-warning" },
        },
        {
          title: "Brand Identity Package",
          bulletPoints: [
            "1 Custom Logo Design",
            "Logo Assets (PNG, JPEG, Vector)",
            "Font Identity (Selection of 3 Fonts)",
            "Color Guide (Color Palette)",
          ],
          price: "$300",
          button: { href: "/get-started", value: "Get Started", className: "btn btn-light" },
        },
        {
          title: "Premium Brand Identity Package",
          bulletPoints: [
            "All of Brand Identity Package and:",
            "Mission/Artist Statement Development",
            "Brand Guidelines (Usage, Typography, Imagery)",
            "Social Media Profile Graphics",
            "1 Banner Design",
            "Business Card Design",
            "Letterhead Design",
          ],
          price: "$600 per year",
          button: { href: "/get-started", value: "Get Started", className: "btn btn-light" },
        },
      ],
    },
  ];

  const serviceSections = services.map((service) => {
    return <ServiceSection {...service}></ServiceSection>;
  });
  return <>{serviceSections}</>;
};
export default Home;
