import React from 'react'
import { Navbar, Button, Nav, Offcanvas, NavDropdown, Container } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router'

const NavigationBar = ({loggedIn, onLogout}) => {
    const navigate = useNavigate()
    const handleLogoutClick = () => {
        axios
            .delete("http://localhost:3000/logout", { withCredentials: true })
            .then(response => {
                onLogout();
                navigate('/')
            })
            .catch(error => {
                console.log("logout error", error);
            });
    }

    return (
        <>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">Stocks</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            {loggedIn? (
                                <Button variant="outline-success" onClick={() => handleLogoutClick()}>Logout</Button>
                            ) : ("")}
                            
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )

}

export default NavigationBar