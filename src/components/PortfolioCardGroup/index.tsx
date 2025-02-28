import { ReactElement } from "react";
import PortfolioCard, { PortfolioCardProps } from "../PortfolioCard";
import "./index.css"; // Import CSS for masonry layout

export interface PortfolioCardGroupProps {
  portfolioItems: PortfolioCardProps[];
}

const PortfolioCardGroup = ({ portfolioItems }: PortfolioCardGroupProps): ReactElement => {
  return (
    <div className="portfolio-wall">
      {portfolioItems.map((portfolioCard, index) => (
        <div key={index} className="portfolio-item">
          <PortfolioCard
            imgSrc={portfolioCard.imgSrc}
            href={portfolioCard.href}
            buttonText={portfolioCard.buttonText}
            alt={portfolioCard.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioCardGroup;
