import React from "react";
import "./Managejob.css";
import {
  MdBusinessCenter,
  MdDateRange,
  MdSupervisorAccount,
} from "react-icons/md";
import { FiEdit, FiRotateCcw } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
const Managejob = () => {
  return (
    <div>
      <div className="dashboard-content-container" data-simplebar>
        <div className="dashboard-content-inner">
          <div className="dashboard-headline">
            <h3>Manage Jobs</h3>

            <nav id="breadcrumbs" className="dark">
              <ul>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Manage Jobs</li>
              </ul>
            </nav>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="dashboard-box margin-top-0">
                <div className="headline">
                  <h3>
                    <i className="icon-material-outline-business-center">
                      <MdBusinessCenter />
                    </i>{" "}
                    My Job Listings
                  </h3>
                </div>
                <div className="content">
                  <ul className="dashboard-box-list">
                    <li>
                      <div className="job-listing">
                        <div className="job-listing-details">
                          <div className="job-listing-description">
                            <h3 className="job-listing-title">
                              <a href="#">Frontend React Developer</a>{" "}
                              <span className="dashboard-status-button green">
                                Pending Approval
                              </span>
                            </h3>

                            <div className="job-listing-footer">
                              <ul>
                                <li>
                                  <i className="icon-material-outline-date-range">
                                    <MdDateRange />
                                  </i>{" "}
                                  Posted on 10 July, 2019
                                </li>
                                <li>
                                  <i className="icon-material-outline-date-range">
                                    <MdDateRange />
                                  </i>{" "}
                                  Expiring on 10 August, 2019
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="buttons-to-right always-visible">
                        <a
                          href="dashboard-manage-candidates.html"
                          className="button ripple-effect"
                        >
                          <i className="icon-material-outline-supervisor-account">
                            <MdSupervisorAccount />
                          </i>{" "}
                          Manage Candidates{" "}
                          <span className="button-info">0</span>
                        </a>
                        <a
                          href="#"
                          className="button gray ripple-effect ico"
                          title="Edit"
                          data-tippy-placement="top"
                        >
                          <i className="icon-feather-edit">
                            <FiEdit />
                          </i>
                        </a>

                        <a
                          href="#"
                          className="button gray ripple-effect ico"
                          title="Remove"
                          data-tippy-placement=" tooltip-top"
                        >
                          <i className="icon-feather-trash-2">
                            <RiDeleteBinLine />
                          </i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="job-listing">
                        <div className="job-listing-details">
                          <div className="job-listing-description">
                            <h3 className="job-listing-title">
                              <a href="#">Full Stack PHP Developer</a>{" "}
                              <span className="dashboard-status-button yellow">
                                Expiring
                              </span>
                            </h3>

                            <div className="job-listing-footer">
                              <ul>
                                <li>
                                  <i className="icon-material-outline-date-range">
                                    <MdDateRange />
                                  </i>{" "}
                                  Posted on 28 June, 2019
                                </li>
                                <li>
                                  <i className="icon-material-outline-date-range">
                                    <MdDateRange />
                                  </i>{" "}
                                  Expiring on 28 July, 2019
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="buttons-to-right always-visible">
                        <a
                          href="dashboard-manage-candidates.html"
                          className="button ripple-effect"
                        >
                          <i className="icon-material-outline-supervisor-account">
                            <MdSupervisorAccount />
                          </i>{" "}
                          Manage Candidates{" "}
                          <span className="button-info">3</span>
                        </a>
                        <a
                          href="#"
                          className="button gray ripple-effect ico"
                          title="Edit"
                          data-tippy-placement="top"
                        >
                          <i className="icon-feather-edit">
                            <FiEdit />
                          </i>
                        </a>
                        <a
                          href="#"
                          className="button gray ripple-effect ico"
                          title="Remove"
                          data-tippy-placement="top"
                        >
                          <i className="icon-feather-trash-2">
                            <RiDeleteBinLine />
                          </i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="job-listing">
                        <div className="job-listing-details">
                          <div className="job-listing-description">
                            <h3 className="job-listing-title">
                              <a href="#">Node.js Developer</a>{" "}
                              <span className="dashboard-status-button red">
                                Expired
                              </span>
                            </h3>

                            <div className="job-listing-footer">
                              <ul>
                                <li>
                                  <i className="icon-material-outline-date-range">
                                    <MdDateRange />
                                  </i>{" "}
                                  Posted on 16 May, 2019
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="buttons-to-right always-visible">
                        <a
                          href="dashboard-manage-candidates.html"
                          className="button ripple-effect"
                        >
                          <i className="icon-material-outline-supervisor-account">
                            <MdSupervisorAccount />
                          </i>
                          Manage Candidates{" "}
                          <span className="button-info">7</span>
                        </a>
                        <a href="#" className="button dark ripple-effect">
                          <i className="icon-feather-rotate-ccw">
                            <FiRotateCcw />
                          </i>{" "}
                          Refresh
                        </a>
                        <a
                          href="#"
                          className="button gray ripple-effect ico"
                          title="Edit"
                          data-tippy-placement="top"
                        >
                          <i className="icon-feather-edit">
                            <FiEdit />
                          </i>
                        </a>
                        <a
                          href="#"
                          className="button gray ripple-effect ico"
                          title="Remove"
                          data-tippy-placement="top"
                        >
                          <i className="icon-feather-trash-2">
                            <RiDeleteBinLine />
                          </i>
                        </a>
                      </div>
                    </li>
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

export default Managejob;
