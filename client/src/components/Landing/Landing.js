import React from "react";

const Landing = () => {
    return (
        <div className="container pt-5 hero">
            <div className="row align-items-center text-center text-md-left">
                <div className="col-lg-4">
                    <h1 className="mb-3 display-3">Listen to high quality music anywhere!</h1>
                    <p>Just upload songs to the cloud and directly stream using just your link!</p>
                </div>
                <div className="col-lg-8">
                    <img src="images/landing.png" alt="Landing cover" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Landing;
