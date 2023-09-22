import React, { useState, useEffect } from 'react';
import './Home.css'; 
import './MobileView.css';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollToTop from "react-scroll-to-top";
import { Link as Scroll } from 'react-scroll';


import NavBar from '../../components/Navigation/Page';
import ToggleNav from '../../components/Navigation/ToggleNav';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// dialogue box start here 

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';




import Footer from '../../components/Footer/Footer';
import newVideo from '../../Assets/newVideo.mp4';  
import ProjectsImage from '../../Assets/ProjectsImage.webp';
import storiesImage from '../../Assets/storiesImage.jpeg';
import YtLogo from '../../Assets/Logos/YtLogo.png';
import InstaLogo from '../../Assets/Logos/InstaLogo.png';
import TwitterLogo from '../../Assets/Logos/TwitterLogo.png';
import LinkedInLogo from '../../Assets/Logos/LinkedInLogo.png';
import newsImage from '../../Assets/newsImage.jpeg';
import Director from '../../Assets/director.png'

import Technology from '../../Assets/Technology.jpg';
import Angular from '../../Assets/Angular.png';
import One from '../../Assets/One.png';
import Bash from '../../Assets/Bash.png';
import reactv6 from '../../Assets/reactv6.png';
import Meeting from '../../Assets/Meetings.jpg';
import Hukum from '../../Assets/Hukum.jpg';
import chairman from '../../Assets/chairman.png';

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

  const handleclick = () => {
    window.scrollTo(0, 0); 
  }


  const faqData = [
    {
      question: 'What is the Student Activity Center, and what kind of activities or services does it offer?',
      answer: 'Freshers often want to know what the Student Activity Center is all about and what they can expect to find there. This question helps them understand the center purpose and the range of activities and services available to them.',
    },
    {
      question: 'Can i join more then 1 club?',
      answer: 'Yes, Of course but you should be able to be active when club works. Multi taskers are always welcomed.',
    },
    {
      question: 'Does SAC conduct Events?',
      answer: 'yes, we do have a lot of regular events often from various clubs also sac has now initiated SIL (Social immersive learning) where students will be graded based on their participation in these events!',
    },
    {
      question: 'How do the clubs operate?',
      answer: 'Based on the semester clubs have various activities that you are always welcomed to join and participate in',
    },
    {
      question: 'Are first year allowed in SAC?',
      answer: 'First years freshers they are always welcomed. SAC is a place where your talents flourish and also you gain new skills with coming time.',
    },

  ];


  const toggleAnswer = (index) => {
    if (expandedQuestions.includes(index)) {
      setExpandedQuestions(expandedQuestions.filter((item) => item !== index));
    } else {
      setExpandedQuestions([...expandedQuestions, index]);
    }
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

// ------------------------------------------------------

const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


// ------------------------------------------------------


  return (
    <div className='HomeComponent'>
        {screenWidth > 768 ? <NavBar isScrolled={isNavScrolled} /> : <ToggleNav/> }
        <div className="HomeContainer">
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
                <h3>Designed to accommodate path-breaking ideas, problem-solving postulates, and artistic assertions, creating an environment that encourages innovation and experimentation</h3>
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
                  <div>
                  <Link className='about-more-link' onClick={handleClickOpen} >More about Student Activity Center</Link>
       
                      <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                        maxWidth="lg"
                      >
                        <DialogContent dividers>
                          <iframe
            src="https://online.fliphtml5.com/syvtl/zqtg/"
            frameborder="0"
            style={{ width: '50rem', height: '50rem' }} // Adjust height as needed
          ></iframe>
                        </DialogContent>
                        <DialogActions>
                          <Button autoFocus onClick={handleClose}>
                            Close
                          </Button>
                        </DialogActions>
                      </BootstrapDialog>
                    </div>
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
                <h1>4 Domains Infinite Possibilities</h1>
                <p>Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world</p>
              </div>
            </div>
            <div className="projects-one">
              <div className="projects-one-in">
                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={Technology} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Technology Clubs</h2>
                    <p>Explore cutting-edge tech trends and hands-on projects, from coding to robotics, in our vibrant tech enthusiast community.</p>
                    <Link className='projects-comps-two-links' to='/'>Explore</Link>
                  </div>
                </div>
                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={Technology} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Liberal & Sports Clubs</h2>
                    <p>Celebrate diversity through art, dance, music, and more, fostering cultural exchange and global understanding.</p>
                    <Link className='projects-comps-two-links' to='/'>Explore</Link>
                  </div>
                </div>
                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={Technology} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Innovation Clubs</h2>
                    <p>Ignite creativity, entrepreneurship, and problem-solving skills, driving innovative solutions to real-world challenges.</p>
                    <Link className='projects-comps-two-links' to='/'>Explore</Link>
                  </div>
                </div>
                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={Technology} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Outreach Clubs</h2>
                    <p>Advocate for meaningful social change, raising awareness and engaging in volunteer activities to make a positive impact.</p>
                    <Link className='projects-comps-two-links' to='/'>Explore</Link>
                  </div>
                </div>
              </div>
            </div>

           <div className="explore-departments">
            <Scroll className='projects-link' activeClass="active" to="Quick-links-component" spy={true} smooth={true} offset={-100} duration={800}>Explore All Clubs</Scroll>
           </div>
          </div>
        </div>



          

        <div className="stories">
          <div className="stories-in">
            <div className="stories-header">
              <div className="stories-header-in">
                <h1>Stories from the Community</h1>
                <p>Get inspired by stories of people from the community</p>
              </div>
            </div>

            <div className="stories-one">
              <div className="stories-one-in">
                <div className="stories-comps">
                  <div className="stories-comps-in">
                    <div className="stories-comps-in-one">
                      <img src={storiesImage} alt="" />
                    </div>
                    <div className="stories-comps-in-two">
                      <div className="stories-comps-in-two-in">
                        <p>ZeroOne CodeClub</p>
                        <h2>Nurturing a Coding Culture on University</h2>
                        <Link className='stories-links' to='/'>Read now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stories-comps">
                  <div className="stories-comps-in">
                    <div className="stories-comps-in-one">
                      <img src={storiesImage} alt="" />
                    </div>
                    <div className="stories-comps-in-two">
                      <div className="stories-comps-in-two-in">
                        <p>ZeroOne CodeClub</p>
                        <h2>Nurturing a Coding Culture on University</h2>
                        <Link className='stories-links' to='/'>Read now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stories-comps">
                  <div className="stories-comps-in">
                    <div className="stories-comps-in-one">
                      <img src={storiesImage} alt="" />
                    </div>
                    <div className="stories-comps-in-two">
                      <div className="stories-comps-in-two-in">
                        <p>ZeroOne CodeClub</p>
                        <h2>Nurturing a Coding Culture on University</h2>
                        <Link className='stories-links' to='/'>Read now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         <div className="stories-viewmore">
          <Link onClick={handleclick} className='stories-viewmore-link' to='/blogs'>View More Stories</Link>
         </div>
        </div>


        <div className="gallery">
          <div className="gallery-in">
            <div className="gallery-one">
                
            </div>
          </div>
        </div>


      <div className="news">
        <div className="news-header">
          <div className="news-header-in">
            <h1>News from the Community</h1>
          </div>
        </div>
        <div className="news-in">
          <div className="news-main">
            <div className="news-one">
                <div className="news-one-in">
                  <img src={Hukum} alt="" />
                  <div className="news-one-in-desc">
                    <p>Council General Body Meeting</p>
                    <p>Stanford students create and apply knowledge by thinking and doing, preparing for leadership in a rapidly changing world.</p>
                    <p>September 8th 2023</p>
                  </div>
                </div>
            </div>
            <div className="news-one">
                <div className="news-one-in">
                  <img src={Meeting} alt="" />
                  <div className="news-one-in-desc">
                    <p>Technology</p>
                    <p>Stanford students create and apply knowledge by thinking and doing, preparing for leadership in a rapidly changing world.</p>
                    <p>September 8th 2023</p>
                  </div>
                </div>
            </div>
            <div className="news-one">
                <div className="news-one-in">
                  <img src={newsImage} alt="" />
                  <div className="news-one-in-desc">
                    <p>Technology</p>
                    <p>Stanford students create and apply knowledge by thinking and doing, preparing for leadership in a rapidly changing world.</p>
                    <p>September 8th 2023</p>
                  </div>
                </div>
            </div>
            <div className="news-one">
                <div className="news-one-in">
                  <img src={newsImage} alt="" />
                  <div className="news-one-in-desc">
                    <p>Technology</p>
                    <p>Stanford students create and apply knowledge by thinking and doing, preparing for leadership in a rapidly changing world.</p>
                    <p>September 8th 2023</p>
                  </div>
                </div>
            </div>
           
            
          </div>
        </div>
      </div>



      {/*  -------------------- upcoming events ---------------------- */}

      <div className="upcoming-events">
        <div className="upcoming-events-header">
          <div className="upcoming-events-header-in">
            <h1>Upcoming Events</h1>
          </div>
        </div>
        <div className="upcoming-events-in">
        <div className="ue-comps">
              <div className="ue-comps-in">
                <div className="ue-comps-in-one">
                    <img src={One} alt="" />
                </div>
                <div className="ue-comps-in-two">
                      <h2>Vim Master Class</h2>
                      <p>Master Unix VIM: Boost your productivity with this versatile, efficient text editor for command-line enthusiasts.</p>

                      <p>25th September, 2023</p>
                      <Link
                        className='registration-link-for-events'
                        to='https://forms.google.com/'
                        target='_blank'
                      >Register</Link>
                </div>
              </div>
            </div>
            <div className="ue-comps">
              <div className="ue-comps-in">
                <div className="ue-comps-in-one">
                    <img src={Angular} alt="" />
                </div>
                <div className="ue-comps-in-two">
                      <h2>Angular.js</h2>
                      <p>Discover the power of Angular.js: a dynamic framework for building robust, interactive web applications.</p>

                      <p>27th September, 2023</p>
                      <Link
                        className='registration-link-for-events'
                        to='https://forms.google.com/'
                        target='_blank'
                      >Register</Link>
                </div>
              </div>
            </div>
            
            <div className="ue-comps">
              <div className="ue-comps-in">
                <div className="ue-comps-in-one">
                    <img src={Bash} alt="" />
                </div>
                <div className="ue-comps-in-two">
                      <h2>Bash Scrpting</h2>
                      <p>Unlock the world of Bash scripting: Learn to automate tasks and streamline your workflow with shell scripting</p>

                      <p>27th September, 2023</p>
                      <Link
                        className='registration-link-for-events'
                        to='https://forms.google.com/'
                        target='_blank'
                      >Register</Link>
                </div>
              </div>
            </div>
            <div className="ue-comps">
              <div className="ue-comps-in">
                <div className="ue-comps-in-one">
                    <img src={reactv6} alt="" />
                    
                </div>
                <div className="ue-comps-in-two">
                      <h2>React Router V6</h2>
                      <p>Unlock the world of Bash scripting: Learn to automate tasks and streamline your workflow with shell scripting</p>

                      <p>26th September, 2023</p>
                      <Link
                        className='registration-link-for-events'
                        to='https://forms.google.com/'
                        target='_blank'
                      >Register</Link>
                </div>
              </div>
            </div>

        </div>
        <div className="explore-events">
          <Link onClick={handleclick} to='/events' className='explore-events-link'>Explore More Events</Link>
        </div>
      </div>



      {/* ---------------------------------- projects --------------------- */}
      <div className="workingstill">
        <div className="workingstill-in">
          <img src={Technology} alt="" />
        </div>
      </div>




        <div className="joinus">
          <div className="joinus-inner">
              <h1>Experience the power of community. Join us today and be a part of something truly special.</h1>
              <a href='https://t.me/kl_sac'>Join our Community</a>
          </div>
        </div>


        <div className="officers">
          <div className="officers-in">
            <div className="officers-in-one">
                <div className="officers-in-one-in">
                      <h1>The Office of Student Activity Center</h1>
                        <p>The Office of SAC Operates in 3 levels, Director of SAC and Faculty Mentors, Student Council and Executive Body</p>
                    <Link onClick={handleclick}  className='leadership-link' to='/leadership'>Explore Leadership</Link>
                </div>
            </div>
            <div className="officers-in-two">
                <div className="officers-in-two-in">
                <div className="profile-card">
                        <img src={Director} alt="" />
                        <h2>P Sai Vijay</h2>
                        <p>Director, SAC</p>
                        <p>ceo@saivijay@gmail.com</p>
                    </div>
                    <div className="profile-card">
                        <img src={chairman} alt="" />
                        <h2>Parth Thakkar</h2>
                        <p>Chairman, Student Council</p>
                        <p>ECE, 4th Year</p>
                    </div>
                </div>
            </div>
          </div>
        </div>


            <div className="follow">
              <div className="follow-in">
                <div className="follow-header">
                  <div className="follow-header-in">
                    <h1>Follow Student Activity Center at KLEF</h1>
                  </div>
                </div>

                <div className="follow-header-one">
                  <div className="follow-header-one-in">
                    <div className="follow-comps">
                      <div className="follow-comps-inner">
                        <div className="follow-comps-one">
                          <div className="follow-comps-one-in">
                            <img src={YtLogo} alt="youtube logo" />
                          </div>
                        </div>
                        <div className="follow-comps-two">
                          <h1>YouTube</h1>
                          <p>Subscribe to join a community of creative developers and learn the latest in Google technology.</p>
                        </div>
                        <div className="follow-comps-three">
                          <a href="https://www.youtube.com/channel/UC4QDq4yqUO3Xc0kQrXJnU1w">Learn More</a>
                        </div>
                      </div>
                    </div>
                    <div className="follow-comps">
                      <div className="follow-comps-inner">
                        <div className="follow-comps-one">
                          <div className="follow-comps-one-in">
                            <img src={InstaLogo} alt="youtube logo" />
                          </div>
                        </div>
                        <div className="follow-comps-two">
                          <h1>Instagram</h1>
                          <p>Subscribe to join a community of creative developers and learn the latest in Google technology.</p>
                        </div>
                        <div className="follow-comps-three">
                          <a href='https://www.instagram.com/klu_sac/'>Learn More</a>
                        </div>
                      </div>
                    </div>
                    <div className="follow-comps">
                      <div className="follow-comps-inner">
                        <div className="follow-comps-one">
                          <div className="follow-comps-one-in">
                            <img src={LinkedInLogo} alt="youtube logo" />
                          </div>
                        </div>
                        <div className="follow-comps-two">
                          <h1>LinkedIn</h1>
                          <p>Subscribe to join a community of creative developers and learn the latest in Google technology.</p>
                        </div>
                        <div className="follow-comps-three">
                          <a href="https://www.youtube.com/channel/UC4QDq4yqUO3Xc0kQrXJnU1w">Learn More</a>
                        </div>
                      </div>
                    </div>
                    <div className="follow-comps">
                      <div className="follow-comps-inner">
                        <div className="follow-comps-one">
                          <div className="follow-comps-one-in">
                            <img src={TwitterLogo} alt="youtube logo" />
                          </div>
                        </div>
                        <div className="follow-comps-two">
                          <h1>Twitter</h1>
                          <p>Subscribe to join a community of creative developers and learn the latest in Google technology.</p>
                        </div>
                        <div className="follow-comps-three">
                          <a href="https://www.youtube.com/channel/UC4QDq4yqUO3Xc0kQrXJnU1w">Learn More</a>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
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


{/* ----------------------------------- Quick Links ------------------------------------------- */}
 
                    <div className="Quick-links-component">
                        <div className="Quick-links-component-in">
                            <div className="quick-link-one">
                              <div className="quick-link-one-in">
                                   <h1>Technology</h1>
                                   <Link to='/clubs/zeroonecodeclub' className='qu-link-cm'>ZeroOne CodeClub</Link>
                                   <Link to='/clubs/aeroelectricclub' className='qu-link-cm'>AeroElectric Club</Link>
                                   <Link to='/clubs/cyberclub' className='qu-link-cm'>Cyber Club </Link>
                                   <Link to='/clubs/WebAppsClub' className='qu-link-cm'>WebApps Club </Link>
                                   <Link to='/clubs/TechHumaClub' className='qu-link-cm'>TechHuma Club </Link>
                                   <Link to='/clubs/RoboticsClub' className='qu-link-cm'>Robotics Club </Link>
                                   <Link to='/clubs/AnimationClub' className='qu-link-cm'>Animation Club </Link>
                                   <Link to='/clubs/AutomobileClub' className='qu-link-cm'>Automobile Club </Link>
                                   <Link to='/clubs/AgricultureClub' className='qu-link-cm'>Agriculture Club </Link>
                                   <Link to='/clubs/MobileESportsClub' className='qu-link-cm'>MobileESports Club </Link>
                                   <Link to='/clubs/AIClub' className='qu-link-cm'>AI Club</Link>
                              </div>

                                <div className="quick-link-two-in">
                                  <h1>Liberal Arts</h1>
                                    <Link to='/clubs/FusionClub' className='qu-link-cm'>Fusion Club</Link>
                                    <Link to='/clubs/SwaraClub' className='qu-link-cm'>Swara Club</Link>
                                    <Link to='/clubs/VachasClub' className='qu-link-cm'>Vachas Club</Link>
                                    <Link to='/clubs/KLRadioClub' className='qu-link-cm'>KLRadio Club</Link>
                                    <Link to='/clubs/FilmMakingClub' className='qu-link-cm'>FilmMaking Club</Link>
                                    <Link to='/clubs/StandupComedyClub' className='qu-link-cm'>StandupComedy</Link>
                                    <Link to='/clubs/DramaticsClub' className='qu-link-cm'>Dramatics Club</Link>
                                </div>

                                <div className="quick-link-three-in">
                                  <h1>Innovation</h1>
                                  <Link   className='qu-link-cm'>ACIC</Link>
                                  <Link   className='qu-link-cm'>Ideas Hub</Link>
                                  <Link   className='qu-link-cm'>Start in College</Link>
                                </div>
                                <div className="quick-link-four-in">
                                  <h1> Outreach</h1>
                                  <Link to='/clubs/CEAClub' className='qu-link-cm'>CEA Club</Link>
                                  <Link to='/clubs/TourismClub' className='qu-link-cm'>Tourism Club</Link>
                                  <Link to='/clubs/KLTalksClub' className='qu-link-cm'>KL Talks Club</Link>
                                  <Link to='/clubs/SafeLifeClub' className='qu-link-cm'>SafeLife Club</Link>
                                  <Link to='/clubs/ElectoralClub' className='qu-link-cm'>Electoral Club</Link>
                                  <Link to='/clubs/smartvillagerevolution' className='qu-link-cm'>SVR</Link>
                                </div>
                            </div>
                            <div className="quick-link-two">
                              <div className="quick-link-two-one">
                                <h1>Quick Links for activities at SAC</h1>
                                  <Link className='quick-more' to='/clubs' >DeepDive <OpenInNewIcon /> </Link>
                                </div>
                            </div>
                          </div>
                    </div>

{/* ----------------------------------- Gallery ------------------------------------------- */}

                      <div className="gallery-component">
                        <div className="gallery-component-in">
                          <div className="gallery-com-one"></div>
                          <div className="gallery-com-two"></div>
                          <div className="gallery-com-three"></div>
                          <div className="gallery-com-four"></div>
                        </div>
                      </div>

          </div>
         <Footer/>
    </div>


  )
}

export default Home
