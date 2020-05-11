import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => (
  <nav>
    <NavLink to="/" exact>
      Students
    </NavLink>
    {'|'}
    <NavLink to="/student">Add Student</NavLink>
  </nav>
);
