import React from 'react'
import "./maildrop.scss"
import { BiUser } from "react-icons/bi";
import {BsCheckBox } from 'react-icons/bs'
import {BiGroup} from 'react-icons/bi'
import users from '../../../../assets/images/user-avatar-small-03.jpg'
export const UserDropdownMail = () => {
    return (
        <div>
         <div className="headlinenotification">
           <h3>Messages</h3> 
           <span className="notificationicon"><BsCheckBox /></span></div>
            
                     <div className="content">
              <ul className="dashboard-box-list">
                <li>
                  <span className="notification-img">
                  <img src={users} alt="user" />
                  </span>
                  <span className="notification-text">
                  <strong>David Peterson</strong>
                  <p className="notification-msg-text pt-1">Thanks for reaching out. I'm quite busy right now on many...</p>
                  <span className="color">4 hours ago</span>
                  
                  </span>

    
                </li>
                </ul>
                </div>
 
        </div>
    )
}
