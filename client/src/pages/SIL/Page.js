import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

import NavBar from './NavBar';

import Footer from '../../components/Footer/Footer';
import  {activities}  from './DataArray';
import  {projects}  from './DataArray';

const Page = () => {

  


  const [isLeadershipTwoOneBodyVisible, setLeadershipTwoOneBodyVisible] = useState(false);

  // Step 3: Event handler function to toggle visibility
  const toggleLeadershipTwoOneBody = () => {
    setLeadershipTwoOneBodyVisible(!isLeadershipTwoOneBodyVisible);
  };

  const [isLeaderhipTwoTwoBodyVisible, setLeaderhipTwoTwoBodyVisible] = useState(false);
  const toggleLeaderhipTwoTwoBody = () => {
    setLeaderhipTwoTwoBodyVisible(!isLeaderhipTwoTwoBodyVisible);
  };

  const [isLeaderhipTwoThreeBodyVisible, setLeaderhipTwoThreeBodyVisible] = useState(false);
  const toggleLeaderhipTwoThreeBody = () => {
    setLeaderhipTwoThreeBodyVisible(!isLeaderhipTwoThreeBodyVisible);
  };

  const [isLeaderhipTwoFourBodyVisible, setLeaderhipTwoFourBodyVisible] = useState(false);
  const toggleLeaderhipTwoFourBody = () => {
    setLeaderhipTwoFourBodyVisible(!isLeaderhipTwoFourBodyVisible);
  };


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
  // Define an array of activities


    const [visibleProjectIndex, setVisibleProjectIndex] = useState(-1);

    // Step 2: Event handler function to toggle visibility of a specific project
    const toggleProjectDescription = (index) => {
      if (index === visibleProjectIndex) {
        setVisibleProjectIndex(-1); // Toggle off if already visible
      } else {
        setVisibleProjectIndex(index); // Toggle on for the clicked project
      }
    };

  return (
    <div className='SILComponent'>

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
      <div className="SILContainer">

        <div className="sil-header">
            <div className="sil-header-in">
                <h1>Social Immersive Learning through Student Activity Center</h1>
                <p>The Student Activity Center is <mark>duly authorized to facilitate activities associated with the Social Immersive Learning Course</mark>. The following is a comprehensive list of activities that the Student Activity Center (SAC) organizes, scheduled on the dates specified, in collaboration with the diverse clubs operating within SAC.</p>
            </div>
        </div>

        <div className="silactivites">
          <div className="silactivities-in">
           <div className="silactivities-in-header">
                <h1>List of Activities & Events</h1>
           </div>
            <table>
              <thead>
                <tr>
                  <th>Sno</th>
                  <th>Activity Name</th>
                  <th>Organizing Club</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Venue</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr key={index}>
                    <td>{activity.sno}</td>
                    <td>{activity.name}</td>
                    <td>{activity.clubname}</td>
                    <td>{activity.date}</td>
                    <td>{activity.time}</td>
                    <td>{activity.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="silactivities-in-header silactivities-in-header-two">
                <h1>List of Ongoing Projects</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Project Name</th>
                            <th>Organizing Club</th>
                            <th>Resource</th>
                            <th>Project Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.sno}</td>
                <td>{project.name}</td>
                <td>{project.clubname}</td>
                <td>
                  <a href={project.resource} target="_blank" rel="noopener noreferrer">
                    Resource Link
                  </a>
                </td>
                <td>
                  {/* Step 3: Add a "View Description" button for each row */}
                  <button className='viewdesc' onClick={() => toggleProjectDescription(index)}>
                    {visibleProjectIndex === index ? 'Hide Description' : 'View Description'}
                  </button>
                </td>
              </tr>
            ))}
                    </tbody>
                </table>
        {visibleProjectIndex !== -1 && (
          <div>
            <h2>Project Description</h2>
            <p>{projects[visibleProjectIndex].description}</p>
          </div>
        )}
           </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default Page;
