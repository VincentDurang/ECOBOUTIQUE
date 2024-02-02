import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Static/Css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <span>Accueil</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/commande" className="nav-link">
            <span>Commande</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <span>About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="cart-link">
          <span>
              <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default Header;