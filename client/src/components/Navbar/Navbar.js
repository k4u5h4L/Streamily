import React from "react";

const Navbar = () => {
    return (
        <div>
            <header className="site-navbar py-4" role="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-3">
                            <h1 className="site-logo">
                                <a href="#" className="h2">
                                    {/* Streamily<span className="text-primary">.</span> */}
                                    <img src="images/logo.png" width="180" />
                                </a>
                            </h1>
                        </div>
                        <div className="col-9">
                            <nav
                                className="site-navigation position-relative text-right text-md-right"
                                role="navigation"
                            >
                                <div className="d-block d-lg-none ml-md-0 mr-auto">
                                    <a href="#" className="site-menu-toggle js-menu-toggle text-black">
                                        <span className="icon-menu h3"></span>
                                    </a>
                                </div>

                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                    <li className="active">
                                        <a href="#">Home</a>
                                    </li>
                                    {/* <li className="has-children">
                                        <a href="#">Dropdown</a>
                                        <ul className="dropdown arrow-top">
                                            <li>
                                                <a href="#">Menu One</a>
                                            </li>
                                            <li>
                                                <a href="#">Menu Two</a>
                                            </li>
                                            <li>
                                                <a href="#">Menu Three</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                    <li>
                                        <a href="login-register.html">Login / Register</a>
                                    </li> */}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
