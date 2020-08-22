import React from "react";

import Playlists from "../Playlists/Playlists";
import Songs from "../Songs/Songs";

const Player = () => {
    return (
        <div className="site-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="featured-user mb-5 mb-lg-0">
                            <h3 className="mb-4">Playlists</h3>
                            <ul className="list-unstyled">
                                <Playlists />
                                <Playlists />
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <Songs />
                    </div>
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="site-block-27">
                                    <ul>
                                        <button className="btn btn-primary" type="button" id="button-addon2">
                                            Load more...
                                        </button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
