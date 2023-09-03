import React from 'react';
import './page.css';
import { Link as Scroll } from 'react-scroll';

import ZeroOneClubLogo from '../../../Assets/Logos/ZeroOneClubLogo.png';
import { BsFileEarmarkCode } from 'react-icons/bs';

import deepakimg from '../../../Assets/NewsImages/PreBootCamp.jpg'
import deepak from '../../../Assets/CouncilMembers/CouncilMember_02.png'
import Footer from '../../../components/Footer/Footer'

const page = () => {
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
                          duration={500}
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
                          duration={500}
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
                          duration={500}
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
                          duration={500}
                        >
                        Team
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
                        <img src={deepak} alt="" />
                      </div>
                  <div className="member-box">
                        <img src={deepak} alt="" />
                  </div>
                    <div className="member-box">
                        <img src={deepak} alt="" />
                    </div>
                       </div>

                  <div className="clubs-team-in-three">
                    <div className="member-box">
                        <img src={deepak} alt="" />
                     </div>
                  <div className="member-box">
                      <img src={deepak} alt="" />
                  </div>
                    <div className="member-box">
                      <img src={deepak} alt="" />
                  </div>  
                </div>

              </div>
            </div>
              

{/* ----------------------------------Activities-------------------------------------------- */}


              <div className="clubs-Activities">
                <div className="clubs-Activities-in">
                  <div className="clubs-Activities-in-one">
                    <h1>Activities</h1>
                     </div>
                      <div className="clubs-Activities-in-two">
                          activity-ch
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

export default page