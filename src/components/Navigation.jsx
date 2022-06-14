import React from "react";
import {
  Collapse,
  NavLink,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem
} from "reactstrap";

export default function Navigation() {
  return (
    <div>
      <Navbar color="dark" expand="md" dark>
        <NavbarBrand href="/">React Routing</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
