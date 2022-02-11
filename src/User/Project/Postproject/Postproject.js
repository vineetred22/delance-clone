import React, { useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import MultiSelect from "react-multi-select-component";

import "./Postproject.css";
import {
  Paper,
  Box,
  Typography,
  Grid,
  InputLabel,
  TextField,
  Button,
  FormControl,
  FormLabel,
} from "@material-ui/core";

import { DummyData } from "UserAuthpage/EmployerSignup/DummyData";

import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Checkbox from "@material-ui/core/Checkbox";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const top100Films = [
  { title: "Ethereum", value: "Ethereum" },
  { title: "USDC", value: "usdc" },
  { title: "BUSD", value: "busd" },
  { title: "USDT", value: "usdt" },
  { title: "DAI", value: "dai" },
];

const Postproject = () => {
  const [selected, setSelected] = useState([]);
  // const options = [
  //   { label: "Ethereum", value: "Ethereum" },
  //   { label: "USDC", value: "usdc" },
  //   { label: "BUSD", value: "busd" },
  //   { label: "USDT", value: "usdt" },
  //   { label: "DAI", value: "dai" },
  // ];

  return (
    <div>
      <Box>
        <Typography variant="h4" className="pb-4 pt-2">
          Post a Project
        </Typography>

        <Paper component={Box} elevation={2} className="Paperhight">
          <Typography variant="h6" className="dashboard-typo">
            <FiFolderPlus className="dashboard_icon" />
            <Box className="dash_heading">Project Submission Form</Box>
          </Typography>
          <Box className="dash_padding" px={4}>
            <Grid container>
              <Grid item lg={6} sm={12}>
                <Box px={2} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Project Name
                  </InputLabel>

                  <TextField
                    id="outlined-search"
                    fullWidth
                    // defaultValue="Tom"
                    placeholder="e.g. build me a website"
                    className="accountfield"
                    type="search"
                    variant="outlined"
                  />
                </Box>
              </Grid>

              {/* <Grid item lg={4} sm={12}>
                <Box px={2}>
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    City
                  </InputLabel>

                  <TextField
                    id="outlined-search"
                    fullWidth
                 
                    placeholder="City name"
                    className="accountfield"
                    type="search"
                    variant="outlined"
                  />
                </Box>
              </Grid>
              <Grid item lg={4} sm={12}>
                <Box px={2}>
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Country
                  </InputLabel>

                  <TextField
                    id="outlined-search"
                    fullWidth
                    // defaultValue="Tom"
                    placeholder="Country name"
                    className="accountfield"
                    type="search"
                    variant="outlined"
                  />
                </Box>
              </Grid> */}

              {/* <Grid item lg={4} sm={12}>
                <Box px={2}>
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    City
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
              </Grid> */}

              <Grid item lg={6} sm={12}>
                <Box px={2} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    What is your estimated budget?
                  </InputLabel>

                  <TextField
                    id="outlined-search"
                    fullWidth
                    // defaultValue="Tom"
                    placeholder="Budget"
                    className="accountfield"
                    type="search"
                    variant="outlined"
                  />
                </Box>
              </Grid>

              <Grid item lg={6} sm={12}>
                <Box px={2} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    What skills are required?
                  </InputLabel>

                  <Autocomplete
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
                  />
                </Box>
              </Grid>
            </Grid>
            <Box px={2} className="project_padding">
              {/* <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    name="checkedI"
                  />
                }
                label="Fixed Price Project"
              /> */}
              {/* <RadioGroup aria-label="project" name="project">
                <FormControlLabel
                  value="project"
                  control={<Radio />}
                  label="Fixed Price Project"
                />
              </RadioGroup> */}
            </Box>
            <Box px={2} pt={2} className="project_padding">
              <FormControl>
                <FormLabel id="demo-simple-select-label">
                  {" "}
                  Project length
                </FormLabel>

                <RadioGroup row name="length" required>
                  <FormControlLabel
                    value="lessthen"
                    control={<Radio />}
                    label="Less than a 1 week"
                  />
                  <FormControlLabel
                    value="short"
                    control={<Radio />}
                    label="short term (less than 3 months)"
                  />
                  <FormControlLabel
                    value="long"
                    control={<Radio />}
                    label="long term (3+ months)"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box px={2} pt={2} className="project_padding">
              {/* <InputLabel id="demo-simple-select-label" >
                Preferred Cryptocurrency
              </InputLabel>
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                
                labelledBy="Select"
              /> */}
              <InputLabel id="demo-simple-select-label">
                Preferred Cryptocurrency
              </InputLabel>
              <Autocomplete
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
              />
            </Box>

            <Box px={2} mt={2} className="project_padding">
              <InputLabel id="demo-simple-select-label" className=" mb-3">
                Describe Your Project
              </InputLabel>
              <TextareaAutosize
                aria-label="minimum height"
                rows={7}
                placeholder="MinLength 100 ,MaxLength 500 "
                style={{ width: "100%" }}
              />
            </Box>
         
        
        <Box px={2}  pt={2} className="setting_button">
          <Button variant="contained" color="primary" className="button">
            Post a Project
          </Button>
        </Box>
        </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Postproject;
