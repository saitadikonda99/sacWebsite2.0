import React from 'react';
import './Page.css';
import { Link as Scroll } from 'react-scroll';
import  { useState } from 'react';

import ZeroOneClubLogo from '../../../Assets/Logos/ZeroOneClubLogo.png';
import { BsFileEarmarkCode } from 'react-icons/bs';

import deepakimg from '../../../Assets/NewsImages/PreBootCamp.jpg'
import deepak from '../../../Assets/CouncilMembers/CouncilMember_02.png'
import Footer from '../../../components/Footer/Footer'

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
              <div className="clubs-nav-in">
                <div className="clubs-nav-in-one">
                    <img src={ZeroOneClubLogo} alt="" />
                </div>
                <div className="clubs-nav-in-two">
                 <ul>
                   <li>
                      <Scroll
                          activeClass="active"
                          to="clubs-body"
                          spy ={true}
                          smooth={true}
                          offset={-70}
                          duration={0}
                        >   
                        Home
                      </Scroll> 
                   </li>
                    <li>
                      <Scroll
                          activeClass="active"
                          to="clubs-what-do"
                          spy ={true}
                          smooth={true}
                          offset={-70}
                          duration={0}
                        >
                        Wings
                      </Scroll>
                    </li>
                    <li>
                      <Scroll
                          activeClass="active"
                          to="clubs-Glimpse"
                          spy ={true}
                          smooth={true}
                          offset={-70}
                          duration={0}
                        >
                       Glimpse
                      </Scroll>
                     </li>

                     <li>
                      <Scroll
                          activeClass="active"
                          to="clubs-team"
                          spy ={true}
                          smooth={true}
                          offset={-70}
                          duration={0}
                        >
                        Team
                      </Scroll>
                     </li>

                     <li>
                      <Scroll
                          activeClass="active"
                          to="club-activity-component"
                          spy ={true}
                          smooth={true}
                          offset={-70}
                          duration={0}
                        >
                        Activities
                      </Scroll>
                     </li>

                    </ul>
                  </div>
              </div>
            </div>
            <div className="clubs-body">
                 
              </div>

{/* ----------------------------------What We Do-------------------------------------------- */}
                <div className="clubs-what-do">
                  <div className="club-what-do-in">

                  <div className="club-what-do-in-one">
                    <h1>What We Do</h1>
                  </div>

                  <div className="club-what-do-in-two">
                    <div className="club-what-do-box">
                      <BsFileEarmarkCode className='icons-react'/> Web Development
                        </div>
                          <div className="club-what-do-box">
                          <BsFileEarmarkCode className='icons-react'/>
                           Web Development
                       </div>
                    <div className="club-what-do-box">
                  <BsFileEarmarkCode className='icons-react'/> Web Development
                </div>
              </div>
          
              <div className="club-what-do-in-three">
                <div className="club-what-do-box">
                  <BsFileEarmarkCode className='icons-react'/> Web Development
                    </div>
                     <div className="club-what-do-box">
                       <BsFileEarmarkCode className='icons-react'/> Web Development
                        </div>
                     <div className="club-what-do-box">
                    <BsFileEarmarkCode className='icons-react'/> Web Development
                </div>
              </div>
            </div>
          </div>

{/* ----------------------------------Glimpses-------------------------------------------- */}
              <div className="clubs-Glimpse">
                <div className="clubs-Glimpse-in">
                  <div className="clubs-Glimpse-in-one">
                    <h1>Glimpses</h1>
                      </div>
                       <div className="clubs-Glimpse-in-two">
                          <div className="clubs-Glimpse-img-box">
                            <img src={deepakimg} alt="" />
                          </div>
                          <div className="clubs-Glimpse-img-box">
                            <img src={deepakimg} alt="" />
                          </div>
                       </div>
                  <div className="clubs-Glimpse-in-three">
                     <div className="clubs-Glimpse-img-box">
                       <img src={deepakimg} alt="" />
                    </div>
                      <div className="clubs-Glimpse-img-box">
                        <img src={deepakimg} alt="" />
                    </div>
                      <div className="clubs-Glimpse-img-box">
                       <img src={deepakimg} alt="" />
                    </div>
                  </div>
                  <div className="clubs-Glimpse-in-four">
                    <div className="clubs-Glimpse-img-box">
                      <img src={deepakimg} alt="" />
                    </div>
                      <div className="clubs-Glimpse-img-box">
                        <img src={deepakimg} alt="" />
                    </div>
                  </div>
                </div>
              </div>


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
                            <p>ZeroOne</p>
                        </div>
                      </div>
                  <div className="member-box">
                    <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>ZeroOne</p>
                        </div>
                  </div>
                    <div className="member-box">
                       <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>ZeroOne</p>
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
                            <p>ZeroOne</p>
                        </div>
                      </div>
                  <div className="member-box">
                    <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>ZeroOne</p>
                        </div>
                  </div>
                    <div className="member-box">
                       <div className="member-name">
                          <img src={deepak} alt="" />
                        </div>
                        <div className="member-details">
                            <p>Deepak</p>
                            <p>ZeroOne</p>
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
                          <div className = { activity == 1 ? 'activity-content-one' : 'activity-hide' } id='one-color'></div>
                          <div className = { activity == 2 ? 'activity-content-one' : 'activity-hide' } id='two-color'></div>
                          <div className = { activity == 3 ? 'activity-content-one' : 'activity-hide' } id='three-color'></div>
                          <div className = { activity == 4 ? 'activity-content-one' : 'activity-hide' } id='four-color'></div>
                     </div>
                      <div className="clubs-Activities-in-two">
                         <div id = { activity == 1 ? 'activity-content-hover' : '' }
                          className="Activity-box-one" onClick={() => handleActivity(1)}>Activity-1</div>
                         <div id = { activity == 2 ? 'activity-content-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(2)}>Activity-2</div>
                         <div id = { activity == 3 ? 'activity-content-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(3)}>Activity-3</div>
                         <div id = { activity == 4 ? 'activity-content-hover' : '' }
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