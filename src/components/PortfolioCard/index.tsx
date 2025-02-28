import { ReactElement } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./index.css"; // Custom styling for clean UI

export interface PortfolioCardProps {
  imgSrc: string;
  href: string;
  buttonText: string;
  alt: string;
}

const PortfolioCard = ({ imgSrc, href, buttonText, alt }: PortfolioCardProps): ReactElement => {
  return (
    <div className="portfolio-card">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image className="portfolio-img" src={imgSrc} alt={alt} />
      </a>
      <Button className="portfolio-button" href={href} target="_blank" rel="noopener noreferrer">
        {buttonText}
      </Button>
    </div>
  );
};

export default PortfolioCard;
