import { ReactElement, FC } from "react";
import "./index.css";
import Button from "react-bootstrap/Button";

const Home: FC = (): ReactElement => {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row justify-content-between align-items-center py-5">
          <div className="col-12 col-md-6 pl-md-0 mb-4 mb-md-0">
            <img className="w-100" src="/images/garrett-hiking.jpeg" />
          </div>
          <div className="col-12 col-md-5">
            <h1 className="display-3">Hi, I'm Garrett.</h1>
            <p className="large mb-4">I build websites for small businesses, nonprofits, and creatives.</p>
            <Button href="/about">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
