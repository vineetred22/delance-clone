import React from "react";
import './TabProject.scss'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ManageBidders from "User/Project/ManageBidders/ManageBidders";
import Postproject from "User/Project/Postproject/Postproject";
import { MenuDrawerBar } from "CommonComponent/SideMenuBarComponent/MenuDrawerBar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",

    backgroundColor: theme.palette.background.paper,
    marginTop:"25px",
  
  },
}));

export const TabProjectcomponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className={classes.root}>
        
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Post Project" {...a11yProps(0)} />
            <Tab label="Offers" {...a11yProps(1)} />
          </Tabs>
        
        <Box>
          <TabPanel value={value} index={0}>
            <MenuDrawerBar>
              <Postproject />
            </MenuDrawerBar>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <MenuDrawerBar>
              {" "}
              <ManageBidders />
            </MenuDrawerBar>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};
