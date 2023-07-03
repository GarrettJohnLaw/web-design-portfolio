import { ReactElement, FC } from "react";
import Button from "react-bootstrap/Button";

const Home: FC = (): ReactElement => {
  return (
    <div>
      <h1 className="huge-font text-white">Portfolio</h1>
      <div className="row py-4">
        <div className="col-md-4 gallery-item mb-md-0 d-flex flex-column h-100">
          <a href="https://www.patrickpopeorganist.com/" target="_blank">
            <img className="w-100" src="/images/Portfolio/patrick-pope.png" />
          </a>
          <Button href="https://www.patrickpopeorganist.com/" target="_blank">
            Patrick Pope
          </Button>
        </div>
        <div className="col-md-4 gallery-item mb-md-0 d-flex flex-column">
          <a href="https://www.stepheniesantilli.com/" target="_blank">
            <img className="w-100" src="./images/Portfolio/stephenie-santilli.png" />
          </a>
          <Button href="https://www.stepheniesantilli.com/" target="_blank">
            Stephenie Santilli
          </Button>
        </div>
        <div className="col-md-4 gallery-item mb-0 d-flex flex-column">
          <a href="https://www.garrettjohnlaw.com/" target="_blank">
            <img className="w-100" src="/images/Portfolio/garrett-law.png" />
          </a>
          <Button href="https://www.garrettjohnlaw.com/" target="_blank">
            Garrett John Law
          </Button>
        </div>
        <div className="col-md-4 gallery-item mb-md-0 d-flex flex-column h-100">
          <a href="https://holytrinity.squarespace.com/" target="_blank">
            <img className="w-100" src="/images/Portfolio/holy-trinity.png" />
          </a>
          <Button href="https://holytrinity.squarespace.com/" target="_blank">
            Holy Trinity Episcopal Church
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
