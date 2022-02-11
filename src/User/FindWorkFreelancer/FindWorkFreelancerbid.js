import { Grid, Paper, Typography, Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./FindWorkFreelancer.scss";
import { GoLocation } from "react-icons/go";
import { FiClock } from "react-icons/fi";
import Chip from "@material-ui/core/Chip";

import CommonModal from 'components/shared/ui-components/common-modal'
import { Link } from "react-router-dom";
export const FindWorkFreelancerbid = (props) => {
  
  return (
    <div>
       
      <div>
      <Paper component={Box} elevation={2} className="Paperhight mt-3">
        <Box pt={5} >
          <Grid container>
            <Grid item lg={8} sm={12}>
              <Box className="findwork_padding">
                <Typography varient="h6" className="bidheading">
                  {" "}
                  {props.name}
                </Typography>
                <Typography className="bidsubheading">
                 
                  <span>
                    {" "}
                    <FiClock /> 2 minutes ago
                  </span>
                </Typography>
                <Typography className="bid_text">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster.
                </Typography>
                <Box pt={2} pb={4}>
                  <Chip label="ios" className="bid_chip" />
                  <Chip label="android" className="bid_chip" />

                  <Chip label="mobile apps" className="bid_chip" />
                  <Chip label="design" className="bid_chip" />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} sm={12}>
              <Box px={3}  >
                <Box className="bid-price">
                  {" "}
                  <Typography>
                    <strong>{props.rate}</strong>
                    {/* <span>Fixed Price</span> */}
                  </Typography>{" "}
                </Box>

                <Box pt={2} pb={4}>
                <Link to="/bidpage">
                  <Button
                    variant="contained"
                    color="primary"
                    className="bid-button"
  
                  >
                  Bid Now
                  </Button>
                  </Link>  
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      </div>
    </div>
  );
};
