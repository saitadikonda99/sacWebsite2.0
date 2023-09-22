import React from 'react'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Page.css' 
import NavBar from './NavBar';
import Footer from '../../components/Footer/Footer';


import CfcPoster from '../../Assets/CfcPoster.jpg'


function Page() {
    const [showDiv, setDiv] = useState(0);
    const [techMonth, setTech] = useState(0);
    const [liberalMonth, setLiberal] = useState(0);
    const [startupMonth, setStartup] = useState(0);
    const [InoMonth, setIno] = useState(0);

    const handleDiv = (Number) => {
        setDiv(Number)
        setTech(0)
        setLiberal(0)
        setStartup(0)
        setIno(0)
    }

    const handleTech = (Number) => {
        setTech(Number)
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
                            <div className="Event-club-one ec-name" onClick={ () => {handleDiv(1)}} >Technical Clubs</div>
                            <div className="Event-club-two ec-name" onClick={ () => {handleDiv(2)}} >Liberal & Sports Clubs</div>
                            <div className="Event-club-three ec-name" onClick={ () => {handleDiv(3)}} >Incubation & Innovation</div>
                            <div className="Event-club-four ec-name" onClick={ () => {handleDiv(4)}} >Outreach & Society</div>
                        </div>

                        {/* initial content div  */}
                    
                        <div  className = { showDiv < 1 ? 'Event-initial' : 'Event-hide' }>
                            <h1>Previous Conducted Events</h1>
                        </div>

                        {/* domain names */}

                        <div className = { showDiv > 0 ? 'Event-name-box' : 'Event-name-hide' } >
                           <div className = { showDiv === 1 ? 'Event-name-tech' : 'tech-hide' }>Technology Events</div>
                           <div className = { showDiv === 2 ? 'Event-name-liberal' : 'tech-hide' }>Liberal Arts Events</div>
                           <div className = { showDiv === 3 ? 'Event-name-outreach' : 'tech-hide' }>Innovation Events</div>
                           <div className = { showDiv === 4 ? 'Event-name-startup' : 'tech-hide' }>Outreach Events</div>
                        </div>


                        {/* events calenders */}

                            {/* Tech */}
                        <div className = { showDiv ===1 ? 'Event-Calendar' : 'Calendar-hide' } >
                            <div className="Event-month-one mn-ev-cm" onClick={ () => {handleTech(1)}} >January</div>
                            <div className="Event-month-two mn-ev-cm" onClick={ () => {handleTech(2)}} >February</div>
                            <div className="Event-month-three mn-ev-cm" onClick={ () => {handleTech(3)}} >March</div>
                            <div className="Event-month-four mn-ev-cm" onClick={ () => {handleTech(4)}} >April</div>
                            <div className="Event-month-five mn-ev-cm" onClick={ () => {handleTech(5)}} >May</div>
                            <div className="Event-month-six mn-ev-cm" onClick={ () => {handleTech(6)}} >June</div>
                            <div className="Event-month-seven mn-ev-cm" onClick={ () => {handleTech(7)}} >July</div>
                            <div className="Event-month-eight mn-ev-cm" onClick={ () => {handleTech(8)}} >August</div>
                            <div className="Event-month-nine mn-ev-cm" onClick={ () => {handleTech(9)}} >September</div>
                            <div className="Event-month-ten mn-ev-cm" onClick={ () => {handleTech(10)}} >October</div>
                            <div className="Event-month-eleven mn-ev-cm" onClick={ () => {handleTech(11)}} >November</div>
                            <div className="Event-month-twelve mn-ev-cm" onClick={ () => {handleTech(12)}} >December</div>
                        </div>

                            {/* Liberal */}

                        <div className = { showDiv === 2 ? 'Event-Calendar' : 'Calendar-hide' } >
                            <div className="Event-month-one mn-ev-cm" onClick={ () => {handleLiberal(1)}}>January</div>
                            <div className="Event-month-two mn-ev-cm" onClick={ () => {handleLiberal(2)}}>February</div>
                            <div className="Event-month-three mn-ev-cm" onClick={ () => {handleLiberal(3)}}>March</div>
                            <div className="Event-month-four mn-ev-cm" onClick={ () => {handleLiberal(4)}}>April</div>
                            <div className="Event-month-five mn-ev-cm" onClick={ () => {handleLiberal(5)}}>May</div>
                            <div className="Event-month-six mn-ev-cm" onClick={ () => {handleLiberal(6)}}>June</div>
                            <div className="Event-month-seven mn-ev-cm" onClick={ () => {handleLiberal(7)}}>July</div>
                            <div className="Event-month-eight mn-ev-cm" onClick={ () => {handleLiberal(8)}}>August</div>
                            <div className="Event-month-nine mn-ev-cm" onClick={ () => {handleLiberal(9)}}>September</div>
                            <div className="Event-month-ten mn-ev-cm" onClick={ () => {handleLiberal(10)}}>October</div>
                            <div className="Event-month-eleven mn-ev-cm" onClick={ () => {handleLiberal(11)}}>November</div>
                            <div className="Event-month-twelve mn-ev-cm" onClick={ () => {handleLiberal(12)}}>December</div>
                        </div>

                            {/* Startup */}

                        <div className = { showDiv === 3 ? 'Event-Calendar' : 'Calendar-hide' } >
                            <div className="Event-month-one mn-ev-cm" onClick={ () => {handleStartup(1)}}>January</div>
                            <div className="Event-month-two mn-ev-cm" onClick={ () => {handleStartup(2)}}>February</div>
                            <div className="Event-month-three mn-ev-cm" onClick={ () => {handleStartup(3)}}>March</div>
                            <div className="Event-month-four mn-ev-cm" onClick={ () => {handleStartup(4)}}>April</div>
                            <div className="Event-month-five mn-ev-cm" onClick={ () => {handleStartup(5)}}>May</div>
                            <div className="Event-month-six mn-ev-cm" onClick={ () => {handleStartup(6)}}>June</div>
                            <div className="Event-month-seven mn-ev-cm" onClick={ () => {handleStartup(7)}}>July</div>
                            <div className="Event-month-eight mn-ev-cm" onClick={ () => {handleStartup(8)}}>August</div>
                            <div className="Event-month-nine mn-ev-cm" onClick={ () => {handleStartup(9)}}>September</div>
                            <div className="Event-month-ten mn-ev-cm" onClick={ () => {handleStartup(10)}}>October</div>
                            <div className="Event-month-eleven mn-ev-cm" onClick={ () => {handleStartup(11)}}>November</div>
                            <div className="Event-month-twelve mn-ev-cm" onClick={ () => {handleStartup(12)}}>December</div>
                        </div>

                            {/* Outreach */}
                        <div className = { showDiv === 4 ? 'Event-Calendar' : 'Calendar-hide' } >
                            <div className="Event-month-one mn-ev-cm" onClick={ () => {handleIno(1)}}>January</div>
                            <div className="Event-month-two mn-ev-cm" onClick={ () => {handleIno(2)}}>February</div>
                            <div className="Event-month-three mn-ev-cm" onClick={ () => {handleIno(3)}}>March</div>
                            <div className="Event-month-four mn-ev-cm" onClick={ () => {handleIno(4)}}>April</div>
                            <div className="Event-month-five mn-ev-cm" onClick={ () => {handleIno(5)}}>May</div>
                            <div className="Event-month-six mn-ev-cm" onClick={ () => {handleIno(6)}}>June</div>
                            <div className="Event-month-seven mn-ev-cm" onClick={ () => {handleIno(7)}}>July</div>
                            <div className="Event-month-eight mn-ev-cm" onClick={ () => {handleIno(8)}}>August</div>
                            <div className="Event-month-nine mn-ev-cm" onClick={ () => {handleIno(9)}}>September</div>
                            <div className="Event-month-ten mn-ev-cm" onClick={ () => {handleIno(10)}}>October</div>
                            <div className="Event-month-eleven mn-ev-cm" onClick={ () => {handleIno(11)}}>November</div>
                            <div className="Event-month-twelve mn-ev-cm" onClick={ () => {handleIno(12)}}>December</div>
                        </div>

                        {/* events names poster  */}



                        <div className = { techMonth === 1 ? 'Event-january-tech tech-cm-mn-ev' : 'Posters-hide' } > 
                            <div className="Events-table">
                            <table>
                        <tr>
                            <th>Sno.</th>
                            <th>Event Name</th>
                            <th>Poster</th>
                            <th>Date</th>
                            <th>Student Coordinator</th>
                            <th>Faculty Coordinator</th>
                            <th>Event Report</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>CodeforCause Hackathon</td>
                            <td><img src={CfcPoster} alt="" /></td>
                            <td>28-09-2023</td>
                            <td>Deepak Reddy Gathpa</td>
                            <td>Ravi Babu K</td>
                            <td><Link>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>CodeforCause Hackathon</td>
                            <td><img src={CfcPoster} alt="" /></td>
                            <td>28-09-2023</td>
                            <td>Deepak Reddy Gathpa</td>
                            <td>Ravi Babu K</td>
                            <td><Link>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>CodeforCause Hackathon</td>
                            <td><img src={CfcPoster} alt="" /></td>
                            <td>28-09-2023</td>
                            <td>Deepak Reddy Gathpa</td>
                            <td>Ravi Babu K</td>
                            <td><Link>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>CodeforCause Hackathon</td>
                            <td><img src={CfcPoster} alt="" /></td>
                            <td>28-09-2023</td>
                            <td>Deepak Reddy Gathpa</td>
                            <td>Ravi Babu K</td>
                            <td><Link>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>CodeforCause Hackathon</td>
                            <td><img src={CfcPoster} alt="" /></td>
                            <td>28-09-2023</td>
                            <td>Deepak Reddy Gathpa</td>
                            <td>Ravi Babu K</td>
                            <td><Link>Click Here</Link></td>
                        </tr>
                    </table>
                            </div>
                        </div>

                        <div className = { techMonth === 2 ? 'Event-feb-tech tech-cm-mn-ev' : 'Posters-hide' } >

                        </div>

                        <div className = { techMonth === 3 ? 'Event-march-tech tech-cm-mn-ev' : 'Posters-hide' } > march</div>
                        <div className = { techMonth === 4 ? 'Event-april-tech tech-cm-mn-ev' : 'Posters-hide' } > april</div>
                        <div className = { techMonth === 5 ? 'Event-may-tech tech-cm-mn-ev' : 'Posters-hide' } >may </div>
                        <div className = { techMonth === 6 ? 'Event-june-tech tech-cm-mn-ev' : 'Posters-hide' } > june</div>
                        <div className = { techMonth === 7 ? 'Event-july-tech tech-cm-mn-ev' : 'Posters-hide' } >july </div>
                        <div className = { techMonth === 8 ? 'Event-august-tech tech-cm-mn-ev' : 'Posters-hide' } > august</div>
                        <div className = { techMonth === 9 ? 'Event-september-tech tech-cm-mn-ev' : 'Posters-hide' } > sep</div>
                        <div className = { techMonth === 10 ? 'Event-october-tech tech-cm-mn-ev' : 'Posters-hide' } >oct </div>
                        <div className = { techMonth === 11 ? 'Event-november-tech tech-cm-mn-ev' : 'Posters-hide' } > nove</div>
                        <div className = { techMonth === 12 ? 'Event-december-tech tech-cm-mn-ev' : 'Posters-hide' } > decem</div>

                        <div className = { liberalMonth === 1 ? 'Event-january-tech liberal-cm-mn-ev' : 'Posters-hide' } > january</div>
                        <div className = { liberalMonth === 2 ? 'Event-feb-tech liberal-cm-mn-ev' : 'Posters-hide' } >feb</div>
                        <div className = { liberalMonth === 3 ? 'Event-march-tech liberal-cm-mn-ev' : 'Posters-hide' } > march</div>
                        <div className = { liberalMonth === 4 ? 'Event-april-tech liberal-cm-mn-ev' : 'Posters-hide' } > april</div>
                        <div className = { liberalMonth === 5 ? 'Event-may-tech liberal-cm-mn-ev' : 'Posters-hide' } >may </div>
                        <div className = { liberalMonth === 6 ? 'Event-june-tech liberal-cm-mn-ev' : 'Posters-hide' } > june</div>
                        <div className = { liberalMonth === 7 ? 'Event-july-tech liberal-cm-mn-ev' : 'Posters-hide' } >july </div>
                        <div className = { liberalMonth === 8 ? 'Event-august-tech liberal-cm-mn-ev' : 'Posters-hide' } > august</div>
                        <div className = { liberalMonth === 9 ? 'Event-september-tech liberal-cm-mn-ev' : 'Posters-hide' } > sep</div>
                        <div className = { liberalMonth === 10 ? 'Event-october-tech liberal-cm-mn-ev' : 'Posters-hide' } >oct </div>
                        <div className = { liberalMonth === 11 ? 'Event-november-tech liberal-cm-mn-ev' : 'Posters-hide' } > nove</div>
                        <div className = { liberalMonth === 12 ? 'Event-december-tech  liberal-cm-mn-ev' : 'Posters-hide' } > decem</div>


                        <div className = { startupMonth === 1 ? 'Event-january-tech startup-cm-mn-ev' : 'Posters-hide' } > january</div>
                        <div className = { startupMonth === 2 ? 'Event-feb-tech startup-cm-mn-ev' : 'Posters-hide' } >feb</div>
                        <div className = { startupMonth === 3 ? 'Event-march-tech startup-cm-mn-ev' : 'Posters-hide' } > march</div>
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