import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import netflixlogo from './assets/netflix_logo.png'
import kids from "./assets/kids_icon.png"
import avatar from "./assets/avatar.png"
import { Search } from 'react-bootstrap-icons'
function MyNav() {
    return (
        <Navbar bg="dark" variant="dark" expand="md" data-bs-theme="dark">
            <Navbar.Brand href="www.netflix.com">
                <img src={netflixlogo} alt="logo" width="100" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#" active>Tv Shows</Nav.Link>
                    <Nav.Link href="#">Movies</Nav.Link>
                    <Nav.Link href="#">Recently Added</Nav.Link>
                    <Nav.Link href="#">My List</Nav.Link>
                </Nav>
                <Form className="d-none d-sm-flex" role="search">
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                    />
                    <Button type="submit" variant='outline-succes'><Search /></Button>
                </Form>

                <div className="d-flex align-items-baseline position-relative me-4">
                    <Nav.Link href="#">
                        <img src={kids} width="30px" alt="kids_icon" />
                    </Nav.Link>
                    <Nav.Link href="#">
                        <i className="text-white d-none d-sm-block ms-3 bi bi-bell"></i>
                    </Nav.Link>
                    <NavDropdown title={<img src={avatar} width="30px" alt="" />} id="basic-nav-dropdown" className="dropdown">
                        <NavDropdown.Item active>Profile 1</NavDropdown.Item>
                        <NavDropdown.Item>Profile 2</NavDropdown.Item>
                        <NavDropdown.Item>Profile 3</NavDropdown.Item>
                        <NavDropdown.Item href="Edit Profile/Index.html">Edit Profile</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default MyNav;
