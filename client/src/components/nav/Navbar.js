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
               
            })
            .catch(error => {
                console.log("logout error", error);
            });
        navigate('/')
    }

    return (
        <>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand>Market Watch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Navigation</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {loggedIn ? (<Nav.Link href="/dashboard">Dashboard</Nav.Link>) : (<Nav.Link href="/">Home</Nav.Link>)}
                               
                                <Nav.Link href="/search">Search For Stocks</Nav.Link>

                                    {loggedIn ? (
                                    <NavDropdown title="Account Options" id="offcanvasNavbarDropdown">
                                        <NavDropdown.Item href="/account-history">Account History</NavDropdown.Item>
                                        
                                    </NavDropdown>): ("")}
                                
                            </Nav><br/>

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