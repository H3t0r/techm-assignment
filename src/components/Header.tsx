import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-menu">
      <NavLink className="navbar-item is-tab" activeClassName="is-active" to="/" exact>
        Students
      </NavLink>
      <NavLink className="navbar-item is-tab" activeClassName="is-active" to="/student">
        Add Student
      </NavLink>
    </div>
  </nav>
);
