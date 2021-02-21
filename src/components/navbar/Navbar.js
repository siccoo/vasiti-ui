import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import VasitiLogo from "../../images/logo.png";

const Topbar = () => {
    return (
        <div>
            <section className="nav-section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light nav-bg">
                    <a className="navbar-brand" href="/">
                        <img src={VasitiLogo} className="home-logo" alt="home-logo" />
                    </a>
                    <button className="navbar-toggler ml-auto hidden-sm-up float-xs-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="line"></span> 
                        <span className="line"></span> 
                        <span className="line"></span>
                    </button>
                    <div id="navbarNavDropdown" className="navbar-collapse collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                >
                                About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                >
                                Stories
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                >
                                Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                >
                                Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-btn"
                                    to="/"
                                >   
                                Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </section>
        </div>
    )
}

export default Topbar;