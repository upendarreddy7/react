import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Logo
          {/*<i class='fab fa-firstdraft' />*/}
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Dashboard
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Manage'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Manage <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/Activities'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Activities
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/MyProfile'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              My Profile
            </Link>
          </li>
          {/*<li>
            <Link
              to='/Signout'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Out
            </Link>
            </li>*/}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;