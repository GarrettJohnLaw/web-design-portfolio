import { Nav, Navbar, Container, Button } from "react-bootstrap";

function NavbarElement() {
  return (
    <Navbar bg="primary" expand="md" className="w-100">
      <Container>
        <Navbar.Brand href="/" className="text-white">
          <Nav.Link href="/" className="text-secondary">
            Garrett John Law Design
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/services" className="d-flex align-items-center justify-content-center text-white">
              Services
            </Nav.Link>
            <Nav.Link href="/about" className="d-flex align-items-center justify-content-center text-white">
              About
            </Nav.Link>
            <Nav.Link href="/portfolio" className="d-flex align-items-center justify-content-center text-white">
              Portfolio
            </Nav.Link>
            <Button className="btn btn-secondary ms-3" href="/contact">
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarElement;
