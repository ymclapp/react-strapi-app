import React from 'react';
import { Nav, Navbar, Container, Offcanvas, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../partials/NavMenu.css';
import Logo from './img/logo.png'

export default function NavMenu() {

  const user = JSON.parse(localStorage.getItem('user'));
  const registration = JSON.parse(localStorage.getItem('registration'));

  return (
    <>
      <Navbar className='navbar' sticky='top' expand={false}>
        <Container fluid>
          <Navbar.Brand href='/' className='navbar-brand'>
            <img
              alt='ATS Logo'
              src={Logo}
              width='200'
              height='80'
            />
            {' '}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='offcanvasNavbar' />
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
                <Nav.Link href='/home' className='navbar-link'>Home</Nav.Link>
                <Nav.Link href='/store' className='navbar-link'>Store</Nav.Link>
                {!user && <Nav.Link href='/login' className='navbar-link'>Login</Nav.Link>}
                {user && <Nav.Link href='/profile' className='navbar-link'>Profile</Nav.Link>}
                {user && <Nav.Link href='/login' className='navbar-link'>Logout</Nav.Link>}
                {/* <Nav.Link as={Link} to='/form' className='navbar-link'>New Form</Nav.Link> */}
                <NavDropdown title="Conference Registration" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href='/conference'>Conference</NavDropdown.Item>
                  <NavDropdown.Item href='/demoform'>Conference Demographic Form</NavDropdown.Item>
                  <NavDropdown.Item href="/sessionsform">Conference Sessions Form</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {!registration &&
                    <NavDropdown.Item href="/form">
                      New form
                    </NavDropdown.Item>
                  }
                </NavDropdown>
                {user &&
                  <NavDropdown title="Admin Dashboard" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href='/dashboard'>Dashboard (GETs)</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                }
              </Nav>

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>

              {/* <Nav className='me-auto'>
                <NavItem className='tab1'>
                  <Nav.Link as={Link} to='/home' className='navbar-link'>Home</Nav.Link>
                </NavItem>
              </Nav> */}

              {/* <Nav className='me-auto'>
                <NavItem className='tab1'>
                  <Nav.Link as={Link} to='/registration' className='navbar-link'>Registration</Nav.Link>
                </NavItem>
              </Nav> */}

              {/* <Nav className='me-auto'>
                <NavItem className='tab1'>
                  <Nav.Link as={Link} to='/login' className='navbar-link'>Login</Nav.Link>
                </NavItem>
              </Nav> */}

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </>
  )
};
