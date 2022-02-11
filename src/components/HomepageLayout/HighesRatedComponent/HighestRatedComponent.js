import React from "react";
import "./heighest.scss";
import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import user from "../../../assets/images/user-avatar-big-01.jpg";
import flegar from "../../../assets/images/flags/flagar.svg";
import { Button } from "@material-ui/core";

export const HighestRatedComponent = () => {
  //  const {name,location,rate,success} = userdata;

  return (
    <>
      <div className="pb-4">
        <div className="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                {/* <div className="section-headline margin-top-0 margin-bottom-25">
          <h3>Highest Rated Freelancers</h3>
          <a href="freelancers-grid-layout.html" className="headline-link">Browse All Freelancers</a>
        </div> */}
              </div>
              <div className="col-xl-12 mt-5">
                <div className="default-slick-carousel freelancers-container freelancers-grid-layout">
                  <div className="freelancer mx-lg-1">
                    <div className="freelancer-overview">
                      <div className="freelancer-overview-inner">
                        <span className="bookmark-icon">
                          {" "}
                          <AiFillStar />
                        </span>

                        <div className="freelancer-avatar">
                          <div className="verified-badge" />
                          <a href="single-freelancer-profile.html">
                            <img src={user} alt="user" />
                          </a>
                        </div>

                        <div className="freelancer-name">
                          <h4>
                            <div>
                              Jon{" "}
                              <img
                                className="flag"
                                src={flegar}
                                alt="pic"
                                title="United Kingdom"
                                data-tippy-placement="top"
                              />
                            </div>
                          </h4>
                          <span>UI/UX Designer</span>
                        </div>

                        <div className="freelancer-rating">
                          <div className="yellobg">
                            <div className="star-rating" data-rating={5.0}>
                              {" "}
                              5.0{" "}
                            </div>
                            <div className="staricon">
                              <span className="star ml">
                                <AiFillStar />
                              </span>
                              <span className="star">
                                <AiFillStar />
                              </span>
                              <span className="star">
                                <AiFillStar />
                              </span>
                              <span className="star">
                                <AiFillStar />
                              </span>
                              <span className="star">
                                <AiFillStar />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="freelancer-details">
                      <div className="freelancer-details-list text-center">
                        <ul>
                          <li>
                            Location{" "}
                            <strong>
                              <i className="icon-material-outline-location-on ">
                                <GoLocation />
                              </i>{" "}
                              London
                            </strong>
                          </li>
                          <li>
                            Rate <strong>$ 94 / hr</strong>
                          </li>
                          {/* <li>Job Success <strong>95%</strong></li> */}
                        </ul>
                      </div>

                      <Button variant="contained" color="primary" fullWidth className="button  ">
                        View Profile
                      </Button>
                      {/* <div className="button button-sliding-icon ripple-effect">
                        View Profile{" "}
                        <i className="icon-material-outline-arrow-right-alt" />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
