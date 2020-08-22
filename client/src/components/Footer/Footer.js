import React from "react";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h3>About</h3>
                        <p>
                            A music streaming site made using react as a side project. This is strictly{" "}
                            <span style={{ fontWeight: "bold" }}>NOT</span> to be used commercially.
                        </p>
                    </div>
                    {/* <div className="col-lg-3 mx-auto">
                        <h3>Navigation</h3>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">Podcasts</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div> */}
                    {/* <div className="col-lg-4">
                        <h3>Subscribe</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quibusdam!</p>
                        <form action="#" className="form-subscribe">
                            <input type="email" className="form-control mb-3" placeholder="Enter Email" />
                            <input type="submit" className="btn btn-primary" value="Subscribe" />
                        </form>
                    </div> */}
                </div>

                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                        <p>
                            Mad with <span> </span>
                            <i className="icon-heart-o" aria-hidden="true"></i> by Kaushal
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
