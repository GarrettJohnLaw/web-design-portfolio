import { ReactElement, FC } from "react";
import { Link } from "react-router-dom";
import PortfolioCardGroup from "../../components/PortfolioCardGroup";
import { PortfolioCardProps } from "../../components/PortfolioCard";
import "./index.css";

const Portfolio: FC = (): ReactElement => {
  let portfolio: PortfolioCardProps[] = [
    {
      imgSrc: "images/Portfolio/cnc-milling-machine.jpg",
      href: "https://journeymancnc.com/",
      buttonText: "Journeyman CNC",
      alt: "Journeyman CNC",
    },
    {
      imgSrc: "images/Portfolio/KAI220610_485f.jpg",
      href: "https://kaiastringquartet.com",
      buttonText: "Kaia String Quartet",
      alt: "Kaia String Quartet",
    },
    {
      imgSrc: "images/Portfolio/jonathan gregoire creative coach.jpg",
      href: "https://jonathangregoire.com",
      buttonText: "Jonathan Gregoire, Creative Coach",
      alt: "Jonathan Gregoire, Creative Coach",
    },
    {
      imgSrc: "images/Portfolio/Abigayle Flack Soprano.jpg",
      href: "https://abigayleflack.com",
      buttonText: "Abigayle Flack, Soprano",
      alt: "Abigayle Flack, Soprano",
    },
    {
      imgSrc: "images/Portfolio/holy-trinity-min.png",
      href: "https://holytrinitycovina.com/",
      buttonText: "Holy Trinity Episcopal Church",
      alt: "Holy Trinity Episcopal Church",
    },
    {
      imgSrc: "images/Portfolio/classically-minded-min.png",
      href: "https://classicallyminded.org/",
      buttonText: "Classically Minded",
      alt: "Classically Minded",
    },
    {
      imgSrc: "images/Portfolio/Susan Bengtson Viola Violist.jpg",
      href: "https://susanbengtson.com",
      buttonText: "Dr. Susan Bengtson Price, Violist & Educator",
      alt: "Dr. Susan Bengtson Price, Violist & Educator",
    },
    {
      imgSrc: "images/Portfolio/Matt Mueller Baritone.png",
      href: "https://mattmueller.com",
      buttonText: "Matt Mueller, Baritone",
      alt: "Matt Mueller, Baritone",
    },
    {
      imgSrc: "images/Portfolio/David Heinze Organ Organist.jpg",
      href: "https://avidheinze.com",
      buttonText: "David Heinze, Organist",
      alt: "David Heinze, Organist",
    },
    {
      imgSrc: "images/Portfolio/patrick-pope-min.png",
      href: "https://www.patrickpopeorganist.com/",
      buttonText: "Dr. Patrick Pope, Organist",
      alt: "Dr. Patrick Pope, Organist",
    },
    {
      imgSrc: "images/Portfolio/garrett-law-min.png",
      href: "https://www.garrettjohnlaw.com/",
      buttonText: "Garrett John Law",
      alt: "Garrett John Law",
    },
    {
      imgSrc: "images/Portfolio/rebuild manufacturing.webp",
      href: "#",
      buttonText: "Re:Build Manufacturing (Private Work)",
      alt: "Re:Build Manufacturing",
    },
  ];

  // Optional: Shuffle the portfolio array
  function shuffleArray(array: PortfolioCardProps[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  portfolio = shuffleArray(portfolio);

  return (
    <div className="portfolio-container text-white">
      <h1 className="text-center display-4 pt-4">Portfolio</h1>
      <div className="container p-4">
        {/* Introduction */}
        <section className="portfolio-section text-center">
          <p>
            Over the past 3 years, I’ve worked on complex software solutions, digital strategy consulting, and
            full-stack web development. Here are some projects and experiences that showcase my expertise.
          </p>
        </section>

        {/* Portfolio Cards */}
        <PortfolioCardGroup portfolioItems={portfolio} />

        {/* Call to Action Buttons */}
        <div className="d-flex justify-content-center gap-5 mt-5">
          <Link to="/services" className="btn btn-light btn-lg">
            Services
          </Link>
          <Link to="/get-started" className="btn btn-secondary btn-lg">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
