import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector}from "react-redux"
import {Container, Navbar, NavDropdown,Nav }from "react-bootstrap"
import { logout } from '../Actions/authActions'


export const Navigation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {userInfo} = useSelector (state => state.auth);

    const handleLogout = ()=>{
        dispatch(logout())
        navigate("/")
    }
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
                        <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
 
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleLogout} >Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}
