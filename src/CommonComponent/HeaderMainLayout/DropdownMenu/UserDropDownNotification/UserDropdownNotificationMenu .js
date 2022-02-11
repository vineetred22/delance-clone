import React from 'react'
import "./userdropdown.scss";
import { FaUserCircle } from "react-icons/fa";
import {BsCheckBox } from 'react-icons/bs'
import {BiGroup} from 'react-icons/bi'
export const UserDropdownNotificationMenu = () => {
    return (
         <>
         <div className="headlinenotification">
           <h3>Notifications</h3> 
           <span className="notificationicon"><BsCheckBox /></span></div>
            
                     <div className="content">
              <ul className="dashboard-box-list">
                <li>
                  <span className="notification-icon">
                    <i className="icon-material-outline-group">
                      <BiGroup />
                    </i>
                  </span>
                  <span className="notification-text">
                    <strong>Michael Shannah</strong> applied for a job{" "}
                    <a href="#">Full Stack Software Engineer</a>
                  </span>

    
                </li>
                </ul>
                </div>
 
         </>
    )
}
