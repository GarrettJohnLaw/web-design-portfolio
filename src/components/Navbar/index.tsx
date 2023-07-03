import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavbarElement() {
  const location = useLocation();

  return (
    <Navbar bg="primary" expand="md" className="w-100">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          <Nav.Link as={Link} to="/" className="text-secondary">
            Garrett John Law Design
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
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
            <Button as={Link} to="/contact" className="btn btn-secondary ms-3">
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarElement;
