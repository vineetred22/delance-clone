import React from "react";
import "./footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { Box, TextField } from "@material-ui/core";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export const FooterLayout = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div id="footer">
        <div className="footer-top-section">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 ">
                <div className=" footer-logo">DeLance</div>
              </div>

              <div className="footer-row">
                <div className="col-lg-3 ">
                  <div className="social-link ">
                    <div className="icon">
                      <FaFacebookF />
                    </div>
                    <div className="icon">
                      {" "}
                      <RiTwitterFill />
                    </div>
                    <div className="icon">
                      <AiFillGooglePlusCircle />
                    </div>
                    <div className="icon">
                      <FaLinkedin />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={age}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                  >
                    <option aria-label="none" value="language">
                      English
                    </option>
                    <option className="opt" value={10}>
                     Hindi
                    </option>
                    <option className="opt" value={20}>
                     Tamil
                    </option>
                    <option className="opt" value={30}>
                    Spanish
                    </option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-middle-section">
          <div class="container">
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-3">
                <div class="footer-links">
                  <h3>For Candidates</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <span>Browse Jobs</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Add Resume</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Job Alerts</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>My Bookmarks</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xl-2 col-lg-2 col-md-3">
                <div class="footer-links">
                  <h3>For Employers</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <span>Browse Candidates</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Post a Job</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Post a Task</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Plans & Pricing</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xl-2 col-lg-2 col-md-3">
                <div class="footer-links">
                  <h3>Helpful Links</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <span>Contact</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Privacy Policy</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Terms of Use</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xl-2 col-lg-2 col-md-3">
                <div class="footer-links">
                  <h3>Account</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <span>Log In</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>My Account</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-12">
                <h3>
                  {" "}
                  <AiOutlineMail className="color_iconn" /> Sign Up For a
                  Newsletter
                </h3>
                <p className="pera">
                  Weekly breaking news, analysis and cutting edge advices on job
                  searching.
                </p>
                <form className="searchdisplay">
                  {/* <Form.Group
                    controlId="formBasicText"
                    className="formgroup newsletter"
                  >
                    <Form.Control
                      type="text"
                      className="texttype"
                      placeholder="Enter your email address"
                    />
                  </Form.Group> */}

                  <Box  className="formgroup newsletter" >
                    <TextField
                       id="outlined-search"
                       fullWidth
                       placeholder="Enter your email address"
                       type="email"
                       name="email"
                       variant="outlined"
                      
                   
                    />
                  </Box>
                  <Button type="submit" className="button_form_group">
                    <BiRightArrowAlt />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom-section">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                © 2021 <strong> DeLance</strong>. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
