import {
  Box,
  Paper,
  Typography,
  TextField,
  Grid,
  Button,
  makeStyles,
  InputLabel,
} from "@material-ui/core";
import MultiSelect from "react-multi-select-component";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { CgProfile } from "react-icons/cg";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineCamera } from "react-icons/ai";
import {
  MdBusinessCenter,
  MdFace,
  MdHistory,
  MdLockOutline,
} from "react-icons/md";
import "./userform.scss";
import useravatar from "../../../assets/images/user-avatar-placeholder.png";
import Avatar from "@material-ui/core/Avatar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { DummyData } from "UserAuthpage/EmployerSignup/DummyData";
import { useForm, Controller } from "react-hook-form";
import Tooltip from "@material-ui/core/Tooltip";

import { FaGraduationCap } from "react-icons/fa";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { CountryData } from "UserAuthpage/DummyData/CountryData";
import { StateData } from "UserAuthpage/DummyData/StateData";
import { CityDummyData } from "UserAuthpage/DummyData/CityDummyData";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const top100Films = [
  { title: "C", value: "c" },
  { title: "C++", value: "c++" },
  { title: "JAVA", value: "java" },
  { title: "HTML", value: "html" },
  { title: "CSS", value: "css" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },

  name: { "font-size": "26px", border: "none" },
  slider: {
    width: "80%",
    top: "20%",
    left: "50%",
  },
}));

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: 13,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

export const UserSettingProfileForm = (props: any) => {
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });
  const handleToSelect = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const [count, setCount] = useState();
  const { register, handleSubmit, control, errors, watch } = useForm({
    mode: "onBlur",
  });
  const [selected, setSelected] = useState([]);

  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const classes = useStyles(props);

  const handleFormSelect = (e, newValue) => {
    setName(newValue);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const [name, setName] = React.useState("$35");
  const [isNameFocused, setIsNamedFocused] = React.useState(false);
  // const [picture, setPicture] = useState(
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGfH9_cCHmpKf7AAbqfjTM5N1Td0RY2yGqw&usqp=CAU"
  // );

  // const onChangePicture = (e) => {
  //   setPicture(URL.createObjectURL(e.target.files[0]));

  //   if (picture && picture.length > 0) {
  //     let formData = serialize({
  //       profile_pic: e.target.files[0],
  //       _id: localStorage.getItem("humlog_user"),
  //     });

  const [useravatar, setMyImage] = React.useState(null);
  const uploadImage = (e) => {
    setMyImage(URL.createObjectURL(e.target.files[0]));
  };

  // const imageHandler = (e) => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setState({ useravatar: reader.result });
  //     }
  //   };
  //   reader.readAsDataURL(e.target.file[0]);
  // };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper component={Box} elevation={3} className="Paperhight">
          {/* My Account start */}
          <Typography variant="h6" className="dashboard-typo">
            <RiAccountCircleLine className="dashboard_icon" />
            <Box className="dash_heading">My Account</Box>
          </Typography>

          <Box className="boxpadding">
            <Grid container>
              <Grid item lg={2} sm={12}>
                <Box className="img_ae">
                  <Box className="avatar-wrapper">
                    <img className="profile-pic" src={useravatar} alt="..." />

                    <input
                      type="file"
                      accept="image/*"
                      name="image-upload"
                      id="input"
                      onChange={uploadImage}
                    />
                    <div className="label">
                      <label className="upload-button" htmlFor="input">
                        <i className="material-icons">
                          <AiOutlineCamera />
                        </i>
                      </label>
                    </div>
                  </Box>
                </Box>
              </Grid>

              <Grid item lg={10} sm={12}>
                <Box>
                  <Grid container>
                    <Grid item lg={6} sm={12}>
                      <Box px={1} className="project_padding">
                        <InputLabel
                          id="demo-simple-select-label"
                          className="mt-2 mb-4"
                        >
                          First Name
                        </InputLabel>

                        <TextField
                          id="outlined-search"
                          fullWidth
                          // defaultValue="Tom"
                          placeholder="Enter your First Name"
                          className="accountfield"
                          type="search"
                          variant="outlined"
                          name="firstname"
                          inputRef={register()}
                        />
                      </Box>
                    </Grid>

                    <Grid item lg={6} sm={12}>
                      <Box px={1} className="project_padding">
                        <InputLabel
                          id="demo-simple-select-label"
                          className="mt-2 mb-4"
                        >
                          Last Name
                        </InputLabel>

                        <TextField
                          id="outlined-search"
                          fullWidth
                          className="accountfield"
                          placeholder="Enter your Last Name"
                          type="search"
                          variant="outlined"
                          name="lastname"
                          inputRef={register()}
                        />
                      </Box>
                    </Grid>

                    <Grid item lg={6} sm={12}>
                      <Box px={1} className="project_padding">
                        <InputLabel
                          id="demo-simple-select-label"
                          className="mt-2 mb-4"
                        >
                          Account Type
                        </InputLabel>

                        <ToggleButtonGroup
                          value={alignment}
                          exclusive
                          onChange={handleAlignment}
                          aria-label="text alignment"
                        >
                          <ToggleButton
                            value="left"
                            aria-label="left aligned"
                            className="togglebutton"
                          >
                            <RiAccountCircleLine className="typeicon" />
                            <Box className="box_text"> Freelancer</Box>
                          </ToggleButton>
                          <ToggleButton
                            value="center"
                            aria-label="centered"
                            className="togglebutton1"
                          >
                            <MdBusinessCenter className="typeicon" />
                            <Box className="box_text"> Employer </Box>
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </Box>
                    </Grid>

                    <Grid item lg={6} sm={12}>
                      <Box px={1} className="project_padding">
                        <InputLabel
                          id="demo-simple-select-label"
                          className="mt-2 mb-4"
                        >
                          Email
                        </InputLabel>
                        <TextField
                          id="outlined-search"
                          fullWidth
                          placeholder="Enter your Email address"
                          type="search"
                          variant="outlined"
                          name="email"
                          inputRef={register()}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* My Account end */}
          {/* My profile start */}

          <Typography variant="h6" className="dashboard-typo">
            <MdFace className="dashboard_icon" />
            <Box className="dash_heading"> My Profile</Box>
          </Typography>
          <Box className="boxpadding">
            <Grid container>
              <Grid item lg={6} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4 "
                  >
                    Set your <strong>minimal hourly rate (USD)</strong>
                  </InputLabel>
                  <TextField
                    id="outlined-search "
                    fullWidth
                    className="accountfield "
                    // placeholder="$35"
                    type="search"
                    variant="outlined"
                    name="hourly_rate"
                    inputRef={register()}
                  />
                </Box>
              </Grid>

              <Grid item lg={6} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Skills
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

              <Grid item lg={6} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Tagline
                  </InputLabel>
                  <TextField
                    id="outlined-search "
                    fullWidth
                    className="accountfield "
                    placeholder="iOS Expert + Node Dev"
                    type="search"
                    variant="outlined"
                    name="add_tagline"
                    inputRef={register()}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Enter your country
                  </InputLabel>
                  <Autocomplete
                    id=" Enter your country"
                    className="selectfield"
                    options={CountryData}
                    getOptionLabel={(option) => option.countryname}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        name="country"
                        inputRef={register({
                          // Public_Message
                          required: " Enter your country",
                        })}
                        require
                        error={Boolean(errors.country)}
                        helperText={errors.country?.message}
                      />
                    )}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Enter your state
                  </InputLabel>
                  <Autocomplete
                    id=" Enter your state"
                    className="selectfield"
                    options={StateData}
                    getOptionLabel={(option) => option.statename}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        name="state"
                        inputRef={register({
                          // Public_Message
                          required: " Enter your state",
                        })}
                        require
                        error={Boolean(errors.state)}
                        helperText={errors.state?.message}
                      />
                    )}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Enter your city
                  </InputLabel>
                  <Autocomplete
                    id=" Enter your city"
                    className="selectfield"
                    options={CityDummyData}
                    getOptionLabel={(option) => option.cityname}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        name="city"
                        inputRef={register({
                          // Public_Message
                          required: " Enter your city",
                        })}
                        require
                        error={Boolean(errors.city)}
                        helperText={errors.city?.message}
                      />
                    )}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box px={1} pt={2} className="project_padding">
              <InputLabel id="demo-simple-select-label" c className="mt-2 mb-4">
                Introduce Yourself
              </InputLabel>
              <TextareaAutosize
                aria-label="minimum height"
                name="description"
                rows={8}
                fullWidth
                placeholder="Please include at least 50 words about yourself. Max 500 words"
                style={{ width: "100%" }}
                inputRef={register({
                  required: "Please enter your Profile description.",

                  maxLength: {
                    value: 500,
                    message: "Description should be less than 500 words",
                  },

                  minLength: {
                    value: 50,
                    message: "Please include at least 50 words about yourself.",
                  },
                })}
                error={Boolean(errors.description)}
                helperText={errors.description?.message}
              />

              {count}
            </Box>
            {/* end  slider codes  end  */}
          </Box>
          {/* My profile end */}

          {/* <Box>
          <Typography variant="h6" className="dashboard-typo">
            <CgProfile className="dashboard_icon" />
            <Box className="dash_heading"> Social Profiles</Box>
          </Typography>
          <BootstrapTooltip
                    title="Linkedin"
                    placement="top"
                    className="icontoltip"
                  >
                    
                   <i>
                      <FaLinkedin />
                    </i> 
                  </BootstrapTooltip>
          </Box> */}

          <Typography variant="h6" className="dashboard-typo">
            <CgProfile className="dashboard_icon" />
            <Box className="dash_heading"> Social Profiles</Box>
          </Typography>
          <Box className="boxpadding">
            <Grid container>
              <Grid item lg={4} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    LinkedIn
                  </InputLabel>

                  <TextField
                    id="outlined-search"
                    fullWidth
                    className="accountfield"
                    placeholder="Enter your LinkedIn Profile URL"
                    type="search"
                    variant="outlined"
                    name="linkedin_link"
                    inputRef={register()}
                  />
                </Box>
              </Grid>
              <Grid item lg={4} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Portfolio
                  </InputLabel>

                  <TextField
                    id="outlined-search"
                    fullWidth
                    className="accountfield"
                    placeholder="Enter your Porfolio site URL"
                    type="search"
                    variant="outlined"
                    name="portfolio_site_link"
                    inputRef={register()}
                  />
                </Box>
              </Grid>
              <Grid item lg={4} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Github
                  </InputLabel>

                  <TextField
                    id="outlined-search"
                    fullWidth
                    className="accountfield"
                    placeholder="Enter your Github URL"
                    type="search"
                    variant="outlined"
                    name="github_link"
                    inputRef={register()}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Typography variant="h6" className="dashboard-typo">
            <FaGraduationCap className="dashboard_icon" />
            <Box className="dash_heading"> Education</Box>
          </Typography>
          <Box className="boxpadding">
            <Grid container>
              <Grid item lg={6} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Select University
                  </InputLabel>
                  <Autocomplete
                    id=" Enter your University"
                    className="selectfield"
                    options={DummyData}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        name="University"
                        fullWidth
                      />
                    )}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Course
                  </InputLabel>
                  <Autocomplete
                    id="Enter your Degree or Certification"
                    className="selectfield"
                    options={DummyData}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        name=" Courses"
                        fullWidth
                      />
                    )}
                  />
                </Box>
              </Grid>
              <Grid item lg={3} xs={12}>
                <Box px={1} pt={2} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-3"
                  >
                    From:
                  </InputLabel>
                  <TextField
                    id="date"
                    type="date"
                    fullWidth
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Controller
                      render={(props) => (
                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-dialog"
                          format="MM/dd/yyyy"
                          // label="Date of Admission"
                          
                          value={props.value}
                          onChange={props.onChange}
                          error={Boolean(errors.year_admission)}
                          helperText={errors.year_admission?.message}
                        />
                      )}
                      name="year_admission"
                      // defaultValue={null}
                      control={control}
                      rules={{
                        required:"Please select admission date.",
                      }}
                    />
                  </MuiPickersUtilsProvider> */}
                </Box>
              </Grid>
              <Grid item lg={3} xs={12}>
                <Box px={1} pt={2} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-3"
                  >
                    To:
                  </InputLabel>

                  <TextField
                    id="date"
                    type="date"
                    fullWidth
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Grid>
              {/* <Grid item lg={6} sm={12}>
                <Box px={1} pt={2} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Year
                  </InputLabel>

                  <FormControl variant="outlined">
                    <InputLabel>Form</InputLabel>
                    <Select
                      native
                      value={state.age}
                      onChange={handleFormSelect}
                      inputProps={{
                        name: "age",
                        id: "outlined-age-native-simple",
                        className: "yearselect",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>2017</option>
                      <option value={20}>2018</option>
                      <option value={30}>2019</option>
                    </Select>
                  </FormControl>

                  <FormControl
                    variant="outlined"
                    style={{ marginLeft: "10px" }}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      To
                    </InputLabel>
                    <Select
                      native
                      value={state.age}
                      onChange={handleToSelect}
                      inputProps={{
                        name: "age",
                        id: "outlined-age-native-simple",
                        className: "yearselect",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>2022</option>
                      <option value={20}>2023</option>
                      <option value={30}>2024</option>
                    </Select>
                  </FormControl>
                </Box>
              </Grid> */}
            </Grid>
          </Box>
          <Typography variant="h6" className="dashboard-typo">
            <MdHistory className="dashboard_icon" />
            <Box className="dash_heading">Employment History</Box>
          </Typography>
          <Box className="boxpadding">
            <Grid container>
              <Grid item lg={6} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    {/* Designation */}
                    Job Title
                  </InputLabel>
                  <Autocomplete
                    id=" Enter your University"
                    className="selectfield"
                    options={DummyData}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        name="University"
                        fullWidth
                      />
                    )}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    Company Name
                  </InputLabel>
                  <TextField
                    id="outlined-search"
                    fullWidth
                    className="accountfield"
                    placeholder="Enter your Company Name"
                    type="search"
                    variant="outlined"
                    name="linkedin_link"
                  />
                </Box>
              </Grid>
              <Grid item lg={3} xs={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-3"
                  >
                    Duration (From:)
                  </InputLabel>

                  <TextField
                    id="date"
                    type="date"
                    fullWidth
                    defaultValue="2016-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Grid>
              <Grid item lg={3} xs={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-3"
                  >
                    To:
                  </InputLabel>

                  <TextField
                    id="date"
                    type="date"
                    fullWidth
                    defaultValue="2018-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Grid>
              {/* <Grid item lg={6} sm={12}>
                <Box px={1} className="project_padding">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="mt-2 mb-4"
                  >
                    To
                  </InputLabel>

                  <FormControl variant="outlined">
                    <InputLabel>Month</InputLabel>
                    <Select
                      native
                      value={state.age}
                      onChange={handleFormSelect}
                      inputProps={{
                        name: "age",
                        id: "outlined-age-native-simple",
                        className: "yearselect",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>March</option>
                      <option value={20}>April</option>
                      <option value={30}>May</option>
                      <option value={30}>Jun</option>
                      <option value={30}>July</option>
                    </Select>
                  </FormControl>

                  <FormControl
                    variant="outlined"
                    style={{ marginLeft: "10px" }}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Year
                    </InputLabel>
                    <Select
                      native
                      value={state.age}
                      onChange={handleToSelect}
                      inputProps={{
                        name: "age",
                        id: "outlined-age-native-simple",
                        className: "yearselect",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>2022</option>
                      <option value={20}>2023</option>
                      <option value={30}>2024</option>
                    </Select>
                  </FormControl>
                </Box>
              </Grid> */}
            </Grid>
            <Box px={1} pt={2} className="project_padding">
              <InputLabel id="demo-simple-select-label" c className="mt-2 mb-4">
                Description
              </InputLabel>
              <TextareaAutosize
                aria-label="minimum height"
                name="description"
                rows={8}
                fullWidth
                placeholder="Please include at least 50 words about yourself. Max 500 words"
                style={{ width: "100%" }}
                inputRef={register({
                  required: "Please enter your History description.",

                  maxLength: {
                    value: 500,
                    message: "Description should be less than 500 words",
                  },

                  minLength: {
                    value: 50,
                    message: "Please include at least 50 words about yourself.",
                  },
                })}
                error={Boolean(errors.description)}
                helperText={errors.description?.message}
              />

              {count}
            </Box>

            <Box px={1} pt={2} className="setting_button">
              <Button
                variant="contained"
                color="primary"
                className="button"
                type="submit"
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </Paper>
      </form>
    </div>
  );
};
