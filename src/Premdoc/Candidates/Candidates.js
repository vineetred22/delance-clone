import React from 'react'
import './Candidates.css'
import girl from '../../assets/images/user-avatar-big-03.jpg';
import user from '../../assets/images/user-avatar-placeholder.png';
import flag from '../../assets/images/flag.png';
import {MdSupervisorAccount} from 'react-icons/md';
import {BiPhone} from 'react-icons/bi'
import {FiMail,FiFileText} from 'react-icons/fi'
import {RiDeleteBin5Line} from 'react-icons/ri'
const Candidates = () => {
    return (
        <div>
            <div className="dashboard-content-container" data-simplebar>
  <div className="dashboard-content-inner">
 
    <div className="dashboard-headline">
      <h3>Manage Candidates</h3>
      <span className="margin-top-7">Job Applications for <a href="#">Full Stack PHP Developer</a></span>
     
      <nav id="breadcrumbs" className="dark">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Dashboard</a></li>
          <li>Manage Candidates</li>
        </ul>
      </nav>
    </div>
    
    <div className="row">
    
      <div className="col-xl-12">
        <div className="dashboard-box margin-top-0">
         
          <div className="headline">
            <h3><i className="icon-material-outline-supervisor-account"><MdSupervisorAccount /></i> 3 Candidates</h3>
          </div>
          <div className="content">
            <ul className="dashboard-box-list">
              <li>
             
                <div className="freelancer-overview manage-candidates">
                  <div className="freelancer-overview-inner">
                
                    <div className="freelancer-avatar">
                      <div className="verified-badge" />
                      <a href="#"><img src={girl} alt="girl" /></a>
                    </div>
                  
                    <div className="freelancer-name">
                      <h4><a href="#">Sindy Forest <img className="flag" src={flag} alt="flag" /></a></h4>
                 
                      <span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail" ><FiMail /></i> sindy@example.com</a></span>
                      <span className="freelancer-detail-item"><i className="icon-feather-phone" ><BiPhone /></i> (+61) 123-456-789</span>
               
                      <div className="freelancer-rating">
                        <div className="star-rating" data-rating={5.0}>5.0</div>
                      </div>
           
                      <div className="buttons-to-right always-visible bgcolor mt-4 ">
                        <a href="#" className="button ripple-effect"><i className="icon-feather-file-text" ><FiFileText /></i> Download CV</a>
                        <a href="#small-dialog" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail" ><FiMail /></i> Send Message</a>
                        <a href="#" className="button gray ripple-effect ico" title="Remove Candidate" data-tippy-placement="top"><i className="icon-feather-trash-2" ><RiDeleteBin5Line /></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
              
                <div className="freelancer-overview manage-candidates">
                  <div className="freelancer-overview-inner">
                    
                    <div className="freelancer-avatar">
                      <a href="#"><img src={user} alt="user" /></a>
                    </div>
                    
                    <div className="freelancer-name">
                      <h4><a href="#">Sebastiano Piccio <img className="flag" src={flag} alt="flag" /></a></h4>
                     
                      <span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail" ><FiMail /></i> sebastiano@example.com</a></span>
                      <span className="freelancer-detail-item"><i className="icon-feather-phone" ><BiPhone /></i> (+39) 123-456-789</span>
                     
                      <br />
                      <span className="company-not-rated">Minimum of 3 votes required</span>
                   
                      <div className="buttons-to-right always-visible bgcolor mt-3">
                        <a href="#" className="button ripple-effect"><i className="icon-feather-file-text" ><FiFileText /></i> Download CV</a>
                        <a href="#small-dialog" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"><FiMail /></i> Send Message</a>
                        <a href="#" className="button gray ripple-effect ico" title="Remove Candidate" data-tippy-placement="top"><i className="icon-feather-trash-2" ><RiDeleteBin5Line /></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
             
                <div className="freelancer-overview manage-candidates">
                  <div className="freelancer-overview-inner">
                 
                    <div className="freelancer-avatar">
                    <a href="#"><img src={user} alt="user" /></a>
                    </div>
                 
                    <div className="freelancer-name">
                      <h4><a href="#">Nikolay Azarov <img className="flag" src={flag} alt="flag" /></a></h4>
                  
                      <span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail"><FiMail /></i> nikolay@example.com</a></span>
                      <span className="freelancer-detail-item"><i className="icon-feather-phone" ><BiPhone /></i> (+7) 123-456-789</span>
                     
                      <br />
                      <span className="company-not-rated">Minimum of 3 votes required</span>
                     
                      <div className="buttons-to-right always-visible bgcolor mt-3">
                        <a href="#" className="button ripple-effect"><i className="icon-feather-file-text" ><FiFileText /></i> Download CV</a>
                        <a href="#small-dialog" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"><FiMail /></i> Send Message</a>
                        <a href="#" className="button gray ripple-effect ico" title="Remove Candidate" data-tippy-placement="top"><i className="icon-feather-trash-2" ><RiDeleteBin5Line /></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div></div>
        </div>
    )
}

export default Candidates
