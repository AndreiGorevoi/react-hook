import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">
      GitHub search
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>Home page</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">Information</NavLink>
      </li>
    </ul>
  </nav>
)