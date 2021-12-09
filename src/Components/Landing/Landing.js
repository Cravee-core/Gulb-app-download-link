import React from "react";
import "./Landing.css";
import "./Landing_mediaQuery.css";

function Landing() {
  return (
    <div classname="landing-page">
      <div className="container intro-section">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center pt-4">
            <img
              src={process.env.PUBLIC_URL + "/Images/new-logo.png"}
              alt="gulb-logo"
              className="gulb-logo"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 top-content my-auto ">
            <h1 className="top-h1">Welcome to Gulb</h1>
            <p className="top-para">
              We help businesses sell their surplus food to new local customers
              so that their delicious meals don’t go to waste ever again.
            </p>
          </div>
          <div className=" col-lg-6 col-md-6 col-sm-12 col-12 image_Section">
            <img
              src={process.env.PUBLIC_URL + "/Images/donut-3d.png"}
              alt="donuts"
              className="donuts-img"
            />
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-6">
            <div className="text-lg-end text-md-center text-sm-center text-center">
              <a>
                <img
                  src={process.env.PUBLIC_URL + "/Images/app-store-1.png"}
                  alt="google_play"
                  className="downlode_links"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.craveeuser",
                      "_blank"
                    )
                  }
                />
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="text-lg-start text-md-center text-sm-center text-center">
              <a>
                <img
                  src={process.env.PUBLIC_URL + "/Images/app-store-2.png"}
                  alt="app_Store"
                  className="downlode_links"
                  onClick={() =>
                    window.open(
                      "https://apps.apple.com/in/app/gulb/id1593846557",
                      "_blank"
                    )
                  }
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
