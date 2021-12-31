import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {

    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand >
                        <Typography>
                            CRUD APP
                        </Typography>
                    </Navbar.Brand>
                    <Navbar.Brand >

                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link} to="/home" style={{ color: "white" }}>   <Button style={{ textDecoration: 'none', color: 'white' }}>Home</Button></Nav.Link>
                        <Nav.Link as={Link} to="/addProducts" style={{ color: "white" }}>   <Button style={{ textDecoration: 'none', color: 'white' }}>AddProducts</Button></Nav.Link>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;