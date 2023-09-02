import React, { useState, useEffect, useRef } from 'react';
import '../Home/Home.css'; 
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollToTop from "react-scroll-to-top";

import NewNav from '../../components/NewNav/NewNav'; 
import Footer from '../../components/Footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial'; 

import G20andSac from '../../Assets/Logos/G20andSac.png';
import G20andSac2 from '../../Assets/Logos/G20andSac2.png';
import GroupPhoto from '../../Assets/GroupPhoto.jpg'; 
import bck from '../../Assets/bck.jpg'; 
import newVideo from '../../Assets/newVideo.mp4';  
import AmarnadhDroneCompetition from '../../Assets/NewsImages/AmarnadhDroneCompetition.jpg'; 
import PreBootCamp from '../../Assets/NewsImages/PreBootCamp.jpg';
import CouncilMember_01 from '../../Assets/CouncilMembers/CouncilMember_01.png';
import CouncilMember_02 from '../../Assets/CouncilMembers/CouncilMember_02.png';
import CouncilMember_04 from '../../Assets/CouncilMembers/CouncilMember_04.png';
import CouncilMember_06 from '../../Assets/CouncilMembers/CouncilMember_06.png';
import CouncilMember_07 from '../../Assets/CouncilMembers/CouncilMember_07.png';
import CouncilMember_08 from '../../Assets/CouncilMembers/CouncilMember_08.png';
import CouncilMember_09 from '../../Assets/CouncilMembers/CouncilMember_09.png';
import CouncilMember_10 from '../../Assets/CouncilMembers/CouncilMember_10.png';
import CouncilMember_11 from '../../Assets/CouncilMembers/CouncilMember_11.png';
import CouncilMember_12 from '../../Assets/CouncilMembers/CouncilMember_12.png';




const Home  = () => {
 
  useEffect(() => {
    document.title = 'KLEF SAC';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Student Activity Center at KLEF';
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

 
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [isActive, setIsActive] = useState(false);


  function toggleOverlay() {
    setIsActive(!isActive);
  } 


  useEffect(() => {
    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-105px";
      }
      setPrevScrollpos(currentScrollPos);
    };
  }, [prevScrollpos]);


  return (
    <div className='HomeComponent'>

        <div className="HomeContainer">
               <div className="other">
                  <img id='oldsac' className={isActive ? '' : 'hidden'} src={G20andSac2} alt=""  />
                  <img id='newsac' className={isActive ? 'hidden' : ''} src={G20andSac} alt="" />
               </div>

               <div className='mainAnother'  id='navbar' >
                  <div className="users">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <div className={`button_container strides ${isActive ? 'active' : ''}`} onClick={toggleOverlay}>
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                  </div>
               </div>

               
                <div className={`overlay ${isActive ? 'open' : ''}`} id="overlay">
                    <NewNav/>
                </div>
                
        <div className="videoContainer">
            <video autoPlay={true} loop={true} muted={true} style={{width: "100%"}} src={newVideo}></video>
            
           <center>
              <div className="bind">
                <center>
                  <h1>Student Activity Center</h1>
                </center>
              </div>
           </center>

            <a id="activit">
            <div class="boxdown">
              <div className="boxdown-one">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            </a>


            

           
        </div>
        <ScrollToTop  smooth id='scrollToTop' component={<p style={{ color: "rgb(151, 0, 3)" }}>Back to top</p>}></ScrollToTop>



        <div id='activit' className="activities">
          <div className="activities-heading">
            <h1>Student Activity Center at KLEF</h1>
          </div>
          <div className="activities-inner">
            <div className="activities-one">
              <p>Home/<span id='dark'>The department of prominance</span> </p>
              <h3>The focus areas at KL University's Student Activity Center benefit students by providing opportunities to explore interests, develop skills, <span className='underlin'>gain practical experience</span>, network with peers and industry professionals, <span className='underlin'>build teamwork</span> and leadership skills, and enhance communication skills.</h3>
            </div>
            <div className="activities-two">
             <div className="activities-two-one">
             <p>The Student Activity Centre (SAC) at KL University is committed to shaping students' intellectual and personal growth. By providing a platform that promotes engagement in activities beyond the traditional classroom setting, SAC aims to foster academic and social success. SAC strives to create an environment that encourages students to explore their interests and passions, develop new skills and knowledge, and broaden their horizons. In addition to facilitating social and educational growth, student clubs and activity centres offer students access to valuable resources, including state-of-the-art equipment, expert guidance, and mentoring from experienced professionals. SAC places a high emphasis on community service and volunteer work to help students develop a sense of social responsibility and empathy for others. </p>
             </div>
             <div className="activities-two-two">
              <img src={GroupPhoto} alt="" />
             </div>
            </div>
          </div>
        </div>


      
        

        <div className="noname">
         <div className="noname-text">
         </div>
         <div className="noname-image">
         </div>
        </div>




            <div className="about">
              <div className="about-heading">
                <h1>About the Center</h1>
                <h3>designed to accommodate path-breaking ideas, problem-solving postulates, and artistic assertions, creating an environment that encourages innovation and experimentation</h3>
              </div>
              <div className="about-two">
                <div className="about-two-one about-two-cmn">
                  <div className="about-two-one-heading">
                    <h2>Collaborations</h2>
                  </div>
                  <div className="about-two-one-counter counter">
                    <CountUp start={0} duration={4} end={100} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>
                <div className="about-two-two about-two-cmn">
                  <div className="about-two-two-heading">
                    <h2>Clubs/Wings</h2>
                  </div>
                  <div className="about-two-two-counter counter">
                    <CountUp start={0} duration={4} end={35} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>
                <div className="about-two-three about-two-cmn">
                  <div className="about-two-three-heading">
                    <h2>Industry Mentors</h2>
                  </div>
                  <div className="about-two-three-counter counter">
                    <CountUp start={0} duration={4} end={50} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>
                

                <div className="about-two-five about-two-cmn">
                  <div className="about-two-five-heading">
                    <h2>Actively Engaged Students</h2>
                  </div>
                  <div className="about-two-five-counter counter">
                    <CountUp start={0} duration={4} end={6000} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>
                <div className="about-two-four about-two-cmn">
                  <div className="about-two-four-heading">
                    <h2>Startups</h2>
                  </div>
                  <div className="about-two-four-counter counter">
                    <CountUp start={0} duration={4} end={117} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>

                <div className="about-two-six about-two-cmn">
                  <div className="about-two-six-heading">
                    <h2>Projects</h2>
                  </div>
                  <div className="about-two-six-counter counter">
                    <CountUp start={0} duration={4} end={300} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>

              </div>

              <center>
                <div className="about-more">
                  <Link className='about-more-link'>More about Student Activity Center</Link>
                </div>
              </center>
            </div>


          


            <div className="team">
              <div className="team-heading">
                <h1>Students Council</h1>
              </div>
              <div className="team-inner">
                <div className="team-one">
                      
                      <div className="mem">
                        <div className="mem-img">
                          <img src={CouncilMember_06} alt="" />
                        </div>
                          <h3>Amarnadh </h3>
                          <p>School of Automation</p>
                      </div>
                      <div className="mem">
                      <div className="mem-img">
                        <img src={CouncilMember_11} alt="" />
                       </div>
                        <h3>Amish Kumar </h3>
                        <p>Photography</p>
                      </div>
                      <div className="mem">
                      <div className="mem-img">
                        <img src={CouncilMember_01} alt="" />
                       </div>
                        <h3>Arsene</h3>
                        <p>Ohana</p>
                      </div>
                      <div className="mem">
                       <div className="mem-img">
                        <img src={CouncilMember_02} alt="" />
                       </div>
                        <h3>Deepak Reddy </h3>
                        <p>The School of Coding</p>
                      </div>
                      
                      
                      <div className="mem">
                      <div className="mem-img">
                        <img src={CouncilMember_10} alt="" />
                       </div>
                        <h3>Hema </h3>
                        <p>Safe Life</p>
                      </div>
                      <div className="mem">
                      <div className="mem-img">
                        <img src={CouncilMember_08} alt="" />
                       </div>
                        <h3>John Rahul </h3>
                        <p>Standup Comedy</p>
                      </div>
                      <div className="mem">
                      <div className="mem-img">
                        <img src={CouncilMember_07} alt="" />
                       </div>
                        <h3>Lalith Kumar</h3>
                        <p>Web Development</p>
                      </div>
                      <div className="mem">
                      <div className="mem-img">
                        <img src={CouncilMember_04} alt="" />
                       </div>
                        <h3>Navyatha Jallu</h3>
                        <p>K L Radio</p>
                      </div>
                      <div className="mem">
                      <div className="mem-img">
                        <img src={CouncilMember_12} alt="" />
                       </div>
                        <h3>Parth Thakkar </h3>
                        <p>K L Talks</p>
                      </div>
                      <div className="mem">
                      <div className="mem-img">
                        <img src={CouncilMember_09} alt="" />
                       </div>
                        <h3>Yasaswini</h3>
                        <p>Muse Arts</p>
                      </div>
                      
                </div>
              </div>
            </div>






            <div className="news">
              <div className="news-header">
                <div className="news-header-one">
                  <h1>Happennings at SAC</h1>
                </div>
                <div className="news-header-two">
                  <hr />
                </div>
              </div>
              <div className="news-one">
                  <div className="news-one-header">
                        <div className="news-one-header-one">
                          <h1>Latest News</h1>
                        </div>
                        <div className="news-one-header-two">
                          <hr />
                        </div>
                  </div>
                  <div className="news-one-inner">
                      <div className="news-one-inner-one">
                        <img src={bck} alt="" />
                      </div>


                      
                      <div className="news-one-inner-two">
                      <div className="sw">
                          <div className="swd">
                            <h4>Amarnadh (SAC Automation Club Lead) bags the first prize in Dronix Drone Competition</h4>

                            <p>09/03/2023 | Aditya Institute of Technology and Management (AITAM)</p>
                          </div>
                          <div className="swi">
                            <img src={AmarnadhDroneCompetition} alt="" />
                          </div>
                        </div>
                        
                        <div className="sw">
                          <div className="swd">
                            <h4>Pre-Bootcamp program for CBSE Geetanjali school students by School of Coding | SAC</h4>

                            <p>12/04/2023 | Geetanjali CBSE School,Kunchanapalli</p>
                          </div>
                          <div className="swi">
                            <img src={PreBootCamp} alt="" />
                          </div>
                        </div>


                        <div className="sw">
                          <div className="swd">
                            <h4>Pre-Bootcamp program for CBSE Geetanjali school students by School of Coding | SAC</h4>

                            <p>12/04/2023 | Geetanjali CBSE School,Kunchanapalli</p>
                          </div>
                          <div className="swi">
                            <img src={PreBootCamp} alt="" />
                          </div>
                        </div>
                      </div>


                  </div>



              </div>
              <div className="news-two">
                <div className="news-two-header">
                        <div className="news-two-header-one">
                          <h1>Announcements</h1>
                        </div>
                        <div className="news-two-header-two">
                          <hr />
                        </div>
                  </div>
                  <div className="news-two-inner">
                        <div className="nws">
                            <p>12/04/23</p>
                            <h4>Commencement of Social Internship Registrations for Y22 Students</h4>
                        </div>
                        <div className="nws">
                            <p>10/04/23</p>
                            <h4>Official Collaboration with 25+ Government Departments for Social Internship 2023</h4>
                        </div>
                        <div className="nws">
                            <p>08/04/23</p>
                            <h4>Open Campus Code (OCC) project proposals are currently being accepted</h4>
                        </div>
                  </div>
              </div>
              <div className="news-three">
                <div className="news-three-header">
                          <div className="news-three-header-one">
                            <h1>Upcoming Activities</h1>
                          </div>
                          <div className="news-three-header-two">
                            <hr />
                          </div>
                    </div>
                    <div className="news-three-inner">
                      <div className="dts">
                          <div className="dts-one">
                              <h1>April <br />17 </h1>
                          </div>
                          <div className="dts-two">
                              <h2>Knockout - Coding School Coding Challenge 1</h2>
                              <p>2023</p>
                              <p>19:00 PM - 23:00 pm</p>
                          </div>
                        </div>
                        <div className="dts">
                          <div className="dts-one">
                              <h1>April <br />23 </h1>
                          </div>
                          <div className="dts-two">
                              <h2>One day Workshop on composting using kitchen waste</h2>
                              <p>2023</p> 
                              <p>09:00 AM - 13:00 PM</p>
                          </div>

                        </div>
                        <div className="dts">
                          <div className="dts-one">
                              <h1>April <br />26 </h1>
                          </div>
                          <div className="dts-two">
                              <h2>Story Telling, Ed. 12</h2>
                              <p>2023</p> 
                              <p>09:00 AM - 12:00 PM</p>
                          </div>
                        </div>
                        <div className="dts">
                          <div className="dts-one">
                              <h1>April <br />28 </h1>
                          </div>
                          <div className="dts-two">
                              <h2>Film Scripting</h2>
                              <p>2023</p> 
                              <p>09:00 AM - 12:00 PM</p>
                          </div>
                        </div>

                        
                    </div>

                    <Link to='/Home/Calendar' className='viewFull'>View Full Calendar</Link>
              </div>
            </div>




            <div className="joinus">
                  <div className="joinus-inner">
                    <h1>Experience the power of community. Join us today and be a part of something truly special.</h1>
                    <a href="t.me/klsac">Join Us</a>
                  </div>
            </div>






            <Testimonial/>
            
            

            <div id='qckid' className="quicklinks">

              <div className="quicklinks-inner">
                    <div className="quick-one quick">
                        <h3>Technology Clubs</h3>
                        <ul>
                          <li><Link className='qls'>Coding School</Link></li>
                          <li><Link className='qls'>Cyber Security</Link></li>
                          <li><Link className='qls'>Automation</Link></li>
                          <li><Link className='qls'>Robotics</Link></li>
                          <li><Link className='qls'>Automobile</Link></li>
                          <li><Link className='qls'>Game Development</Link></li>
                        </ul>
                    </div>
                    <div className="quick-two quick">
                        <h3>Liberal Arts</h3>
                        <ul>
                          <li><Link className='qls'>Music Club</Link></li>
                          <li><Link className='qls'>Narthana Club</Link></li>
                          <li><Link className='qls'>Fusion Club</Link></li>
                          <li><Link className='qls'>Standup Comedy</Link></li>
                          <li><Link className='qls'>Muse Arts</Link></li>
                          <li><Link className='qls'>Dramatics</Link></li>
                        </ul>
                    </div>
                    <div className="quick-three quick">
                          <div className="quick-three-one">
                            <h3>Innovation and Incubation</h3>
                            <ul>
                              <li><Link className='qls'>ACIC</Link></li>
                              <li><Link className='qls'>Start in College</Link></li>

                              <li><Link className='qls'>Ideas Hub</Link></li>
                            </ul>
                          </div>
                    </div>
                    <div className="quick-four quick">
                    <h3>Society and Outreach</h3>
                            <ul>
                            <li><Link className='qls'>Smart Village Revolution</Link></li>
                              <li><Link className='qls'>NSS</Link></li>
                              <li><Link className='qls'>NSS</Link></li>
                              <li><Link className='qls'>NCC</Link></li>
                              <li><Link className='qls'>Safe Life</Link></li>
                              <li><Link className='qls'>CEA</Link></li>
                            </ul>
                    </div>
              </div>
              <div className="quick-image">
                {/* <a href="https://www.kluniversity.in/"><img src="https://i.ibb.co/YhMKv90/sac-logo-68af69157709144b2811.png" alt="" /></a> */}

                <h1>Quick Links for activities at SAC</h1>
                <div className="explore">
                  <Link className="exp">Deep Dive
                  <span class="material-symbols-outlined">open_in_new</span></Link>
                </div>
              </div>
            </div>

            
        </div>
        <Footer></Footer>
    </div>


  )
}

export default Home
