import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <div className="container">
        <Navbar.Brand href="#home">StriveBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="Browse" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#horror">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#fantasy">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#scifi">Sci-Fi</NavDropdown.Item>
              <NavDropdown.Item href="#history">History</NavDropdown.Item>
              <NavDropdown.Item href="#romance">Romance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Back To Top</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNav;
