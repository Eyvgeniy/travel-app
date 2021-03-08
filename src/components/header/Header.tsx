import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

export function Header() {

    return (
        <Navbar collapseOnSelect expand='md' className ='navbar-light' style={{backgroundColor: 'rgb(134, 146, 155)'}} variant= 'light'>
            <Container>
                <Navbar.Brand href='/' style={{ padding: '0'}}>
                    <img src='../../src/assets/img/logo.png' className='d-inline-block align-top' alt='logo' style={{ width: '11%'}} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav' style = {{width: '45%'}}>
                        <Form inline>
                        <FormControl type='text' placeholder='search' className='mr-sm-3'/>
                        <Button variant='outline-light'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
