import React from 'react';
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap';
export default function NavBar(){
    return(
        <div>
           <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link><br/>
          <Nav.Link href="/login">Login</Nav.Link>
         </Nav>  
      </Navbar>        
      </div>
      
    )
}