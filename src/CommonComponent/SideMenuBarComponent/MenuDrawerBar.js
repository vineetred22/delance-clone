import React, { useState } from "react";
import "./sidebarnavigation.scss";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";

import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { RiDashboardLine, RiQuestionAnswerLine } from "react-icons/ri";
import { AiOutlineStar, AiOutlineSetting } from "react-icons/ai";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  MdRateReview,
  MdBusinessCenter,
  MdAssignment,
  MdPowerSettingsNew,
} from "react-icons/md";
import {
  Container,
  Paper,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@material-ui/core";
import { CgProfile } from "react-icons/cg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const MenuDrawerBar = (props) => {
  const [job, setjob] = useState(false);
  const [task, settask] = useState(false);
  const [open, setOpen] = React.useState(true);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="ggtt">
      {/* <div className={classes.toolbar} /> */}
      <Divider />

      <List className="">
        <Box mt={2}>
          {" "}
          <Typography Variant="h6" className="clr_type_hding">
            {" "}
            Start{" "}
          </Typography>{" "}
        </Box>
        <Box mt={1}>
          <NavLink to="/userdashboard" activeClassName="selected" className="ttle_clr_ssbr">
            <ListItem button>
              <ListItemIcon>
                <RiDashboardLine className="font_job_si" />
              </ListItemIcon>{" "}
              <ListItemText primary="Dashboard" />
            </ListItem>
          </NavLink>
          <NavLink to="/messagecomponent" activeClassName="selected" className="ttle_clr_ssbr">
            <ListItem button className="mt-2">
              <ListItemIcon>
                <RiQuestionAnswerLine className="font_job_si" />
              </ListItemIcon>{" "}
              <ListItemText primary="Messages" />
            </ListItem>
          </NavLink>
          <NavLink to="/userreview" activeClassName="selected" className="ttle_clr_ssbr">
            <ListItem button className="mt-2">
              <ListItemIcon>
                <MdRateReview className="font_job_si" />
              </ListItemIcon>{" "}
              <ListItemText primary="Reviews" />{" "}
            </ListItem>
          </NavLink>
        </Box>
        <Box mt={2}>
          {" "}
          <Typography Variant="h6" className="clr_type_hding">
            {" "}
            Organize and Manage{" "}
          </Typography>{" "}
        </Box>

        <Box mt={1}>
          <ListItem button onClick={() => settask(!task)} className="mt-2">
            <ListItemIcon>
              <MdAssignment className="font_job_si" />
            </ListItemIcon>
            <ListItemText primary="Projects" className="jobs_clr" />
            <ListItemIcon>
              <ArrowDropDownIcon />
            </ListItemIcon>
          </ListItem>
          <Collapse in={task} className="textpadding">
            <NavLink to="/manageprojects" activeClassName="selected" className="ttle_clr_ssbr">
              <ListItem button className={classes.nesteditem}
                 >
                <Typography  fontWeight="fontWeightMedium">
                  {" "}
                  <ListItemText
                    primary="Manage  Projects"
                  />{" "}
                </Typography>
              </ListItem>
            </NavLink>
            <NavLink to="/MyActiveBidsComponent" activeClassName="selected" className="ttle_clr_ssbr">
              <ListItem button className={classes.nesteditem} 
                    className="mt-2 ttle_clr_ssbr">
                <Typography  fontWeight="fontWeightMedium">
                {" "}
                <ListItemText
                  primary="My Active Bids"
                />{" "}
                </Typography>
              </ListItem>
            </NavLink>
            <NavLink to="/postproject" activeClassName="selected" className="ttle_clr_ssbr">
              <ListItem button className={classes.nesteditem} className="mt-2 ttle_clr_ssbr">
                {" "}
                <Typography  fontWeight="fontWeightMedium">
                <ListItemText
                  primary="Post a Project"
                />{" "}
                </Typography>
              </ListItem>
            </NavLink>
            <hr className="hrcolor" />
          </Collapse>
        </Box>

        {/* <ListItem button>
          <ListItemIcon>
            
          </ListItemIcon>
          <Link to="/DisputesComponent">
            {" "}
            <ListItemText className="ttle_clr_ssbr" primary="Disputes" />
          </Link>
        </ListItem> */}
        <NavLink to="/currentproject" activeClassName="selected" className="ttle_clr_ssbr">
          <ListItem button >
            <ListItemIcon></ListItemIcon>{" "}
            <Typography  fontWeight="fontWeightMedium">
            <ListItemText
             
              primary="Current Projects"
            />
            </Typography>
          </ListItem>
        </NavLink>
        <Box mt={2}>
          {" "}
          <Typography Variant="h6" className="clr_type_hding">
            {" "}
            Accounts{" "}
          </Typography>{" "}
        </Box>

        <Box mt={1}>
          <NavLink to="/freelancerupdateprofile" activeClassName="selected" className="ttle_clr_ssbr">
            <ListItem  button>
              <ListItemIcon>
                <CgProfile className="font_job_si" />
              </ListItemIcon>{" "}
              <Typography  fontWeight="fontWeightMedium">
              <ListItemText primary="User Profile" />
              </Typography>
            </ListItem>
          </NavLink>
          {/* <NavLink to="/userdashboard" activeClassName="selected" className="ttle_clr_ssbr">
            <ListItem button>
              <ListItemIcon>
                <RiDashboardLine className="font_job_si" />
              </ListItemIcon>{" "}
              <ListItemText primary="Dashboard" />
            </ListItem>
          </NavLink> */}
          <NavLink to="/login" activeClassName="selected" className="ttle_clr_ssbr">
            <ListItem button className="mt-2 mb-2 ttle_clr_ssbr">
              <ListItemIcon>
                <MdPowerSettingsNew className="font_job_si" />
              </ListItemIcon>{" "}
              <Typography color="secondary" fontWeight="fontWeightMedium">
              <ListItemText primary="Logout" />{" "}
              </Typography>
            </ListItem>
          </NavLink>
        </Box>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div className="ggt">
        <div className={classes.root}>
          <CssBaseline />
          <AppBar className="ooi">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap></Typography>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />

            {props.children}
            {/* <FreelasncerDashboardSidebar/> */}
          </main>
        </div>
      </div>
    </>
  );
};
