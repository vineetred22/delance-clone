import React, { useState, useRef, useEffect } from 'react'
import './userlogin.scss'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Box, InputAdornment, startAdornment, Typography } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Aos from 'aos'
import 'aos/dist/aos.css'
import toastr from 'toastr'


import { AuthActionTypes } from 'redux/actions/AuthActions/actionType'
import { authReducer } from 'redux/reducers/authReducer';
 import  * as AuthActions from "redux/actions/AuthActions"
// import { GetOTP } from 'redux/actions/AuthActions'




const useStyles = makeStyles((theme) => ({
  TextField: {
    margin: theme.spacing(1, 0),
    width: '100%',
  },
}))
export const UserLoginComponent = (props) => {
  const [state, setState] = useState({ open: false })

   const auth = useSelector(state=>state.authReducer.loginData.loginStatus)

    useEffect(()=>{
            if(auth=== 'LOGIN_FULFILLED'){
              history.push("/verifyotp")
            } 

    },[auth])

  const dispatch = useDispatch()

  const classes = useStyles()
  const { register, handleSubmit, errors, reset, watch } = useForm({
    mode: 'onBlur',
  })
  const password = useRef({})
  password.current = watch('password', '')

  const [values, setValues] = useState({
    showPassword: false,
  })

  const history = useHistory()

  const onSubmit = async(data) => {

        dispatch(AuthActions.loginUser(data)) 
       

  // const  result = await axios.post('http://13.234.59.166/api/login',{...data})
  //    if(result.data.Message=== "Email sent."){
  //      alert("hello")
  //    }

      //  dispatch(GetOTP({data}))
      //   .then((res)=>{
      //     if(res.data.message){
      //        history.push("/")
      //     }
      //   }).catch((err)=>history.push("/verifyotp"))
      // console.log( result.data.Message)
 
      


     
  }

  //  useEffect(()=>{
  //   if (auth.loginData.loginStatus === LOGIN_FULFILLED) {
  //     props.history.push('/home');
  //   }
  //  },[])

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <div className="loginimg">
        <Box className="delance_text"> <Typography varient="h1">DeLance</Typography></Box>
       
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 offset-lg-3">
              <div className="login-register-page formbox">
                <div className="welcome-text  ">
                  <h3>Login</h3>
                  <span>
                    Don't have an account?
                    <a
                      onClick={() => history.push('/signup')}
                      className="passcolor pl-2"
                    >
                      Sign Up!
                    </a>
                  </span>
                </div>
                <div data-aos="zoom-in">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Box px={5} className="responsform">
                      <Box>
                        <TextField
                          id="outlined-search"
                          fullWidth
                          placeholder="Enter email"
                          type="email"
                          name="email"
                          variant="outlined"
                          className={classNames('form-control', {
                            'is-invalid': errors.email,
                          })}
                          className=" icon-right "
                          InputProps={{
                            classes: {
                              root: classes.root,
                              disabled: classes.disabled,
                            },
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AiOutlineMail className="mailicon" />
                              </InputAdornment>
                            ),
                          }}
                          inputRef={register({
                            // Public_Message
                            required: ' Email address is required.',

                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message:
                                // Public_Message
                                'Please enter correct email address',
                            },
                          })}
                          error={Boolean(errors.email)}
                          helperText={errors.email?.message}
                        />
                      </Box>
                      <Box pt={2}>
                        <TextField
                          id="outlined-search"
                          fullWidth
                          placeholder="Enter password"
                          name="password"
                          variant="outlined"
                          className=" icon-right passwordfield  mb-3"
                          type={values.showPassword ? 'text' : 'password'}
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
                            required: 'Password  is required.',

                            pattern: {
                              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                              message:
                                // Public_Message
                                'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
                            },
                          })}
                          error={Boolean(errors.password)}
                          helperText={errors.password?.message}
                        />
                      </Box>
                      <p
                        onClick={() => history.push('/forgot')}
                        className="passcolor"
                      >
                        Forgot Password?
                      </p>
                      <Button
                        variant="contained"
                        className="btnclr"
                        fullWidth
                        type="submit"
                      >
                        Log in
                      </Button>
                    </Box>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
