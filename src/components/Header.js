import './header.css';
import React from 'react';
import header_img from '../images/header_img.JPG';
import { 
  Navbar,
  NavbarBrand,
  Collapse,
  Nav, 
  NavItem,
  NavbarToggler
} from 'reactstrap';
import { NavLink } from 'react-router-dom'

const header = () => {
  const navbarStyle = {
    backgroundImage: 'url("path/to/your/image.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '300px', 
  };
    return (
      <Navbar dark sticky='top' expand='md'>
        <NavbarBrand>
          <img style={navbarStyle} src={header_img} alt='banner image' className='banner'/>
        </NavbarBrand>
        <div className="header__content">
            {/* Your header content goes here */}
            <p>Welcome to my Portfolio</p>
        </div>
    </Navbar>
    )
}

export default header;