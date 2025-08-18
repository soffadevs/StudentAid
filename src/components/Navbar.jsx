 import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyLogo from '../assets/images/Logo.png'
import './CSS/Navbar.css';

const MyNavbar = () => {
  return (
    <div>
        <Navbar expand="lg" className="Navbar">
        <Container>
          <Navbar.Brand className='Logo-title'>
          <img src={MyLogo} alt=""  className='Logo'/>
          <h2 className='My-title'>Students Aid </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="About">About</Nav.Link>
              <Nav.Link href="Topic">Topic</Nav.Link>
              <Nav.Link href="Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>
  )
}

export default MyNavbar