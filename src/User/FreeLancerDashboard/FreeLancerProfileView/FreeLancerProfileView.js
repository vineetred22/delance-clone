


import React from 'react'
import './profileview.scss';
import {AiOutlineFileAdd} from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';
import {RiDeleteBinLine} from 'react-icons/ri';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'


import { LineChart } from './LineChart/LineChart';
export const FreeLancerProfileView = () => {
    return (
        <div  className="container-fluid mt-5">
            
            <div className="row">
  <div className="col-xl-8">
   
    <div className="dashboard-box main-box-in-row">
      <div className="headline">
        <h3><i className="icon-feather-bar-chart-2" /> Your Profile Views</h3>
        <div className="sort-by">
          <select className="selectpicker hide-tick">
            <option>Last 6 Months</option>
            <option>This Year</option>
            <option>This Month</option>
          </select>
        </div>
      </div>
      <div className="content">
    
        <div className="chart">
          <canvas id="chart" width={100} height={45} />
         
            <LineChart/>

        </div>
      </div>
    </div>
   
  </div>
  
  <div className="col-xl-4 ">
   
    <div className="dashboard-box child-box-in-row "> 
    
      <div className="headline">
        <h3><i className="icon-material-outline-note-add"><AiOutlineFileAdd /></i> Notes</h3>
      </div>	
      <div className="content with-padding scrollbar">
        
        <div className="dashboard-note">
          <p>Meeting with candidate at 3pm who applied for Bilingual Event Support Specialist</p>
          <div className="note-footer">
            <span className="note-priority high">High Priority</span>
            <div className="note-buttons">
              <a href="#" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" ><FiEdit /></i></a>
              <a href="#" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" ><RiDeleteBinLine /></i></a>
            </div>
          </div>
        </div>
       
        <div className="dashboard-note">
          <p>Extend premium plan for next month</p>
          <div className="note-footer">
            <span className="note-priority low">Low Priority</span>
            <div className="note-buttons">
              <a href="#" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" ><FiEdit /></i></a>
              <a href="#" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" ><RiDeleteBinLine /></i></a>
            </div>
          </div>
        </div>
        
        <div className="dashboard-note">
          <p>Send payment to David Peterson</p>
          <div className="note-footer">
            <span className="note-priority medium">Medium Priority</span>
            <div className="note-buttons">
              <a href="#" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit" ><FiEdit /></i></a>
              <a href="#" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2" ><RiDeleteBinLine /></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="add-note-button">
        <a href="#small-dialog" className="popup-with-zoom-anim button full-width button-sliding-icon">Add Note <i className="icon-material-outline-arrow-right-alt" ><HiOutlineArrowNarrowRight /></i></a>
      </div>
    </div>

  </div>
</div>



        </div>
    )
}


