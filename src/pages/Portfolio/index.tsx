import { ReactElement, FC } from "react";
import { Link } from "react-router-dom";
import PortfolioCardGroup from "../../components/PortfolioCardGroup";
import { PortfolioCardProps } from "../../components/PortfolioCard";

const Home: FC = (): ReactElement => {
  let portfolio: PortfolioCardProps[] = [
    {
      imgSrc: "images/Portfolio/stephenie-santilli-min.png",
      href: "https://www.stepheniesantilli.com/",
      buttonText: "Stephenie Santilli (Coming Soon)",
      alt: "Stephenie Santilli",
    },
    {
      imgSrc: "images/Portfolio/patrick-pope-min.png",
      href: "https://www.patrickpopeorganist.com/",
      buttonText: "Patrick Pope (Coming Soon)",
      alt: "Patrick Pope",
    },
    {
      imgSrc: "images/Portfolio/holy-trinity-min.png",
      href: "https://holytrinity.squarespace.com/",
      buttonText: "Holy Trinity Episcopal Church",
      alt: "Holy Trinity Episcopal Church",
    },
    {
      imgSrc: "images/Portfolio/garrett-law-min.png",
      href: "https://www.garrettjohnlaw.com/",
      buttonText: "Garrett John Law",
      alt: "Garrett John Law",
    },
    {
      imgSrc: "images/Portfolio/qinying-tan-min.png",
      href: "https://qinyingmusic.squarespace.com/",
      buttonText: "Dr. QinYing Tan (Coming Soon)",
      alt: "Dr. QinYing Tan",
    },
    {
      imgSrc: "images/Portfolio/classically-minded-min.png",
      href: "https://classicallyminded.com/",
      buttonText: "Classically Minded",
      alt: "Classically Mindeds",
    },
  ];

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  portfolio = shuffleArray(portfolio);

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
