import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';


const Header = (props) => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      </div>
    </div>
  )
}

export default Header;