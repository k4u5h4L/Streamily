import React from "react";

const Songs = (props) => {
    return (
        <div className="d-block d-md-flex podcast-entry bg-white mb-5" data-aos="fade-up">
            {/* <div
                class="image"
                style={{
                    backgroundImage:
                        "url('https://cdn.arstechnica.net/wp-content/uploads/2012/05/astley.jpg')",
                }}
            ></div> */}
            <div className="text">
                <span className="text-black-opacity-05">
                    <small>Song number: {props.index + 1}</small>
                </span>
                <h3 className="font-weight-light">
                    <a href="#">{props.title}</a>
                </h3>
                <div className="text-white mb-3">
                    <span className="text-black-opacity-05">
                        <small>By {props.artist}</small>
                    </span>
                </div>

                <div className="player">
                    <iframe id="player2" src={props.songSrc} width="470" height="80" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Songs;
