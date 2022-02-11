import React, { useEffect } from 'react'
import './SignupComponentPage.scss'
import { FiMail } from 'react-icons/fi'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Box ,Typography} from '@material-ui/core'
import { InputAdornment, startAdornment } from '@material-ui/core'
import Aos from 'aos'
import * as AuthActions from 'redux/actions/AuthActions'

import 'aos/dist/aos.css'
import { useDispatch, useSelector } from "react-redux";
import toastr from 'toastr';
import { authReducer } from 'redux/reducers/authReducer'

const useStyles = makeStyles((theme) => ({
  TextField: {
    margin: theme.spacing(1, 0),
    width: '100%',
  },
}))

export const ForgotPassword = () => {

  const  auth = useSelector(state=>state.authReducer.forgotData)
  const  msg = auth.msg;



  const dispatch = useDispatch()
  const classes = useStyles()
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
  })
  const history = useHistory()

  const onSubmit = (data) => {
    dispatch(AuthActions.forgotpassword(data))

    console.log(data)
   
  }
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])



  useEffect(()=>{
    if(auth.forgotstatus="FORGOT_MAIL_FULFILLED"){
   
     toastr.success(msg); 
    }
        
 
 },[auth])
  return (
    <div>
      <Box className="delance_text"> <Typography varient="h1">DeLance</Typography></Box>
      <div className="container">
        <div className="col-lg-6 col-12 offset-lg-3">
          <div className="formbox">
            <h3 className="heading pb-4 text-center"> Forgot your password </h3>
            <div data-aos="zoom-in-down">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box px={3} className="responsform">
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
                    className=" icon-right mb-2"
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
                        // Public_Message
                        message: ' Please enter correct email address',
                      },
                    })}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                  />

                  <Button
                    variant="contained"
                    className="btnclr mt-4"
                    fullWidth
                    type="submit"
                  >
                    Continue with Email
                  </Button>
                </Box>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
