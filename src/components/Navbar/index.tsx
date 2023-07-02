import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

function NavbarElement() {
  return (
    <Navbar bg="primary" expand="md">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          Navbar Brand
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              Link
            </Nav.Link>
            <NavDropdown title="Dropdown" className="variant-primary">
              <NavDropdown.Item href="#action/3.1" className="text-white">
                Dropdown Item 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-white">
                Dropdown Item 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="text-white">
                Dropdown Item 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="text-white">
                Another Item
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarElement;
