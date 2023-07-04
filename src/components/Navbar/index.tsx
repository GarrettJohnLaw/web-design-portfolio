import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavbarElement() {
  const location = useLocation();

  return (
    <Navbar expand="md" className="w-100 navbar-dark" bg="primary" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          Garrett John Law Design
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="bg-primary navbar-dark">
            <Nav.Link
              as={Link}
              to="/services"
              className={`d-flex align-items-center justify-content-center text-white ${
                location.pathname === "/services" ? "active" : ""
              }`}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`d-flex align-items-center justify-content-center text-white ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio"
              className={`d-flex align-items-center justify-content-center text-white ${
                location.pathname === "/portfolio" ? "active" : ""
              }`}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="btn btn-secondary ms-3 text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarElement;
