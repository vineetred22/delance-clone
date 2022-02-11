import React from "react";
import "./dashboardnotification.scss";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCheckBox } from "react-icons/bs";
import { BiGroup } from "react-icons/bi";
import { Button } from "@material-ui/core";
import {
  MdAutorenew,
  MdGavel,
  MdRateReview,
  MdAssignment,
} from "react-icons/md";
export const FreeLancerDashdhboardNotificationComponent = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-xl-6 col-12 ">
          <div className="dashboard-box">
            <div className="headline">
              <h3>
                <i className="icon-material-baseline-notifications-none">
                  <IoMdNotificationsOutline className="dashboard_icon" />
                </i>{" "}
                Notifications
              </h3>
              <button className="mark-as-read ripple-effect-dark">
                <i className="icon-feather-check-square">
                  <BsCheckBox />
                </i>
              </button>
            </div>
            <div className="content">
              <ul className="dashboard-box-list">
                <li>
                  <span className="notification-icon">
                    <i className="icon-material-outline-group">
                      <BiGroup />
                    </i>
                  </span>
                  <span className="notification-text">
                    <strong>Michael Shannah</strong> applied for a job{" "}
                    <a href="#">Full Stack Software Engineer</a>
                  </span>

                  <div className="buttons-to-right">
                    <a href="#" className="buttonnn ripple-effect ico">
                      <i className="icon-feather-check-square">
                        <BsCheckBox />
                      </i>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="notification-icon">
                    <i className=" icon-material-outline-gavel">
                      <MdGavel />
                    </i>
                  </span>
                  <span className="notification-text">
                    <strong>Gilber Allanis</strong> placed a bid on your{" "}
                    <a href="#">iOS App Development</a> project
                  </span>

                  <div className="buttons-to-right">
                    <a href="#" className="buttonnn ripple-effect ico">
                      <i className="icon-feather-check-square">
                        <BsCheckBox />
                      </i>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="notification-icon">
                    <i className="icon-material-outline-autorenew">
                      <MdAutorenew />
                    </i>
                  </span>
                  <span className="notification-text">
                    Your job listing{" "}
                    <a href="#">Full Stack Software Engineer</a> is expiring
                  </span>

                  <div className="buttons-to-right">
                    <a href="#" className="buttonnn ripple-effect ico">
                      <i className="icon-feather-check-square">
                        <BsCheckBox />
                      </i>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="notification-icon">
                    <i className="icon-material-outline-group">
                      <BiGroup />
                    </i>
                  </span>
                  <span className="notification-text">
                    <strong>Sindy Forrest</strong> applied for a job{" "}
                    <a href="#">Full Stack Software Engineer</a>
                  </span>

                  <div className="buttons-to-right">
                    <a href="#" className="buttonnn ripple-effect ico">
                      <i className="icon-feather-check-square">
                        <BsCheckBox />
                      </i>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="notification-icon">
                    <i className="icon-material-outline-rate-review">
                      <MdRateReview />
                    </i>
                  </span>
                  <span className="notification-text">
                    <strong>David Peterson</strong> left you a{" "}
                    <span className="star-rating1 no-stars" data-rating={5.0}>
                      5.0
                    </span>{" "}
                    rating after finishing <a href="#">Logo Design</a> task
                  </span>

                  <div className="buttons-to-right">
                    <a href="#" className="buttonnn ripple-effect ico">
                      <i className="icon-feather-check-square">
                        <BsCheckBox />
                      </i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="dashboard-box">
            <div className="headline">
              <h3>
                <i className="icon-material-outline-assignment">
                  <MdAssignment className="dashboard_icon" />{" "}
                </i>
                Orders
              </h3>
            </div>
            <div className="content">
              <ul className="dashboard-box-list">
                <li>
                  <div className="invoice-list-item">
                    <strong>Professional Plan</strong>
                    <ul>
                      <li>
                        <span className="unpaid">Pending</span>
                      </li>
                      <li>Order: #326</li>
                      <li>Date: 12/08/2019</li>
                    </ul>
                  </div>

                  <div className="buttons-to-right bgcolor">
                    <Button
                      variant="contained"
                      color="primary"
                      className="orderbutton"
                      // className="button gray "
                    >
                      Finish Payment
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="invoice-list-item">
                    <strong>Professional Plan</strong>
                    <ul>
                      <li>
                        <span className="paid">Complete</span>
                      </li>
                      <li>Order: #264</li>
                      <li>Date: 10/07/2019</li>
                    </ul>
                  </div>

                  <div className="buttons-to-right bgcolor">
                    <Button
                      variant="contained"
                      color="primary"
                      className="orderbutton"
                   
                    >
                      View Invoice
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="invoice-list-item">
                    <strong>Professional Plan</strong>
                    <ul>
                      <li>
                        <span className="paid">Complete</span>
                      </li>
                      <li>Order: #211</li>
                      <li>Date: 12/06/2019</li>
                    </ul>
                  </div>

                  <div className="buttons-to-right bgcolor">
                    <Button
                      variant="contained"
                      color="primary"
                      className="orderbutton"
                    >
                      View Invoice
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="invoice-list-item">
                    <strong>Professional Plan</strong>
                    <ul>
                      <li>
                        <span className="paid">Complete</span>
                      </li>
                      <li>Order: #179</li>
                      <li>Date: 06/05/2019</li>
                    </ul>
                  </div>

                  <div className="buttons-to-right bgcolor">
                    <Button
                      variant="contained"
                      color="primary"
                      className="orderbutton"
                    >
                      View Invoice
                    </Button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
