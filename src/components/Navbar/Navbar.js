import React from "react";

import { MenuItems, Nav, NavTitle, A, Item, Button } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <NavTitle>Gingerly</NavTitle>
      <MenuItems>
        <Item>
          <A href="#discover">Discover Gingerly</A>
        </Item>
        <Item>
          <A href="#pricing">Pricing</A>
        </Item>
        <Item>
          <A href="#aboutus">About Us</A>
        </Item>
        <Item>
          <A href="#contact">Contact</A>
        </Item>
      </MenuItems>

      <Button href="#">
        <div
          style={{
            width: "150px",
            height: "50px",
            borderRadius: "20px",
            border: "2px solid #BA68C8",
            background: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >Start Now</div>
      </Button>
    </Nav>
  );
};

export default Navbar;
