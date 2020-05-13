import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => (
  <header className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <img
          src="https://www.honeywell.com/content/dam/honeywell/en-us/images/HON%20logo_200x37.png"
          alt="Honeywell Logo"
        />
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <NavLink className="navbar-item" activeClassName="is-active" to="/" exact>
            Students
          </NavLink>
          <NavLink className="navbar-item" activeClassName="is-active" to="/student" exact>
            Add Student
          </NavLink>
        </div>
      </div>
    </div>
  </header>
);
