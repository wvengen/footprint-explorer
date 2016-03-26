import React from 'react';
import GithubCorner from 'react-github-corner';
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
      <GithubCorner href='https://github.com/wvengen/footprint-explorer'
        bannerColor='#f8f8f8' octoColor='#888' />
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
