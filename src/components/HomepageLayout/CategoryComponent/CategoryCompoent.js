import React from 'react'
import './category.scss';
import {FaRegFileCode} from 'react-icons/fa';
import {BsCloudUpload,BsPencil} from 'react-icons/bs';
import {RiSuitcase2Line} from 'react-icons/ri';
import {BiPieChartAlt2} from 'react-icons/bi';
import {CgImage} from 'react-icons/cg';
import {FaBullhorn,FaGraduationCap} from 'react-icons/fa'
export const CategoryCompoent = () => {
    return (
        <>
                  <div>
            <div className="section margin-top-65">
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <div className="section-headline centered margin-bottom-15">
          <h3>Popular Job Categories</h3>
        </div>
        
        <div className="categories-container">
        
          <div className="category-box">
            <div className="category-box-icon">
              <i className="icon-line-awesome-file-code-o" > <FaRegFileCode /></i>
            </div>
            <div className="category-box-counter">612</div>
            <div className="category-box-content">
              <h3>Web &amp; Software Dev</h3>
              <p>Software Engineer, Web / Mobile Developer &amp; More</p>
            </div>
          </div>
          
          <div className="category-box">
            <div className="category-box-icon">
              <i className="icon-line-awesome-cloud-upload"  > <BsCloudUpload /></i>
            </div>
            <div className="category-box-counter">113</div>
            <div className="category-box-content">
              <h3>Data Science &amp; Analytics</h3>
              <p>Data Specialist / Scientist, Data Analyst &amp; More</p>
            </div>
          </div>
         
          <div className="category-box">
            <div className="category-box-icon">
              <i className="icon-line-awesome-suitcase" > <RiSuitcase2Line /></i>
            </div>
            <div className="category-box-counter">186</div>
            <div className="category-box-content">
              <h3>Accounting &amp; Consulting</h3>
              <p>Auditor, Accountant, Fnancial Analyst &amp; More</p>
            </div>
          </div>
         
          <div className="category-box">
            <div className="category-box-icon">
              <i className="icon-line-awesome-pencil" > <BsPencil /></i>
            </div>
            <div className="category-box-counter">298</div>
            <div className="category-box-content">
              <h3>Writing &amp; Translations</h3>
              <p>Copywriter, Creative Writer, Translator &amp; More</p>
            </div>
          </div>
          
          <div className="category-box">
            <div className="category-box-icon">
              <i className="icon-line-awesome-pie-chart" > <BiPieChartAlt2 /></i>
            </div>
            <div className="category-box-counter">549</div>						
            <div className="category-box-content">
              <h3>Sales &amp; Marketing</h3>
              <p>Brand Manager, Marketing Coordinator &amp; More</p>
            </div>
          </div>
        
          <div className="category-box">
            <div className="category-box-icon">
              <i className="icon-line-awesome-image" > <CgImage/> </i>
            </div>
            <div className="category-box-counter">873</div>
            <div className="category-box-content">
              <h3>Graphics &amp; Design</h3>
              <p>Creative Director, Web Designer &amp; More</p>
            </div>
          </div>
          
          <div className="category-box">
            <div className="category-box-icon">
              <i className="icon-line-awesome-bullhorn" ><FaBullhorn /></i>
            </div>
            <div className="category-box-counter">125</div>
            <div className="category-box-content">
              <h3>Digital Marketing</h3>
              <p>Darketing Analyst, Social Profile Admin &amp; More</p>
            </div>
          </div>
       
          <div className="category-box">
            <div className="category-box-icon">
              <i className="icon-line-awesome-graduation-cap" >< FaGraduationCap /></i>
            </div>
            <div className="category-box-counter">445</div>
            <div className="category-box-content">
              <h3>Education &amp; Training</h3>
              <p>Advisor, Coach, Education Coordinator &amp; More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
        </>
    )
}
