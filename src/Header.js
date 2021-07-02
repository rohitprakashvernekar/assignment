import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { FaBars,FaHome} from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home"><FaBars/></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"><FaHome/></Nav.Link>
          <FormControl type="text" placeholder=" Search" className="mr-sm-2 form-control" />
        </Nav>
        <Form inline>
        </Form>
      </Navbar>
    </div>
  );
};
export default Header;
