import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
      <div>
        <img className="img-fluid w-25" src={logo} alt="" />
        <nav className="nav bg-dark ps-3">
          <a className="nav-link" aria-current="page" href="/shop">
            Shop
          </a>
          <a className="nav-link" href="/order">
            Order review
          </a>
          <a className="nav-link" href="/inventory">
            Manage Inventory Here
          </a>
        </nav>
      </div>
    );
};

export default Header;