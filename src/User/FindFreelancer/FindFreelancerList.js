import {
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Drawer,
  Divider,
} from "@material-ui/core";
import React from "react";
import "./FindFreelancer.scss";
import user from "../../assets/images/user-avatar-big-01.jpg";
import girl from '../../assets/images/user-avatar-big-03.jpg';
import { GoLocation } from "react-icons/go";
import flage from "../../assets/images/flags/ae.svg";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";


export const FindFreelancerList = () => {
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [value3, setValue3] = React.useState(4);
  return (
    <div>
      <Box>
        <Paper component={Box} elevation={2} className=" mt-3">
          <Box>
            <Grid container>
              <Grid item lg={6} sm={12}>
                {" "}
                <Box className=" dashbanner" pt={5}>
                  <Box className="remyimg">
                    <Avatar alt="Remy Sharp" src={user} className="img_user" />
                  </Box>
                  <Box px={2}>
                    <Box className="freelancer-name">
                      <Typography variant="h4">
                        Tom Smith{" "}
                        <img
                          className="flag"
                          src={flage}
                          alt="pic"
                          title="United Kingdom"
                          data-tippy-placement="top"
                        />
                      </Typography>
                      <span>UI/UX Designer</span>
                    </Box>
                    <Box pt={1} display="flex" className="rate_respons">
                      <div className="star-rating-number" data-rating={4.9}>
                        {" "}
                        4.9{" "}
                      </div>

                      <Box>
                        <Rating
                        
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} sm={12}>
                <Box pt={2}>
                  <Box className="freelancer_detail">
                    <div className="freelancer-details-list text-center">
                      <ul>
                        <li>
                          Location{" "}
                          <strong>
                            <i className="icon-material-outline-location-on ">
                              <GoLocation />
                            </i>{" "}
                            Beriln
                          </strong>
                        </li>
                        <li>
                          Rate <strong>$ 45 / hr</strong>
                        </li>
                      </ul>
                    </div>
                    <Box px={5} mt={0}>
                    <Link to="/userprofile">
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="find_button  "
                      >
                        View Profile
                      </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider />
          <Box>
            <Grid container>
              <Grid item lg={6} sm={12}>
                {" "}
                <Box className=" dashbanner" pt={5}>
                  <Box className="remyimg">
                    <Avatar alt="Remy" src={girl} className="img_user" />
                  </Box>
                  <Box px={2}>
                    <Box className="freelancer-name">
                      <Typography variant="h4">
                      David Peterson {" "}
                        <img
                          className="flag"
                          src={flage}
                          alt="pic"
                          title="United Kingdom"
                          data-tippy-placement="top"
                        />
                      </Typography>
                      <span>iOS Expert + Node Dev</span>
                    </Box>
                    <Box pt={1} display="flex" className="rate_respons">
                      <div className="star-rating-number" data-rating={4.9}>
                        {" "}
                        4.9{" "}
                      </div>

                      <Box>
                        <Rating
                          
                          value1={value}
                          onChange={(event, newValue) => {
                            setValue1(newValue);
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} sm={12}>
                <Box pt={2}>
                  <Box className="freelancer_detail">
                    <div className="freelancer-details-list text-center">
                      <ul>
                        <li>
                          Location{" "}
                          <strong>
                            <i className="icon-material-outline-location-on ">
                              <GoLocation />
                            </i>{" "}
                            Brishbane
                          </strong>
                        </li>
                        <li>
                          Rate <strong>$ 54 / hr</strong>
                        </li>
                      </ul>
                    </div>
                    <Box px={5} mt={0}>
                    <Link to="/userprofile">
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="find_button  "
                      >
                        View Profile
                      </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider />

          <Box>
            <Grid container>
              <Grid item lg={6} sm={12}>
                {" "}
                <Box className=" dashbanner" pt={5}>
                  <Box className="remyimg">
                    <Avatar alt="Remy Sharp" src={user} className="img_user" />
                  </Box>
                  <Box px={2}>
                    <Box className="freelancer-name">
                      <Typography variant="h4">
                      Marcin Kowalski {" "}
                        <img
                          className="flag"
                          src={flage}
                          alt="pic"
                          title="United Kingdom"
                          data-tippy-placement="top"
                        />
                      </Typography>
                      <span>Front-End Developer</span>
                    </Box>
                    <Box pt={1} display="flex" className="rate_respons">
                      <div className="star-rating-number" data-rating={4.9}>
                        {" "}
                        4.9{" "}
                      </div>

                      <Box>
                        <Rating
                          
                          value2={value}
                          onChange={(event, newValue) => {
                            setValue2(newValue);
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} sm={12}>
                <Box pt={2}>
                  <Box className="freelancer_detail">
                    <div className="freelancer-details-list text-center">
                      <ul>
                        <li>
                          Location{" "}
                          <strong>
                            <i className="icon-material-outline-location-on ">
                              <GoLocation />
                            </i>{" "}
                            London
                          </strong>
                        </li>
                        <li>
                          Rate <strong>$ 94 / hr</strong>
                        </li>
                      </ul>
                    </div>
                    <Box px={5} mt={0}>
                    <Link to="/userprofile">
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="find_button  "
                      >
                        View Profile
                      </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider />

          <Box>
            <Grid container>
              <Grid item lg={6} sm={12}>
                {" "}
                <Box className=" dashbanner" pt={5}>
                  <Box className="remyimg">
                    <Avatar alt="Remy Sharp" src={user} className="img_user" />
                  </Box>
                  <Box px={2}>
                    <Box className="freelancer-name">
                      <Typography variant="h4">
                      Sindy Forest {" "}
                        <img
                          className="flag"
                          src={flage}
                          alt="pic"
                          title="United Kingdom"
                          data-tippy-placement="top"
                        />
                      </Typography>
                      <span>UI/UX Designer</span>
                    </Box>
                    <Box pt={1} display="flex" className="rate_respons">
                      <div className="star-rating-number" data-rating={4.9}>
                        {" "}
                        4.9{" "}
                      </div>

                      <Box>
                        <Rating
                          
                          value3={value}
                          onChange={(event, newValue) => {
                            setValue3(newValue);
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} sm={12}>
                <Box pt={2}>
                  <Box className="freelancer_detail">
                    <div className="freelancer-details-list text-center">
                      <ul>
                        <li>
                          Location{" "}
                          <strong>
                            <i className="icon-material-outline-location-on ">
                              <GoLocation />
                            </i>{" "}
                            London
                          </strong>
                        </li>
                        <li>
                          Rate <strong>$ 94 / hr</strong>
                        </li>
                      </ul>
                    </div>
                    <Box px={5} mt={0}>
                    <Link to="/userprofile">
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="find_button  "
                      >
                        View Profile
                      </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};
