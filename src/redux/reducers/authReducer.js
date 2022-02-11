import storage from 'utils/storage'
import jwt_decode from 'jwt-decode'
const { AuthActionTypes } = require('redux/actions/AuthActions/actionType')

const token = storage.get('delance_authToken', null)
const refresh_token = storage.get('delance_refresh_token', null)
const user = storage.get('delance_user', null)

export const initialState = {
  isloading: false,
  role: null,

  otpStatus: AuthActionTypes.OTP,
  forgotstatus: AuthActionTypes.FORGOT,
  changepasswordstatus: AuthActionTypes.CHANGE_PASSWORD,

  signUpData: {
    email: '',
    signUpStatus: AuthActionTypes.SIGNUP,
    setmsgReg: AuthActionTypes.SETMESSAGE_PENDING,
    msg: '',
  },

  loginData: {
    loginStatus: AuthActionTypes.LOGIN,
    otpStatus: AuthActionTypes.GET_OTP,
    email: '',
  },

  forgotData: {
    forgotstatus: AuthActionTypes.FORGOT_MAIL_PENDING,
    email: '',
    msg: '',
  },

  updatepasswordData: {
    changepasswordstatus: AuthActionTypes.CHANGE_PASSWORD_PENDING,
    msg: '',
  },

  userInfo: {},
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AuthActionTypes.SET_SIGNUP_EMAIL: // On successful submission of Reg form
      return {
        ...state,
        signUpData: {
          ...state.signUpData,
          email: payload.email,
        },
      }
    case AuthActionTypes.SAVE_SIGNUP_EMAIL:
      return {
        ...state,
        loginData: {
          ...state.loginData,
          email: payload,
        },
      }

    case AuthActionTypes.SAVE_OTP_EMAIL:
      return {
        ...state,
        forgotData: {
          ...state.forgotData,
          email: payload,
        },
      }

    case AuthActionTypes.SET_SIGNUP_MSG:
      return {
        ...state,
        signUpData: {
          ...state.signUpData,
          msg: payload,
        },
      }

    case AuthActionTypes.SET_CHANGEPASSWORD_MSG:
      return {
        ...state,
        updatepasswordData: {
          ...state.changepasswordData,
          msg: payload,
        },
      }

    case AuthActionTypes.SET_SIGNUP_TYPE:
      return {
        ...state,
        signUpData: {
          ...state.signUpData,
          signUpStatus: payload,
        },
      }

    case AuthActionTypes.SIGNUP_PENDING: // When Signup form is submitted successfully
      return {
        ...state,
        signUpData: {
          ...state.signUpData,
          signUpStatus: type,
        },
      }
    case AuthActionTypes.SIGNUP_FULFILLED: // When OTP is verified
      return {
        ...state,
        signUpData: {
          ...state.signUpData,
          signUpStatus: type,
        },
      }

    case AuthActionTypes.FORGOT_MAIL_FULFILLED:
      return {
        ...state,
        changepasswordData: {
          ...state.changepasswordData,
          changepasswordstatus: type,
        },
      }

    case AuthActionTypes.FORGOT_PASSWORD_FULFILLED:
      return {
        ...state,
        forgotData: {
          ...state.signUpData,
        },
      }

    case AuthActionTypes.LOGIN_PENDING:
      return {
        ...state,
        loginData: {
          loginStatus: type,
        },
      }

    case AuthActionTypes.LOGIN_FULFILLED:
      return {
        ...state,
        loginData: {
          ...state.loginData,
          loginStatus: type,
        },
      }

    case AuthActionTypes.OTP_PENDING:
      return {
        ...state,
        setOTPStatus: type,
      }

    case AuthActionTypes.OTP_FULFILLED:
      localStorage.setItem('jwt', payload.access_token)
      return {
        ...state,
        otpStatus: type,
        userInfo: {
          details: jwt_decode(payload.access_token),
          tokens: payload,
          isAuthenticated: true,
        },
      }

    case AuthActionTypes.SET_OTP_MSG:
      return {
        ...state,
        forgotData: {
          ...state.forgotData,
          msg: payload,
        },
      }

    case AuthActionTypes.FORGOT_MAIL_PENDING:
      return {
        ...state,
        forgotstatus: type,
      }

    case AuthActionTypes.FORGOT_MAIL_FULFILLED:
      return {
        ...state,
        forgotData: {
          ...state.forgotData,
          forgotstatus: type,
        },
      }

    case AuthActionTypes.CHANGE_PASSWORD_FULLFILLED:
      return {
        ...state,
        updatepasswordData:{
           ...state.updatepasswordData,
           updatepasswordstatus:type
          
        }
      }

    case AuthActionTypes.FORGOT_PASSWORD_FULFILLED:
      return {
        ...state,
        changepasswordstatus: type,
      }

    default:
      return state
  }
}

// import { AuthActionTypes } from 'redux/actions/AuthActions/actionType';
// import storage from 'utils/storage'

// const token = storage.get("delance_authToken", null);
// const refresh_token = storage.get("delance_refresh_token", null);
// const user = storage.get("delance", null);

// export const initialState = {
//   token: token,
//   refresh_token: refresh_token,
//   user: user,
//   isloading: false,
//   role: null,
//   // resetPasswordToken: null
// };

// const updateObject = (oldState, updatedProps) => {
//   return {
//     ...oldState,
//     ...updatedProps,
//   };
// };

// const setUserData = (payload) => {
//   storage.set("delance_user", payload.data.id);
//   storage.set("derlance_user_role", payload.data.role);
//   storage.set("delance_authToken", payload.data.token);
//   storage.set("delance_refresh_token", payload.data.token);
// };

// export const authReducer=(state=initialState,action)=>{
//   switch(action.type){
//     case AuthActionTypes.SIGNUP_PENDING:
//       return Object.assign({},state,{
//         isloading:true,
//         disabled:true
//       });

//       case  AuthActionTypes.SIGNUP_FULFILLED:
//          return  Object.assign({},state,{
//            isloading:false,
//            disabled:false,
//          });

//          case AuthActionTypes.LOGIN_PENDING:
//           return Object.assign({}, state, {
//             isloading: true,
//             disabled: true,
//           });
//         case AuthActionTypes.LOGIN_FULFILLED:
//           setUserData(action.payload);
//           return Object.assign({}, state, {
//             isloading: false,
//             disabled: false,
//             role: action.payload.data.role,
//             user: action.payload.data.id,
//             token: action.payload.data.token,
//             // refresh_token: action.payload.refresh_token,
//           });

//          default:
//           return state;
//   }
// }

// case AuthActionTypes.SIGNUP_PENDING:
//       return Object.assign({}, state, {
//         isloading: true,
//         disabled: true,
//       });
//     case AuthActionTypes.SIGNUP_FULFILLED:
//       setUserData(action.payload);
//       return Object.assign({}, state, {
//         isloading: false,
//         disabled: false,
//         token: action.payload.data.token,
//       });

//           start old
