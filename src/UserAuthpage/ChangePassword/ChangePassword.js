import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router";
import TextField from "@material-ui/core/TextField";
import { InputAdornment, Box, IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { AiOutlineLock } from "react-icons/ai";
import jwt_decode from 'jwt-decode'
import { Typography} from '@material-ui/core'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";

import { LensTwoTone, Visibility, VisibilityOff } from "@material-ui/icons";
import Aos from "aos";
import "aos/dist/aos.css";
// import { ChangePassWord } from "redux/actions/AuthActions";
import * as AuthActions from "redux/actions/AuthActions"
import toastr from 'toastr';

 

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));
export const ChangePassword = (props) => {
  const dispatch = useDispatch();
  const routeParams = useParams()
  // console.log(routeParams.id)
  const token = routeParams.id;
  const decodedToken = jwt_decode(token)
  const email = (decodedToken.email)
  console.log(email)
  const auth = useSelector(state=>state.authReducer)
 
  const { register, handleSubmit, control, errors, watch } = useForm({
  mode: "onBlur",
  });

  const password = useRef({});
  password.current = watch("new_password", "");

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
 
  //  const  email = useSelector(state=>state.authReducer.forgotData.email)
  //  console.log(email)
  const update = (data) => {
    // const  email = useSelector(state=>state.authReducer.forgotData.email)
   data:{

   }
 data.email = email

    // dispatch(ChangePassWord(data))

    dispatch(AuthActions.ChangePassWord(
      
      data))
    console.log(data);
         
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const msg = auth.updatepasswordData.msg;
  useEffect(()=>{
   
          if(auth.updatepasswordData.updatepasswordstatus =="CHANGE_PASSWORD_FULFILLED"){
            toastr.success(msg);
            props.history.push("/login")
             
          }
  },[auth])
    

  return (
    <div>
      <Box className="delance_text"> <Typography varient="h1">DeLance</Typography></Box>
      <div className="container">
      <div className="col-lg-6 col-12 offset-lg-3">
        <div className="formbox">
          <h3 className="heading pb-5 text-center"> Change your password </h3>
          <div data-aos="zoom-in-up">
            <form onSubmit={handleSubmit(update)}>
            <Box px={3} className="responsform">
              <div>
              <Box >
                  <TextField
                    id="outlined-search"
                    fullWidth
                    placeholder="Enter new password"
                    name="new_password"
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
                    error={Boolean(errors.new_password)}
                    helperText={errors.new_password?.message}
                  />

                  <TextField
                    id="outlined-search"
                    fullWidth
                    placeholder="Confirm password"
                    type="password"
                    variant="outlined"
                    name="confirm_password"
                    className=" icon-right passwordfield  mb-3"
                    type={values1.showPassword ? "text" : "password"}
                    value={values1.new_password}
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
                        "  Password  mismatch",
                    })}
                    error={Boolean(errors.confirm_password)}
                    helperText={errors.confirm_password?.message}
                  />
                </Box>
              </div>
              <Box px={3} className="responsform">
                <Button
                  variant="contained"
                  className="btnclr mt-4"
                  fullWidth
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
              </Box>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};