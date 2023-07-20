import { ReactElement } from "react";
import PortfolioCard, { PortfolioCardProps } from "../PortfolioCard";
import Row from "react-bootstrap/Row";

export interface PortfolioCardGroupProps {
  portfolioItems: PortfolioCardProps[];
}

const Home = ({ portfolioItems }: PortfolioCardGroupProps): ReactElement => {
  const portfolioCardGroup = portfolioItems.map((portfolioCard, index) => {
    return (
      <PortfolioCard
        key={index}
        imgSrc={portfolioCard.imgSrc}
        href={portfolioCard.href}
        buttonText={portfolioCard.buttonText}
        alt={portfolioCard.alt}
      ></PortfolioCard>
    );
  });
  return (
    <div>
      <Row xs={1} md={2} lg={3}>
        {portfolioCardGroup}
      </Row>
    </div>
  );
};
export default Home;
