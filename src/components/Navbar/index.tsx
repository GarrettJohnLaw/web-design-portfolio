import { Nav, Navbar, Container, Button } from "react-bootstrap";

function NavbarElement() {
  return (
    <Navbar bg="primary" expand="md">
      <Container>
        <Navbar.Brand href="/" className="text-white">
          <Nav.Link href="/" className="text-secondary">
            Garrett John Law Design
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/services" className="text-white d-flex align-items-center">
              Services
            </Nav.Link>
            <Nav.Link href="/about" className="text-white d-flex align-items-center">
              About
            </Nav.Link>
            <Nav.Link href="/portfolio" className="text-white d-flex align-items-center">
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
