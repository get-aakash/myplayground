import React from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="md" className="text-light bg-secondary">
      <Container>
        <Navbar.Brand href="#home">MyPlayground</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 fs-4">
          <Link to="/signup"><i title='signUp' class="fa-solid fa-user-plus"></i></Link>
            <Link to="/signin"><i title= "signIn" className="fa-solid fa-user"></i></Link>
            <Link to="/signout"><i title='signOut' className="fa-solid fa-arrow-right-from-bracket"></i></Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
