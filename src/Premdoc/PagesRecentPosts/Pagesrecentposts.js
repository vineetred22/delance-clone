import React from 'react'
import './Pagesrecentposts.css';
import {FaDribbble,FaTwitter,FaGithub,FaBehance} from 'react-icons/fa';

import {MdSearch} from 'react-icons/md'
import bgimg from '../../assets/images/blog-02a.jpg'
import {  makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const useStylesBootstrap = makeStyles((theme) => ({
	arrow: {
	  color: theme.palette.common.black,
	},
	tooltip: {
	  backgroundColor: theme.palette.common.black , 
    fontSize: 13,
	},
  }));
  
  function BootstrapTooltip(props) {
	const classes = useStylesBootstrap();
  
	return <Tooltip arrow classes={classes} {...props} />;
  }
const Pagesrecentposts = () => {
    return (
        <div>
            <div className="section gray">
  <div className="container">
    <div className="row">
      <div className="col-xl-8 col-lg-8">
      
        <div className="section-headline blog-with mt-5">
          <h4>Recent Posts</h4>
        </div>
        
        <a href="pages-blog-post.html" className="blog-post">
     
          <div className="blog-post-thumbnail">
            <div className="blog-post-thumbnail-inner">
              <span className="blog-item-tag">Tips</span>
              <img src={bgimg} alt="img" />
            </div>
          </div>
         
          <div className="blog-post-content">
            <span className="blog-post-date">22 July 2019</span>
            <h3>16 Ridiculously Easy Ways to Find &amp; Keep a Remote Job</h3>
            <p>Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage high-payoff infomediaries rather than. </p>
          </div>
    
          <div className="entry-icon" />
        </a>
 
        <a href="pages-blog-post.html" className="blog-post">
          
          <div className="blog-post-thumbnail">
            <div className="blog-post-thumbnail-inner">
              <span className="blog-item-tag">Recruiting</span>
              <img src={bgimg} alt="img" />
            </div>
          </div>
         
          <div className="blog-post-content">
            <span className="blog-post-date">29 June 2019</span>
            <h3>How to "Woo" a Recruiter and Land Your Dream Job</h3>
            <p>Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage high-payoff infomediaries rather than. </p>
          </div>
        </a>
     
        <a href="pages-blog-post.html" className="blog-post">
         
          <div className="blog-post-thumbnail">
            <div className="blog-post-thumbnail-inner">
              <span className="blog-item-tag">Marketing</span>
              <img src={bgimg} alt="img" />
            </div>
          </div>
     
          <div className="blog-post-content">
            <span className="blog-post-date">10 June 2019</span>
            <h3>11 Tips to Help You Get New Clients Through Cold Calling</h3>
            <p>Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage high-payoff infomediaries rather than. </p>
          </div>
        </a>
       
        <a href="pages-blog-post.html" className="blog-post">
         
          <div className="blog-post-thumbnail">
            <div className="blog-post-thumbnail-inner">
              <span className="blog-item-tag">Tips</span>
              <img src={bgimg} alt="img" />
            </div>
          </div>
         
          <div className="blog-post-content">
            <span className="blog-post-date">5 June 2019</span>
            <h3>5 Myths That Prevent Job Seekers from Overcoming Failure</h3>
            <p>Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage high-payoff infomediaries rather than. </p>
          </div>
        </a>
       
   
      </div>
      <div className="col-xl-4 col-lg-4 content-left-offset">
        <div className="sidebar-container input-with">
         
          <div className="sidebar-widget siderbar-with">
            <div className="input-with-icon inputee">
              <input id="autocomplete-input " type="text" placeholder="Search" />
              <i className="icon-material-outline-search" ><MdSearch /></i>
            </div>
          </div>
   
          <div className="sidebar-widget">
            <h3>Trending Posts</h3>
            <ul className="widget-tabs">
              
              <li>
                <a href="pages-blog-post.html" className="widget-content active">
                <img src={bgimg} alt="img" />
                  <div className="widget-text">
                    <h5>How to "Woo" a Recruiter and Land Your Dream Job</h5>
                    <span>29 June 2019</span>
                  </div>
                </a>
              </li>
            
              <li>
                <a href="pages-blog-post.html" className="widget-content">
                <img src={bgimg} alt="img" />
                  <div className="widget-text">
                    <h5>What It Really Takes to Make $100k Before You Turn 30</h5>
                    <span>3 June 2019</span>
                  </div>
                </a>
              </li>
             
              <li>
                <a href="pages-blog-post.html" className="widget-content">
                <img src={bgimg} alt="img" />
                  <div className="widget-text">
                    <h5>5 Myths That Prevent Job Seekers from Overcoming Failure</h5>
                    <span>5 June 2019</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="sidebar-widget">
            <h3>Social Profiles</h3>
            <div className="d-flex graycolor">
        <BootstrapTooltip title="Dribbble" placement="top" className="icontoltip">
                  <Button >
                  <i ><FaDribbble /></i>
                  </Button>
         </BootstrapTooltip>
         <BootstrapTooltip title="Twitter" placement="top" className="icontoltip">
                  <Button >
                  <i  ><FaTwitter /></i>
                  </Button>
         </BootstrapTooltip>
         <BootstrapTooltip title="Behance" placement="top" className="icontoltip">
                  <Button >
          <i ><FaBehance /></i>
                  </Button>
         </BootstrapTooltip>
         <BootstrapTooltip title="Github" placement="top" className="icontoltip">
                  <Button >
                  <i  ><FaGithub /></i>
                  </Button>
         </BootstrapTooltip>
         
          
        </div>
          </div>
        
          <div className="sidebar-widget">
            <h3>Tags</h3>
            <div className="task-tags">
              <a href="#"><span>employer</span></a>
              <a href="#"><span>recruiting</span></a>
              <a href="#"><span>work</span></a>
              <a href="#"><span>salary</span></a>
              <a href="#"><span>tips</span></a>
              <a href="#"><span>income</span></a>
              <a href="#"><span>application</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



        </div>
    )
}

export default Pagesrecentposts
