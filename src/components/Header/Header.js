import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import NavDropdown from '../NavDropdown/NavDropdown';


const Header = () => {
    const [isSmallScreen, setIsSmallscreen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsSmallscreen(window.innerWidth < 640);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  return (
    <div style={{zIndex: '2'}}>
    {isSmallScreen ? <NavDropdown /> : <Navbar />  }
    </div>
  )
}

export default Header