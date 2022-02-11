import React, { useState } from 'react'
import './userReview.scss'
import Pagination from '@material-ui/lab/Pagination'
import Rating from '@material-ui/lab/Rating'
import { NavLink } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import { MdDateRange } from 'react-icons/md'
import { BiLike } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import CommonModal from 'components/shared/ui-components/common-modal'
import { Button } from '@material-ui/core'
import { FeedBackReview } from 'User/FreeLancerReview/FeedBackReview'
import { ReservedFooterComponent } from 'CommonComponent/ReservedFooterComponent/ReservedFooterComponent'
import { HeaderMainLayout } from 'CommonComponent/HeaderMainLayout/HeaderMainLayout'

//  import { FeedbackReview } from 'User/FreeLancerReview/FeedbackReview'


export const UserReviewComponent = () => {
  const [value, setValue] = useState(2)
  const [value1, setValue1] = useState(2)
  const [value2, setValue2] = useState(2)

  let defaultForm = () => <div></div>

  const [state, setState] = useState({ open: false })
  const [form, setForm] = useState({ defaultForm })

  const handleModal = (component) => {
    setState({ open: true })
    setForm(component)
  }

  const handleClose = () => {
    setState({ open: false })
  }
  return (
    <div>
      <HeaderMainLayout />
      <CommonModal open={state.open} handleClose={handleClose}>
        {form}
      </CommonModal>
      

      <div className="dashboard-content-container">
        <div className="dashboard-content-inner">
          <div className="dashboard-headline">
            <h3>Reviews</h3>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="dashboard-box ">
                <div className="headline">
                  <h3>
                    <i className="icon-material-outline-business" /> Rate
                    Employers
                  </h3>
                </div>
                <div className="content">
                  <ul className="dashboard-box-list">
                    <li>
                      <div className="boxed-list-item">
                        <div className="item-content">
                          <h4>Simple Chrome Extension</h4>
                          <span className="company-not-rated ">Not Rated</span>
                        </div>
                      </div>

                      <Button
                        variant="contained"
                        color="primary"
                        className=" button"
                        onClick={() => handleModal(<FeedBackReview />)}
                      >
                        <BiLike className="likeicon" /> Leave a Review
                      </Button>
                    </li>
                    <li>
                      <div className="boxed-list-item">
                        <div className="item-content">
                          <h4>Adsense Expert</h4>
                          <span className="company-not-rated ">
                            Not Rated
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="contained"
                        color="primary"
                        className=" button "
                        onClick={() => handleModal(<FeedBackReview />)}
                      >
                        <BiLike className="likeicon" /> Leave a Review
                      </Button>
                    </li>
                    <li>
                      <div className="boxed-list-item">
                        <div className="item-content">
                          <h4>Fix Python Selenium Code</h4>
                          <div className="item-details ">
                           
                              <Box
                                component="fieldset"
                              
                                borderColor="primary"
                              >
                                <Rating
                                  name="simple-controlled"
                                  value={value}
                                  onChange={(event, newValue) => {
                                    setValue(newValue)
                                  }}
                                />
                              </Box>

                              <span className="detail-item">
                                <MdDateRange /> May 2019
                              </span>
                            </div>{' '}
                          
                          <div className="item-description">
                            <p>
                              Great clarity in specification and communication.
                              I got payment really fast. Really recommend this
                              employer for his professionalism. I will work for
                              him again with pleasure.
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="contained"
                        color="primary"
                        className=" button gray "
                      >
                        <FiEdit /> Edit Review
                      </Button>
                    </li>
                    <li>
                      <div className="boxed-list-item">
                        <div className="item-content">
                          <h4>PHP Core Website Fixes</h4>
                          <div className="item-details ">
                            
                              <Box
                                component="fieldset"
                             
                                borderColor="primary"
                              >
                                <Rating
                                  name="simple-controlled1"
                                  value={value1}
                                  onChange={(event, newValue) => {
                                    setValue1(newValue)
                                  }}
                                />
                              </Box>

                              <span className="detail-item">
                                <MdDateRange /> May 2019
                              </span>
                            </div>{' '}
                         
                          <div className="item-description">
                            <p>
                              Great clarity in specification and communication.
                              I got payment really fast. Really recommend this
                              employer for his professionalism. I will work for
                              him again with pleasure.
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="contained"
                        color="primary"
                        className=" button gray "
                      >
                        <FiEdit /> Edit Review
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="dashboard-box margin-top-0">
                <div className="headline">
                  <h3>
                    <i className="icon-material-outline-face" /> Rate
                    Freelancers
                  </h3>
                </div>
                <div className="content">
                  <ul className="dashboard-box-list">
                    <li>
                      <div className="boxed-list-item">
                        <div className="item-content">
                          <h4>Simple Chrome Extension</h4>
                          <span className="company-not-rated margin-bottom-5">
                            Not Rated
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="contained"
                        color="primary"
                        className=" button "
                        onClick={() => handleModal(<FeedBackReview />)}
                      >
                        <BiLike className="likeicon" /> Leave a Review
                      </Button>
                    </li>
                    <li>
                      <div className="boxed-list-item">
                        <div className="item-content">
                          <h4>Help Fix Laravel PHP issue</h4>
                          <div className="item-details ">
                          
                              <Box
                                component="fieldset"
                             
                                borderColor="primary"
                              >
                                <Rating
                                  name="simple-controlled2"
                                  value={value2}
                                  onChange={(event, newValue) => {
                                    setValue2(newValue)
                                  }}
                                />
                              </Box>

                              <span className="detail-item">
                                <MdDateRange /> May 2019
                              </span>
                            </div>{' '}
                         
                          <div className="item-description">
                            <p>
                              Excellent programmer - helped me fixing small
                              issue.
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="contained"
                        color="primary"
                        className=" button gray "
                      >
                        <FiEdit /> Edit Review
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Pagination
          count={10}
          color="primary"
          shape="rounde"
          size="large"
          showFirstButton
          showLastButton
        />
      </div>
      <ReservedFooterComponent />
    </div>
  )
}
