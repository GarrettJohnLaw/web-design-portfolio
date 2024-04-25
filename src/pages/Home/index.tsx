import { ReactElement, FC } from "react";
import "./index.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Home: FC = (): ReactElement => {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row justify-content-between align-items-center py-5">
          <div className="col-12 col-md-6 pl-md-0 mb-4 mb-md-0">
            <div style={{ maxHeight: "100vh", overflow: "hidden" }}>
              <img className="img-fluid" src="/images/Garrett-17.jpg" alt="A portrait of Garrett wearing a blue suit" />
            </div>
          </div>
          <div className="col-12 col-md-5">
            <h1 className="display-5">Empowering Businesses Through Innovative Software Solutions</h1>
            <p className="large my-4">
              I'm Garrett, a passionate software engineer dedicated to building robust, scalable, and user-centric
              software solutions. With 2+ years of experience in the industry, I thrive on turning complex ideas into
              elegant, efficient code.
            </p>
            <Nav.Link as={Link} to="/about" className="btn btn-secondary text-white">
              Learn More
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
