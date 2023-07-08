import { ReactElement, FC } from "react";
import { Link } from "react-router-dom";
import PortfolioCardGroup, { PortfolioCardGroupProps } from "../../components/PortfolioCardGroup";
import { PortfolioCardProps } from "../../components/PortfolioCard";

const Home: FC = (): ReactElement => {
  const portfolio: PortfolioCardProps[] = [
    {
      imgSrc: "images/Portfolio/stephenie-santilli.png",
      href: "https://www.stepheniesantilli.com/",
      buttonText: "Stephenie Santilli (Coming Soon)",
    },
    {
      imgSrc: "images/Portfolio/patrick-pope.png",
      href: "https://www.patrickpopeorganist.com/",
      buttonText: "Patrick Pope (Coming Soon)",
    },
    {
      imgSrc: "images/Portfolio/holy-trinity.png",
      href: "https://holytrinity.squarespace.com/",
      buttonText: "Holy Trinity Episcopal Church",
    },
    {
      imgSrc: "images/Portfolio/garrett-law.png",
      href: "https://www.garrettjohnlaw.com/",
      buttonText: "Garrett John Law",
    },
  ];
  return (
    <div className="p-4 d-flex flex-column gap-3">
      <h1 className="text-white text-center display-4">Portfolio</h1>
      <PortfolioCardGroup portfolioItems={portfolio}></PortfolioCardGroup>
      <div className="d-flex justify-content-center gap-5">
        <Link to="/services" className="btn btn-light btn-lg">
          Services
        </Link>
        <Link to="/get-started" className="btn btn-secondary btn-lg">
          Get Started
        </Link>
      </div>
    </div>
  );
};
export default Home;
