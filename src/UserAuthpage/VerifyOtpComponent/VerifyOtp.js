import { Button, Box, Typography } from '@material-ui/core'
import './verifyPage.scss'
import React, { useEffect } from 'react'
import { OtpInputField } from 'UserAuthpage/OtpInputField/OtpInputField'
import Aos from 'aos'

import 'aos/dist/aos.css'
import * as AuthAction from 'redux/actions/AuthActions'
import { useDispatch } from 'react-redux'
import jwt_decode from 'jwt-decode'
import moment from 'moment'
import { useSelector } from 'react-redux'

export const VerifyOtp = (props) => {
  const auth = useSelector((state) => state.authReducer)

  const dispatch = useDispatch()

  let get_otp = ''

  const submitForm = (e) => {
    e.preventDefault()
    // const code = otp

    dispatch(
      AuthAction.verifyOtp({
        get_otp:get_otp,
      email: auth.loginData.email
        
      }),
    )
  }
  // auth.signUpData.email

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    if(auth.userInfo.isAuthenticated) {
      const token = localStorage.getItem('jwt')
 
      if (token) {
        const decodedToken = jwt_decode(token)
        // decodedToken.email
        if (decodedToken.exp > moment().unix()) {
          props.history.push('/userprofile')
        }
    }
    }
  }, [auth.userInfo?.isAuthenticated])

  return (
    <div><Box className="delance_text"> <Typography varient="h1">DeLance</Typography></Box>
    <div className="col-lg-6 col-12 offset-lg-3">
      <div className="formbox">
        <div>
          <Box className="otp_heading" pb={2}>
            <Typography variant="h6">Verify Email</Typography>
            <span>
              A one-time password was sent to your email. Please enter it below.
            </span>
          </Box>
          <form onSubmit={submitForm}>
            <div data-aos="zoom-in">
              <Box textAlign="center">
                <OtpInputField
                  noOfInputs={6}
                  onChange={(input) => (get_otp = input)}
                />
              </Box>
              <Box px={8}>
                <Button
                  variant="contained"
                  color="primary"
                  className="btnotp mt-4"
                  fullWidth
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
