import React from 'react'
import {Container, Navbar, NavDropdown,Nav }from "react-bootstrap"
import {Link} from "react-router-dom"

export const Navigation = () => {
    return (
        <Navbar bg="primary" variant= "dark" expand="lg">
                <Container>
                    <Navbar.Brand as ={Link} to="/dashboard" >Piggy Finance</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as ={Link} to="/dashboard/operation">Operaciones</Nav.Link>
                        
                        </Nav>
                        <Nav>
                        <NavDropdown title="nombre de usuario" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
 
                        <NavDropdown.Divider />
                        <NavDropdown.Item >Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}
