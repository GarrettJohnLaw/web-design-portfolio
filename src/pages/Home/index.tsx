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
              <img className="img-fluid" src="/Garrett-03.jpg" alt="A portrait of Garrett wearing a blue suit" />
            </div>
          </div>
          <div className="col-12 col-md-5">
            <h1 className="display-5">Crafting Scalable & High-Performance Software Solutions</h1>
            <p className="large my-4">
              I'm Garrett, a backend software engineer specializing in scalable architectures, API development, and
              cloud-native solutions. With 3+ years of experience, I engineer high-performance backend systems that
              drive PropTech, SaaS platforms, and enterprise automation.{" "}
            </p>
            <p>
              ✅ Backend Development<br></br>✅ Frontend Development<br></br>✅ Cloud & DevOps<br></br>✅ Scalable
              Architecture
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
