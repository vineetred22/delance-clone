import React from "react";
import {
  Paper,
  Box,
  Typography,
  Grid,
  InputLabel,
  TextField,
  Button,
} from "@material-ui/core";
import "./Disputes.scss";
import { FaUser } from "react-icons/fa";
import { DummyData } from "UserAuthpage/EmployerSignup/DummyData";
import Autocomplete from "@material-ui/lab/Autocomplete";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export const Disputes = () => {
  return (
    <div>
      <div>
        <Typography variant="h4"> Disputes</Typography>
        <Paper component={Box} elevation={2} className="Paperhight mt-3">
          <Typography variant="h6" className="dashboard-typo">
            <FaUser className="dashboard_icon" />
            <Box className="dash_heading">Open a dispute</Box>
          </Typography>
          <Box pb={5} px={2}>
            <form>
             
                <Box px={2}>
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-4 mb-3"
                  >
                    Please select your project
                  </InputLabel>
                  <Autocomplete
                    id=" Enter your City"
                    className="selectfield"
                    options={DummyData}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        name="City"
                        fullWidth
                      />
                    )}
                  />
                </Box>
           
                <Box px={2} pt={2}>
                  <InputLabel id="demo-simple-select-label" className=" mb-3">
                    Please tell us more about why you are opening this dispute
                  </InputLabel>
                  <TextareaAutosize
                    aria-label="minimum height"
                    rows={7}
                    style={{ width: "100%" }}
                  />
                </Box>
         

              <Box px={2}>
                <Button
                  variant="contained"
                  color="primary"
                  className=" buttons "
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </div>
    </div>
  );
};
