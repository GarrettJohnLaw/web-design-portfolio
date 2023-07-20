import { ReactElement } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export interface PortfolioCardProps {
  imgSrc: string;
  href: string;
  buttonText: string;
  alt: string;
}

const Home = ({ imgSrc, href, buttonText, alt }: PortfolioCardProps): ReactElement => {
  return (
    <div className="my-3 d-flex flex-column">
      <a href={imgSrc} target="_blank">
        <Image className="w-100" src={imgSrc} alt={alt} />
      </a>
      <Button href={href} target="_blank">
        {buttonText}
      </Button>
    </div>
  );
};
export default Home;
