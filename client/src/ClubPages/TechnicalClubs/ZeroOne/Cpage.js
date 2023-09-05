import React from 'react';
import './Cpage.css';
import { Link as Scroll } from 'react-scroll';
import  { useState } from 'react';

import { BsFileEarmarkCode } from 'react-icons/bs';

import deepakimg from '../../../Assets/NewsImages/PreBootCamp.jpg'
import deepak from '../../../Assets/CouncilMembers/CouncilMember_02.png'
import clubpage from '../../../Assets/clubpage.webp'
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

            <div className="club-hero">
              <div className="club-hero-in">
                </div>
            </div>



{/* ----------------------------------Main-------------------------------------------- */}


          <div className="club-main-component">
            <div className="club-main-component-in">

                <div className="club-main-container-one">
                  <div className="club-main-navbar">
                    <div className="club-main-navbar-in">
                      <div className="club-nav-button nav-button-one" 
                                    id = { activity === 1 ? 'button-hover' : '' }
                                    onClick={ () => {handleActivity(1)}}>Why you should join</div>
                      <div className="club-nav-button nav-button-two" 
                                    id = { activity === 2 ? 'button-hover' : '' }
                                    onClick={ () => {handleActivity(2)}}>Glimpse</div>
                      <div className="club-nav-button nav-button-three" 
                                    id = { activity === 3 ? 'button-hover' : '' }
                                    onClick={ () => {handleActivity(3)}}>Team</div>
                      <div className="club-nav-button nav-button-four" 
                                    id = { activity === 4 ? 'button-hover' : '' }
                                    onClick={ () => {handleActivity(4)}}>Activities</div>
                    </div>
                  </div>
                </div>

                <div className="club-main-container-two"></div>
                    <div className="club-main-content">
                      <div className="club-main-content-in">
                        <div className = { activity === 1 ? 'club-main-content-box' : 'main-content-hide' } >
                          
                          <div className="club-box-content-one-head">
                              <h1>Why you should join the club!</h1>
                          </div>
                            <div className="club-box-content-one">
                                  <div className="content-one-matter">
                                    <div className="one-matter-img">
                                      <img src={clubpage} alt="" />
                                    </div>
                                    <div className="one-matter-img-content">
                                      <h1>Exclusive Events</h1>
                                      <p>Get access to LIVE events that help you explore your favorite fields and grow to the next level.</p>
                                    </div>
                                  </div>
                                  <div className="content-two-matter">
                                  <div className="one-matter-img">
                                      <img src={clubpage} alt="" />
                                    </div>
                                    <div className="one-matter-img-content">
                                      <h1>Exclusive Events</h1>
                                      <p>Get access to LIVE events that help you explore your favorite fields and grow to the next level.</p>
                                    </div>
                                  </div>
                            </div>
                            <div className="club-box-content-two">
                                  <div className="content-three-matter">
                                  <div className="one-matter-img">
                                      <img src={clubpage} alt="" />
                                    </div>
                                    <div className="one-matter-img-content">
                                      <h1>Exclusive Events</h1>
                                      <p>Get access to LIVE events that help you explore your favorite fields and grow to the next level.</p>
                                    </div>
                                  </div>

                                  <div className="content-four-matter">
                                  <div className="one-matter-img">
                                      <img src={clubpage} alt="" />
                                    </div>
                                    <div className="one-matter-img-content">
                                      <h1>Exclusive Events</h1>
                                      <p>Get access to LIVE events that help you explore your favorite fields and grow to the next level.</p>
                                    </div>
                                  </div>
                            </div>

                          </div>
                        <div className = { activity === 2 ? 'club-main-content-box' : 'main-content-hide' } >BOX-2</div>
                        <div className = { activity === 3 ? 'club-main-content-box' : 'main-content-hide' } >BOX-3</div>
                        <div className = { activity === 4 ? 'club-main-content-box' : 'main-content-hide' } >BOX-4</div>
                        </div>
                    </div>
              </div>
          </div>















              

{/* ----------------------------------Activities--------------------------------------------


              <div className="club-activity-component">
              <div className="clubs-Activities">
                <div className="club-activity-head">
                  <h1>Activities</h1>
                  </div>
                <div className="clubs-Activities-in">
                  <div className="clubs-Activities-in-one">
                          <div className = { activity === 1 ? 'club-main-content-box' : 'main-content-hide' } id='one-color'></div>
                          <div className = { activity === 2 ? 'club-main-content-box' : 'main-content-hide' } id='two-color'></div>
                          <div className = { activity === 3 ? 'club-main-content-box' : 'main-content-hide' } id='three-color'></div>
                          <div className = { activity === 4 ? 'club-main-content-box' : 'main-content-hide' } id='four-color'></div>
                     </div>
                      <div className="clubs-Activities-in-two">
                         <div id = { activity === 1 ? 'button-hover' : '' }
                          className="Activity-box-one" onClick={() => handleActivity(1)}>Activity-1</div>
                         <div id = { activity === 2 ? 'button-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(2)}>Activity-2</div>
                         <div id = { activity === 3 ? 'button-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(3)}>Activity-3</div>
                         <div id = { activity === 4 ? 'button-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(4)}>Activity-4</div>
                    </div>
                </div>
              </div>
            </div>

*/}
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