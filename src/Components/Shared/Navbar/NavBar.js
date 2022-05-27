import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {
  const { users, logOut } = useAuth();
  return (
      <div className='sticky-top bg-dark'>
        <Container>
        <NavBar className="navbar-container bg-white text-black py-0"
          sticky="top"
          collapseOnSelect
          expand="lg">

         <Navbar.Brand className="" to="/">
             <Link className='text-decoration-none' to="/home">
                <h3 className='text-warning'>Bymetal Tool Inc.</h3>
              </Link>
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll"/>
        <Navbar.Collapse className="justify-content-end text-black">
          <Nav 
            className="mx-auto my-2 my-lg-0"
            navbarScroll
            >
          <Nav.Link>
            <NavLink className='text-black' to="/home">
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink className='text-black' to="/explore">
              Explore
            </NavLink>
          </Nav.Link>            
          {users.email && (
            <Nav.Link>
                <NavLink className='text-black' to="/dashBoard">
                Dashboard
              </NavLink>
            </Nav.Link>
          )}
          <Nav.Link>
            <NavLink className='text-black' to="/blog">
              Blog
            </NavLink>
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end text-black">
          <Nav>
          <span className="text-black fw-bold">{users?.displayName}</span>
          {users?.email ? (
            <Button onClick={logOut} className="btn btn-dark ms-2">
              Logout
            </Button>
          ) : (
            <Nav.Link>
                <NavLink  to="/login">
                  <Button className="btn btn-dark ms-2">Login</Button>
              </NavLink>
            </Nav.Link>
          )}
          </Nav>
        </Navbar.Collapse>
        </NavBar>
      </Container>
      </div>
  );
};

export default NavBar;
