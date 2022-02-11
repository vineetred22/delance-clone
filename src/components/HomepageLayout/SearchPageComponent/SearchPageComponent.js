import React from 'react'
import "./search.scss"
import {GoLocation} from 'react-icons/go'
import backgroundimg from "../../../assets/images/home-background.jpg"
export const SearchPageComponent = () => {
    return (
        <>  
    
    <div style={{ backgroundImage: `url(${backgroundimg})` }}   className="bg_img" >
            <div className="intro-banner " data-background-image="images/home-background.jpg">
  <div className="container">
   
    <div className="row">
      <div className="col-md-12">
        <div className="banner-headline">
          <h3>
            <strong>Hire experts or be hired for any job, any time.</strong>
            <br />
            <span>Thousands of small businesses use <strong className="color">DeLance</strong> to turn their ideas into reality.</span>
          </h3>
        </div>
      </div>
    </div>
   
    <div className="row">
      <div className="col-md-12">
        <div className="intro-banner-search-form1 margin-top-95">
       
          <div className="intro-search-field1 with-autocomplete">
            <label htmlFor="autocomplete-input" className="field-title ripple-effect">Where?</label>
            <div className="input-with-icon">
              <input id="autocomplete-input" type="text" placeholder="Online Job" />
            <i> <GoLocation   /></i> 
            </div>
          </div>
    
          <div className="intro-search-field1">
            <label htmlFor="intro-keywords" className="field-title ripple-effect">What job you want?</label>
            <input id="intro-keywords" type="text" placeholder="Job Title or Keywords" />
          </div>
       
          <div className="intro-search-button">
            <button className="button ripple-effect" onclick="window.location.href='jobs-list-layout-full-page-map.html'">Search</button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="row">
      <div className="col-md-12">
        <ul className="intro-stats hide-under-992px">
          <li>
            <strong className="counter">1,586</strong>
            <span>Jobs Posted</span>
          </li>
          <li>
            <strong className="counter">3,543</strong>
            <span>Tasks Posted</span>
          </li>
          <li>
            <strong className="counter">1,232</strong>
            <span>Freelancers</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
        </div>

        </>
    )
}
