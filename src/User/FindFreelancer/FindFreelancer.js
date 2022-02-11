import {
  Box,
  Grid,
  TextField,
  InputLabel,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import { DummyData } from "UserAuthpage/EmployerSignup/DummyData";
import { FiPlus } from "react-icons/fi";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { FindFreelancerList } from "./FindFreelancerList";
import { FooterLayout } from "CommonComponent/FooterLayout/FooterLayout";
import { HeaderMainLayout } from "CommonComponent/HeaderMainLayout/HeaderMainLayout";

const AirbnbSlider = withStyles({
  root: {
    color: "#7c4dff",
    height: 3,
    paddingTop: 65,
  },
  thumb: {
    height: 21,
    width: 21,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0 2px 3px 1px",
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
  },
})(Slider);
function valuetext(value) {
  return `${value}°C`;
}

export const FindFreelancer = () => {
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    
      <div>
        <HeaderMainLayout />
        <Box pt={10}  pb={5}>
          <Grid container>
            <Grid item lg={4} sm={12} style={{width:"100%"}}>
              <Box className="find_padding">
              {/* <Box >
                <InputLabel id="demo-simple-select-label" className="mt-2 mb-4">
                  Location
                </InputLabel>

                <TextField
                  id="outlined-search"
                  fullWidth
                  className="accountfield"
                  placeholder="Location"
                  type="search"
                  variant="outlined"
                />
              </Box>
              <Box >
                <InputLabel id="demo-simple-select-label" className="mt-2 mb-4">
                  Category
                </InputLabel>
                <Autocomplete
                  id=" Category"
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
              <Box >
                <InputLabel
                  id="demo-simple-select-label"
                  className="mt-4 mb-4 "
                >
                  Keywords
                </InputLabel>

                <TextField
                  id="outlined-search"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FiPlus className="plusicon" />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="e.g. task title"
                  className="accountfield"
                  type="search"
                  variant="outlined"
                />
              </Box>
            
              <Box>
                <Typography gutterBottom id="demo-simple-select-label">
                  Hourly Rate
                </Typography>
                <Box px={1}>
                  <AirbnbSlider
                    // ThumbComponent={AirbnbThumbComponent}
                    getAriaLabel={(index) =>
                      index === 0 ? "Minimum price" : "Maximum price"
                    }
                    defaultValue={[15, 60]}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-always"
                    valueLabelDisplay="on"
                  />
                </Box>
              </Box> */}
              <Box  pt={2}>
                <Typography id="demo-simple-select-label">Skills</Typography>
                <Box pt={2} pb={4}>
                  <Chip label="front-end dev" className="skillchip" />
                  <Chip label="angular" className="skillchip" />
                  <Chip label="react" className="skillchip" />
                  <Chip label="vue js" className="skillchip" />
                  <Chip label="web apps" className="skillchip" />
                  <Chip label="design" className="skillchip" />
                  <Chip label="wordpress" className="skillchip" />
                </Box>
              </Box>
              <Box >
                <TextField
                  id="outlined-search"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FiPlus className="plusicon" />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="add more skills"
                  className="accountfield"
                  type="search"
                  variant="outlined"
                />
              </Box>
              </Box>
            </Grid>
            <Grid item lg={8} sm={12}>
              <Box  className="responsive_page" >
                {/* <Box className="bids_select">
                  <Typography>Sort by:</Typography>
                  <Box pr={3}>
                    <FormControl>
                      <Select
                        native
                        value={state.age}
                        onChange={handleChange}
                        inputProps={{
                          name: "age",
                          id: "outlined-age-native-simple",
                          className: "selct_option",
                        }}
                      >
                        <option value={10}>Newest</option>
                        <option value={20}>Relevance</option>
                        <option value={30}>Random</option>
                        <option value={20}>Oldest</option>
                      </Select>
                    </FormControl>
                  </Box>
                </Box> */}
                 <Box>
                  <FindFreelancerList />
                </Box>
                {/* <Box>
                  <FindFreelancerList />
                </Box>
                <Box>
                  <FindFreelancerList />
                </Box>
                <Box>
                  <FindFreelancerList />
                </Box>  */}
                
              </Box>
            </Grid>
          </Grid>
        </Box>
        <div>
          <FooterLayout />
        </div>
      </div>
 
  );
};
