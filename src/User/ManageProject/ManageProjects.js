import React from "react";
import "./ManageProjects.css";
import { MdAssignment, MdSupervisorAccount } from "react-icons/md";
import { BiTimeFive, BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Box, Button, Typography } from "@material-ui/core";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";



const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

export const ManageProjects = () => {
  return (
    <div>
      <div className="dashboard-content-container" data-simplebar>
        <div className="dashboard-content-inner">
          <div className="dashboard-headline">
            <h3>Manage Projects</h3>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="dashboard-box margin-top-0">
              <Typography variant="h6" className="dashboard-typo">
          <MdAssignment className="manage_icon" />
          <Box className="dash_heading">My Projects</Box>
        </Typography>
                {/* <div className="headline">
                  <h3>
                    <i className="icon-material-outline-assignment">
                      <MdAssignment />
                    </i>{" "}
                    My Projects
                  </h3>
                </div> */}
                <div className="content">
                  <ul className="dashboard-box-list">
                    <li>
                      <div className="job-listing width-adjustment">
                        <div className="job-listing-description">
                          <h3 className="job-listing-title">
                            <a>Design a Landing Page</a>{" "}
                            {/* <span className="dashboard-status-button yellow">
                                Expiring
                              </span> */}
                          </h3>

                          {/* <div className="job-listing-footer">
                              <ul>
                                <li>
                                  <i className="icon-material-outline-access-time">
                                    <BiTimeFive />
                                  </i>{" "}
                                  23 hours left
                                </li>
                              </ul>
                            </div> */}
                        </div>
                      </div>

                      <ul className="dashboard-task-info">
                        <li>
                          <strong>3</strong>
                          <span>Bids</span>
                        </li>
                        <li>
                          <strong>$22</strong>
                          <span>Avg. Bid</span>
                        </li>
                        {/* <li>
                          <strong>$15 - $30</strong>
                          <span>Hourly Rate</span>
                        </li> */}
                      </ul>

                      <div className="buttons-to-right always-visible  tooltipdisplay" >
                        <a
                          href="dashboard-manage-bidders.html"
                          className="button ripple-effect"
                        >
                          <i className="icon-material-outline-supervisor-account">
                            <MdSupervisorAccount />
                          </i>{" "}
                          Manage Bidders <span className="button-info">3</span>
                        </a>

                        <Box className="tooltipdisplay" >
                          <BootstrapTooltip title="Edit" placement="top-start">
                            <Button className="editbtns ">
                              <FiEdit className="iconsize" />
                            </Button>
                          </BootstrapTooltip>
                          <BootstrapTooltip
                            title="Delete"
                            placement="top-start"
                          >
                            <Button className=" editbtns ">
                              <RiDeleteBinLine className="iconsize" />
                            </Button>
                          </BootstrapTooltip>
                        </Box>
                      
                      </div>
                    </li>
                    <li>
                      <div className="job-listing job-project width-adjustment">
                        <div className="job-listing-description">
                          <h3 className="job-listing-title">
                            <a>Food Delivery Mobile Application</a>
                          </h3>

                          {/* <div className="job-listing-footer">
                              <ul>
                                <li>
                                  <i className="icon-material-outline-access-time">
                                    <BiTimeFive />
                                  </i>{" "}
                                  6 days
                                </li>
                              </ul>
                            </div> */}
                        </div>
                      </div>

                      <ul className="dashboard-task-info">
                        <li>
                          <strong>3</strong>
                          <span>Bids</span>
                        </li>
                        <li>
                          <strong>$3,200</strong>
                          <span>Avg. Bid</span>
                        </li>
                        {/* <li>
                          <strong>$2,500 - $4,500</strong>
                          <span>Fixed Price</span>
                        </li> */}
                      </ul>

                      <div className="buttons-to-right always-visible  tooltipdisplay" >
                        <a
                          href="dashboard-manage-bidders.html"
                          className="button ripple-effect"
                        >
                          <i className="icon-material-outline-supervisor-account">
                            <MdSupervisorAccount />
                          </i>{" "}
                          Manage Bidders <span className="button-info">3</span>
                        </a>
                        <Box className="tooltipdisplay" >
                          <BootstrapTooltip title="Edit" placement="top-start">
                            <Button className="editbtns ">
                              <FiEdit className="iconsize" />
                            </Button>
                          </BootstrapTooltip>
                          <BootstrapTooltip
                            title="Delete"
                            placement="top-start"
                          >
                            <Button className=" editbtns ">
                              <RiDeleteBinLine className="iconsize" />
                            </Button>
                          </BootstrapTooltip>
                        </Box>
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
