import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

export function NavBar(props: any) {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>React with Forms!</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    
                    <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/register">
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/addProduct">
                        <Nav.Link>Add Product</Nav.Link>
                    </LinkContainer>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

// export default navbar;