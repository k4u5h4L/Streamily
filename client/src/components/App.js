import React from "react";

import "./styles/bootstrap.min.css";
import "./styles/magnific-popup.css";
import "./styles/owl.theme.default.min.css";

import "./styles/aos.css";
import "./styles/App.css";

import MobileMenu from "./MobileMenu/MobileMenu";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Player from "./Player/Player";
import Footer from "./Footer/Footer";

const App = () => {
    return (
        <div className="site-wrap">
            <MobileMenu />
            <Navbar />
            <Landing />
            <Player />
            <Footer />
        </div>
    );
};

export default App;
