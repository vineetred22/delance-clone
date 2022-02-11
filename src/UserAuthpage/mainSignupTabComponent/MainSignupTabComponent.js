import { TabComponent } from "CommonComponent/TabComponent/TabComponent";
import React,{useEffect} from "react";
import {Box,Typography} from '@material-ui/core';
import { EmployerSignupPage } from "UserAuthpage/EmployerSignup/EmployerSignup";
import Aos from "aos"
import "aos/dist/aos.css"
import { FreeLancerSignupPage } from "UserAuthpage/FreeLancerSingup/FreeLancerSignup";
// import { FreeLancerSignupPage } from "UserAuthpage/Free


export const MainSignupTabComponent = () => {
 useEffect(()=>{
    Aos.init({duration:2000})
 },[])

  return (
    <>
    
        <div >
        <Box className="delance_text"> <Typography varient="h1">DeLance</Typography></Box>
        <div className="col-lg-6 col-12 offset-lg-3">
          <div className="formbox fullpadding">
            <h4 className="heading pb-2 text-center ">
              Complete Your Free Account setup
            </h4>

            {/* <div className="d-flex justify-content-center "> */}
              <div data-aos="zoom-in-up">
                <TabComponent
                  tabfirst="  Hire For a Project"
                  tabsecond="Work  as a Freelancer"
                  tabvalue1={
                    <div>
                      {" "}
                      <EmployerSignupPage />{" "}
                    </div>
                  }
                  tabvalue2={
                    <div>
                      {" "}
                      <FreeLancerSignupPage />
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          </div>
          
    </>
  );
};
