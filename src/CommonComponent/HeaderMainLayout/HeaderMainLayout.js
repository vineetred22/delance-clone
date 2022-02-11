import React from "react";
import "./headermain.scss";
import { FaMailBulk, FaSortDown, FaUserSecret } from "react-icons/fa";
import { FaTimes, FaBars } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { IoMdArrowDropright, IoMdNotificationsOutline } from "react-icons/io";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";
import { FaUserCircle } from "react-icons/fa";

import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";
import { NavLink } from "react-router-dom";
import user from "../../assets/images/user-avatar-small-01.jpg";
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import { UserDropdownNotificationMenu } from "./DropdownMenu/UserDropDownNotification/UserDropdownNotificationMenu ";
import { UserDropdownProfile} from "./DropdownMenu/UserDropDownProfile/UserDropdownProfile";
import { UserDropdownMail} from "./DropdownMenu/UserDropdownMail/UserDropdownMail";
import { Avatar, Box } from "@material-ui/core";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  manageusermodal: {
    width: "260px !important",
    marginTop: "-7px",
  },

  notificationmodal: {
    width: "330px !important",
  },

  // notificationMain: {
  //   marginTop: "25px",
  //   marginLeft: "-100px ",
  // },
  notificationsMain: {
    marginTop: "28px",
    marginLeft: "-200px ",
  },
}));

export const HeaderMainLayout = () => {
  const classes = useStyles();

  const [click, setClick] = React.useState();

  const clickHandler = () => {
    setClick(!click);
  };
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const anchorRef1 = React.useRef(null);
  const anchorRef2 = React.useRef(null);
  const anchorRef3 = React.useRef(null);

  const handleToggle1 = () => {
    setOpen1((prevOpen1) => !prevOpen1);
  };

  const handleClose1 = (event) => {
    if (anchorRef1.current && anchorRef1.current.contains(event.target)) {
      return;
    }

    setOpen1(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen1(false);
    }
  }

  const prevOpen1 = React.useRef(open1);
  React.useEffect(() => {
    if (prevOpen1.current === true && open1 === false) {
      anchorRef1.current.focus();
    }

    prevOpen1.current = open1;
  }, [open1]);

  const handleToggle2 = () => {
    setOpen2((prevOpen2) => !prevOpen2);
  };

  const handleClose2 = (event) => {
    if (anchorRef2.current && anchorRef2.current.contains(event.target)) {
      return;
    }

    setOpen2(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen2(false);
    }
  }

  const prevOpen2 = React.useRef(open2);
  React.useEffect(() => {
    if (prevOpen2.current === true && open2 === false) {
      anchorRef2.current.focus();
    }

    prevOpen2.current = open2;
  }, [open2]);

  const handleToggle3 = () => {
    setOpen3((prevOpen3) => !prevOpen3);
  };

  const handleClose3 = (event) => {
    if (anchorRef3.current && anchorRef3.current.contains(event.target)) {
      return;
    }

    setOpen3(false);
  };
  // const prevOpen = React.useRef(open);

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen3(false);
    }
  }

  const prevOpen3 = React.useRef(open3);
  React.useEffect(() => {
    if (prevOpen3.current === true && open3 === false) {
      anchorRef3.current.focus();
    }

    prevOpen3.current = open3;
  }, [open3]);

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [anchorE2, setAnchorE2] = React.useState(null);
  // const [anchorE3, setAnchorE3] = React.useState(null);
  // const classes = useStyles();

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const handleClick2 = (event) => {
  //   setAnchorE2(event.currentTarget);
  // };

  // const handleClose2 = () => {
  //   setAnchorE2(null);
  // };

  // const handleClick3 = (event) => {
  //   setAnchorE3(event.currentTarget);
  // };

  // const handleClose3 = () => {
  //   setAnchorE3(null);
  // };

  return (
    <div className="shadow ">
      <div className="fixed-top  _z_indexx">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="logo">
              <NavLink to="/home">
                <h2>DeLance</h2>
              </NavLink>
            </div>
            <div>
              <ul
                className="navbarr nonee "
                className={click ? "nav-list active" : "nav-list"}
              >
                <ul class="responsenavs">
                  <HeaderSlider />
                </ul>
                {/* <ul className="top-level-menu mx-auto">
                  <li>
                    <NavLink to="/home" className="header-content" activeClassName="selected">
                      Home
                    </NavLink>
                    <ul className="second-level-menu">
                      <li>
                        <NavLink to="/home">Home1 </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul> */}

                <ul className="top-level-menu mx-auto">
                  <li>
                    <NavLink to="/home" className="header-content">
                      Find Work
                      <span className="header-icon">
                        <FaSortDown />
                      </span>
                    </NavLink>
                    <ul class="second-level-menu">
                      <li>
                        {/* <NavLink to="/home">Browse jobs</NavLink> */}
                        {/* <ul className="third-level-menu">
                          <li>
                            <NavLink to="/home">Full Page List + map</NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">Full Page Grid + map</NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">Full Page Grid </NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">List Layout1</NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">List Layout2</NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">Grid Layout</NavLink>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <NavLink to="/findwork">
                          Browse Projects
                          <span className=" header-icon1 icon2"></span>
                        </NavLink>
                        {/* <ul className="third-level-menu">
                          <li>
                            <NavLink to="/findwork">List Layout1</NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">List Layout2</NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">Grid Layout</NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">Full Page Grid</NavLink>
                          </li>
                        </ul> */}
                      </li>
                      {/* <li>
                        <NavLink to="/home">Browse Companies</NavLink>
                      </li>
                      <li>
                        <NavLink to="/bidpage">Job page</NavLink>
                      </li>
                      <li>
                        <NavLink to="/home">Project page</NavLink>
                      </li>
                      <li>
                        <NavLink to="/userprofile">Profile</NavLink>
                      </li> */}
                    </ul>
                  </li>
                </ul>

                <ul class="top-level-menu mx-auto">
                  <li>
                    <NavLink to="/home" className="header-content">
                      For Employers
                      <span className="header-icon">
                        <FaSortDown />
                      </span>
                    </NavLink>
                    <ul class="second-level-menu">
                      <li>
                        <NavLink to="/findfreelancer">
                          Find a Freelancer
                          <span className="header-icon1 icon3"></span>
                        </NavLink>
                        {/* <ul class="third-level-menu">
                          <li>
                            <NavLink to="/home">Full Page Grid</NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">Grid Layout</NavLink>
                          </li>
                          <li>
                            <NavLink to="/findfreelancer">List Layout1</NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">List Layout2</NavLink>
                          </li>
                        </ul> */}
                      </li>
                      {/* <li>
                        <NavLink to="/home">Freelancer profile</NavLink>
                      </li>
                      <li>
                        <NavLink to="/home">Post a job</NavLink>
                      </li> */}
                      <li>
                        <NavLink to="/postproject">Post a Project</NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul class="top-level-menu mx-auto">
                  <li>
                    <NavLink to="/home" className="header-content">
                      Dashboard
                      <span className="header-icon">
                        <FaSortDown />
                      </span>
                    </NavLink>
                    <ul class="second-level-menu">
                      <li>
                        <NavLink to="/userdashboard">Dashboard</NavLink>
                      </li>
                      <li>
                        <NavLink to="/messagecomponent">Messages</NavLink>
                      </li>

                      <li>
                        <NavLink to="/userreview">Reviews</NavLink>
                      </li>
                      {/* <li>
                      <NavLink to="/home">
                        Jobs
                        <span className="header-icon1 icon4">
                          <IoMdArrowDropright />
                        </span>
                      </NavLink>
                      <ul class="third-level-menu">
                        <li>
                          <NavLink to="/home">Manage Jobs</NavLink>
                        </li>
                        <li>
                          <NavLink to="/home">Manage Candidates</NavLink>
                        </li>
                        <li>
                          <NavLink to="/home">Post a job</NavLink>
                        </li>
                      </ul>
                    </li> */}
                      <li>
                        <NavLink to="/home">
                          Projects
                          <span className="header-icon1 icon5">
                            <IoMdArrowDropright />
                          </span>
                        </NavLink>
                        <ul class="third-level-menu">
                          <li>
                            <NavLink to="/manageprojects">
                              Manage Projects
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/ManageBidderComponent">
                              Manage Bidders
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/MyActiveBidsComponent">
                              My Active Bids
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/postproject">Post a Project</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="/currentproject">Current Project</NavLink>
                      </li>
                      <li>
                        <NavLink to="/freelancerupdateprofile">
                          User Profile
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul class="top-level-menu mx-auto">
                  <li>
                    <NavLink to="/" className="header-content">
                      About Us
                      <span className="header-icon">
                        <FaSortDown />
                      </span>
                    </NavLink>
                    <ul class="second-level-menu">
                      {/* <li>
                        <NavLink to="/home">
                          Open StreetMap
                          <span className="header-icon1 icon6">
                            <IoMdArrowDropright />
                          </span>
                        </NavLink>
                        <ul class="third-level-menu">
                          <li>
                            <NavLink to="/home">Full Page List + map</NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">Full Page Grid + map</NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">Grid Layout</NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">List Layout1</NavLink>
                          </li>
                          <li>
                            <NavLink to="/home">List Layout2</NavLink>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <NavLink to="/blog">Blog</NavLink>
                      </li>
                      {/* <li>
                        <NavLink to="/home">Princing Plans</NavLink>
                      </li> */}
                      <li>
                        <NavLink to="/home">Checkout pages</NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </ul>
            </div>
            <ul className="menu_icon_header">
              <li>
                <div>
                  <Button
                    ref={anchorRef1}
                    aria-controls={open1 ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle1}
                    className="header_icon"
                  >
                    <Badge badgeContent={4} color="primary">
                      <IoMdNotificationsOutline className="bell_icon_size" />
                    </Badge>
                  </Button>

                  <Popper
                    open={open1}
                    anchorEl={anchorRef1.current}
                    role={undefined}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        className={classes.notificationsMain}
                        // style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose1}>
                            <Box className={classes.notificationmodal}>
                              <UserDropdownNotificationMenu />
                            </Box>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                
                </div>{" "}
              </li>
              <div>
                <Button
                  ref={anchorRef2}
                  aria-controls={open2 ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle2}
                  className="header_icon"
                >
                  <Badge badgeContent={12} color="primary">
                    <FiMail className="bell_icon_size" />
                  </Badge>
                </Button>

                <Popper
                  open={open2}
                  anchorEl={anchorRef2.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      className={classes.notificationsMain}
                      // style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose2}>
                          <Box className={classes.notificationmodal}>
                            {/* <UserMailDropDown /> */}
                            <UserDropdownMail />
                          </Box>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
               
              </div>{" "}
              <li>
                {/* userdropdown menu */}
                <div>
                  {/* <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <Avatar alt="user" src={user} />
                    
                  </Button> */}
                  <Button
                    ref={anchorRef3}
                    aria-controls={open3 ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle3}
                  >
                    <Avatar alt="user" src={user} />
                  </Button>

                  <Popper
                    open={open3}
                    anchorEl={anchorRef3.current}
                    role={undefined}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        // className="modal_set"
                        className={classes.notificationsMain}
                       
                        
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose3}>
                          <Box className={classes. manageusermodal}>
                              {/* <UserProfileDropADownMenu /> */}
                              <UserDropdownProfile />
                            </Box>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                  {/* <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    className={classes.manageusermodal}
                   
                  >
                    <Box className={classes.usermodal}>
                      <UserProfileDropADownMenu />
                    </Box>
                  </Menu> */}
                </div>

                {/* end user dropdown menu  */}
              </li>
            </ul>

            <div className="hamburger" onClick={clickHandler}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
