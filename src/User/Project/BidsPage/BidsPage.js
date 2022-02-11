import {
  Typography,
  Paper,
  Box,
  Grid,
  TextField,
  InputLabel,
  Button,
} from "@material-ui/core";
import React from "react";
import "./BidsPage.scss";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Checkbox from "@material-ui/core/Checkbox";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputAdornment from "@material-ui/core/InputAdornment";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { BiDollar } from "react-icons/bi";
import { DummyBids } from "../DummyBids";
import { HeaderMainLayout } from "CommonComponent/HeaderMainLayout/HeaderMainLayout";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const top100Films = [
  { title: "Ethereum", value: "Ethereum" },
  { title: "USDC", value: "usdc" },
  { title: "BUSD", value: "busd" },
  { title: "USDT", value: "usdt" },
  { title: "DAI", value: "dai" },
];

export const BidsPage = () => {
  return (
    <div>
      <HeaderMainLayout />
      <div className="col-lg-6 col-12 offset-lg-3 pt-5">
      <Typography variant="h4" className="heading_bid">Place a Bid</Typography>
      <Paper component={Box} elevation={2} className="Paperhight mt-3">
        <Box px={2} pt={2} pb={3}>
          <Box px={2}>
            <Typography className="bidsheading">
              You will be able to edit your bid until the project is awarded to
              someone
            </Typography>
          </Box>
          <Box>
            <Box px={2} pt={2}>
              <Typography className="bidsheading">Bid Details</Typography>
            </Box>

            <Grid container>
              <Grid item lg={6} sm={12}>
                <Box px={2}>
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4 "
                  >
                    Rate
                  </InputLabel>

                  <TextField
                    id="outlined-search"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BiDollar className="dolaricon" />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="400"
                    className="accountfield"
                    type="search"
                    variant="outlined"
                  />
                </Box>
              </Grid>

              <Grid item lg={6} sm={12}>
                <Box px={2}>
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Select Currency
                  </InputLabel>
                  <Autocomplete
                    id=" Select Currency"
                    
                    options={DummyBids}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        className="autofield"
                       
                      />
                    )}
                  />
                  {/* <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={top100Films}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(option, { selected }) => (
                      <React.Fragment>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option.title}
                      </React.Fragment>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        className="autofield"
                      />
                    )}
                  /> */}
                </Box>
              </Grid>
          
            </Grid>
            <Box px={2} mt={2}>
              <InputLabel id="demo-simple-select-label" className=" mb-3">
                Cover Letter
              </InputLabel>
              <TextareaAutosize
                aria-label="minimum height"
                rows={6}
                style={{ width: "100%" }}
              />
            </Box>
          </Box>

          <Box pt={3} px={2}>
            <Button variant="contained" className="bidbutton">
              Place Bid
            </Button>
          </Box>
        </Box>
      </Paper>
      </div>
    </div>
  );
};
