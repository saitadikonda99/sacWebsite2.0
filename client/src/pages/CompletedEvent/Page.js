import React from 'react'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Page.css' 
import NavBar from './NavBar';
import Footer from '../../components/Footer/Footer';


import CfcPoster from '../../Assets/CfcPoster.jpg'

const eventDataByMonth = {
  January: [
    {
      eventName: 'CodeforCause Hackathon 1',
      poster: CfcPoster,
      date: '28-09-2023',
      studentCoordinator: 'Deepak Reddy Gathpa',
      facultyCoordinator: 'Ravi Babu K',
      reportLink: 'https://example.com/report1',
    },
    // Add more events for January if needed
  ],
  February: [
    {
      eventName: 'CodeforCause Hackathon 1',
      poster: CfcPoster,
      date: '28-09-2023',
      studentCoordinator: 'Deepak Reddy Gathpa',
      facultyCoordinator: 'Ravi Babu K',
      reportLink: 'https://example.com/report1',
    },
    // Add more events for February if needed
  ],
  March: [
    // Events for March
     {
      eventName: 'CodeforCause Hackathon 1',
      poster: CfcPoster,
      date: '28-09-2023',
      studentCoordinator: 'Deepak Reddy Gathpa',
      facultyCoordinator: 'Ravi Babu K',
      reportLink: 'https://example.com/report1',
    },
  ],
  April: [
    // Events for April
     {
      eventName: 'CodeforCause Hackathon 1',
      poster: CfcPoster,
      date: '28-09-2023',
      studentCoordinator: 'Deepak Reddy Gathpa',
      facultyCoordinator: 'Ravi Babu K',
      reportLink: 'https://example.com/report1',
    },
  ],
  May: [
    // Events for May
     {
      eventName: 'CodeforCause Hackathon 1',
      poster: CfcPoster,
      date: '28-09-2023',
      studentCoordinator: 'Deepak Reddy Gathpa',
      facultyCoordinator: 'Ravi Babu K',
      reportLink: 'https://example.com/report1',
    },
  ],
  June: [
    // Events for June
     {
      eventName: 'CodeforCause Hackathon 1',
      poster: CfcPoster,
      date: '28-09-2023',
      studentCoordinator: 'Deepak Reddy Gathpa',
      facultyCoordinator: 'Ravi Babu K',
      reportLink: 'https://example.com/report1',
    },
  ],
  July: [
    // Events for July
     {
      eventName: 'CodeforCause Hackathon 1',
      poster: CfcPoster,
      date: '28-09-2023',
      studentCoordinator: 'Deepak Reddy Gathpa',
      facultyCoordinator: 'Ravi Babu K',
      reportLink: 'https://example.com/report1',
    },
  ],
  August: [
    // Events for August
     {
      eventName: 'CodeforCause Hackathon 1',
      poster: CfcPoster,
      date: '28-09-2023',
      studentCoordinator: 'Deepak Reddy Gathpa',
      facultyCoordinator: 'Ravi Babu K',
      reportLink: 'https://example.com/report1',
    },
  ],
  September: [
    // Events for September
     {
      eventName: 'CodeforCause Hackathon 1',
      poster: CfcPoster,
      date: '28-09-2023',
      studentCoordinator: 'Deepak Reddy Gathpa',
      facultyCoordinator: 'Ravi Babu K',
      reportLink: 'https://example.com/report1',
    },
  ],
  October: [
    // Events for October
     {
      eventName: 'CodeforCause Hackathon 1',
      poster: CfcPoster,
      date: '28-09-2023',
      studentCoordinator: 'Deepak Reddy Gathpa',
      facultyCoordinator: 'Ravi Babu K',
      reportLink: 'https://example.com/report1',
    },
  ],
  November: [
    // Events for November
     {
      eventName: 'CodeforCause Hackathon 1',
      poster: CfcPoster,
      date: '28-09-2023',
      studentCoordinator: 'Deepak Reddy Gathpa',
      facultyCoordinator: 'Ravi Babu K',
      reportLink: 'https://example.com/report1',
    },
  ],
  December: [
    // Events for December
     {
      eventName: 'CodeforCause Hackathon 1',
      poster: CfcPoster,
      date: '28-09-2023',
      studentCoordinator: 'Deepak Reddy Gathpa',
      facultyCoordinator: 'Ravi Babu K',
      reportLink: 'https://example.com/report1',
    },
  ],
};


 

function Page() {   
    const [showDiv, setDiv] = useState(0);
    const [techMonth, setTech] = useState(0);
    const [liberalMonth, setLiberal] = useState(0);
    const [startupMonth, setStartup] = useState(0);
    const [InoMonth, setIno] = useState(0);
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
    

    const handleDiv = (Number) => {
        setDiv(Number)
        setTech(0)
        setLiberal(0)
        setStartup(0)
        setIno(0)
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
    }
    const handleStartup = (Number) => {
        setStartup(Number)
    }
    const handleIno = (Number) => {
        setIno(Number)
    }
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
                                })}
                            </div>

                            {/* AeroElectric */}

                            <div className={techMonth === 2 ? 'Event-Calendar' : 'Calendar-hide'}>
                                {Array.from({ length: 12 }, (_, index) => {
                                  const month = index + 1;
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
                                })}
                            </div>

                            {/* Cyber */}

                            <div className={techMonth === 3 ? 'Event-Calendar' : 'Calendar-hide'}>
                                {Array.from({ length: 12 }, (_, index) => {
                                  const month = index + 1;
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
                                })}
                            </div>

                             {/* WebApps */}
                                  <div className={techMonth === 4 ? 'Event-Calendar' : 'Calendar-hide'}>
                                      {Array.from({ length: 12 }, (_, index) => {
                                          const month = index + 1;
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
                                      })}
                                  </div>

                                      {/* TechHuma */}
                                      <div className={techMonth === 5 ? 'Event-Calendar' : 'Calendar-hide'}>
                                          {Array.from({ length: 12 }, (_, index) => {
                                              const month = index + 1;
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
                                          })}
                                      </div>

                                    {/* Robotics */}
                                    <div className={techMonth === 6 ? 'Event-Calendar' : 'Calendar-hide'}>
                                        {Array.from({ length: 12 }, (_, index) => {
                                            const month = index + 1;
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
                                        })}
                                    </div>


                                    {/* Animation */}
                                    <div className={techMonth === 7 ? 'Event-Calendar' : 'Calendar-hide'}>
                                        {Array.from({ length: 12 }, (_, index) => {
                                            const month = index + 1;
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
                                        })}
                                    </div>

                                    {/* Automobile */}
                                    <div className={techMonth === 8 ? 'Event-Calendar' : 'Calendar-hide'}>
                                        {Array.from({ length: 12 }, (_, index) => {
                                            const month = index + 1;
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
                                        })}
                                    </div>

                                     {/* Agriculture */}
                                     <div className={techMonth === 9 ? 'Event-Calendar' : 'Calendar-hide'}>
                                        {Array.from({ length: 12 }, (_, index) => {
                                            const month = index + 1;
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
                                        })}
                                    </div>


                                    {/* MobileESports */}
                                    <div className={techMonth === 10 ? 'Event-Calendar' : 'Calendar-hide'}>
                                        {Array.from({ length: 12 }, (_, index) => {
                                            const month = index + 1;
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
                                        })}
                                    </div>


                                    {/* AI */}
                                    <div className={techMonth === 11 ? 'Event-Calendar' : 'Calendar-hide'}>
                                        {Array.from({ length: 12 }, (_, index) => {
                                            const month = index + 1;
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
                                        })}
                                    </div>

                       
                        {/* zeroOne calender  */}

                        {/* Loop through months */}
                                  {monthNames.map((monthName, index) => (
                                    <div
                                      key={index}
                                      className={zeroOneMonth === index + 1 ? `Event-${monthName.toLowerCase()}-tech tech-cm-mn-ev` : 'Posters-hide'}
                                    >
                                      <EventList monthName={monthName} eventData={eventDataByMonth[monthName]} />
                                    </div>
                                  ))}





                        <div className = { liberalMonth === 1 ? 'Event-january-tech liberal-cm-mn-ev' : 'Posters-hide' } > 
                        
                        </div>
                        <div className = { liberalMonth === 2 ? 'Event-feb-tech liberal-cm-mn-ev' : 'Posters-hide' } >

                        </div>
                        <div className = { liberalMonth === 3 ? 'Event-march-tech liberal-cm-mn-ev' : 'Posters-hide' } >

                        </div>
                        <div className = { liberalMonth === 4 ? 'Event-april-tech liberal-cm-mn-ev' : 'Posters-hide' } >

                        </div>
                        <div className = { liberalMonth === 5 ? 'Event-may-tech liberal-cm-mn-ev' : 'Posters-hide' } >

                        </div>
                        <div className = { liberalMonth === 6 ? 'Event-june-tech liberal-cm-mn-ev' : 'Posters-hide' } >

                        </div>
                        <div className = { liberalMonth === 7 ? 'Event-july-tech liberal-cm-mn-ev' : 'Posters-hide' } >

                        </div>
                        <div className = { liberalMonth === 8 ? 'Event-august-tech liberal-cm-mn-ev' : 'Posters-hide' } >

                        </div>
                        <div className = { liberalMonth === 9 ? 'Event-september-tech liberal-cm-mn-ev' : 'Posters-hide' } >

                        </div>
                        <div className = { liberalMonth === 10 ? 'Event-october-tech liberal-cm-mn-ev' : 'Posters-hide' } >

                        </div>
                        <div className = { liberalMonth === 11 ? 'Event-november-tech liberal-cm-mn-ev' : 'Posters-hide' } >

                        </div>
                        <div className = { liberalMonth === 12 ? 'Event-december-tech  liberal-cm-mn-ev' : 'Posters-hide' } >

                        </div>


                        <div className = { startupMonth === 1 ? 'Event-january-tech startup-cm-mn-ev' : 'Posters-hide' } >

                        </div>
                        <div className = { startupMonth === 2 ? 'Event-feb-tech startup-cm-mn-ev' : 'Posters-hide' } >

                        </div>
                        <div className = { startupMonth === 3 ? 'Event-march-tech startup-cm-mn-ev' : 'Posters-hide' } >
                            
                        </div>
                        <div className = { startupMonth === 4 ? 'Event-april-tech startup-cm-mn-ev' : 'Posters-hide' } > april</div>
                        <div className = { startupMonth === 5 ? 'Event-may-tech startup-cm-mn-ev' : 'Posters-hide' } >may </div>
                        <div className = { startupMonth === 6 ? 'Event-june-tech startup-cm-mn-ev' : 'Posters-hide' } > june</div>
                        <div className = { startupMonth === 7 ? 'Event-july-tech startup-cm-mn-ev' : 'Posters-hide' } >july </div>
                        <div className = { startupMonth === 8 ? 'Event-august-tech startup-cm-mn-ev' : 'Posters-hide' } > august</div>
                        <div className = { startupMonth === 9 ? 'Event-september-tech startup-cm-mn-ev' : 'Posters-hide' } > sep</div>
                        <div className = { startupMonth === 10 ? 'Event-october-tech startup-cm-mn-ev' : 'Posters-hide' } >oct </div>
                        <div className = { startupMonth === 11 ? 'Event-november-tech startup-cm-mn-ev' : 'Posters-hide' } > nove</div>
                        <div className = { startupMonth === 12 ? 'Event-december-tech startup-cm-mn-ev' : 'Posters-hide' } > decem</div>


                        <div className = { InoMonth === 1 ? 'Event-january-tech Ino-cm-mn-ev' : 'Posters-hide' } > january</div>
                        <div className = { InoMonth === 2 ? 'Event-feb-tech Ino-cm-mn-ev' : 'Posters-hide' } >feb</div>
                        <div className = { InoMonth === 3 ? 'Event-march-tech Ino-cm-mn-ev' : 'Posters-hide' } > march</div>
                        <div className = { InoMonth === 4 ? 'Event-april-tech Ino-cm-mn-ev' : 'Posters-hide' } > april</div>
                        <div className = { InoMonth === 5 ? 'Event-may-tech Ino-cm-mn-ev' : 'Posters-hide' } >may </div>
                        <div className = { InoMonth === 6 ? 'Event-june-tech Ino-cm-mn-ev' : 'Posters-hide' } > june</div>
                        <div className = { InoMonth === 7 ? 'Event-july-tech Ino-cm-mn-ev' : 'Posters-hide' } >july </div>
                        <div className = { InoMonth === 8 ? 'Event-august-tech Ino-cm-mn-ev' : 'Posters-hide' } > august</div>
                        <div className = { InoMonth === 9 ? 'Event-september-tech Ino-cm-mn-ev' : 'Posters-hide' } > sep</div>
                        <div className = { InoMonth === 10 ? 'Event-october-tech Ino-cm-mn-ev' : 'Posters-hide' } >oct </div>
                        <div className = { InoMonth === 11 ? 'Event-november-tech Ino-cm-mn-ev' : 'Posters-hide' } > nove</div>
                        <div className = { InoMonth === 12 ? 'Event-december-tech Ino-cm-mn-ev' : 'Posters-hide' } > decem</div>

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

