import React from "react";
import "./userprofile.scss";

import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";
import { NavLink } from "react-router-dom";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import users from "../../../../assets/images/user-avatar-small-01.jpg";

export const UserDropdownProfile = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div>
      <div className="dropdown_clss_main_drop">
        <div className="user-status">
          <div className="user-details">
            <div className="user-avatar status-online">
              <NavLink to="/userprofile">
                {" "}
                <img src={users} alt="user" />
              </NavLink>
            </div>
            <div className="user-name">
              Tom Smith <span>Freelancer</span>
            </div>
          </div>
          <div className="mt-4">
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton
                value="left"
                aria-label="left aligned"
                style={{
                  padding: "0px 30px",
                }}
              >
                Online
              </ToggleButton>
              <ToggleButton
                value="center"
                aria-label="centered"
                style={{
                  padding: "5px 30px",
                }}
              >
                Invisible
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>

        <div className="drop_icon_spc_beet">
          <NavLink to="/userdashboard">
            {" "}
            <div className="dash-heading">
              <RiDashboardLine className="dash-icon" /> Dashboard
            </div>{" "}
          </NavLink>
          <NavLink to="/setting">
            {" "}
            <div className="dash-heading">
              <AiOutlineSetting className="dash-icon" /> Settings
            </div>{" "}
          </NavLink>
          <NavLink to="/login">
          <div className="dash-heading">
            <ImSwitch className="dash-icon" /> Logout
          </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
