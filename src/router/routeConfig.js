import HomepageMain from "components/HomepageLayout/HomepageMain/HomepageMain";

// import { PremMain } from "User/premmain/PremMain";

import { UserProfileMainComponent } from "User/UserProfile/UserProfilemain/UserProfileMainComponent";


import { UserLoginComponent } from "UserAuthpage/LoginComponent/UserLoginComponent";
import { UserDashBoardPage } from "Pages/userPages/UserDashboardpage/UserDashBoardPage";
import { UserSettingPage } from "Pages/userPages/userSettingPage/UserSettingPage";
import { ReviewDashboardPage } from "Pages/userPages/ReviewDashboardPage/ReviewDashboardPage";
import { ManageProject } from "Pages/userPages/ManageProject/ManageProject";

import { MainSignupTabComponent } from "UserAuthpage/mainSignupTabComponent/MainSignupTabComponent";
import { ForgotPassword } from "UserAuthpage/forgotPassword/ForgotPassword";
import { ResetPassword } from "UserAuthpage/ResetPassword/ResetPassword";
import { ChangePassword } from "UserAuthpage/ChangePassword/ChangePassword";
import { ManageBidderComponent } from "Employer/ManageBidderComponent/ManageBidderComponent";
import { MyActiveBidsComponent } from "Employer/MyActiveBidsComponent/MyActiveBidsComponent";

import { PostProject } from "Employer/PostAproject/PostProject";
import { useParams } from 'react-router-dom'

import { FindWorkFreelancer } from "User/FindWorkFreelancer/FindWorkFreelancer";
import { BidsPage } from "User/Project/BidsPage/BidsPage";
import { FindFreelancer } from "User/FindFreelancer/FindFreelancer";
import { VerifyOtp } from "UserAuthpage/VerifyOtpComponent/VerifyOtp";
import { Messagecomponent } from "Employer/Messagecomponent/Messagecomponent";
import { CurrentProject } from "Pages/Employer/CurrentProjects/CurrentProjects";
import { Blog } from "Pages/Blog/Blog";



export const publicRoutes = [
  {
    key: " userlogin",
    path: "/",
    component: UserLoginComponent,
    exact: true,
  },

  {
    key: "verifyotp",
    path: "/verifyotp",
    component: VerifyOtp,
    exact: true,
  },

  {
    key: "home",
    path: "/home",
    component: HomepageMain,
    exact: true,
  },

  {
    key: "forgotpassword",
    path: "/forgot",
    component: ForgotPassword,
    exact: true,
  },

  {
    key: "usersignup",
    path: "/signup",
    component: MainSignupTabComponent,
    exact: true,
  },

  {
    key: "userlogin",
    path: "/login",
    component: UserLoginComponent,
    exact: true,
  },

  {
    key: "profileupdate",
    path: "/freelancerupdateprofile",
    component: UserSettingPage,
    exact: true,
  },

  {
    key: "userprofile",
    path: "/userprofile",
    component: UserProfileMainComponent,
    exact: true,
  },

  {
    key: "usersetting",
    path: "/usersetting",
    component: UserSettingPage,
    exact: true,
  },

  {
    key: "userdashboard",
    path: "/userdashboard",
    component: UserDashBoardPage,
    exact: true,
  },

  {
    key: "userreview",
    path: "/userreview",
    component: ReviewDashboardPage,
    exact: true,
  },

  {
    key: "manageprojects",
    path: "/manageprojects",
    component: ManageProject,
    exact: true,
  },
  {
    key: "messagecomponent",
    path: "/messagecomponent",
    component: Messagecomponent,
    exact: true,
  },
  {
    key: "postprojects",
    path: "/postproject",
    component: PostProject,
    exact: true,
  },
  {
    key: "ManageBidderComponent",
    path: "/ManageBidderComponent",
    component: ManageBidderComponent,
    exact: true,
  },
  {
    key: "MyActiveBidsComponent",
    path: "/MyActiveBidsComponent",
    component: MyActiveBidsComponent,
    exact: true,
  },

  {
    key: "resetpassword",
    path: "/resetpassword",
    component: ResetPassword,
    exact: true,
  },

  {
    key: "changepassword",
    path: "/changepassword/:id",
    component: ChangePassword,
    exact: true,
  },
  {
    key: "CurrentProject",
    path: "/currentproject",
    component: CurrentProject,
    exact: true,
  },
  {
    key: "bidpage",
    path: "/bidpage",
    component: BidsPage,
    exact: true,
  },
  {
    key: "FindWorkFreelancer",
    path: "/findwork",
    component: FindWorkFreelancer,
    exact: true,
  },
  {
    key: "FindFreelancer",
    path: "/findfreelancer",
    component: FindFreelancer,
    exact: true,
  },
  {
    key: "blog",
    path: "/blog",
    component: Blog,
    exact: true,
  },
];

export const privateRoutes = [];

export const employeeRoutes = [
{
  key: "messagecomponent",
  path: "/messagecomponent",
  component: Messagecomponent,
  exact: true,
},

{
  key: "postprojects",
  path: "/postproject",
  component: PostProject,
  exact: true,
},


];