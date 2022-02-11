import { Link } from "@material-ui/core";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import "./reserved.scss";

export const ReservedFooterComponent = () => {
  return (
    <div className="">
      <div className="container ">
        <div className="col-12">
          <div className="row copyright ">
            <div className="col-lg-6">
              <div className="small-footer-copyrights">
                © 2021 <strong>DeLance</strong>. All Rights Reserved.
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-social-links">
                <Tooltip title="Facebook" arrow>
                  <Link href="https://www.facebook.com">
                    <span>
                      <FaFacebookF />
                    </span>
                  </Link>
                </Tooltip>
                <Tooltip title="Twitter" arrow>
                <Link href=" https://twitter.com">
                  <span>
                    <FaTwitter />
                  </span>
                </Link>
                </Tooltip>
                <Tooltip title="Google" arrow>
                <Link href="https://www.google.com">
                  <span className="googal_icon">
                    <FaGooglePlusG />
                  </span>
                </Link>
                </Tooltip>
                <Tooltip title="Linkedin" arrow>
                <Link href=" https://www.linkedin.com">
                  <span>
                    <FaLinkedinIn />
                  </span>
                </Link>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
