import React from 'react'
import {Navbar,Nav,NavDropdown,} from 'react-bootstrap'


const NavBar = () =>{
    
    return(
        <>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">SCience</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Culture</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </>

    )
}



export default NavBar