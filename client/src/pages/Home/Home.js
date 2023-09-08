import React, { useState, useEffect } from 'react';
import '../Home/Home.css'; 
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollToTop from "react-scroll-to-top";
import { Link as Scroll } from 'react-scroll';


import NavBar from '../../components/Navigation/Page';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


import Footer from '../../components/Footer/Footer';
import newVideo from '../../Assets/newVideo.mp4';  
import ProjectsImage from '../../Assets/ProjectsImage.webp';
import storiesImage from '../../Assets/storiesImage.jpeg';
import YtLogo from '../../Assets/Logos/YtLogo.png';
import InstaLogo from '../../Assets/Logos/InstaLogo.png';
import TwitterLogo from '../../Assets/Logos/TwitterLogo.png';
import LinkedInLogo from '../../Assets/Logos/LinkedInLogo.png';
import newsImage from '../../Assets/newsImage.jpeg';
import eventImage from '../../Assets/event.png';

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
        <NavBar/>
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
                <h1>4 Domains Infinite Possibilities</h1>
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
                    <h2>Technology</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatibus, dolorem ex distinctio magnam corrupti!</p>
                    <Link className='projects-comps-two-links' to='/'>Explore</Link>
                  </div>
                </div>
                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={ProjectsImage} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Liberal & Sports</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatibus, dolorem ex distinctio magnam corrupti!</p>
                    <Link className='projects-comps-two-links' to='/'>Explore</Link>
                  </div>
                </div>
                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={ProjectsImage} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Innovation </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatibus, dolorem ex distinctio magnam corrupti!</p>
                    <Link className='projects-comps-two-links' to='/'>Explore</Link>
                  </div>
                </div>
                <div className="projects-comps">
                  <div className="projects-comps-one">
                    <img src={ProjectsImage} alt="" />  
                  </div>
                  <div className="projects-comps-two">
                    <h2>Outreach</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatibus, dolorem ex distinctio magnam corrupti!</p>
                    <Link className='projects-comps-two-links' to='/'>Explore</Link>
                  </div>
                </div>
              </div>
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
          <Link className='stories-viewmore-link' to='/'>View More Stories</Link>
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
                    <img src={eventImage} alt="" />
                </div>
                <div className="ue-comps-in-two">
                      <h2>Workshop</h2>
                      <p>Clinicians and Firearms: A Curriculum on Firearm Injury Prevention in Medical Practice</p>

                      <p>8th September, 2023</p>
                </div>
              </div>
            </div>
            <div className="ue-comps">
              <div className="ue-comps-in">
                <div className="ue-comps-in-one">
                    <img src={eventImage} alt="" />
                </div>
                <div className="ue-comps-in-two">
                      <h2>Workshop</h2>
                      <p>Clinicians and Firearms: A Curriculum on Firearm Injury Prevention in Medical Practice</p>

                      <p>8th September, 2023</p>
                </div>
              </div>
            </div>
            <div className="ue-comps">
              <div className="ue-comps-in">
                <div className="ue-comps-in-one">
                    <img src={eventImage} alt="" />
                </div>
                <div className="ue-comps-in-two">
                      <h2>Workshop</h2>
                      <p>Clinicians and Firearms: A Curriculum on Firearm Injury Prevention in Medical Practice</p>

                      <p>8th September, 2023</p>
                </div>
              </div>
            </div>
            <div className="ue-comps">
              <div className="ue-comps-in">
                <div className="ue-comps-in-one">
                    <img src={eventImage} alt="" />
                </div>
                <div className="ue-comps-in-two">
                      <h2>Workshop</h2>
                      <p>Clinicians and Firearms: A Curriculum on Firearm Injury Prevention in Medical Practice</p>

                      <p>8th September, 2023</p>
                </div>
              </div>
            </div>

        </div>
        <div className="explore-events">
          <Link to='/events' className='explore-events-link'>Explore More Events</Link>
        </div>
      </div>




        <div className="joinus">
          <div className="joinus-inner">
              <h1>Experience the power of community. Join us today and be a part of something truly special.</h1>
              <a href="t.me/klsac">Join Us</a>
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
                          <a href="https://www.youtube.com/channel/UC4QDq4yqUO3Xc0kQrXJnU1w">Learn More</a>
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


 
                    <div className="Quick-links-component">
                        <div className="Quick-links-component-in">
                            <div className="quick-link-one">
                              <div className="quick-link-one-in">
                                  <h1>Technology</h1>
                                   <Link to='/clubs/zeroonecodeclub' className='qu-link-cm'>ZeroOne CodeClub</Link>
                                   <Link to='/clubs/aeroElectric' className='qu-link-cm'>AeroElectric Club</Link>
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
                                    <Link to='/clubs/StandupComedyClub' className='qu-link-cm'>StandupComedy Club</Link>
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
                                  <p>DeepDive <OpenInNewIcon /> </p>
                                </div>
                            </div>
                          </div>
                    </div>


            
        </div>
        <Footer></Footer>
    </div>


  )
}

export default Home
