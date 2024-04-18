import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <>
      <div className="row align-items-center py-4">
        <div className="col-12 col-lg-8 navbar-expand text-center weight-500 w-100">
          <div className="navbar-nav d-block d-lg-flex justify-content-center">
            <Nav.Link as={Link} className="nav-link text-white" to="https://www.linkedin.com/in/garrettjohnlaw/">
              LinkedIn
            </Nav.Link>
            <Nav.Link as={Link} className="nav-link text-white" to="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} className="nav-link text-white" to="/about">
              About
            </Nav.Link>
            {/* <Nav.Link as={Link} className="nav-link text-white" to="/services">
              Services
            </Nav.Link> */}
            <Nav.Link as={Link} className="nav-link text-white" to="/">
              Home
            </Nav.Link>
          </div>
        </div>
        <div className="col-12 d-lg-none text-center p-0">
          <a className="transparent-invert-link mx-1" href="https://instagram.com/garrettjohnlaw_">
            <i className="bi bi-instagram"></i>
          </a>
          <a className="transparent-invert-link mx-1" href="">
            <i className="bi bi-facebook"></i>
          </a>
          <a className="transparent-invert-link mx-1" href="">
            <i className="bi bi-link"></i>
          </a>
          <a className="transparent-invert-link mx-1" href="">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
