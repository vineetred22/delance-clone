import React, { useState, useRef } from "react";
import "./Logincomponentpage.scss";
import { FaUser, FaLock } from "react-icons/fa";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import { makeStyles } from "@material-ui/core";
import {
  CommonTabComponent,
  TabComponent,
} from "CommonComponent/TabComponent/TabComponent";
import { BiUserPin } from "react-icons/bi";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export const SignupMainComponent = (props) => {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  const { register, handleSubmit, errors, watch } = useForm({ mode: "onBlur" });
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);
  const [message, setmessage] = useState("false");
  const [errorMessage, setErrorMessage] = useState("");
  const password = useRef({});
  password.current = watch("password", "");

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };

  const update = (data) => {
    console.log(data);
  };

  return (
    <div>
      
      <div className="">
        <TabComponent />
      </div>
    </div>
  );
};
