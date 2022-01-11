import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  height: 60px;
  background: transparent;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #fff;
  padding-left: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  display: flex;
  flex: 1;
`;

const NavItems = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-around;
`;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <Navbar>
      <Logo to="/">Bikes</Logo>
      <NavItems>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/services">Services</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default Header;
