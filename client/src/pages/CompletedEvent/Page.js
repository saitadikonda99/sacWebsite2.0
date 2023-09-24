import React from 'react'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Page.css' 
import NavBar from './NavBar';
import Footer from '../../components/Footer/Footer';




// ---------------------- Central Technology ----------------------

import  ZeroOneData  from './DataArrays'
import { AeroElectricData } from './DataArrays'
import { CyberData } from './DataArrays'
import { WebAppsData } from './DataArrays'
import { TechHumaData } from './DataArrays'
import { RoboticsData } from './DataArrays'
import { AnimationData } from './DataArrays'
import { AutomobileData } from './DataArrays'
import { AgricultureData } from './DataArrays'
import { MobileESportsData } from './DataArrays'
import { AIData } from './DataArrays'



// ---------------------- Liberal Arts ----------------------
import { FusionData } from './DataArrays'
import { SwaraData } from './DataArrays'
import { VachasData } from './DataArrays'
import { KLRadioData } from './DataArrays'
import { FilmMakingData } from './DataArrays'
import { StandupcomedyData } from './DataArrays'
import { DramaticsData } from './DataArrays'
import { NarthanaData } from './DataArrays'

// ---------------------- Incubation & Innovation ----------------------

import { STData } from './DataArrays'
import { IdeasData} from './DataArrays'
import { ACICData } from './DataArrays'

// ---------------------- Outreach & Society ----------------------

import { CEAData } from './DataArrays'
import { TourismData } from './DataArrays'
import { KLTalksData } from './DataArrays'
import { SafeLifeData } from './DataArrays'
import { ElectoralData } from './DataArrays'
import { SVRData} from './DataArrays'


function Page() {   
    const [showDiv, setDiv] = useState(0);
    const [techMonth, setTech] = useState(0);
    const [liberalMonth, setLiberal] = useState(0);
    const [startupMonth, setStartup] = useState(0);
    const [outreachMonth, setoutreachMonth] = useState(0);
    const [zeroOneMonth, setZeroOne] = useState(0);
    const [AeroElectricMonth, setAeroElectricMonth] = useState(0);
    const [CyberMonth, setCyber] = useState(0);
    const [webAppsMonth, setWebApps] = useState(0);
    const [techHumaMonth, setTechHuma] = useState(0);
    const [roboticsMonth, setRobotics] = useState(0);   
    const [animationMonth, setAnimation] = useState(0);
    const [AgricultureMonth, setAgriculture] = useState(0);
    const [automobileMonth, setAutomobile] = useState(0);
    const [mobileESportsMonth, setMobileESports] = useState(0);
    const [aiMonth, setAI] = useState(0);
    const [fusionMonth, setFusion] = useState(0);
    const [swaraMonth, setSwara] = useState(0);
    const [vachasMonth, setVachas] = useState(0);
    const [KLRadioMonth, setKLRadio] = useState(0);
    const [filmMakingMonth, setFilmMaking] = useState(0);
    const [standupcomedyMonth, setStandupcomedy] = useState(0);
    const [dramaticsMonth, setDramatics] = useState(0);
    const [narthanaMonth, setNarthana] = useState(0);
    const [acicMonth, setAcic] = useState(0);
    const [ideasMonth, setIdeas] = useState(0);
    const [STMonth, setST] = useState(0);
    const [ceaMonth, setCea] = useState(0);
    const [tourismMonth, setTourism] = useState(0);
    const [klTalksMonth, setKlTalks] = useState(0);
    const [safeLifeMonth, setSafeLife] = useState(0);
    const [electoralMonth, setElectoral] = useState(0);
    const [svrMonth, setSvr] = useState(0);

    
    

    const handleDiv = (Number) => {
        setDiv(Number)
        setTech(0)
        setLiberal(0)
        setStartup(0)
        setoutreachMonth(0)
        setZeroOne(0)
        setAeroElectricMonth(0)
        setCyber(0)
        setWebApps(0)
        setTechHuma(0)
        setRobotics(0)
        setAnimation(0)
        setAgriculture(0)
        setAutomobile(0)
        setMobileESports(0)
        setAI(0)
        setFusion(0)
        setSwara(0)
        setVachas(0)
        setKLRadio(0)
        setFilmMaking(0)
        setStandupcomedy(0)
        setDramatics(0)
        setNarthana(0)
        setAcic(0)
        setIdeas(0)
        setST(0)
        setCea(0)
        setTourism(0)
        setKlTalks(0)
        setSafeLife(0)
        setElectoral(0)
        setSvr(0)
    }

    const handleTech = (Number) => {
        setTech(Number)
        setZeroOne(0)
        setAeroElectricMonth(0)
        setCyber(0)
        setWebApps(0)
        setTechHuma(0)
        setRobotics(0)
        setAnimation(0)
        setAgriculture(0)
        setAutomobile(0)
        setMobileESports(0)
        setAI(0)
    }


    const handleLiberal = (Number) => {
        setLiberal(Number)
        setFusion(0)
        setSwara(0)
        setVachas(0)
        setKLRadio(0)
        setFilmMaking(0)
        setStandupcomedy(0)
        setDramatics(0)
        setNarthana(0)
    }

    const handleStartup = (Number) => {
        setStartup(Number)
        setAcic(0)
        setIdeas(0)
        setST(0)
    }

    const handleOutreach = (Number) => {
      setoutreachMonth(Number)
        setCea(0)
        setTourism(0)
        setKlTalks(0)
        setSafeLife(0)
        setElectoral(0)
        setSvr(0)
    }


    // ---- Tech ----
    const handleZeroOne = (Number) => {
        setZeroOne(Number)
    }
    const handleAeroElectric = (Number) => {
      setZeroOne(0)
      setAeroElectricMonth(Number)
    }
    const handleCyber = (Number) => {
      setCyber(Number)
    }
    const handleWebApps = (Number) => {
      setWebApps(Number)
    }
    const handleTechHuma = (Number) => {
      setTechHuma(Number)
    }
    
    const handleRobotics = (Number) => {
      setRobotics(Number)
    }
    const handleAnimation = (Number) => {
      setAnimation(Number) 
    } 
    const handleAgriculture = (Number) => {
      setAgriculture(Number) 
    }
    const handleAutomobile = (Number) => {
      setAutomobile(Number)
    }

    const handleMobileESports = (Number) => {
      setMobileESports(Number)
    }
    const handleAI = (Number) => {
      setAI(Number)
    }


    // Liberal Arts

    const handleFusion = (Number) => {
      setFusion(Number)
    }
    const handleSwara = (Number) => {
      setSwara(Number)
    }
    const handleVachas = (Number) => {
      setVachas(Number)
    }
    const handleKLRadio = (Number) => {
      setKLRadio(Number)
    }
    const handleFilmMaking = (Number) => {
      setFilmMaking(Number)
    }
    const handleStandupcomedy = (Number) => {
      setStandupcomedy(Number)
    }
    const handleDramatics = (Number) => {
      setDramatics(Number)
    }
    const handleNarthana = (Number) => {
      setNarthana(Number)
    }

// Incubation & Innovation

    const handleAcic = (Number) => {
      setAcic(Number)
    }
    const handleIdeas = (Number) => {
      setIdeas(Number)
    }
    const handleSt = (Number) => {
      setST(Number)
    }
// Outreach & Society

    const handleCea = (Number) => {
      setCea(Number)
    }
    const handleTourism = (Number) => {
      setTourism(Number)
    }
    const handleKlTalks = (Number) => {
      setKlTalks(Number)
    }
    const handleSafeLife = (Number) => {
      setSafeLife(Number)
    }
    const handleElectoral = (Number) => {
      setElectoral(Number)
    }
    const handleSvr = (Number) => {
      setSvr(Number)
    }

 

//   ---------------------------------------------

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

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

//   ---------------------------------------------

  return (

        <div className="CompletedEventsComponent">
            <div className="CompletedEventsContainer">
                <div className="Event-Nav">
                    <div className='HomeNavComponent'>
                        <div className="HomeNavContainer">
                            <div className="HomeNavLogo">
                                <div className="HomeNavLogo-in">
                                    <Link className='HomeNavLogo-in-link' to='/'><h1>Student Activity Center</h1></Link>
                                </div>
                            </div>
                            <div className="HomeNavIndex">
                                <div className="HomeNavIndex-in">
                                    <Link className='HomeNavIndex-in-link' to='/'>Back to Home</Link>
                                    <Link className='HomeNavIndex-in-link' to='/'>Explore Clubs</Link>
                                    <Link className='HomeNavIndex-in-link' to='/gallery'>Gallery</Link>
                                    <Link className='HomeNavIndex-in-link' to='/events'>Events</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                        {screenWidth < 768 ?  <NavBar/> : '' }
                </div>
                <div className="CompletedEventsContainer-in">
                   <div className="Events-container">
                        <div className="Events-clubs">
                            <div className="Event-club-one ec-name" id = { showDiv === 1 ? 'Event-hover' : '' } onClick={ () => {handleDiv(1)}} >Central Technology Clubs</div>
                            <div className="Event-club-two ec-name" id = { showDiv === 2 ? 'Event-hover' : '' } onClick={ () => {handleDiv(2)}} >Liberal & Sports Clubs</div>
                            <div className="Event-club-three ec-name" id = { showDiv === 3 ? 'Event-hover' : '' } onClick={ () => {handleDiv(3)}} >Incubation & Innovation</div>
                            <div className="Event-club-four ec-name"  id = { showDiv === 4 ? 'Event-hover' : '' }onClick={ () => {handleDiv(4)}} >Outreach & Society</div>
                        </div>

                        {/* initial content div  */}
                    
                        <div  className = { showDiv < 1 ? 'Event-initial' : 'Event-hide' }>
                            <h1>Previous Conducted Events</h1>
                        </div>

                        {/* domain names */}

                        <div className = { showDiv > 0 ? 'Event-name-box' : 'Event-name-hide' } >
                           <div className = { showDiv === 1 ? 'Event-name-tech' : 'tech-hide' }>Central Technology Events Organized</div>
                           <div className = { showDiv === 2 ? 'Event-name-liberal' : 'tech-hide' }>Liberal Arts Events</div>
                           <div className = { showDiv === 3 ? 'Event-name-outreach' : 'tech-hide' }>Innovation Events</div>
                           <div className = { showDiv === 4 ? 'Event-name-startup' : 'tech-hide' }>Outreach Events</div>
                        </div>

                        {/* technology club names  */}

                        <div className = { showDiv === 1 ? 'Event-tech-clubs' : 'Event-hide' } >
                            <div className="Event-tech-club-one ec-name" id = { techMonth === 1 ? 'Event-hover' : '' } onClick={ () => {handleTech(1)}} >ZeroOne</div>
                            <div className="Event-tech-club-two ec-name" id = { techMonth === 2 ? 'Event-hover' : '' } onClick={ () => {handleTech(2)}} >AeroElectric</div>
                            <div className="Event-tech-club-three ec-name" id = { techMonth === 3 ? 'Event-hover' : '' } onClick={ () => {handleTech(3)}} >Cyber</div>
                            <div className="Event-tech-club-four ec-name" id = { techMonth === 4 ? 'Event-hover' : '' } onClick={ () => {handleTech(4)}} >WebApps</div>
                            <div className="Event-tech-club-five ec-name" id = { techMonth === 5 ? 'Event-hover' : '' } onClick={ () => {handleTech(5)}} >TechHuma</div>
                            <div className="Event-tech-club-six ec-name" id = { techMonth === 6 ? 'Event-hover' : '' } onClick={ () => {handleTech(6)}} >Robotics</div>
                            <div className="Event-tech-club-seven ec-name" id = { techMonth === 7 ? 'Event-hover' : '' } onClick={ () => {handleTech(7)}} >Animation</div> 
                            <div className="Event-tech-club-eight ec-name" id = { techMonth === 8 ? 'Event-hover' : '' } onClick={ () => {handleTech(8)}} >Automobile</div>
                            <div className="Event-tech-club-nine ec-name" id = { techMonth === 9 ? 'Event-hover' : '' } onClick={ () => {handleTech(9)}} >Agriculture</div>
                            <div className="Event-tech-club-ten ec-name" id = { techMonth === 10 ? 'Event-hover' : '' } onClick={ () => {handleTech(10)}} >MobileESports</div>
                            <div className="Event-tech-club-eleven ec-name" id = { techMonth === 11 ? 'Event-hover' : '' } onClick={ () => {handleTech(11)}} >AI</div>
                        </div>




                        {/* // Tech Section */}
                            {/* ZeroOne */}
                            <div className={techMonth === 1 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {
                              const month = index + 1;
                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${zeroOneMonth === month ? 'Event-m-hover' : ''}`}
                                    id={zeroOneMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleZeroOne(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>
                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}
                          </div>


                            {/* AeroElectric */}

                            <div className={techMonth === 2 ? 'Event-Calendar' : 'Calendar-hide'}>
                                {Array.from({ length: 12 }, (_, index) => {
                                  const month = index + 1;
                              if (month >= 7 && month <= 12) {
                                  return (
                                    <div
                                      key={month}
                                      className={`mn-ev-cm ${AeroElectricMonth === month ? 'Event-m-hover' : ''}`}
                                      id={AeroElectricMonth === month ? 'Event-m-hovers' : ''}
                                      onClick={() => handleAeroElectric(month)}
                                    >
                                      {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                    </div>
                                  );
                                }
                                return null;
                                })}
                            </div>

                            {/* Cyber */}

                            <div className={techMonth === 3 ? 'Event-Calendar' : 'Calendar-hide'}>
                                {Array.from({ length: 12 }, (_, index) => {
                                  const month = index + 1;
                              if (month >= 7 && month <= 12) {

                                  return (
                                    <div
                                      key={month}
                                      className={`mn-ev-cm ${CyberMonth === month ? 'Event-m-hover' : ''}`}
                                      id={CyberMonth === month ? 'Event-m-hovers' : ''}
                                      onClick={() => handleCyber(month)}
                                    >
                                      {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                    </div>
                                  );
                                }
                                return null;
                                })}
                            </div>

                             {/* WebApps */}
                                  <div className={techMonth === 4 ? 'Event-Calendar' : 'Calendar-hide'}>
                                      {Array.from({ length: 12 }, (_, index) => {
                                          const month = index + 1;
                              if (month >= 7 && month <= 12) {
                                          
                                          return (
                                              <div
                                                  key={month}
                                                  className={`mn-ev-cm ${webAppsMonth === month ? 'Event-m-hover' : ''}`}
                                                  id={webAppsMonth === month ? 'Event-m-hovers' : ''}
                                                  onClick={() => handleWebApps(month)}
                                              >
                                                  {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                              </div>
                                          );
                                        }
                                        return null;
                                      })}
                                  </div>

                                      {/* TechHuma */}
                                      <div className={techMonth === 5 ? 'Event-Calendar' : 'Calendar-hide'}>
                                          {Array.from({ length: 12 }, (_, index) => {
                                              const month = index + 1;
                              if (month >= 7 && month <= 12) {

                                              return (
                                                  <div
                                                      key={month}
                                                      className={`mn-ev-cm ${techHumaMonth === month ? 'Event-m-hover' : ''}`}
                                                      id={techHumaMonth === month ? 'Event-m-hovers' : ''}
                                                      onClick={() => handleTechHuma(month)}
                                                  >
                                                      {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                                  </div>
                                              );
                                            }
                                            return null;
                                          })}
                                      </div>

                                    {/* Robotics */}
                                    <div className={techMonth === 6 ? 'Event-Calendar' : 'Calendar-hide'}>
                                        {Array.from({ length: 12 }, (_, index) => {
                                            const month = index + 1;
                              if (month >= 7 && month <= 12) {

                                            return (
                                                <div
                                                    key={month}
                                                    className={`mn-ev-cm ${roboticsMonth === month ? 'Event-m-hover' : ''}`}
                                                    id={roboticsMonth === month ? 'Event-m-hovers' : ''}
                                                    onClick={() => handleRobotics(month)}
                                                >
                                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                                </div>
                                            );
                                          }
                                          return null;
                                        })}
                                    </div>


                                    {/* Animation */}
                                    <div className={techMonth === 7 ? 'Event-Calendar' : 'Calendar-hide'}>
                                        {Array.from({ length: 12 }, (_, index) => {
                                            const month = index + 1;
                              if (month >= 7 && month <= 12) {

                                            return (
                                                <div
                                                    key={month}
                                                    className={`mn-ev-cm ${animationMonth === month ? 'Event-m-hover' : ''}`}
                                                    id={animationMonth === month ? 'Event-m-hovers' : ''}
                                                    onClick={() => handleAnimation(month)}
                                                >
                                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                                </div>
                                            );
                                          }
                                          return null;
                                        })}
                                    </div>

                                    {/* Automobile */}
                                    <div className={techMonth === 8 ? 'Event-Calendar' : 'Calendar-hide'}>
                                        {Array.from({ length: 12 }, (_, index) => {
                                            const month = index + 1;
                              if (month >= 7 && month <= 12) {

                                            return (
                                                <div
                                                    key={month}
                                                    className={`mn-ev-cm ${automobileMonth === month ? 'Event-m-hover' : ''}`}
                                                    id={automobileMonth === month ? 'Event-m-hovers' : ''}
                                                    onClick={() => handleAutomobile(month)}
                                                >
                                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                                </div>
                                            );
                                          }
                                          return null;
                                        })}
                                    </div>

                                     {/* Agriculture */}
                                     <div className={techMonth === 9 ? 'Event-Calendar' : 'Calendar-hide'}>
                                        {Array.from({ length: 12 }, (_, index) => {
                                            const month = index + 1;
                              if (month >= 7 && month <= 12) {

                                            return (
                                                <div
                                                    key={month}
                                                    className={`mn-ev-cm ${AgricultureMonth === month ? 'Event-m-hover' : ''}`}
                                                    id={AgricultureMonth === month ? 'Event-m-hovers' : ''}
                                                    onClick={() => handleAgriculture(month)}
                                                >
                                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                                </div>
                                            );
                                          }
                                          return null;
                                        })}
                                    </div>


                                    {/* MobileESports */}
                                    <div className={techMonth === 10 ? 'Event-Calendar' : 'Calendar-hide'}>
                                        {Array.from({ length: 12 }, (_, index) => {
                                            const month = index + 1;
                              if (month >= 7 && month <= 12) {

                                            return (
                                                <div
                                                    key={month}
                                                    className={`mn-ev-cm ${mobileESportsMonth === month ? 'Event-m-hover' : ''}`}
                                                    id={mobileESportsMonth === month ? 'Event-m-hovers' : ''}
                                                    onClick={() => handleMobileESports(month)}
                                                >
                                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                                </div>
                                            );
                                          }
                                          return null;
                                        })}
                                    </div>


                                    {/* AI */}
                                    <div className={techMonth === 11 ? 'Event-Calendar' : 'Calendar-hide'}>
                                        {Array.from({ length: 12 }, (_, index) => {
                                            const month = index + 1;
                              if (month >= 7 && month <= 12) {

                                            return (
                                                <div
                                                    key={month}
                                                    className={`mn-ev-cm ${aiMonth === month ? 'Event-m-hover' : ''}`}
                                                    id={aiMonth === month ? 'Event-m-hovers' : ''}
                                                    onClick={() => handleAI(month)}
                                                >
                                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                                </div>
                                            );
                                          }
                                          return null;
                                        })}
                                    </div>

                       
                        {/* zeroOne calender  */}

                        {/* Loop through months */}
                                  {monthNames.map((monthName, index) => (
                                    <div
                                      key={index}
                                      className={zeroOneMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                                    >
                                      <EventList monthName={monthName} eventData={ZeroOneData[monthName]} />
                                    </div>
                                  ))}

                       {/* AeroElectric Calendar */}
                                  {monthNames.map((monthName, index) => (
                                    <div
                                      key={index}
                                      className={AeroElectricMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                                    >
                                      <EventList monthName={monthName} eventData={AeroElectricData[monthName]} />
                                    </div>
                                  ))}

                        {/* Cyber Calendar */}
                                    
                                  {monthNames.map((monthName, index) => (
                                    <div
                                      key={index}
                                      className={CyberMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                                    >
                                      <EventList monthName={monthName} eventData={CyberData[monthName]} />
                                    </div>
                                  ))}
                        {/* WebApps Calendar */}
                                    
                                  {monthNames.map((monthName, index) => (
                                    <div
                                      key={index}
                                      className={webAppsMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                                    >
                                      <EventList monthName={monthName} eventData={WebAppsData[monthName]} />
                                    </div>
                                  ))}
                        {/* TechHuma Calendar */}

                                    
                                  {monthNames.map((monthName, index) => (
                                    <div

                                      key={index}
                                      className={techHumaMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                                    >
                                      <EventList monthName={monthName} eventData={TechHumaData[monthName]} />
                                    </div>
                                  ))}
                        {/* Robotics Calendar */}
                                    
                                  {monthNames.map((monthName, index) => (
                                    <div
                                      key={index}
                                      className={roboticsMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                                    >
                                      <EventList monthName={monthName} eventData={RoboticsData[monthName]} />
                                    </div>
                                  ))}
                        {/* Animation Calendar */}
                                
                                  {monthNames.map((monthName, index) => (
                                    <div
                                      key={index}
                                      className={animationMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                                    >
                                      <EventList monthName={monthName} eventData={AnimationData[monthName]} />
                                    </div>
                                  ))}
                        {/* Automobile Calendar */}

                                  {monthNames.map((monthName, index) => (
                                    <div
                                      key={index}   
                                      className={automobileMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                                    > 
                                      <EventList monthName={monthName} eventData={AutomobileData[monthName]} />  
                                    </div>
                                  ))}
                        {/* Agriculture Calendar */}
                                    
                                  {monthNames.map((monthName, index) => (
                                    <div
                                      key={index}
                                      className={AgricultureMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                                    >
                                      <EventList monthName={monthName} eventData={AgricultureData[monthName]} />
                                    </div>
                                  ))}
                        {/* MobileESports Calendar */}
                                    
                                  {monthNames.map((monthName, index) => (
                                    <div
                                      key={index} 
                                      className={mobileESportsMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                                    >
                                      <EventList monthName={monthName} eventData={MobileESportsData[monthName]} />
                                    </div>
                                  ))}
                        {/* AI Calendar */}
                                    
                                  {monthNames.map((monthName, index) => (
                                    <div
                                      key={index} 
                                      className={aiMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                                    >
                                      <EventList monthName={monthName} eventData={AIData[monthName]} />
                                    </div>
                                  ))}
                    



                                  
                                    



                        

{/* -------------------------------------------------- liberal arts club names  -------------------------------------------------- */}


                        <div className = { showDiv === 2 ? 'Event-tech-clubs' : 'Event-hide' } >
                            <div className="Event-tech-club-one ec-name" id = { liberalMonth === 1 ? 'Event-hover' : '' } onClick={ () => {handleLiberal(1)}} >Fusion</div>
                            <div className="Event-tech-club-two ec-name" id = { liberalMonth === 2 ? 'Event-hover' : '' } onClick={ () => {handleLiberal(2)}} >Swara</div>
                            <div className="Event-tech-club-three ec-name" id = { liberalMonth === 3 ? 'Event-hover' : '' } onClick={ () => {handleLiberal(3)}} >Vachas</div>
                            <div className="Event-tech-club-four ec-name" id = { liberalMonth === 4 ? 'Event-hover' : '' } onClick={ () => {handleLiberal(4)}} >KLRadio</div>
                            <div className="Event-tech-club-five ec-name" id = { liberalMonth === 5 ? 'Event-hover' : '' } onClick={ () => {handleLiberal(5)}} >FilmMaking</div>
                            <div className="Event-tech-club-six ec-name" id = { liberalMonth === 6 ? 'Event-hover' : '' } onClick={ () => {handleLiberal(6)}} >Standupcomedy</div>
                            <div className="Event-tech-club-seven ec-name" id = { liberalMonth === 7 ? 'Event-hover' : '' } onClick={ () => {handleLiberal(7)}} >Dramatics</div> 
                            <div className="Event-tech-club-eight ec-name" id = { liberalMonth === 8 ? 'Event-hover' : '' } onClick={ () => {handleLiberal(8)}} >Narthana</div>
                        </div>

                         {/* // Liberal Section */}

                          {/* Fusion */}
                          <div className={liberalMonth === 1 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {
                              const month = index + 1;
                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${fusionMonth === month ? 'Event-m-hover' : ''}`}
                                    id={fusionMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleFusion(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>
                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}
                          </div>

                          {/* Swara */}
                          <div className={liberalMonth === 2 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {
                              const month = index + 1;
                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${swaraMonth === month ? 'Event-m-hover' : ''}`}
                                    id={swaraMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleSwara(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>
                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}
                          </div>

                          {/* Vachas */}
                          <div className={liberalMonth === 3 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {
                              const month = index + 1;
                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${vachasMonth === month ? 'Event-m-hover' : ''}`}
                                    id={vachasMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleVachas(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>
                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}
                          </div>  

                          {/* KLRadio */}
                          <div className={liberalMonth === 4 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {
                              const month = index + 1;
                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${KLRadioMonth === month ? 'Event-m-hover' : ''}`}
                                    id={KLRadioMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleKLRadio(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>
                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}
                          </div>

                          {/* FilmMaking */}

                          <div className={liberalMonth === 5 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {
                              const month = index + 1;
                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${filmMakingMonth === month ? 'Event-m-hover' : ''}`}
                                    id={filmMakingMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleFilmMaking(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>
                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}
                          </div>

                          {/* Standupcomedy */}

                          <div className={liberalMonth === 6 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {
                              const month = index + 1;
                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${standupcomedyMonth === month ? 'Event-m-hover' : ''}`}
                                    id={standupcomedyMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleStandupcomedy(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>
                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}
                          </div>


                          {/* Dramatics */}

                          <div className={liberalMonth === 7 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {
                              const month = index + 1;

                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${dramaticsMonth === month ? 'Event-m-hover' : ''}`}
                                    id={dramaticsMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleDramatics(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>
                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}

                          </div>
                            
                          {/* Narthana */}
                          <div className={liberalMonth === 8 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {
                              const month = index + 1;

                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${narthanaMonth === month ? 'Event-m-hover' : ''}`}
                                    id={narthanaMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleNarthana(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>
                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}


                          </div>

                        {/* Fusion calender  */}

                        {/* Loop through months */}
                        
                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={fusionMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                            <EventList monthName={monthName} eventData={
                              FusionData[monthName]} />
                          </div>
                        ))}

                        {/* Swara calender  */}

                        {/* Loop through months */}

                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={swaraMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                            <EventList monthName={monthName} eventData={
                              SwaraData[monthName]} />
                          </div>
                        ))}

                        {/* Vachas calender  */}

                        {/* Loop through months */}  
                              
                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={vachasMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                            <EventList monthName={monthName} eventData={
                              VachasData[monthName]} />
                          </div>
                        ))}

                        {/* KLRadio calender  */}

                        {/* Loop through months */}

                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={KLRadioMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                            <EventList monthName={monthName} eventData={
                              KLRadioData[monthName]} />
                          </div>
                        ))}

                        {/* FilmMaking calender  */}

                        {/* Loop through months */}

                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={filmMakingMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                            <EventList monthName={monthName} eventData={
                              FilmMakingData[monthName]} />
                          </div>
                        ))}

                        {/* Standupcomedy calender  */}

                        {/* Loop through months */}

                        {monthNames.map((monthName, index) => (

                          <div
                            key={index}
                            className={standupcomedyMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                            <EventList monthName={monthName} eventData={
                              StandupcomedyData[monthName]} />
                          </div>
                        ))}
                          
                          {/* Dramatics calender  */}
  
                          {/* Loop through months */}

                          {monthNames.map((monthName, index) => (
                            <div
                              key={index}
                              className={dramaticsMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                            >
                              <EventList monthName={monthName} eventData={
                                DramaticsData[monthName]} />
                            </div>
                          ))}

                          {/* Narthana calender  */}

                          {/* Loop through months */}

                          {monthNames.map((monthName, index) => (
                            <div
                              key={index}
                              className={narthanaMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                            >
                              <EventList monthName={monthName} eventData={
                                NarthanaData[monthName]} />
                            </div>
                          ))}


                                







{/* -------------------------------------------------- Innovation   -------------------------------------------------- */}


                        <div className = { showDiv === 3 ? 'Event-tech-clubs' : 'Event-hide' } >
                            <div className="Event-tech-club-one ec-name" id = { startupMonth === 1 ? 'Event-hover' : '' } onClick={ () => {handleStartup(1)}} >Startup</div>
                            <div className="Event-tech-club-two ec-name" id = { startupMonth === 2 ? 'Event-hover' : '' } onClick={ () => {handleStartup(2)}} >Ideas</div>
                            <div className="Event-tech-club-three ec-name" id = { startupMonth === 3 ? 'Event-hover' : '' } onClick={ () => {handleStartup(3)}} >ACIC</div>
                        </div>

                                
                        {/* // Innovation Section */}

                          {/* Startup */} 
                            
                          <div className={startupMonth === 1 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {
                              const month = index + 1;

                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${STMonth === month ? 'Event-m-hover' : ''}`}
                                    id={STMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleSt(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>

                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            }
                            )}
                          </div>


                          {/* Ideas */}

                          <div className={startupMonth === 2 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {
                              const month = index + 1;
                              
                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${ideasMonth === month ? 'Event-m-hover' : ''}`}
                                    id={ideasMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleIdeas(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>

                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}
                          </div>

                          {/* ACIC */}

                          <div className={startupMonth === 3 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {
                              const month = index + 1;

                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${acicMonth === month ? 'Event-m-hover' : ''}`}
                                    id={acicMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleAcic(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>

                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}
                          </div>
                            

                        {/* Startup calender  */}
                        {/* Loop through months */}

                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={STMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                            <EventList monthName={monthName} eventData={
                              STData[monthName]} />
                          </div>
                        ))}

                        {/* Ideas calender  */}
                        {/* Loop through months */}

                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={ideasMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                            <EventList monthName={monthName} eventData={
                              IdeasData[monthName]} />
                          </div>
                        ))}

                        {/* ACIC calender  */}
                        {/* Loop through months */}

                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={acicMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                            <EventList monthName={monthName} eventData={
                              ACICData[monthName]} />
                          </div>
                        ))}










 {/* --------------------------------------------------  Outreach -------------------------------------------------- */}
                          

                        <div className = { showDiv === 4 ? 'Event-tech-clubs' : 'Event-hide' } >
                            <div className="Event-tech-club-one ec-name" id = { outreachMonth === 1 ? 'Event-hover' : '' } onClick={ () => {handleOutreach(1)}} >CEA</div>
                            <div className="Event-tech-club-two ec-name" id = { outreachMonth === 2 ? 'Event-hover' : '' } onClick={ () => {handleOutreach(2)}} >Tourism</div>
                            <div className="Event-tech-club-three ec-name" id = { outreachMonth === 3 ? 'Event-hover' : '' } onClick={ () => {handleOutreach(3)}} >KL Talks</div>
                            <div className="Event-tech-club-four ec-name" id = { outreachMonth === 4 ? 'Event-hover' : '' } onClick={ () => {handleOutreach(4)}} >SafeLife</div>
                            <div className="Event-tech-club-five ec-name" id = { outreachMonth === 5 ? 'Event-hover' : '' } onClick={ () => {handleOutreach(5)}} >Electoral</div>
                            <div className="Event-tech-club-six ec-name" id = { outreachMonth === 6 ? 'Event-hover' : '' } onClick={ () => {handleOutreach(6)}} >SVR</div>  
                        </div>


                        {/* // Outreach Section */}
                        {/* CEA */}

                        <div className={outreachMonth === 1 ? 'Event-Calendar' : 'Calendar-hide'}>
                          {Array.from({ length: 12 }, (_, index) => {

                            const month = index + 1;

                            if (month >= 7 && month <= 12) {
                              return (
                                <div
                                  key={month}
                                  className={`mn-ev-cm ${ceaMonth === month ? 'Event-m-hover' : ''}`}
                                  id={ceaMonth === month ? 'Event-m-hovers' : ''}
                                  onClick={() => handleCea(month)}
                                >
                                  {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                </div>

                              );
                            }
                            return null; // Exclude months from January to June from rendering
                          })}
                      </div>

                          
                        {/* Tourism */} 

                        <div className={outreachMonth === 2 ? 'Event-Calendar' : 'Calendar-hide'}>
                          {Array.from({ length: 12 }, (_, index) => {

                            const month = index + 1;

                            if (month >= 7 && month <= 12) {
                              return (
                                <div
                                  key={month}
                                  className={`mn-ev-cm ${tourismMonth === month ? 'Event-m-hover' : ''}`}
                                  id={tourismMonth === month ? 'Event-m-hovers' : ''}
                                  onClick={() => handleTourism(month)}
                                >
                                  {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                </div>

                              );
                            }
                            return null; // Exclude months from January to June from rendering
                          })}
                        </div>
                          
                          {/* KL Talks */}

                          <div className={outreachMonth === 3 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {

                              const month = index + 1;

                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${klTalksMonth === month ? 'Event-m-hover' : ''}`}
                                    id={klTalksMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleKlTalks(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>

                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}
                          </div>

                          {/* SafeLife */}

                          <div className={outreachMonth === 4 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {

                              const month = index + 1;

                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${safeLifeMonth === month ? 'Event-m-hover' : ''}`}
                                    id={safeLifeMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleSafeLife(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>

                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}
                          </div>

                          {/* Electoral */}

                          <div className={outreachMonth === 5 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {

                              const month = index + 1;

                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${electoralMonth === month ? 'Event-m-hover' : ''}`}
                                    id={electoralMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleElectoral(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>

                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}
                          </div>

                          {/* SVR */}
                          <div className={outreachMonth === 6 ? 'Event-Calendar' : 'Calendar-hide'}>
                            {Array.from({ length: 12 }, (_, index) => {

                              const month = index + 1;

                              if (month >= 7 && month <= 12) {
                                return (
                                  <div
                                    key={month}
                                    className={`mn-ev-cm ${svrMonth === month ? 'Event-m-hover' : ''}`}
                                    id={svrMonth === month ? 'Event-m-hovers' : ''}
                                    onClick={() => handleSvr(month)}
                                  >
                                    {new Date(2023, index, 1).toLocaleString('default', { month: 'long' })}
                                  </div>

                                );
                              }
                              return null; // Exclude months from January to June from rendering
                            })}
                          </div>


                        {/* CEA calender  */}
                        {/* Loop through months */}
                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={ceaMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                            <EventList monthName={monthName} eventData={
                              CEAData[monthName]} />
                          </div>
                        ))}

                        {/* Tourism calender  */}
                        {/* Loop through months */}
                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={tourismMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                            <EventList monthName={monthName} eventData={
                              TourismData[monthName]} />
                          </div>
                        ))}

                        {/* KL Talks calender  */}
                        {/* Loop through months */}
                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={klTalksMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                            <EventList monthName={monthName} eventData={KLTalksData[monthName]} />
                          </div>
                        ))}

                        {/* SafeLife calender  */}
                        {/* Loop through months */}
                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={safeLifeMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                          <EventList monthName={monthName} eventData={SafeLifeData[monthName]} />
                          </div>
                        ))}

                        {/* Electoral calender  */}
                        {/* Loop through months */}
                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={electoralMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                          <EventList monthName={monthName} eventData={ElectoralData[monthName]} />
                          </div>
                        ))}

                        {/* SVR calender  */}
                        {/* Loop through months */}
                        {monthNames.map((monthName, index) => (
                          <div
                            key={index}
                            className={svrMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                          >
                          <EventList monthName={monthName} eventData={SVRData[monthName]} />
                          </div>
                        ))}


                        {/* --------------- END ---------------  */}


                   </div>
                   <Footer />
                </div>
           
            </div>
        </div>
 
  )
}

export default Page

// Define a reusable EventList component
function EventList({ eventData, monthName }) {
  return (
    <div className={`Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev`}>
      <h1>List of Activities Organized in {monthName}</h1>
      <EventsTable eventData={eventData} />
    </div>
  );
}


// Define the EventsTable component (unchanged from your code)
function EventsTable({ eventData }) {
  return (
    <div className="Events-table">
      <table>
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Event Name</th>
            <th>Date</th>
            <th>Student Coordinator</th>
            <th>Faculty Coordinator</th>
            <th>Event Report</th>
          </tr>
        </thead>
        <tbody>
          {eventData.map((event, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Dynamically generate the serial number */}
              <td>{event.eventName}</td>
              <td>{event.date}</td>
              <td>{event.studentCoordinator}</td>
              <td>{event.facultyCoordinator}</td>
              <td><a href={event.reportLink}>Click Here</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

