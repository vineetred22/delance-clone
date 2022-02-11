import React from "react";
import clsx from "clsx";
import "./header.scss";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  dropdown: {
    display: "none",
    marginLeft: "auto",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  sectionDesktop: {
    display: "flex",
    marginLeft: "auto",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Login() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <div className="navs">
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography>
              <div id="logo">
                <a href="index.html">
                  <img src="images/logo.png" alt="" />
                </a>
              </div>
            </Typography>
            <Typography>
              <div className={classes.dropdown}>
                <BootstrapTooltip
                  title={
                    <React.Fragment>
                      <Typography color="#666">Home1</Typography>
                      <Typography color="#666">Home2</Typography>
                      <Typography color="#666">Home3</Typography>
                    </React.Fragment>
                  }
                >
                  <Button color="#666" variant="h1">
                    Home
                  </Button>
                </BootstrapTooltip>
              </div>
            </Typography>

            <Typography>
              <div className={classes.dropdown}>
                <BootstrapTooltip
                  title={
                    <React.Fragment>
                      <Typography color="#666">Browse Jobs</Typography>
                      <Typography color="#666">Browse Tasks</Typography>
                      <Typography color="#666">Browse Companies</Typography>
                      <Typography color="#666">Job Page</Typography>
                      <Typography color="#666">Task Page</Typography>
                      <Typography color="#666">Company Profile</Typography>
                    </React.Fragment>
                  }
                >
                  <Button color="#666" variant="h1">
                    Find Work
                  </Button>
                </BootstrapTooltip>
              </div>
            </Typography>

            <Typography>
              <div className={classes.dropdown}>
                <BootstrapTooltip
                  title={
                    <React.Fragment>
                      <Typography color="#666">Find a Freelancer</Typography>
                      <Typography color="#666">Freelancer Profile</Typography>
                      <Typography color="#666">Post a Job</Typography>
                      <Typography color="#666">Post a Task</Typography>
                    </React.Fragment>
                  }
                >
                  <Button color="#666" variant="h1">
                    For Employers
                  </Button>
                </BootstrapTooltip>
              </div>
            </Typography>

            <Typography>
              <div className={classes.dropdown}>
                <BootstrapTooltip
                  title={
                    <React.Fragment>
                      <Typography color="#666">Dashboard</Typography>
                      <Typography color="#666">Messages</Typography>
                      <Typography color="#666">Bookmarks</Typography>
                      <Typography color="#666">Reviews</Typography>
                      <Typography color="#666">Jobs</Typography>
                      <Typography color="#666"> Tasks</Typography>
                      <Typography color="#666">Settings</Typography>
                    </React.Fragment>
                  }
                >
                  <Button color="#666" variant="h1">
                    Dashboard
                  </Button>
                </BootstrapTooltip>
              </div>
            </Typography>

            <Typography>
              <div className={classes.dropdown}>
                <BootstrapTooltip
                  title={
                    <React.Fragment>
                      <Typography color="#666">Open Street Map</Typography>
                      <Typography color="#666">Blog</Typography>
                      <Typography color="#666">Pricing Plans</Typography>
                      <Typography color="#666">Checkout Page</Typography>
                      <Typography color="#666">Invoice Template</Typography>
                      <Typography color="#666">
                        User Interface Elements
                      </Typography>
                      <Typography color="#666">Icons Cheatsheet</Typography>
                      <Typography color="#666">Login & Register</Typography>
                      <Typography color="#666">404 Page</Typography>
                      <Typography color="#666">Contact</Typography>
                    </React.Fragment>
                  }
                >
                  <Button color="#666" variant="h1">
                    Pages
                  </Button>
                </BootstrapTooltip>
              </div>
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={3} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <span class="notification-avatar status-online">
                  <img src="images/user-avatar-small-03.jpg" alt="" />
                </span>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Typography>
              <div>
                <BootstrapTooltip
                  title={
                    <React.Fragment>
                      <Typography color="#666">Home1</Typography>
                      <Typography color="#666">Home2</Typography>
                      <Typography color="#666">Home3</Typography>
                    </React.Fragment>
                  }
                >
                  <Button color="#666" variant="h1">
                    Home
                  </Button>
                </BootstrapTooltip>
              </div>
            </Typography>

            <Typography>
              <div>
                <BootstrapTooltip
                  title={
                    <React.Fragment>
                      <Typography color="#666">Browse Jobs</Typography>
                      <Typography color="#666">Browse Tasks</Typography>
                      <Typography color="#666">Browse Companies</Typography>
                      <Typography color="#666">Job Page</Typography>
                      <Typography color="#666">Task Page</Typography>
                      <Typography color="#666">Company Profile</Typography>
                    </React.Fragment>
                  }
                >
                  <Button color="#666" variant="h1">
                    Find Work
                  </Button>
                </BootstrapTooltip>
              </div>
            </Typography>

            <Typography>
              <div>
                <BootstrapTooltip
                  title={
                    <React.Fragment>
                      <Typography color="#666">Find a Freelancer</Typography>
                      <Typography color="#666">Freelancer Profile</Typography>
                      <Typography color="#666">Post a Job</Typography>
                      <Typography color="#666">Post a Task</Typography>
                    </React.Fragment>
                  }
                >
                  <Button color="#666" variant="h1">
                    For Employers
                  </Button>
                </BootstrapTooltip>
              </div>
            </Typography>

            <Typography>
              <div>
                <BootstrapTooltip
                  title={
                    <React.Fragment>
                      <Typography color="#666">Dashboard</Typography>
                      <Typography color="#666">Messages</Typography>
                      <Typography color="#666">Bookmarks</Typography>
                      <Typography color="#666">Reviews</Typography>
                      <Typography color="#666">Jobs</Typography>
                      <Typography color="#666"> Tasks</Typography>
                      <Typography color="#666">Settings</Typography>
                    </React.Fragment>
                  }
                >
                  <Button color="#666" variant="h1">
                    Dashboard
                  </Button>
                </BootstrapTooltip>
              </div>
            </Typography>

            <Typography>
              <div>
                <BootstrapTooltip
                  title={
                    <React.Fragment>
                      <Typography color="#666">Open Street Map</Typography>
                      <Typography color="#666">Blog</Typography>
                      <Typography color="#666">Pricing Plans</Typography>
                      <Typography color="#666">Checkout Page</Typography>
                      <Typography color="#666">Invoice Template</Typography>
                      <Typography color="#666">
                        User Interface Elements
                      </Typography>
                      <Typography color="#666">Icons Cheatsheet</Typography>
                      <Typography color="#666">Login & Register</Typography>
                      <Typography color="#666">404 Page</Typography>
                      <Typography color="#666">Contact</Typography>
                    </React.Fragment>
                  }
                >
                  <Button color="#666" variant="h1">
                    Pages
                  </Button>
                </BootstrapTooltip>
              </div>
            </Typography>
          </List>
          <Divider />
        </Drawer>
      </div>
    </div>
  );
}
