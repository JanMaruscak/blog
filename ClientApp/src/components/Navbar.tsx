import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { user } = useContext(UserContext);

  if (user.UserName) {
    return (
      <nav className="main-wrapper">
        <NavLink exact to="/" activeClassName="is-active">
          Home
        </NavLink>
        <NavLink to="/latest" activeClassName="is-active">
          Latest
        </NavLink>
        <NavLink to="/browse" activeClassName="is-active">
          Browse
        </NavLink>
        <NavLink to="/login" activeClassName="is-active">
          Login
        </NavLink>
        <NavLink to="/addArticle" activeClassName="is-active">
          AddArticle
        </NavLink>
      </nav>
    );
  } else {
    return (
      <nav className="main-wrapper">
        <NavLink exact to="/" activeClassName="is-active">
          Home
        </NavLink>
        <NavLink to="/latest" activeClassName="is-active">
          Latest
        </NavLink>
        <NavLink to="/browse" activeClassName="is-active">
          Browse
        </NavLink>
        <NavLink to="/login" activeClassName="is-active">
          Login
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
