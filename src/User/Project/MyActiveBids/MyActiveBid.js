import React from "react";
import "./MyActiveBid.css";
import { MdGavel } from "react-icons/md";
import {
  Paper,
  Box,
  Typography,
  Button,
  Grid,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

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

export const MyActiveBid = () => {
  return (
    <div>
      <div className="dashboard-headline">
        <h3>My Active Bids</h3>
      </div>
      <Paper component={Box} elevation={2} className="Paperhight">
        <Typography variant="h6" className="dashboard-typo">
          <MdGavel className="dashboard_icon" />
          <Box className="dash_heading">4 Bidders</Box>
        </Typography>
        <Box className="bid_padding">
        <Box >
          <Box pb={3} pt={3} className="btn_bideder">
            <Typography variant="h6">WordPress Guru Needed</Typography>
          </Box>
          <Grid container>
            <Grid item lg={6} sm={12}>
              <Box>
                <Breadcrumbs aria-label="breadcrumb" className="bread_crumb">
                  <Link
                    color="inherit"
                    href="/"
                    onClick={handleClick}
                    className="bread_color"
                  >
                    $2,550
                    <br />
                    <strong>Fixed price</strong>
                  </Link>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Grid>
          <Box pb={5} pt={3} className="btn_bideder">
            <BootstrapTooltip title="Edit" placement="top-start">
              <Button className="editbtn ">
                <FiEdit className="iconsize" />
              </Button>
            </BootstrapTooltip>
            <BootstrapTooltip title="Delete" placement="top-start">
              <Button className=" editbtn ">
                <RiDeleteBinLine className="iconsize" />
              </Button>
            </BootstrapTooltip>
          </Box>
        </Box>
        <Box>
          <Box pb={3} pt={3} className="btn_bideder">
            <Typography variant="h6">
              Build me a website in Angular JS
            </Typography>
          </Box>
          <Grid container>
            <Grid item lg={6} sm={12}>
              <Box>
              <Breadcrumbs aria-label="breadcrumb" className="bread_crumb">
                  <Link
                    color="inherit"
                    href="/"
                    onClick={handleClick}
                    className="bread_color"
                  >
                    $4,550
                    <br />
                    <strong>Fixed price</strong>
                  </Link>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Grid>
          <Box pb={5} pt={3} className="btn_bideder">
            <BootstrapTooltip title="Edit" placement="top-start">
              <Button className="editbtn ">
                <FiEdit className="iconsize" />
              </Button>
            </BootstrapTooltip>
            <BootstrapTooltip title="Delete" placement="top-start">
              <Button className=" editbtn ">
                <RiDeleteBinLine className="iconsize" />
              </Button>
            </BootstrapTooltip>
          </Box>
        </Box>
        <Box>
          <Box pb={3} pt={3} className="btn_bideder">
            <Typography variant="h6">Android and iOS React Appe</Typography>
          </Box>
          <Grid container>
            <Grid item lg={6} sm={12}>
              <Box>
              <Breadcrumbs aria-label="breadcrumb" className="bread_crumb">
                  <Link
                    color="inherit"
                    href="/"
                    onClick={handleClick}
                    className="bread_color"
                  >
                    $2,390
                    <br />
                    <strong>Fixed price</strong>
                  </Link>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Grid>
          <Box pb={5} pt={3} className="btn_bideder">
            <BootstrapTooltip title="Edit" placement="top-start">
              <Button className="editbtn ">
                <FiEdit className="iconsize" />
              </Button>
            </BootstrapTooltip>
            <BootstrapTooltip title="Delete" placement="top-start">
              <Button className=" editbtn ">
                <RiDeleteBinLine className="iconsize" />
              </Button>
            </BootstrapTooltip>
          </Box>
        </Box>
        <Box >
          <Box pb={3} pt={3} className="btn_bideder">
            <Typography variant="h6">Write Simple Python Script</Typography>
          </Box>
          <Grid container>
            <Grid item lg={6} sm={12}>
              <Box>
              <Breadcrumbs aria-label="breadcrumb" className="bread_crumb">
                  <Link
                    color="inherit"
                    href="/"
                    onClick={handleClick}
                    className="bread_color"
                  >
                    $150
                    <br />
                    <strong>Fixed price</strong>
                  </Link>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Grid>
          <Box pb={5} pt={3} className="btn_bideder">
            <BootstrapTooltip title="Edit" placement="top-start">
              <Button className="editbtn ">
                <FiEdit className="iconsize" />
              </Button>
            </BootstrapTooltip>
            <BootstrapTooltip title="Delete" placement="top-start">
              <Button className=" editbtn ">
                <RiDeleteBinLine className="iconsize" />
              </Button>
            </BootstrapTooltip>
          </Box>
        </Box>
        </Box>
      </Paper>
      <Box></Box>
    </div>
  );
};
