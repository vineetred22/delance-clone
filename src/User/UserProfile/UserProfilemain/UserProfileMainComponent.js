import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./userProfilemain.scss";
import userimg from "../../../assets/images/userimg.jpg";
import flagimg from "../../../assets/images/flag.png";
import { FaRegBuilding, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaRegCalendarCheck, FaThumbtack } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FiShare2, FiThumbsUp, FiPlusCircle, FiFilePlus } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

import { BsImage } from "react-icons/bs";
import { MdHistory, MdLocationOn } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import { FooterLayout } from "CommonComponent/FooterLayout/FooterLayout";
import { HeaderMainLayout } from "CommonComponent/HeaderMainLayout/HeaderMainLayout";

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: 13,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

export const UserProfileMainComponent = () => {
  const [value, setValue] = React.useState(2);
  return (
    <>
    <HeaderMainLayout />
      <div className="container">
        <div className="row">
          <div className="media pt-5">
            <img src={userimg} className="userimg" alt="..." />
            <div className="media-body ml-3">
              <h4 className="mt-0">Davide Peterson</h4>
              <p className="subheding">IOS Expert + Node Dev</p>
              <p className="subheding">
                <MdLocationOn className="locationicon" />
                <span className=" pl-1 pr-2">Indore</span>India
              </p>
              <p className="subheding">GMT+05:30</p>
              <div className="d-lg-flex">
                <div className="d-flex">
                  <div className="yellobox">
                    <p>5.0</p>
                  </div>
                  <div className="starbox">
                    <Box component="fieldset" mb={1} borderColor="transparent">
                      <Typography component="legend"></Typography>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </div>
                </div>

                <div className="greenbox">
                  <TiTick className="tickicon" />{" "}
                  <span className="verifi">Verified</span>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 pb-5">
          <div className="col-md-8 col-12 ">
            <div >
              <h4> About Me</h4>
              <p className="text ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div >

            <div className="work ">
              <div className="d-flex">
                <i
                  className="fa fa-thumbs-o-up colorblue thumbsize"
                  aria-hidden="true"
                >
                  <FiThumbsUp />
                </i>
                <h6>Work History and Feedback</h6>
              </div>
            </div>
            <div className="box1">
              <h6>Web Database and API Developer</h6>
              <p>Rated as Freelancer</p>
              <div className="d-lg-flex">
                <div className="d-flex">
                  <div className="yellobox">
                    <p>5.0</p>
                  </div>
                  <div className="starbox ">
                    <Box component="fieldset" mb={1} borderColor="transparent">
                      <Typography component="legend"></Typography>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </div>
                </div>
                <div>
                  <FaRegCalendarCheck className="ml-1 font_siize" /> &nbsp;
                  August 2019
                </div>
              </div>
              <div className="smallpera">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
            <div className="box2">
              <h6>WordPress Themes Insatallation</h6>
              <p>Rated as Freelancer</p>
              <div className="d-lg-flex">
                <div className="d-flex">
                  <div className="yellobox">
                    <p>5.0</p>
                  </div>
                  <div className="starbox ">
                    <Box component="fieldset" mb={1} borderColor="transparent">
                      <Typography component="legend"></Typography>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </div>
                </div>
                <div>
                  <FaRegCalendarCheck className="ml-1 font_siize" /> &nbsp; June
                  2019
                </div>
              </div>
            </div>
            <div className="box1">
              <h6>Fix Python Selenium Code Developer</h6>
              <p>Rated as Employer</p>
              <div className="d-lg-flex">
                <div className="d-flex">
                  <div className="yellobox">
                    <p>5.0</p>
                  </div>
                  <div className="starbox ">
                    <Box component="fieldset" mb={1} borderColor="transparent">
                      <Typography component="legend"></Typography>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </div>
                </div>
                <div>
                  <FaRegCalendarCheck className="ml-1 font_siize" /> &nbsp; May
                  2019
                </div>
              </div>
              <div className="smallpera">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
            <div className="box2">
              <h6>PHP Core Website Fixes Themes Insatallation</h6>
              <p>Rated as Freelancer</p>
              <div className="d-lg-flex">
                <div className="d-flex">
                  <div className="yellobox">
                    <p>5.0</p>
                  </div>
                  <div className="starbox ">
                    <Box component="fieldset" mb={1} borderColor="transparent">
                      <Typography component="legend"></Typography>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </div>
                </div>
                <div>
                  <FaRegCalendarCheck className="ml-1 font_siize" /> &nbsp; May
                  2019
                </div>
              </div>
              <div className="smallpera">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
            <div className="work mt-5">
              <div className="d-flex">
              <MdHistory className="dashboard_icon" />
                {/* <i className="fa fa-folder thumbsize colorblue	" aria-hidden="true"><FaThumbtack /></i> */}
                <h6 className="pl-2">Employment History </h6>
              </div>
            </div>
            <div className="otherbox">
              <div className="media">
                {/* <img className="mr-3 damiimg" src={flagimg} alt="Generic placeholder image" /> */}
                <div className="media-body">
                  <h6 className="mt-0">Development Team Leader</h6>
                  <div className="user_flex">
                    <div>
                      <FaRegBuilding /> Acodia
                    </div>
                    <div className="block">
                      <FaRegCalendarCheck className="ml-2 font_siize" /> &nbsp;
                      May 2019 - Present
                    </div>
                  </div>
                  <div className="pt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="otherbox bggay">
              <div className="media">
                {/* <img className="mr-3 damiimg" src={flagimg} alt="Generic" /> */}
                <div className="media-body">
                  <h6 className="mt-0">Development Team Leader</h6>
                  <div className="user_flex">
                    <div>
                      <FaRegBuilding /> Acodia
                    </div>
                    <div className="block">
                      <FaRegCalendarCheck className="ml-2 font_siize" /> &nbsp;
                      April 2014 - May 2019
                    </div>
                  </div>
                  <div className="pt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 ">
            <div className="user_padding">
              <div className="d-flex">
                <div className=" padingleft">
                  <h4>$35</h4>
                  <p>Hourly Rate</p>
                </div>
              </div>

              <div>
                <Button variant="contained" color="primary" className="button">
                  Make an Offer{" "}
                </Button>
              </div>

              <div className="socialicon">
                <h4>Social Profiles</h4>
                <div className="d-flex graycolor">
                  <BootstrapTooltip
                    title="Linkedin"
                    placement="top"
                    className="icontoltip"
                  >
                    <Link to="/"> Linkedin</Link>
                    {/* <i>
                      <FaLinkedin />
                    </i> */}
                  </BootstrapTooltip>
                  <BootstrapTooltip
                    title="Portfolio"
                    placement="top"
                    className="icontoltip portfolioicon"
                  >
                    <Link to="/"> Portfolio</Link>
                  </BootstrapTooltip>

                  <BootstrapTooltip
                    title="Github"
                    placement="top"
                    className="icontoltip"
                  >
                    <Link to="/"> Github</Link>
                  </BootstrapTooltip>
                </div>
              </div>
              <div className="pt-2 pb-3">
                <h4>
                  Education <FiPlusCircle className="eductionicon" />
                </h4>
                <p className="educationpera">
                  Devi Ahilya University <br />
                  Master of Computer Application (MCA) 2014-2018{" "}
                </p>
              </div>
              <div className="skills mb-5">
                <h6>Skills</h6>
                <div className="chipskill">
                  <Chip label="iOS" className="bid_chip" />
                  <Chip label="Android" className="bid_chip" />
                  <Chip label="Mobile apps" className="bid_chip" />
                  <Chip label="Python" className="bid_chip" />

                  <Chip label="Flask" className="bid_chip" />
                  <Chip label="PHP" className="bid_chip" />
                  <Chip label="WordPress" className="bid_chip" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};
