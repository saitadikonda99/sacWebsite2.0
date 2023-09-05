import React from 'react';
import './Cpage.css';
import { Link as Scroll } from 'react-scroll';
import  { useState } from 'react';

import { BsFileEarmarkCode } from 'react-icons/bs';

import deepakimg from '../../../Assets/NewsImages/PreBootCamp.jpg'
import deepak from '../../../Assets/CouncilMembers/CouncilMember_02.png'
import Footer from '../../../components/Footer/Footer'
import Navbar from './NavBar'

var Page = () => {

  const [activity, setActivity] = useState(1)


  const handleActivity = (Number) => {
    setActivity(Number)
  }

  return (
    <div>
        <div className="clubs ZeroOne">
          <div className="clubs-in">
            <div className="clubs-nav">
                <Navbar/>
            </div>

{/* ----------------------------------Hero-------------------------------------------- */}


{/* ----------------------------------Team-------------------------------------------- */}

              <div className="clubs-team">
                <div className="clubs-team-in">

                  <div className="clubs-team-in-one">
                    <h1>Team</h1>
                     </div>

                  <div className="clubs-team-in-two">
                    <div className="member-box">
                        <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>President ZeroOne</p>
                        </div>
                      </div>
                  <div className="member-box">
                    <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>President ZeroOne</p>
                        </div>
                  </div>
                    <div className="member-box">
                       <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>President ZeroOne</p>
                        </div>
                    </div>
                       </div>

                  <div className="clubs-team-in-three">
                  <div className="member-box">
                        <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>President ZeroOne</p>
                        </div>
                      </div>
                  <div className="member-box">
                    <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>President ZeroOne</p>
                        </div>
                  </div>
                    <div className="member-box">
                       <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>President ZeroOne</p>
                        </div>
                    </div>
                </div>

              </div>
            </div>
              

{/* ----------------------------------Activities-------------------------------------------- */}


              <div className="club-activity-component">
              <div className="clubs-Activities">
                <div className="club-activity-head">
                  <h1>Activities</h1>
                  </div>
                <div className="clubs-Activities-in">
                  <div className="clubs-Activities-in-one">
                          <div className = { activity === 1 ? 'activity-content-one' : 'activity-hide' } id='one-color'></div>
                          <div className = { activity === 2 ? 'activity-content-one' : 'activity-hide' } id='two-color'></div>
                          <div className = { activity === 3 ? 'activity-content-one' : 'activity-hide' } id='three-color'></div>
                          <div className = { activity === 4 ? 'activity-content-one' : 'activity-hide' } id='four-color'></div>
                     </div>
                      <div className="clubs-Activities-in-two">
                         <div id = { activity === 1 ? 'activity-content-hover' : '' }
                          className="Activity-box-one" onClick={() => handleActivity(1)}>Activity-1</div>
                         <div id = { activity === 2 ? 'activity-content-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(2)}>Activity-2</div>
                         <div id = { activity === 3 ? 'activity-content-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(3)}>Activity-3</div>
                         <div id = { activity === 4 ? 'activity-content-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(4)}>Activity-4</div>
                    </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="club-footer">
          <div className="club-footer-in">
              <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Page