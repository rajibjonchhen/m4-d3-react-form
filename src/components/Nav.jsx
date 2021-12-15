

import {Navbar, Nav, Container} from 'react-bootstrap'
import { BsFillBagCheckFill } from "react-icons/bs";
import {BiBookOpen} from "react-icons/bi";

const MyNavbar = () => {
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><BiBookOpen/> Strive Book Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">HOME</Nav.Link>
      <Nav.Link href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#browse">BROWSE</Nav.Link>
      <Nav.Link href="#browse"><BsFillBagCheckFill/></Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
)
  }

export default MyNavbar