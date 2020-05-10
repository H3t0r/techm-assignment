import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => (
  <nav>
    <NavLink to="/" exact>
      Students
    </NavLink>
    {'|'}
    <NavLink to="/add" exact>
      Add Student
    </NavLink>
    {'|'}
    <NavLink to="/student" exact>
      Student Details
    </NavLink>
  </nav>
);
