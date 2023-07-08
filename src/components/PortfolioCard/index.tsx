import { ReactElement } from "react";
import Button from "react-bootstrap/Button";

export interface PortfolioCardProps {
  imgSrc: string;
  href: string;
  buttonText: string;
}

const Home = ({ imgSrc, href, buttonText }: PortfolioCardProps): ReactElement => {
  return (
    <div className="my-3 d-flex flex-column">
      <a href={imgSrc} target="_blank">
        <img className="w-100" src={imgSrc} />
      </a>
      <Button href={href} target="_blank">
        {buttonText}
      </Button>
    </div>
  );
};
export default Home;
