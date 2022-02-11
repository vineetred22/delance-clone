import React from 'react'
import './Bookmark.css';
import Coffy from '../../assets/images/company-logo-02.png';
import logo from '../../assets/images/company-logo-04.png'
import logo5 from '../../assets/images/company-logo-05.png';
import {IoMdBusiness} from 'react-icons/io';
import {GoLocation} from 'react-icons/go';
import {MdBusinessCenter,MdFace} from 'react-icons/md';
import {IoMdTime} from 'react-icons/io';
import {RiDeleteBin5Line} from 'react-icons/ri';
import people from '../../assets/images/user-avatar-big-02.jpg'
import user from '../../assets/images/user-avatar-placeholder.png'
import flag from '../../assets/images/flag.png'

const Bookmark = () => {
    return (
        <div>
            <div className="dashboard-content-container" data-simplebar>
  <div className="dashboard-content-inner">
  
    <div className="dashboard-headline">
      <h3>Bookmarks</h3>
    
      <nav id="breadcrumbs" className="dark">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Dashboard</a></li>
          <li>Bookmarks</li>
        </ul>
      </nav>
    </div>
 
    <div className="row">
    
      <div className="col-xl-12 mb-5">
        <div className="dashboard-box margin-top-0">
          
          <div className="headline">
            <h3><i className="icon-material-outline-business-center" ><MdBusinessCenter /></i> Bookmarked Jobs</h3>
          </div>
          <div className="content">
            <ul className="dashboard-box-list">
              <li>
              
                <div className="job-listing">
                  <div className="job-listing-details">
                    
                    <a href="#" className="job-listing-company-logo">
                      <img src={Coffy} alt="coffy" />
                    </a>
                 
                    <div className="job-listing-description">
                      <h3 className="job-listing-title"><a href="#">Barista and Cashier</a></h3>
                    
                      <div className="job-listing-footer">
                        <ul>
                          <li><i className="icon-material-outline-business"><IoMdBusiness /></i> Coffee</li>
                          <li><i className="icon-material-outline-location-on" ><GoLocation /></i> San Francisco</li>
                          <li><i className="icon-material-outline-business-center" ><MdBusinessCenter /></i> Full Time</li>
                          <li><i className="icon-material-outline-access-time" ><IoMdTime /></i> 2 days ago</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div className="buttons-to-right hover">
                  <a href="#" className="button  ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"><RiDeleteBin5Line /></i></a>
                </div>
              </li>
              <li>
               
                <div className="job-listing">
               
                  <div className="job-listing-details">
                 
                    <a href="#" className="job-listing-company-logo">
                    <img src={logo} alt="logo" />
                    </a>
                  
                    <div className="job-listing-description">
                      <h3 className="job-listing-title"><a href="#">Administrative Assistant</a></h3>
                    
                      <div className="job-listing-footer">
                      <ul>
                          <li><i className="icon-material-outline-business"><IoMdBusiness /></i> Mates</li>
                          <li><i className="icon-material-outline-location-on" ><GoLocation /></i> San Francisco</li>
                          <li><i className="icon-material-outline-business-center" ><MdBusinessCenter /></i> Full Time</li>
                          <li><i className="icon-material-outline-access-time" ><IoMdTime /></i> 2 days ago</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div className="buttons-to-right hover">
                  <a href="#" className="button  ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"><RiDeleteBin5Line /></i></a>
                </div>
              </li>
              <li>
             
                <div className="job-listing">
               
                  <div className="job-listing-details">
                 
                    <a href="#" className="job-listing-company-logo">
                    <img src={logo5} alt="logo5" />
                    </a>
                   
                    <div className="job-listing-description">
                      <h3 className="job-listing-title"><a href="#">Construction Labourers</a></h3>
                    
                      <div className="job-listing-footer">
                      <ul>
                          <li><i className="icon-material-outline-business"><IoMdBusiness /></i>Podous</li>
                          <li><i className="icon-material-outline-location-on" ><GoLocation /></i> San Francisco</li>
                          <li><i className="icon-material-outline-business-center" ><MdBusinessCenter /></i> Full Time</li>
                          <li><i className="icon-material-outline-access-time" ><IoMdTime /></i> 2 days ago</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div className="buttons-to-right hover">
                  <a href="#" className="button  ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2" ><RiDeleteBin5Line /></i></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="col-xl-12">
        <div className="dashboard-box">
         
          <div className="headline">
            <h3><i className="icon-material-outline-face" ><MdFace /></i> Bookmarked Freelancers</h3>
          </div>
          <div className="content">
            <ul className="dashboard-box-list">
              <li>
              
                <div className="freelancer-overview">
                  <div className="freelancer-overview-inner">
                   
                    <div className="freelancer-avatar">
                      <div className="verified-badge" />
                      <a href="#"> <img src={people} alt="people" /></a>
                    </div>
                  
                    <div className="freelancer-name">
                      <h4><a href="#">David Peterson  <img className="flag" src={flag} alt="flag" /></a></h4>
                      <span>iOS Expert + Node Dev</span>
                     
                      <div className="freelancer-rating">
                        <div className="star-rating" data-rating="4.2" />
                      </div>
                    </div>
                  </div>
                </div>
          
                <div className="buttons-to-right hover">
                  <a href="#" className="button  ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"><RiDeleteBin5Line /></i></a>
                </div>
              </li>
              <li>
             
                <div className="freelancer-overview">
                  <div className="freelancer-overview-inner">
              
                    <div className="freelancer-avatar">
                      <a href="#"> <img src={user} alt="logo" /></a>
                    </div>
                 
                    <div className="freelancer-name">
                      <h4><a href="#">Marcin Kowalski <img className="flag" src={flag} alt="flag" /></a></h4>
                      <span>Front-End Developer</span>
                      
                      <div className="freelancer-rating">
                        <div className="star-rating" data-rating="4.7" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="buttons-to-right hover">
                  <a href="#" className="button  ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"><RiDeleteBin5Line /></i></a>
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

export default Bookmark
