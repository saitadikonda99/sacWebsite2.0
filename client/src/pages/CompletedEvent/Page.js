import React from 'react'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Page.css' 
import NavBar from './NavBar';
import Footer from '../../components/home/Footer/Footer';




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
import { combinedDataIncu } from './DataArrays'


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
    
    

    const handleDiv = (Number) => {
        setDiv(Number)
        setTech(0)
        setLiberal(0)
        setStartup(0)
        setoutreachMonth(0)
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

    const handleOutreach = (Number) => {
      setoutreachMonth(Number)
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

                        <div className = { showDiv === 1 && techMonth === 0 ? 'Event-tech-clubs-in' : 'Event-hide' } >
                           
                        </div>

                        <div className = { techMonth === 1 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={ZeroOneData} />
                        </div>

                         <div className = { techMonth === 2 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={AeroElectricData} />
                        </div>

                          <div className = { techMonth === 3 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={CyberData} />
                        </div>

                          <div className = { techMonth === 4 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={WebAppsData} />
                        </div>

                          <div className = { techMonth === 5 ? 'Event-tech-clubs-ec' : 'Event-hide' } > 
                          <EventsTables eventData={TechHumaData} />
                        </div>

                          <div className = { techMonth === 6 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={RoboticsData} />
                        </div>

                          <div className = { techMonth === 7 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={AnimationData} />
                        </div>


                          <div className = { techMonth === 8 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={AutomobileData} />
                        </div>

                          <div className = { techMonth === 9 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={AgricultureData} />
                        </div>

                          <div className = { techMonth === 10 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={MobileESportsData} />

                        </div>

                          <div className = { techMonth === 11 ? 'Event-tech-clubs-ec' : 'Event-hide' } >  
                          <EventsTables eventData={AIData} />
                        </div>

                                   

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

                        <div className = {  showDiv === 2 && liberalMonth === 0 ? 'Event-tech-clubs-in' : 'Event-hide' } >
                           
                        </div>

                        <div className = { liberalMonth === 1 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={FusionData} />
                        </div>

                        <div className = { liberalMonth === 2 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={SwaraData} />
                        </div>

                        <div className = { liberalMonth === 3 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={VachasData} />
                        </div>

                        <div className = { liberalMonth === 4 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={KLRadioData} />
                        </div>

                        <div className = { liberalMonth === 5 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={FilmMakingData} />
                        </div>

                        <div className = { liberalMonth === 6 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={StandupcomedyData} />
                        </div>

                        <div className = { liberalMonth === 7 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={DramaticsData} />
                        </div>

                        <div className = { liberalMonth === 8 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={NarthanaData} />
                        </div>




{/* -------------------------------------------------- Innovation   -------------------------------------------------- */}


                        <div className = { showDiv === 3 ? 'Event-tech-clubs' : 'Event-hide' } >
                            <div className="Event-tech-club-one ec-name" id = { startupMonth === 1 ? 'Event-hover' : '' } onClick={ () => {handleStartup(1)}} >Startup</div>
                            <div className="Event-tech-club-two ec-name" id = { startupMonth === 2 ? 'Event-hover' : '' } onClick={ () => {handleStartup(2)}} >Ideas</div>
                            <div className="Event-tech-club-three ec-name" id = { startupMonth === 3 ? 'Event-hover' : '' } onClick={ () => {handleStartup(3)}} >ACIC</div>
                        </div>

                        <div className = { showDiv === 3  && startupMonth === 0 ? 'Event-tech-clubs-in' : 'Event-hide' } >
                           
                        </div>

                        <div className = { startupMonth === 1 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={STData} />
                        </div>

                        <div className = { startupMonth === 2 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={IdeasData} />
                        </div>

                        <div className = { startupMonth === 3 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={ACICData} />
                        </div>  



 {/* --------------------------------------------------  Outreach -------------------------------------------------- */}
                          

                        <div className = { showDiv === 4 ? 'Event-tech-clubs' : 'Event-hide' } >
                            <div className="Event-tech-club-one ec-name" id = { outreachMonth === 1 ? 'Event-hover' : '' } onClick={ () => {handleOutreach(1)}} >CEA</div>
                            <div className="Event-tech-club-two ec-name" id = { outreachMonth === 2 ? 'Event-hover' : '' } onClick={ () => {handleOutreach(2)}} >Tourism</div>
                            <div className="Event-tech-club-three ec-name" id = { outreachMonth === 3 ? 'Event-hover' : '' } onClick={ () => {handleOutreach(3)}} >KL Talks</div>
                            <div className="Event-tech-club-four ec-name" id = { outreachMonth === 4 ? 'Event-hover' : '' } onClick={ () => {handleOutreach(4)}} >SafeLife</div>
                            <div className="Event-tech-club-five ec-name" id = { outreachMonth === 5 ? 'Event-hover' : '' } onClick={ () => {handleOutreach(5)}} >Electoral</div>
                            <div className="Event-tech-club-six ec-name" id = { outreachMonth === 6 ? 'Event-hover' : '' } onClick={ () => {handleOutreach(6)}} >SVR</div>  
                        </div>

                        <div className = { showDiv === 4 && outreachMonth === 0 ? 'Event-tech-clubs-in' : 'Event-hide' } >
                           
                        </div>
                       
                        <div className = { outreachMonth === 1 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={CEAData} />
                        </div>

                        <div className = { outreachMonth === 2 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={TourismData} />
                        </div>

                        <div className = { outreachMonth === 3 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={KLTalksData} />
                        </div>

                        <div className = { outreachMonth === 4 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={SafeLifeData} />
                        </div>

                        <div className = { outreachMonth === 5 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={ElectoralData} />
                        </div>

                        <div className = { outreachMonth === 6 ? 'Event-tech-clubs-ec' : 'Event-hide' } >
                          <EventsTables eventData={SVRData} />
                        </div>



                        

                        {/* --------------- END ---------------  */}


                   </div>
                   <Footer />
                </div>
           
            </div>
        </div>
 
  )
}

export default Page

 


function EventsTables({ eventData }) {
  let serialNumber = 0; // Initialize the serial number outside the map function

  return (
    <div className="Events-table">
      <table>
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Event Name</th>
            <th>Month</th>
            <th>Date</th>
            <th>Student Coordinator</th>
            <th>Faculty Coordinator</th>
            <th>Event Report</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(eventData).map(([month, events]) => (
            events.map((event, index) => (
              <tr key={index}>
                <td>{serialNumber += 1}</td> {/* Increment the serial number */}
                <td>{event.eventName}</td>
                {index === 0 && <td rowSpan={events.length}>{month}</td>}
                <td>{event.date}</td>
                <td>{event.studentCoordinator}</td>
                <td>{event.facultyCoordinator}</td>
                <td><a href={event.reportLink}>Click Here</a></td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
}
