import React, { useState, useEffect, useRef } from 'react';
import '../Home/Home.css'; 
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollToTop from "react-scroll-to-top";
import { Link as Scroll } from 'react-scroll';


import Footer from '../../components/Footer/Footer';

import G20andSac from '../../Assets/Logos/G20andSac.png';
import G20andSac2 from '../../Assets/Logos/G20andSac2.png';
import GroupPhoto from '../../Assets/GroupPhoto.jpg'; 
import newSacLogo2 from '../../Assets/Logos/newSacLogo2.png';
import newSacLogo from '../../Assets/Logos/newSacLogo.png';
import bck from '../../Assets/bck.jpg'; 
import newVideo from '../../Assets/newVideo.mp4';  
import AmarnadhDroneCompetition from '../../Assets/NewsImages/AmarnadhDroneCompetition.jpg'; 
import PreBootCamp from '../../Assets/NewsImages/PreBootCamp.jpg';
import ProjectsImage from '../../Assets/ProjectsImage.webp';





const Home  = () => {
 
  useEffect(() => {
    document.title = 'Home | KLU SAC';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Student Activity Center at KLEF';
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  const [isNavScrolled, setNavScrolled] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState([]);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setNavScrolled(true);
    } else {
      setNavScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isClubDropdownVisible, setClubDropdownVisible] = useState(false);

  const toggleClubDropdown = () => {
    setClubDropdownVisible(!isClubDropdownVisible);
  };


  const faqData = [
    {
      question: 'What is Student Activity Center at Koneru Lakshmaiah Education Foundation?',
      answer: 'Student Activity Center is a department at Koneru Lakshmaiah Education Foundation that is designed to accommodate path-breaking ideas, problem-solving postulates, and artistic assertions, creating an environment that encourages innovation and experimentation.',
    },
    {
      question: 'What is Student Activity Center at Koneru Lakshmaiah Education Foundation?',
      answer: 'Student Activity Center is a department at Koneru Lakshmaiah Education Foundation that is designed to accommodate path-breaking ideas, problem-solving postulates, and artistic assertions, creating an environment that encourages innovation and experimentation.',
    },
    {
      question: 'What is Student Activity Center at Koneru Lakshmaiah Education Foundation?',
      answer: 'Student Activity Center is a department at Koneru Lakshmaiah Education Foundation that is designed to accommodate path-breaking ideas, problem-solving postulates, and artistic assertions, creating an environment that encourages innovation and experimentation.',
    },
    {
      question: 'What is Student Activity Center at Koneru Lakshmaiah Education Foundation?',
      answer: 'Student Activity Center is a department at Koneru Lakshmaiah Education Foundation that is designed to accommodate path-breaking ideas, problem-solving postulates, and artistic assertions, creating an environment that encourages innovation and experimentation.',
    },
    {
      question: 'What is Student Activity Center at Koneru Lakshmaiah Education Foundation?',
      answer: 'Student Activity Center is a department at Koneru Lakshmaiah Education Foundation that is designed to accommodate path-breaking ideas, problem-solving postulates, and artistic assertions, creating an environment that encourages innovation and experimentation.',
    },
    // Add more FAQ items here
  ];


  const toggleAnswer = (index) => {
    if (expandedQuestions.includes(index)) {
      setExpandedQuestions(expandedQuestions.filter((item) => item !== index));
    } else {
      setExpandedQuestions([...expandedQuestions, index]);
    }
  };

  


  


  return (
    <div className='HomeComponent'>

        <div className="HomeContainer">
          
          <div className={`nav ${isNavScrolled ? 'scrolled' : ''}`}>
            <div className="nav-in">
            <div className="nav-in-two">
                <div className="nav-in-two-in">
                  {!isNavScrolled && <img className='logoini' src={newSacLogo} alt="" />}
                  {isNavScrolled && <h1><Link className='homelink' to='/'>Student Activity Center</Link></h1>}
                </div>
              </div>
              <div className="nav-in-one">
                <div className="nav-in-one-in">
                  <ul>
                    <li><Scroll className='nav-scroll-links' activeClass="active" to="news" spy ={true} smooth={true} offset={100} duration={200} >News</Scroll></li>
                    <li><Scroll className='nav-scroll-links' activeClass="active" to="news-two" spy ={true} smooth={true} offset={-10} duration={200} >Events</Scroll></li>
                    <li><Scroll className='nav-scroll-links' activeClass="active" to="about" spy ={true} smooth={true} offset={-10} duration={200}>About</Scroll></li>
                    {/* <li><Link className='nav-links' to='/dashboard'>Dashboard</Link></li> */}
                    <li><Link className='nav-links' to='/StudentClubs'>Clubs</Link></li>
                    <li><Link className='nav-links'  to='/leadership'>Leadership</Link></li>
                    <li><Link className='nav-links' to='/StudentClubs'>Student Council</Link></li>
                    <li><Scroll className='nav-scroll-links' activeClass="active" to="about" spy ={true} smooth={true} offset={-10} duration={200}>Blogs</Scroll></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          

          <div className="Home-one">
            <div className="Home-one-in">
              <video autoPlay={true} loop={true} muted={true} style={{width: "100%"}} src={newVideo}></video>
              <div className="centered-text">
              <h1>Student Activity Center</h1>
              <p className="animate-text">Empowering Tomorrow's Leaders Today</p>
            </div>
            <div className="explore-sac">
                    <Scroll
                    className='explore-sac-scroll'
                            activeClass="active"
                            to="about"
                            spy ={true}
                            smooth={true}
                            offset={-100}
                            duration={200}
                          >   
                          Explore SAC
                    </Scroll>  
            </div>
            </div>
          </div>

               
          <ScrollToTop  smooth id='scrollToTop' component={<p style={{ color: "rgb(151, 0, 3)" }}>Back to top</p>}></ScrollToTop>



        <div className="Home-two">
          <div className="Home-two-in">

          </div>
        </div>




        <div className="about">
              <div className="about-heading">
                <h1>A Department without Boundaries</h1>
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

      
        

        <div className="noname">
         <div className="noname-text">
         </div>
         <div className="noname-image">
         </div>
        </div>


        <div className="projects">
          <div className="projects-in">
            <div className="projects-in-header">
              <div className="projects-in-header-in">
                <h1>Department Projects from Clubs</h1>
                <p>Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world</p>
              </div>
            </div>
            <div className="projects-one">
              <div className="projects-one-in">
                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={ProjectsImage} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Pro Recording Camera</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatibus, dolorem ex distinctio magnam corrupti!</p>
                    <Link className='projects-comps-two-links' to='/'>Explore</Link>
                  </div>
                </div>
                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={ProjectsImage} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Pro Recording Camera</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatibus, dolorem ex distinctio magnam corrupti!</p>
                    <Link className='projects-comps-two-links' to='/'>Explore</Link>
                  </div>
                </div>
                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={ProjectsImage} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Pro Recording Camera</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatibus, dolorem ex distinctio magnam corrupti!</p>
                    <Link className='projects-comps-two-links' to='/'>Explore</Link>
                  </div>
                </div>
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


              </div>
            </div>




            <div className="joinus">
                  <div className="joinus-inner">
                    <h1>Experience the power of community. Join us today and be a part of something truly special.</h1>
                    <a href="t.me/klsac">Join Us</a>
                  </div>
            </div>


            <div className="faq">
      <div className="faq-inner">
        <div className="faq-one">
          <div className="faq-one-in">
            <h1>Frequently Asked Questions</h1>
          </div>
        </div>
        <div className="faq-two">
          <div className="faq-two-in">
            <div className="faq-two-one">
              {faqData.map((item, index) => (
                <div key={index}>
                  <div className="faq-qsn" onClick={() => toggleAnswer(index)}>
                    <p>{item.question}</p>
                  </div>
                  {expandedQuestions.includes(index) && (
                    <div className="faq-ans">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>




            

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
