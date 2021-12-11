import React, { useState, useEffect } from "react";
import "./Landing.css";
import "./Landing_mediaQuery.css";
import desktopImage from "../../assets/Images/banner.png";
import mobileImage from "../../assets/Images/Rectangle.png";

function Landing() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 600 ? desktopImage : mobileImage;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div
        className="landing-page container-fluid"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}>
        <div className="container intro-section">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-end pt-2">
              <img
                src={process.env.PUBLIC_URL + "/Images/new-logo.png"}
                alt="gulb-logo"
                className="gulb-logo"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto d-flex flex-column justify-content-start">
              <div className="d-flex flex-row justify-content-xl-center justify-content-center">
                <div className="title_container">
                  <div>
                    <h1 className="top-text_1">YOU'RE </h1>
                  </div>
                  <div>
                    <h1 className="top-text_1">A TRUE</h1>
                  </div>
                </div>
                <div className="Hero">
                  <h1 className="Hero_text">HERO!</h1>
                </div>
              </div>
              <div className="sub_heding text-center justify-content-center d-flex">
                <h3 className="top-para">
                  With your help we shall save delicious meals from being
                  wasted.
                </h3>
              </div>

              <div className="row pt-3 click_able d-flex justify-content-start">
                <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-sm-3 mb-4 ">
                  <div className="text-center">
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
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  <div className="text-center">
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
            <div className=" col-lg-6 col-md-6 col-sm-12 col-12 image_Section">
              <img
                src={process.env.PUBLIC_URL + "/Images/burger.png"}
                alt="donuts"
                className="donuts-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
          <div className="data">
            <h2 className="heading_point">
              Businesses often over-produce food
            </h2>

            <div className="sub_container">
              <img
                src={process.env.PUBLIC_URL + "/Images/emoj-1.png"}
                alt="emoji"
                className="emoji_img"
              />
              <p className="sub_point">
                To ensure they can meet their daily sales needs, a lot of this
                delicious food which remains unsold at the end of the day ends
                up going to the trash️
              </p>
            </div>
          </div>
        </div>
        <div className="row my-4 ">
          <div className="data_2 ">
            <h2 className="heading_point_2">
              These food items which could simply be:
            </h2>
            <div className="sub_container_2">
              <p className="sub_point_2">
                a box of slightly broken biscuits or a cake with uneven frosting
                a pack of delicious garlic bread a couple days before it’s ‘best
                before’ date.
              </p>
              <img
                src={process.env.PUBLIC_URL + "/Images/emoj-2.png"}
                alt="emoji"
                className="emoji_img"
              />
            </div>
          </div>
        </div>
        <div className="row mt-lg-5 mt-md-4 mt-2">
          <h2 className="customer_point">
            Gulb has only the most well reputed premium brands who ensure that
            the food items are in perfect condition and absolutely in best shape
            to be consumed by the consumer.
          </h2>
        </div>

        <div className="row my-5">
          <div className="data">
            <div className="sub_container">
              <img
                src={process.env.PUBLIC_URL + "/Images/emoj-3.png"}
                alt="emoji"
                className="emoji_img"
              />
              <p className="sub_point">
                Remember, the content of your Gulb Bag depends on which items
                haven't been sold that day, so it's a surprise till you pick it
                up
              </p>
            </div>
          </div>
        </div>

        <div className="data_2 ">
          <div className="sub_container_2">
            <p className="sub_point_2">
              You can reserve Gulb bags full of delicious food items at up to a
              70% discount and pick them up from your favourite outlets at any
              convenient time during the stores operational hours.
            </p>
            <img
              src={process.env.PUBLIC_URL + "/Images/emoj-4.png"}
              alt="emoji"
              className="emoji_img"
            />
          </div>
        </div>

        <div className="row my-5">
          <div className="data">
            <div className="sub_container">
              <img
                src={process.env.PUBLIC_URL + "/Images/emoj-5.png"}
                alt="emoji"
                className="emoji_img"
              />
              <p className="sub_point">
                We request our customers to consume these products on the same
                day.
              </p>
            </div>
          </div>
        </div>

        <div className="row important">
          <div className="col-lg-10 col-md-8 col-sm-12 col-12">
            <h3 className="hightlight">
              Gulb asks eateries to combine all these surplus items and put them
              into surprise bags, each bag contains multiple delicious items.
            </h3>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 col-12 position-relative mobile-d">
            <img
              src={process.env.PUBLIC_URL + "/Images/surprice_bag.png"}
              alt="surprise"
              className="surpriceBag_img"
            />
          </div>
        </div>

        <div className="row dowmload_link">
          <h2 className="footer_text">
            Download the Gulb app and let us reward you with up to a 70%
            discount on all your favourite outlets.
          </h2>

          <div className="row pt-3">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-sm-3 mb-2">
              <div className="text-lg-end text-md-end text-sm-center text-center">
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
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
              <div className="text-lg-start text-md-start text-sm-center text-center">
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
    </>
  );
}

export default Landing;
