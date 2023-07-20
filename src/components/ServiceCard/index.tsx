import { ReactElement } from "react";

export interface ServiceCardProps {
  title: string;
  bulletPoints: string[];
  price: string;
  button: ButtonProps;
}

export interface ButtonProps {
  href: string;
  value: string;
  className: string;
}

const ServiceCard = ({ title, bulletPoints, price, button }: ServiceCardProps): ReactElement => {
  const bulletPointElements = bulletPoints.map((text) => {
    return <p className="mb-3 text-white">{text}</p>;
  });
  return (
    <div className="py-5 col-lg-4 col-md-12">
      <i className="bi bi-star"></i>
      <h3>{title}</h3>
      {bulletPointElements}
      <div className="price-small mb-3">{price}</div>
      <a href={button.href} className={button.className}>
        {button.value}
      </a>
    </div>
  );
};
export default ServiceCard;
