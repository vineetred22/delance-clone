import React, { useState } from "react";
import "./ManageBidders.css";
import { Paper, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import flag from "../../../assets/images/flag.png";
import people from "../../../assets/images/user-avatar-big-02.jpg";

import { MdSupervisorAccount } from "react-icons/md";
import { FiMail, FiCheck, FiPhone } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Rating from "@material-ui/lab/Rating";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function handleClick(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const ManageBidders = () => {
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const [value, setValue] = useState(0);
  const [values, setValues] = useState(0);
  const classes = useStyles();
  return (
    <div>
      <div>
        <Paper component={Box} elevation={1} className="Paperhight mt-3">
          <Typography variant="h6" className="dashboard-typo">
            <MdSupervisorAccount className="dashboard_icon" />
            <Box className="dash_heading">3 Bidders</Box>
            <Box marginLeft="auto">
              <FormControl variant="outlined">
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple",
                    className: "bidselect",
                  }}
                >
                  <option value={10}>Highest First</option>
                  <option value={20}>Lowest First</option>
                  <option value={30}>Fastest First</option>
                </Select>
              </FormControl>
            </Box>
          </Typography>

          <Box className="dashbanner managepadding ">
            <div className="freelancer-avatar">
              <img src={people} alt="people" />
            </div>

            <div className="freelancer-names pt-2">
              <Box className="freelancer_text">
                <Typography variant="h4">
                  David Peterson
                  <img className="flag" src={flag} alt="flag" />
                </Typography>
                <Box className="freelancer-email" pt={1} pb={1}>
                  <FiMail /> david@example.com
                </Box>

                <Box pb={2}>
                  <div className="rating " data-rating={5.0}>
                    <Box className="star-rate ">5.0</Box>
                    <Box>
                      {" "}
                      <Rating
                       
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </Box>
                  </div>
                </Box>
              </Box>
              <Box>
                <Breadcrumbs aria-label="breadcrumb" className="bread_crumb">
                  <Link
                    color="primary"
                    href="/"
                    onClick={handleClick}
                    className="bread_color"
                  >
                    <strong>$3,200</strong>
                    <Box>Fixed Price</Box>
                  </Link>
                </Breadcrumbs>
              </Box>
              <Box className="btn_bideder">
                <Button
                  variant="contained"
                  color="primary"
                  className=" buttons "
                >
                  <FiCheck className="likeicon1" /> Accept Offer
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  className=" buttons "
                >
                  <FiMail className="likeicon1" /> Send Message
                </Button>

                <Tooltip title="Delete" placement="top-start">
                  <IconButton aria-label="delete" className=" buttonss ">
                    <RiDeleteBinLine />
                  </IconButton>
                </Tooltip>
              </Box>
            </div>
          </Box>

          <Box style={{ borderBottom: "1px solid #e4e4e4" }}></Box>

          <Box className="dashbanner managepadding ">
            <div className="freelancer-avatar">
              <img src={people} alt="people" />
            </div>

            <div className="freelancer-names pt-2">
              <Box className="freelancer_text">
                <Typography variant="h4">
                  David Peterson
                  <img className="flag" src={flag} alt="flag" />
                </Typography>
                <Box className="freelancer-email" pt={1} pb={1}>
                  <FiMail /> david@example.com
                </Box>

                <Box pb={2}>
                  <div className="rating" data-rating={5.0}>
                    <Box className="star-rate">5.0</Box>
                    <Box>
                      {" "}
                      <Rating name="size-medium" defaultValue={0} />
                    </Box>
                  </div>
                </Box>
              </Box>
              <Box>
                <Breadcrumbs aria-label="breadcrumb" className="bread_crumb">
                  <Link
                    color="primary"
                    href="/"
                    onClick={handleClick}
                    className="bread_color"
                  >
                    <strong>$3,200</strong>
                    <Box>Fixed Price</Box>
                  </Link>
                </Breadcrumbs>
              </Box>
              <Box className="btn_bideder">
                <Button
                  variant="contained"
                  color="primary"
                  className=" buttons "
                >
                  <FiCheck className="likeicon1" /> Accept Offer
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  className=" buttons "
                >
                  <FiMail className="likeicon1" /> Send Message
                </Button>

                <Tooltip title="Delete" placement="top-start">
                  <IconButton aria-label="delete" className=" buttonss ">
                    <RiDeleteBinLine />
                  </IconButton>
                </Tooltip>
              </Box>
            </div>
          </Box>

          <Box style={{ borderBottom: "1px solid #e4e4e4" }}></Box>

          <Box className="dashbanner managepadding ">
            <div className="freelancer-avatar">
              <img src={people} alt="people" />
            </div>

            <div className="freelancer-names pt-2">
              <Box className="freelancer_text">
                <Typography variant="h4">
                  David Peterson
                  <img className="flag" src={flag} alt="flag" />
                </Typography>
                <Box className="freelancer-email" pt={1} pb={1}>
                  <FiMail /> david@example.com
                </Box>

                <Box pb={2}>
                  <div className="rating" data-rating={5.0}>
                    <Box className="star-rate">5.0</Box>
                    <Box>
                      {" "}
                      <Rating
                       
                        values={value}
                        onChange={(event, newValue) => {
                          setValues(newValue);
                        }}
                      />
                    </Box>
                  </div>
                </Box>
              </Box>
              <Box>
                <Breadcrumbs aria-label="breadcrumb" className="bread_crumb">
                  <Link
                    color="primary"
                    href="/"
                    onClick={handleClick}
                    className="bread_color"
                  >
                    <strong>$3,200</strong>
                    <Box>Fixed Price</Box>
                  </Link>
                </Breadcrumbs>
              </Box>
              <Box className="btn_bideder">
                <Button
                  variant="contained"
                  color="primary"
                  className=" buttons "
                >
                  <FiCheck className="likeicon1" /> Accept Offer
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  className=" buttons "
                >
                  <FiMail className="likeicon1" /> Send Message
                </Button>

                <Tooltip title="Delete" placement="top-start">
                  <IconButton aria-label="delete" className=" buttonss ">
                    <RiDeleteBinLine />
                  </IconButton>
                </Tooltip>
              </Box>
            </div>
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default ManageBidders;
