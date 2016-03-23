import React from 'react'
import {Navbar, NavbarBrand, Nav, NavItem} from 'react-bootstrap';

const Layout = (props) => {
  return (
    <div>
      <Navbar>
        <NavbarBrand>Sustainability Footprint Explorer</NavbarBrand>
      </Navbar>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;