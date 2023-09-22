import React from 'react'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Page.css' 
import NavBar from './NavBar';
import Footer from '../../components/Footer/Footer';


import CfcPoster from '../../Assets/CfcPoster.jpg'

const eventData = [
    {
    eventName: 'CodeforCause Hackathon 1',
    poster: CfcPoster,
    date: '28-09-2023',
    studentCoordinator: 'Deepak Reddy Gathpa',
    facultyCoordinator: 'Ravi Babu K',
    reportLink: 'https://example.com/report1',
  },
  {
    eventName: 'CodeforCause Hackathon 1',
    poster: CfcPoster,
    date: '28-09-2023',
    studentCoordinator: 'Deepak Reddy Gathpa',
    facultyCoordinator: 'Ravi Babu K',
    reportLink: 'https://example.com/report1',
  },
  {
    eventName: 'CodeforCause Hackathon 1',
    poster: CfcPoster,
    date: '28-09-2023',
    studentCoordinator: 'Deepak Reddy Gathpa',
    facultyCoordinator: 'Ravi Babu K',
    reportLink: 'https://example.com/report1',
  },
  {
    eventName: 'CodeforCause Hackathon 1',
    poster: CfcPoster,
    date: '28-09-2023',
    studentCoordinator: 'Deepak Reddy Gathpa',
    facultyCoordinator: 'Ravi Babu K',
    reportLink: 'https://example.com/report1',
  },
  {
    eventName: 'CodeforCause Hackathon 1',
    poster: CfcPoster,
    date: '28-09-2023',
    studentCoordinator: 'Deepak Reddy Gathpa',
    facultyCoordinator: 'Ravi Babu K',
    reportLink: 'https://example.com/report1',
  },
  {
    eventName: 'CodeforCause Hackathon 1',
    poster: CfcPoster,
    date: '28-09-2023',
    studentCoordinator: 'Deepak Reddy Gathpa',
    facultyCoordinator: 'Ravi Babu K',
    reportLink: 'https://example.com/report1',
  },
]


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


                        {/* events calenders */}

                            {/* Tech */}
                        <div className = { showDiv ===1 ? 'Event-Calendar' : 'Calendar-hide' } >
                            <div className="Event-month-one mn-ev-cm" id = { techMonth === 1 ? 'Event-m-hover' : '' } onClick={ () => {handleTech(1)}} >January</div>
                            <div className="Event-month-two mn-ev-cm" id = { techMonth === 2 ? 'Event-m-hover' : '' } onClick={ () => {handleTech(2)}} >February</div>
                            <div className="Event-month-three mn-ev-cm" id = { techMonth === 3 ? 'Event-m-hover' : '' } onClick={ () => {handleTech(3)}} >March</div>
                            <div className="Event-month-four mn-ev-cm"id = { techMonth === 4 ? 'Event-m-hover' : '' }  onClick={ () => {handleTech(4)}} >April</div>
                            <div className="Event-month-five mn-ev-cm" id = { techMonth === 5 ? 'Event-m-hover' : '' } onClick={ () => {handleTech(5)}} >May</div>
                            <div className="Event-month-six mn-ev-cm" id = { techMonth === 6 ? 'Event-m-hover' : '' } onClick={ () => {handleTech(6)}} >June</div>
                            <div className="Event-month-seven mn-ev-cm" id = { techMonth === 7 ? 'Event-m-hover' : '' } onClick={ () => {handleTech(7)}} >July</div>
                            <div className="Event-month-eight mn-ev-cm" id = { techMonth === 8 ? 'Event-m-hover' : '' } onClick={ () => {handleTech(8)}} >August</div>
                            <div className="Event-month-nine mn-ev-cm" id = { techMonth === 9 ? 'Event-m-hover' : '' } onClick={ () => {handleTech(9)}} >September</div>
                            <div className="Event-month-ten mn-ev-cm" id = { techMonth === 10 ? 'Event-m-hover' : '' } onClick={ () => {handleTech(10)}} >October</div>
                            <div className="Event-month-eleven mn-ev-cm" id = { techMonth === 11 ? 'Event-m-hover' : '' } onClick={ () => {handleTech(11)}} >November</div>
                            <div className="Event-month-twelve mn-ev-cm" id = { techMonth === 12 ? 'Event-m-hover' : '' } onClick={ () => {handleTech(12)}} >December</div>
                        </div>

                            {/* Liberal */}

                        <div className = { showDiv === 2 ? 'Event-Calendar' : 'Calendar-hide' } >
                            <div className="Event-month-one mn-ev-cm"  id = { liberalMonth === 1 ? 'Event-m-hover' : '' } onClick={ () => {handleLiberal(1)}}>January</div>
                            <div className="Event-month-two mn-ev-cm" id = { liberalMonth === 2 ? 'Event-m-hover' : '' } onClick={ () => {handleLiberal(2)}}>February</div>
                            <div className="Event-month-three mn-ev-cm" id = { liberalMonth === 3 ? 'Event-m-hover' : '' }  onClick={ () => {handleLiberal(3)}}>March</div>
                            <div className="Event-month-four mn-ev-cm" id = { liberalMonth === 4 ? 'Event-m-hover' : '' } onClick={ () => {handleLiberal(4)}}>April</div>
                            <div className="Event-month-five mn-ev-cm" id = { liberalMonth === 5 ? 'Event-m-hover' : '' } onClick={ () => {handleLiberal(5)}}>May</div>
                            <div className="Event-month-six mn-ev-cm"  id = { liberalMonth === 6 ? 'Event-m-hover' : '' }onClick={ () => {handleLiberal(6)}}>June</div>
                            <div className="Event-month-seven mn-ev-cm" id = { liberalMonth === 7 ? 'Event-m-hover' : '' } onClick={ () => {handleLiberal(7)}}>July</div>
                            <div className="Event-month-eight mn-ev-cm"  id = { liberalMonth === 8 ? 'Event-m-hover' : '' }onClick={ () => {handleLiberal(8)}}>August</div>
                            <div className="Event-month-nine mn-ev-cm" id = { liberalMonth === 9 ? 'Event-m-hover' : '' } onClick={ () => {handleLiberal(9)}}>September</div>
                            <div className="Event-month-ten mn-ev-cm" id = { liberalMonth === 10 ? 'Event-m-hover' : '' } onClick={ () => {handleLiberal(10)}}>October</div>
                            <div className="Event-month-eleven mn-ev-cm" id = { liberalMonth === 11 ? 'Event-m-hover' : '' } onClick={ () => {handleLiberal(11)}}>November</div>
                            <div className="Event-month-twelve mn-ev-cm" id = { liberalMonth === 12 ? 'Event-m-hover' : '' } onClick={ () => {handleLiberal(12)}}>December</div>
                        </div>

                            {/* Startup */}

                        <div className = { showDiv === 3 ? 'Event-Calendar' : 'Calendar-hide' } >
                            <div className="Event-month-one mn-ev-cm" id = { startupMonth === 1 ? 'Event-m-hover' : '' } onClick={ () => {handleStartup(1)}}>January</div>
                            <div className="Event-month-two mn-ev-cm"  id = { startupMonth === 2 ? 'Event-m-hover' : '' } onClick={ () => {handleStartup(2)}}>February</div>
                            <div className="Event-month-three mn-ev-cm"  id = { startupMonth === 3 ? 'Event-m-hover' : '' } onClick={ () => {handleStartup(3)}}>March</div>
                            <div className="Event-month-four mn-ev-cm"  id = { startupMonth === 4 ? 'Event-m-hover' : '' } onClick={ () => {handleStartup(4)}}>April</div>
                            <div className="Event-month-five mn-ev-cm"  id = { startupMonth === 5 ? 'Event-m-hover' : '' } onClick={ () => {handleStartup(5)}}>May</div>
                            <div className="Event-month-six mn-ev-cm"  id = { startupMonth === 6 ? 'Event-m-hover' : '' } onClick={ () => {handleStartup(6)}}>June</div>
                            <div className="Event-month-seven mn-ev-cm"  id = { startupMonth === 7 ? 'Event-m-hover' : '' } onClick={ () => {handleStartup(7)}}>July</div>
                            <div className="Event-month-eight mn-ev-cm"  id = { startupMonth === 8 ? 'Event-m-hover' : '' } onClick={ () => {handleStartup(8)}}>August</div>
                            <div className="Event-month-nine mn-ev-cm"  id = { startupMonth === 9 ? 'Event-m-hover' : '' } onClick={ () => {handleStartup(9)}}>September</div>
                            <div className="Event-month-ten mn-ev-cm"  id = { startupMonth === 10 ? 'Event-m-hover' : '' } onClick={ () => {handleStartup(10)}}>October</div>
                            <div className="Event-month-eleven mn-ev-cm"  id = { startupMonth === 11 ? 'Event-m-hover' : '' } onClick={ () => {handleStartup(11)}}>November</div>
                            <div className="Event-month-twelve mn-ev-cm"  id = { startupMonth === 12 ? 'Event-m-hover' : '' } onClick={ () => {handleStartup(12)}}>December</div>
                        </div>

                            {/* Outreach */}
                        <div className = { showDiv === 4 ? 'Event-Calendar' : 'Calendar-hide' } >
                            <div className="Event-month-one mn-ev-cm" id = { InoMonth === 1 ? 'Event-m-hover' : '' } onClick={ () => {handleIno(1)}}>January</div>
                            <div className="Event-month-two mn-ev-cm" id = { InoMonth === 2 ? 'Event-m-hover' : '' } onClick={ () => {handleIno(2)}}>February</div>
                            <div className="Event-month-three mn-ev-cm" id = { InoMonth === 3 ? 'Event-m-hover' : '' }  onClick={ () => {handleIno(3)}}>March</div>
                            <div className="Event-month-four mn-ev-cm" id = { InoMonth === 4 ? 'Event-m-hover' : '' } onClick={ () => {handleIno(4)}}>April</div>
                            <div className="Event-month-five mn-ev-cm" id = { InoMonth === 5 ? 'Event-m-hover' : '' } onClick={ () => {handleIno(5)}}>May</div>
                            <div className="Event-month-six mn-ev-cm" id = { InoMonth === 6 ? 'Event-m-hover' : '' }  onClick={ () => {handleIno(6)}}>June</div>
                            <div className="Event-month-seven mn-ev-cm"  id = { InoMonth === 7 ? 'Event-m-hover' : '' } onClick={ () => {handleIno(7)}}>July</div>
                            <div className="Event-month-eight mn-ev-cm" id = { InoMonth === 8 ? 'Event-m-hover' : '' } onClick={ () => {handleIno(8)}}>August</div>
                            <div className="Event-month-nine mn-ev-cm" id = { InoMonth === 9 ? 'Event-m-hover' : '' } onClick={ () => {handleIno(9)}}>September</div>
                            <div className="Event-month-ten mn-ev-cm" id = { InoMonth === 10 ? 'Event-m-hover' : '' } onClick={ () => {handleIno(10)}}>October</div>
                            <div className="Event-month-eleven mn-ev-cm" id = { InoMonth === 11 ? 'Event-m-hover' : '' } onClick={ () => {handleIno(11)}}>November</div>
                            <div className="Event-month-twelve mn-ev-cm" id = { InoMonth === 12 ? 'Event-m-hover' : '' } onClick={ () => {handleIno(12)}}>December</div>
                        </div>

                        {/* events names poster  */}



                        <div className={techMonth === 1 ? 'Event-january-tech tech-cm-mn-ev' : 'Posters-hide'}>
                            {/* Write heading as 'List of events organized in month name' */}
                            <h1>List of Activities Organized in {monthNames[techMonth - 1]}</h1>
                            <EventsTable eventData={eventData} />
                        </div>

                        <div className = { techMonth === 2 ? 'Event-feb-tech tech-cm-mn-ev' : 'Posters-hide' } >
                             
                        </div>

                        <div className = { techMonth === 3 ? 'Event-march-tech tech-cm-mn-ev' : 'Posters-hide' } > 
                            
                        </div>
                        <div className = { techMonth === 4 ? 'Event-april-tech tech-cm-mn-ev' : 'Posters-hide' } > 
                            
                        </div>
                        <div className = { techMonth === 5 ? 'Event-may-tech tech-cm-mn-ev' : 'Posters-hide' } > 
                        
                        </div>
                        <div className = { techMonth === 6 ? 'Event-june-tech tech-cm-mn-ev' : 'Posters-hide' } > 
                        
                        </div>
                        <div className = { techMonth === 7 ? 'Event-july-tech tech-cm-mn-ev' : 'Posters-hide' } >
                        
                        </div>
                        <div className = { techMonth === 8 ? 'Event-august-tech tech-cm-mn-ev' : 'Posters-hide' } > 
                        
                        </div>
                        <div className = { techMonth === 9 ? 'Event-september-tech tech-cm-mn-ev' : 'Posters-hide' } > 
                        
                        </div>
                        <div className = { techMonth === 10 ? 'Event-october-tech tech-cm-mn-ev' : 'Posters-hide' } >
                            
                        </div>
                        <div className = { techMonth === 11 ? 'Event-november-tech tech-cm-mn-ev' : 'Posters-hide' } >

                        </div>
                        <div className = { techMonth === 12 ? 'Event-december-tech tech-cm-mn-ev' : 'Posters-hide' } >

                        </div>

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

