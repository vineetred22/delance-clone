import React from "react";
import "./Feature.scss";
import { IoMdBusiness } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { MdBusinessCenter } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import logo from "../../../assets/images/company-logo-01.png";
import logo1 from "../../../assets/images/company-logo-05.png";
import logo2 from "../../../assets/images/company-logo-02.png";
import logo3 from "../../../assets/images/company-logo-03.png";
import { Button } from "@material-ui/core";
export const FeatureComponentPage = () => {
  return (
    <>
      <div className="">
        <div className="section gray feature">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-headline mb-5">
                  <h3>Featured Jobs</h3>
                  <a
                    href="jobs-list-layout-full-page-map.html"
                    className="headline-link"
                  >
                    Browse All Jobs <BsArrowRight />{" "}
                  </a>
                </div>

                <div className="listings-container compact-list-layout margin-top-35">
                  <div className="job-listing with-apply-button">
                    <div className="job-listing-details">
                      <div className="job-listing-company-logo">
                        <img src={logo} alt="pic" />
                      </div>

                      <div className="job-listing-description">
                        <h3 className="job-listing-title">
                          Bilingual Event Support Specialist
                        </h3>

                        <div className="job-listing-footer">
                          <ul>
                            <li>
                              <i className="icon-material-outline-business">
                                <IoMdBusiness />
                              </i>{" "}
                              Hexagon{" "}
                              <div
                                className="verified-badge"
                                title="Verified Employer"
                                data-tippy-placement="top"
                              />
                            </li>
                            <li>
                              <i className="icon-material-outline-location-on">
                                {" "}
                                <GoLocation />
                              </i>{" "}
                              San Francissco
                            </li>
                            <li>
                              <i className="icon-material-outline-business-center">
                                <MdBusinessCenter />
                              </i>{" "}
                              Full Time
                            </li>
                            <li>
                              <i className="icon-material-outline-access-time">
                                <IoMdTime />
                              </i>{" "}
                              2 days ago
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Button
                        variant="contained"
                        className="list-apply-button "
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>

                  <div className="job-listing with-apply-button">
                    <div className="job-listing-details">
                      <div className="job-listing-company-logo">
                        <img src={logo1} alt="pic" />
                      </div>

                      <div className="job-listing-description">
                        <h3 className="job-listing-title">
                          Competition Law Officer
                        </h3>

                        <div className="job-listing-footer">
                          <ul>
                            <li>
                              <i className="icon-material-outline-business">
                                <IoMdBusiness />
                              </i>{" "}
                              Laxo
                            </li>
                            <li>
                              <i className="icon-material-outline-location-on">
                                {" "}
                                <GoLocation />
                              </i>
                              San Francissco
                            </li>
                            <li>
                              <i className="icon-material-outline-business-center">
                                <MdBusinessCenter />
                              </i>{" "}
                              Full Time
                            </li>
                            <li>
                              <i className="icon-material-outline-access-time">
                                <IoMdTime />
                              </i>{" "}
                              2 days ago
                            </li>
                          </ul>
                        </div>
                      </div>

                      <Button
                        variant="contained"
                        className="list-apply-button "
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>

                  <div className="job-listing with-apply-button">
                    <div className="job-listing-details">
                      <div className="job-listing-company-logo">
                        <img src={logo2} alt="pic" />
                      </div>

                      <div className="job-listing-description">
                        <h3 className="job-listing-title">
                          Barista and Cashier
                        </h3>

                        <div className="job-listing-footer">
                          <ul>
                            <li>
                              <i className="icon-material-outline-business">
                                <IoMdBusiness />
                              </i>{" "}
                              Coffee
                            </li>
                            <li>
                              <i className="icon-material-outline-location-on">
                                {" "}
                                <GoLocation />
                              </i>
                              San Francissco
                            </li>
                            <li>
                              <i className="icon-material-outline-business-center">
                                <MdBusinessCenter />
                              </i>
                              Full Time
                            </li>
                            <li>
                              <i className="icon-material-outline-access-time">
                                <IoMdTime />
                              </i>{" "}
                              2 days ago
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Button
                        variant="contained"
                        className="list-apply-button "
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>

                  <div className="job-listing with-apply-button">
                    <div className="job-listing-details">
                      <div className="job-listing-company-logo">
                        <img src={logo3} alt="pic" />
                      </div>

                      <div className="job-listing-description">
                        <h3 className="job-listing-title">
                          Restaurant General Manager
                        </h3>

                        <div className="job-listing-footer">
                          <ul>
                            <li>
                              <i className="icon-material-outline-business">
                                <IoMdBusiness />
                              </i>{" "}
                              King{" "}
                              <div
                                className="verified-badge"
                                title="Verified Employer"
                                data-tippy-placement="top"
                              />
                            </li>
                            <li>
                              <i className="icon-material-outline-location-on">
                                {" "}
                                <GoLocation />
                              </i>{" "}
                              San Francissco
                            </li>
                            <li>
                              <i className="icon-material-outline-business-center">
                                <MdBusinessCenter />
                              </i>{" "}
                              Full Time
                            </li>
                            <li>
                              <i className="icon-material-outline-access-time">
                                <IoMdTime />
                              </i>{" "}
                              2 days ago
                            </li>
                          </ul>
                        </div>
                      </div>

                      <Button
                        variant="contained"
                        className="list-apply-button "
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>

                  <div className="job-listing with-apply-button">
                    <div className="job-listing-details">
                      <div className="job-listing-company-logo">
                        <img src={logo1} alt="pic" />
                      </div>

                      <div className="job-listing-description">
                        <h3 className="job-listing-title">
                          International Marketing Coordinator
                        </h3>

                        <div className="job-listing-footer">
                          <ul>
                            <li>
                              <i className="icon-material-outline-business">
                                <IoMdBusiness />
                              </i>{" "}
                              Skyist
                            </li>
                            <li>
                              <i className="icon-material-outline-location-on">
                                {" "}
                                <GoLocation />
                              </i>{" "}
                              San Francissco
                            </li>
                            <li>
                              <i className="icon-material-outline-business-center">
                                <MdBusinessCenter />
                              </i>{" "}
                              Full Time
                            </li>
                            <li>
                              <i className="icon-material-outline-access-time">
                                <IoMdTime />
                              </i>{" "}
                              2 days ago
                            </li>
                          </ul>
                        </div>
                      </div>

                      <Button
                        variant="contained"
                        className="list-apply-button "
                      >
                        Apply Now
                      </Button>
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
