﻿import React from 'react';
import {
    NavLink
} from "react-router-dom";

function Navbar() {
    return (
        <nav className="main-wrapper">
            <NavLink exact to ="/" activeClassName="is-active">Home</NavLink>
            <NavLink to ="/latest" activeClassName="is-active">Latest</NavLink>
            <NavLink to ="/browse" activeClassName="is-active">Browse</NavLink>
            <NavLink to ="/login" activeClassName="is-active">Login</NavLink>
            <NavLink to="/addArticle" activeClassName="is-active">AddArticle</NavLink>
        </nav>
    );
}

export default Navbar;
