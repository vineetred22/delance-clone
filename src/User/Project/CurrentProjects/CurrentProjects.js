import React, { useState } from "react";
import './CurrentProjects.scss';

import Avatar from "@material-ui/core/Avatar";

import { Disputes } from "../Disputes/Disputes";
import CommonModal from 'components/shared/ui-components/common-modal'

import {
  Paper,
  Box,
  Typography,
  Grid,
  
  Button,
  Divider,
} from "@material-ui/core";
export const Currentproject = (props) => {
  let defaultForm = () => <div></div>;

  const [state, setState] = useState({ open: false });
  const [form, setForm] = useState({ defaultForm });

  const handleModal = (component) => {
    setState({ open: true });
    setForm(component);
  };

  const handleClose = () => {
    setState({ open: false });
  };
  return (
    <div>
       <CommonModal open={state.open} handleClose={handleClose}>
        {form}
      </CommonModal>
      <div>
        <Paper component={Box} elevation={2} className="Paperhight mt-3">
          <Box px={3} pt={4} pb={2}>
            <Grid container>
              <Grid item lg={6} xs={12}>
                <div className="current_text">
                <Box className="dashbanner" px={3}>
                  <Box >
                    <Avatar
                      alt="Remy Sharp"
                      src={props.userimg}
                      className="imguser"
                    />
                  </Box>
                  <Box  pt={2} className="namecontent">
                    <Typography>{props.name}</Typography>
                    <Typography>{props.time} </Typography>
                  </Box>
                </Box>
                </div>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Box className="current_btn">
                <Button variant="contained" className="currentbutton">
                  Pay Now
                </Button>
                {/* <Button variant="contained" className="currentbutton">
                  Give Bonus
                </Button> */}
                <Button
                  variant="contained"
                  className="currentbutton"
                  onClick={() => handleModal(<Disputes />)}
                >
                  Open Dispute
                </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <hr />

          <Typography variant="h6" className="dashbannerhading">
            Milestones & Payments
          </Typography>
          <Box px={6} pt={5}>
            <Grid container>
              <Grid item lg={3} xs={12} >
                <Box pb={4} px={1} className="namecontent">
                  <Typography variant="h6">Budget</Typography>
                  <strong>500,000 USDT</strong>
                </Box>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Box pb={4}  px={1} className="namecontent">
                  <Typography variant="h6">In Escrow</Typography>
                  <strong>30,000 USDT</strong>
                </Box>
              </Grid>
             
              <Grid item lg={3} xs={12}>
                <Box pb={4} px={1} className="namecontent">
                  <Typography variant="h6">Total Payments</Typography>
                  <strong>0 USDT</strong>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </div>
    </div>
  );
};
