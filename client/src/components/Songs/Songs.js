import React from "react";

const Songs = () => {
    return (
        <div className="d-block d-md-flex podcast-entry bg-white mb-5" data-aos="fade-up">
            <div className="image"></div>
            <div className="text">
                <h3 className="font-weight-light">
                    <a href="single-post.html">Never Gonna Give You Up</a>
                </h3>
                <div className="text-white mb-3">
                    <span className="text-black-opacity-05">
                        <small>By Rick Ashley</small>
                    </span>
                </div>

                <div className="player">
                    <iframe
                        id="player2"
                        src="https://drive.google.com/file/d/1iCFISiDaVPKJceF2ba7cjT7NGU9L5FLz/preview"
                        width="470"
                        height="80"
                        frameborder="0"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Songs;
