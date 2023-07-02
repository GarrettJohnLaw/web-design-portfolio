import { Nav, Navbar, Container, Button } from "react-bootstrap";

function NavbarElement() {
  return (
    <Navbar bg="primary" expand="md">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          <Nav.Link href="#home" className="text-white">
            Garrett John Law Design
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#link" className="text-white d-flex align-items-center">
              Services
            </Nav.Link>
            <Nav.Link href="#link" className="text-white d-flex align-items-center">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="text-white d-flex align-items-center">
              Portfolio
            </Nav.Link>
            {/* <Nav.Link href="#link" className="text-white"> */}
            {/* <Button>Contact</Button> */}
            <Button className="btn btn-secondary">Contact</Button>
            {/* </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarElement;
