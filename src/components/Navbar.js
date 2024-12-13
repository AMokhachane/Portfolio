import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link" activeClassName="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Projects" className="nav-link" activeClassName="active-link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/Experience" className="nav-link" activeClassName="active-link">
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/Tools" className="nav-link" activeClassName="active-link">
              Tools
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
        <div className="user-info">
          <span>Amanda Mokhachane</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
