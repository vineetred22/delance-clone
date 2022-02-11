import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as UserAuthAction from "redux/actions/AuthActions";
// import * as commonService from 'utils/CommonService.js'
import axios from "axios";

import "../EmployerSignup/employer.scss";
import { AiOutlineMail } from "react-icons/ai";
import TextField from "@material-ui/core/TextField";
import {
  InputAdornment,
  startAdornment,
  Box,
  InputLabel,
  FormControl,
  FormHelperText,
  IconButton,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { AiOutlineLock } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { DummyData } from "../EmployerSignup/DummyData";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { TiEyeOutline } from "react-icons/ti";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";
import toastr from "toastr";
import { AuthActionTypes } from "redux/actions/AuthActions/actionType";

import { useHistory } from "react-router-dom";
import { CountryData } from "UserAuthpage/DummyData/CountryData";
import { StateData } from "UserAuthpage/DummyData/StateData";
import { CityDummyData } from "UserAuthpage/DummyData/CityDummyData";
// import { AuthActionTypes } from "redux/actions/AuthActions/actionType";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));

export const FreeLancerSignupPage = () => {
  const auth = useSelector((state) => state.authReducer);
  const [states, setStates] = useState({ open: false });

  useEffect(() => {
    if (auth.signUpData.signUpStatus === "SIGNUP_FULFILLED") {
      const msg = auth.signUpData.msg;
      dispatch(UserAuthAction.setSignUpType(AuthActionTypes.SIGNUP));
      toastr.success(msg);
    }
  }, [auth]);

  // const { SIGNUP_FULFILLED, SIGNUP_PENDING } = AuthActionTypes;
  //   useEffect(()=>{
  //   if(auth.signUpData.signUpStatus === SIGNUP_FULFILLED){

  //   }

  //   },[auth])

  const dispatch = useDispatch();
  // toastr.success(message)

  const [message, setmessage] = useState("false");
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit, control, errors, watch } = useForm({
    mode: "onBlur",
  });

  const password = useRef({});
  password.current = watch("password", "");

  const [values, setValues] = useState({
    showPassword: false,
  });

  const [values1, setValues1] = useState({
    showPassword: false,
  });

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const update = async (data) => {
    data: {
    }
    data.role = 2;
    console.log(data);

    // FreelancerRegisterapi(
    //   {body:{data}}
    //   )
    // .then(res => console.log('response => ', res))
    // .catch(err => console.err('err => ',err))

    dispatch(UserAuthAction.freelancerRegister(data));
  };

  const history = useHistory();
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowConfirmPassword = () => {
    setValues1({ ...values1, showPassword: !values1.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit(update)}>
        <div className="formdisplay">
          <Grid container>
            <Grid item lg={6} sm={12}>
              <Box px={1}>
                <TextField
                  name="first_name"
                  id="outlined-search"
                  fullWidth
                  placeholder=" First name"
                  type="name"
                  variant="outlined"
                  className=" icon-right  mb-3"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUserAlt className="mailicon" />
                      </InputAdornment>
                    ),
                  }}
                  inputRef={register({
                    // Public_Message
                    required: "First Name is required.",

                    pattern: {
                      value: /^[a-zA-Z\s]*$/,
                      // Public_Message
                      message: "Numeric values are not allowed.",
                    },
                  })}
                  error={Boolean(errors.first_name)}
                  helperText={errors.first_name?.message}
                />
              </Box>
            </Grid>

            <Grid item lg={6} sm={12}>
              <Box px={1}>
                <TextField
                  id="outlined-search"
                  fullWidth
                  placeholder="Last name"
                  type="name"
                  name="last_name"
                  variant="outlined"
                  className=" icon-right  mb-3 "
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUserAlt className="mailicon" />
                      </InputAdornment>
                    ),
                  }}
                  inputRef={register({
                    // Public_Message
                    required: "Last Name is required.",

                    pattern: {
                      value: /^[a-zA-Z\s]*$/,
                      // Public_Message
                      message: "Numeric values are not allowed",
                    },
                  })}
                  error={Boolean(errors.last_name)}
                  helperText={errors.last_name?.message}
                />
              </Box>
            </Grid>

            <Grid item lg={6} sm={12}>
              <Box px={1}>
                <TextField
                  id="outlined-search"
                  fullWidth
                  placeholder="Enter password"
                  name="password"
                  variant="outlined"
                  className=" icon-right passwordfield  mb-3"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AiOutlineLock className="mailicon" />
                      </InputAdornment>
                    ),

                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  inputRef={register({
                    // Public_Message
                    required: " Password  is required.",

                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,

                      // Public_Message
                      message:
                        " Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                    },
                  })}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                />
              </Box>
            </Grid>
            <Grid item lg={6} sm={12}>
              <Box px={1}>
                <TextField
                  id="outlined-search"
                  fullWidth
                  placeholder="Confirm password"
                  type="password"
                  variant="outlined"
                  name="confirm_password"
                  className=" icon-right passwordfield   mb-3"
                  type={values1.showPassword ? "text" : "password"}
                  value={values1.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AiOutlineLock className="mailicon" />
                      </InputAdornment>
                    ),

                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownConfirmPassword}
                        >
                          {values1.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  inputRef={register({
                    validate: (value) =>
                      value === password.current ||
                      // Public_Message
                      "  Password  mismatch.",
                  })}
                  error={Boolean(errors.confirm_password)}
                  helperText={errors.confirm_password?.message}
                />
              </Box>
            </Grid>
          </Grid>
        </div>

        <Box px={1}>
          <TextField
            id="outlined-search"
            fullWidth
            placeholder="Enter email"
            type="email"
            name="email"
            variant="outlined"
            className=" icon-right mb-2"
            InputProps={
              {
                // classes: {
                //   root: classes.root,
                //   disabled: classes.disabled,
                // },
              }
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AiOutlineMail className="mailicon" />
                </InputAdornment>
              ),
            }}
            inputRef={register({
              //  Public_Message
              required: "  Email address is required.",

              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                // Public_Message
                message: " Please enter correct email address",
              },
            })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        </Box>
        <Grid container>
          <Grid item lg={6} sm={12}>
            <Box px={1}>
              <InputLabel id="demo-simple-select-label" className="mt-2 mb-4">
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
            <Box px={1}>
              <InputLabel id="demo-simple-select-label" className="mt-2 mb-4">
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
                    name=""
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
        </Grid>
        <Box px={1}>
          <InputLabel id="demo-simple-select-label" className="mt-2 mb-4">
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
        <Box px={1} pt={2}>
          <Typography className="text_signup">
            Yes! Send me genuinely useful emails every now and then to help me
            get the most out of DeLance.
          </Typography>
          {/* <FormControlLabel
            control={
              <Checkbox
                name="send_useful_emails"
                className="Check_box"
                inputRef={register({
                  // Public_Message
                  required: "Please agree to our Terms of Use.",
                })}
              />
            }
            label="Yes! Send me genuinely useful emails every now and then to help me get the most out of DeLance."
          /> */}
        </Box>
        <Box px={1}>
          <FormControl error={Boolean(errors.tnc)} style={{ display: "block" }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="terms_of_use"
                  inputRef={register({
                    // Public_Message
                    required: "Please agree to our Terms of Use.",
                  })}
                />
              }
              label="I agree to the terms of use."
            />
            <FormHelperText className="conditiontext ">
              {errors.terms_of_use?.message}
            </FormHelperText>
          </FormControl>
        </Box>
        <Box px={1} mb={2}>
          <Button
            variant="contained"
            className="btnclr mt-4"
            fullWidth
            type="submit"
          >
            Sign Up
          </Button>
        </Box>
        <Typography
          variant="h6"
          className="passcolor  text-center"
          onClick={() => history.push("/login")}
        >
          Already have an account?
        </Typography>
        <div>
          {" "}
          {errorMessage && errorMessage.length > 0 && (
            <Alert severity="error">{errorMessage} !</Alert>
          )}
        </div>
      </form>
    </>
  );
};
