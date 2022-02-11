import React from 'react'
import './Pagesblog.css'
import bgimg from '../../assets/images/blog-05a.jpg'
const Pagesblog = () => {
    return (
        <div>
            <div>
  <div id="titlebar" className="white margin-bottom-30">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Blog</h2>
          <span>Featured Posts</span>
        
          {/* <nav id="breadcrumbs" className="dark">
            <ul>
              <li><a href="#">Home</a></li>
              <li>Blog</li>
            </ul>
          </nav> */}
        </div>
      </div>
    </div>
  </div>

  <div className="section white padding-top-0 padding-bottom-60 full-width-carousel-fix">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="blog-carousel">
            <a href="pages-blog-post.html" className="blog-compact-item-container">
              <div className="blog-compact-item">
                <img src={bgimg} alt="img" />
                <span className="blog-item-tag">Tips</span>
                <div className="blog-compact-item-content">
                  <ul className="blog-post-tags">
                    <li>20 May 2019</li>
                  </ul>
                  <h3>5 Myths That Prevent Job Seekers from Overcoming Failure</h3>
                  <p>Distinctively reengineer revolutionary meta-services and premium architectures intuitive opportunities.</p>
                </div>
              </div>
            </a>
            <a href="pages-blog-post.html" className="blog-compact-item-container">
              <div className="blog-compact-item">
              <img src={bgimg} alt="img" />
                <span className="blog-item-tag">Recruiting</span>
                <div className="blog-compact-item-content">
                  <ul className="blog-post-tags">
                    <li>28 April 2019</li>
                  </ul>
                  <h3>12 Dog-Friendly Companies Hiring Now</h3>
                  <p>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively front-end.</p>
                </div>
              </div>
            </a>
            <a href="pages-blog-post.html" className="blog-compact-item-container">
              <div className="blog-compact-item">
              <img src={bgimg} alt="img" />
                <span className="blog-item-tag">Marketing</span>
                <div className="blog-compact-item-content">
                  <ul className="blog-post-tags">
                    <li>10 June 2019</li>
                  </ul>
                  <h3>11 Tips to Help You Get New Clients Through Cold Calling</h3>
                  <p>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively front-end.</p>
                </div>
              </div>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Pagesblog
