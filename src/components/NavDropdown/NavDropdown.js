import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavTitle } from "../Navbar/NavbarStyles";
import {
  Nav,
  DropDownIcon,
  DropDownContainer,
  DropDownItem,
  DropDownItemTitle
} from "./NavDropdownStyles";

const NavDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // close the dropdown when user clicks outside the menu
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <Nav>
      <NavTitle style={{ padding: "1rem" }}>Gingerly</NavTitle>
      <div ref={dropdownRef} style={{zIndex: "3"}}>
        <DropDownIcon onClick={() => setShowDropdown(!showDropdown)}>
          <GiHamburgerMenu fontSize="3rem"   zIndex= '3' />
        </DropDownIcon>
        <DropDownContainer active={showDropdown}>
          <DropDownItem href='#'>
            <DropDownItemTitle>Discover Gingerly</DropDownItemTitle>
          </DropDownItem>
          <DropDownItem href='#'>
            <DropDownItemTitle>Pricing</DropDownItemTitle>
          </DropDownItem>
          <DropDownItem href='#'>
            <DropDownItemTitle>About Us</DropDownItemTitle>
          </DropDownItem>
          <DropDownItem href='#'>
            <DropDownItemTitle>Contact</DropDownItemTitle>
          </DropDownItem>
        </DropDownContainer>
      </div>
    </Nav>
  );
};

export default NavDropdown;
