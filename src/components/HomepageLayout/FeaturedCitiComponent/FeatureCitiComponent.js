import React from 'react'
import "./feature.scss"
import backciti from "../../../assets/images/featured-city-01.jpg"
export const FeatureCitiComponent = () => {
    return (
    
            <>

<div>
            <div className="section shadow ">
  <div className="container">
    <div className="row ">
      {/* Section Headline */}
      <div className="col-xl-12 ">
        <div className="section-headline centered mb-5">
          <h3>Featured Cities</h3>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 mb-5">
        {/* Photo Box */}
        <a href="jobs-list-layout-1.html" className="photo-box"   style={{ backgroundImage:`url(${backciti})`}}>
          <div className="photo-box-content">
            <h3>San Francisco</h3>
            <span>376 Jobs</span>
          </div>
        </a>
      </div>
      <div className="col-xl-3 col-md-6">
        {/* Photo Box */}
        <a href="jobs-list-layout-full-page-map.html" className="photo-box" style={{ backgroundImage:`url(${backciti})`}}>
          <div className="photo-box-content">
            <h3>New York</h3>
            <span>645 Jobs</span>
          </div>
        </a>
      </div>
      <div className="col-xl-3 col-md-6">
        {/* Photo Box */}
        <a href="jobs-grid-layout-full-page.html" className="photo-box" style={{ backgroundImage:`url(${backciti})`}}>
          <div className="photo-box-content">
            <h3>Los Angeles</h3>
            <span>832 Jobs</span>
          </div>
        </a>
      </div>
      <div className="col-xl-3 col-md-6">
        {/* Photo Box */}
        <a href="jobs-list-layout-2.html" className="photo-box" style={{ backgroundImage:`url(${backciti})`}}>
          <div className="photo-box-content">
            <h3>Miami</h3>
            <span>513 Jobs</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
        </div>
      </>
    )
}
