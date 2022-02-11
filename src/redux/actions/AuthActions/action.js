import axios from 'config'
import * as API from 'api'
import storage from 'utils/storage'
import errorHandler from 'utils/interceptors/errorHandler'
import { AuthActionTypes } from './actionType'
import toastr from 'toastr'

// base url api start

export const FreelancerRegisterapi = `api/signup`
export const userloginapi = 'api/login'
export const otpverifyapi = 'api/two-factor'
export const forgotpasswordapi = 'api/forgot'
export const changeforgotpassword = 'api/forgot-password'

// nase url api end

const setUserDetails = (payload) => ({
  type: AuthActionTypes.OTP_FULFILLED,
  payload,
})

export const setLoginStatus = (type) => ({ type })
export const setRegistrationStatus = (type) => ({ type })
 export const setforgetstatus =(type)=> ({type})
export const setOTPStatus = (type) => ({ type })
export const setVerificationStatus = (type) => ({ type })
export const  changepasswordstatus= (type)=> ({type})


export const setSignupEmail = (payload) => ({
  type: AuthActionTypes.SET_SIGNUP_EMAIL,
  payload,
})
export const setResetPasswordStatus = (type) => ({ type })
export const setResetPasswordEmail= (payload) => ({
  type: AuthActionTypes.SET_RESET_PASSWORD_EMAIL,
  payload,
})
export const setmsgReg = (payload) => ({ type: AuthActionTypes.SET_SIGNUP_MSG, payload })
export const setpassword = (type) => ({ type })
export const changepassword = (type) => ({ type })
export const setSignUpType = type => ({ type: AuthActionTypes.SET_SIGNUP_TYPE, payload: type })
export const saveLoginEmail = payload => ({ type: AuthActionTypes.SAVE_SIGNUP_EMAIL, payload })
export  const saveforgetEmail = payload =>({type: AuthActionTypes.SAVE_OTP_EMAIL,payload})
export const setforgetMsg = payload => ({type:AuthActionTypes.SET_OTP_MSG,payload})
export const setchangePasswordMsg = payload =>({type:AuthActionTypes.SET_CHANGEPASSWORD_MSG,payload})








// // freelancer signup api
export const freelancerRegister = (input) => async (dispatch) => {
  try {
    const response = await axios.post(FreelancerRegisterapi, input)
    console.log(response.data.Message)
    // dispatch(setSignupEmail(response.data.email))
    dispatch(setmsgReg(response.data.Message))
    dispatch(setRegistrationStatus(AuthActionTypes.SIGNUP_FULFILLED))
    // console.log(response.data.Message)
    // dispatch(setRegMsg(response.data.Message))

    // alert(response.data.Message)
  } catch (err) {
    toastr.error(err.response.data.Message);

    console.log(err.response.data.Message)
  }
}


export const verifyOtp = (input) => async (dispatch) => {
  try {
    dispatch(setOTPStatus(AuthActionTypes.OTP_PENDING))
    const response = await axios.post(otpverifyapi, input)
    console.log(response.data.Message)
    dispatch(setUserDetails(response.data))
    dispatch({ type: 'TEST' })
  } catch (err) {
    toastr.error(err.response.data.Message);
  }
}

export const loginUser = (input) => async (dispatch) => {
  try {
    dispatch(setLoginStatus(AuthActionTypes.LOGIN_PENDING))
    const response = await axios.post(userloginapi, input)

    dispatch(setLoginStatus(AuthActionTypes.LOGIN_FULFILLED))
    dispatch(saveLoginEmail(input.email));
  } catch (err) {
    // console.log(err.response.data.Message)
    toastr.error(err.response.data.Message);
    // alert(err.response.data.Message)

  }
}





export const forgotpassword = input => async dispatch => {
  try {
    const response = await axios.post(forgotpasswordapi, input);
    dispatch(saveforgetEmail(input.email))
    dispatch(setforgetMsg(response.data.Message))
    dispatch(setforgetstatus(AuthActionTypes.FORGOT_MAIL_FULFILLED))
    dispatch(saveforgetEmail(response.email))
    // dispatch(setVerificationStatus(AuthActionTypes.VERIFICATION_PENDING));

  } catch (err) {
    // console.log(err)
    // alert(err.response.data.Message)
    toastr.error(err.response.data.Message);
  }
}


export const ChangePassWord = input => async dispatch => {
  try {
    dispatch(changepassword(AuthActionTypes.CHANGE_PASSWORD_PENDING));
    const response = await axios.put(changeforgotpassword, input)
      dispatch(setchangePasswordMsg(response.data.Message))
    dispatch(changepassword(AuthActionTypes.CHANGE_PASSWORD_FULLFILLED))
  } catch (err) {
    console.log(err)

  }

}


