import { ReactElement, FC } from "react";
import Button from "react-bootstrap/button";

const Home: FC = (): ReactElement => {
  return (
    <div>
      <h1 className="huge-font text-white">Portfolio</h1>
      <div className="d-flex gap-1">
        <Button href="https://www.patrickpopeorganist.com/" target="_blank">
          Patrick Pope
        </Button>
        <Button href="https://www.stepheniesantilli.com/" target="_blank">
          Stephenie Santilli
        </Button>
        <Button href="https://www.garrettjohnlaw.com/" target="_blank">
          Garrett John Law
        </Button>
      </div>
    </div>
  );
};
export default Home;
