import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Page.css';
import NavBar from './NavBar';
import './MobileView.css';

import Footer from '../../components/Footer/Footer';

import DP from '../../Assets/CouncilMembers/DP.jpg';
import director from '../../Assets/director.png';
import chairman from '../../Assets/chairman.png';
import AcademicCouncilConvener from '../../Assets/UpdatedCouncilMembers/AcademicCouncilConvener.png';
import CouncilAdvisor from '../../Assets/UpdatedCouncilMembers/CouncilAdvisor.png';
import DanceFusionLead from '../../Assets/UpdatedCouncilMembers/DanceFusionLead.png';
import ELCLead from '../../Assets/UpdatedCouncilMembers/ELCLead.png';
import Elcomicos from '../../Assets/UpdatedCouncilMembers/ElcomicsLead.png';
import EventsCouncilConvener from '../../Assets/UpdatedCouncilMembers/EventsCouncilConvener.png';
import FinanceCouncilConvener from '../../Assets/UpdatedCouncilMembers/FinanceCouncilConvener.png';
import InternationalCouncilConvener from '../../Assets/UpdatedCouncilMembers/InternationalCouncilConvener.png';
import KutumbLead from '../../Assets/UpdatedCouncilMembers/KutumbLead.png';
import NarthanaLead from '../../Assets/UpdatedCouncilMembers/NarthanaLead.png';
import OutreachCouncilConvener from  '../../Assets/UpdatedCouncilMembers/OutreachCouncilConvener.png';
import QualityAnalysisCouncilConvener from '../../Assets/UpdatedCouncilMembers/QualityAnalysisCouncilConvener.png';
import SVRLead from '../../Assets/UpdatedCouncilMembers/SVRLead.png';
import TheDesignSphereLead from '../../Assets/UpdatedCouncilMembers/TheDesignSphereLead.png';
import VachasLead from '../../Assets/UpdatedCouncilMembers/VachasLead.png';
import versatales from '../../Assets/UpdatedCouncilMembers/versatalesLead.png';
import ViceChairman from '../../Assets/UpdatedCouncilMembers/ViceChairman.png';
import YuvaTourismLead from '../../Assets/UpdatedCouncilMembers/YuvaTourismLead.png';
import TechnologyCouncilConvener from '../../Assets/UpdatedCouncilMembers/TechnologyCouncil.png';
import AnonymousImage from '../../Assets/UpdatedCouncilMembers/AnonymousImage.png';



const Page = () => {
  // Step 2: Create a state variable to track visibility
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

  return (
    <div className="LeadershipComponent">
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
      <div className="LeadershipContainer">
        <div className="Leadership-one">
          <div className="Leadership-one-in">
            <h1>Executive Officers</h1>
            <p>Find photos, biographies, and speech transcripts of Microsoft executives and board of directors members</p>
          </div>
        </div>
        <div className="Leadership-two">
          <div className="Leadership-two-in">
            <div className="Leadership-two-one">
              <div className="Leadership-two-one-header">
                <div className="Leadership-two-one-header-in lstcmn">
                  <h1>The Office of Student Activity Center</h1>
                  {/* Step 4: Toggle visibility on button click */}
                  <p onClick={toggleLeadershipTwoOneBody}>
                    {isLeadershipTwoOneBodyVisible ? 'Hide' : 'View'}
                  </p>
                </div>
              </div>
              {/* Step 4: Conditionally render based on state */}
              {isLeadershipTwoOneBodyVisible && (
                <div className="Leadership-two-one-body lstcmn-body">
                   <div className="profile-card">
                        <img src={director} alt="" />
                        <h2>Mr P Sai Vijay</h2>
                        <p>Director, SAC</p>
                    </div>
                    <div className="profile-card">
                        <img src={chairman} alt="" />
                        <h2>Mr P Sai Vijay</h2>
                        <p>Director, SAC</p>
                    </div>
                    <div className="profile-card">
                        <img src={ViceChairman} alt="" />
                        <h2>Mr P Sai Vijay</h2>
                        <p>Director, SAC</p>
                    </div>
                    <div className="profile-card">
                        <img src={CouncilAdvisor} alt="" />
                        <h2>Mr P Sai Vijay</h2>
                        <p>Director, SAC</p>
                    </div>
                    
                </div>
              )}
            </div>


            <div className="Leadership-two-two">
              <div className="Leadership-two-two-header">
                <div className="Leadership-two-two-header-in lstcmn">
                  <h1>The Student Council</h1>
                  {/* Step 4: Toggle visibility on button click */}
                  <p onClick={toggleLeaderhipTwoTwoBody}>
                    {isLeadershipTwoOneBodyVisible ? 'Hide' : 'View'}
                  </p>
                </div>
              </div>
              {/* Step 4: Conditionally render based on state */}
              {isLeaderhipTwoTwoBodyVisible && (
                <div className="Leadership-two-two-body lstcmn-body">
                   <div className="profile-card">
                        <img src={TechnologyCouncilConvener} alt="" />
                        <h2>Deepak Reddy</h2>
                        <p>Technology Council</p>
                    </div>
                    <div className="profile-card">
                        <img src={QualityAnalysisCouncilConvener} alt="" />
                        <h2>Laasya Koppaka</h2>
                        <p>Quality Analysis</p>
                    </div>
                    <div className="profile-card">
                        <img src={InternationalCouncilConvener} alt="" />
                        <h2>Swabrah Zalwango</h2>
                        <p>International Student Council</p>
                    </div>
                    <div className="profile-card">
                        <img src={FinanceCouncilConvener} alt="" />
                        <h2>John Rahul</h2>
                        <p>Finance and Logistics Council</p>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <h2>G Nithisha Reddy</h2>
                        <p>Liberal Arts Council</p>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <h2>P Daniel</h2>
                        <p>Sports Council</p>
                    </div>
                    <div className="profile-card">
                        <img src={OutreachCouncilConvener} alt="" />
                        <h2>Mohammad Noor</h2>
                        <p>Outreach & Society Council</p>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <h2>J V Kalyan</h2>
                        <p>Incubation Counil</p>
                    </div>
                    <div className="profile-card">
                        <img src={AcademicCouncilConvener} alt="" />
                        <h2>Hema Sri N</h2>
                        <p>Academic Council</p>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <h2>Manas Tripurana</h2>
                        <p>HR & Grieviences</p>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <h2>M Amish Kumar</h2>
                        <p>Marketing and Media Council</p>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <h2>Md Jawad</h2>
                        <p>Events Council</p>
                    </div>
                </div>
              )}
            </div>



            

            <div className="Leadership-two-three">
              <div className="Leadership-two-three-header">
                <div className="Leadership-two-three-header-in lstcmn">
                  <h1>Club Heads</h1>
                  <p onClick={toggleLeaderhipTwoFourBody}>
                    {isLeaderhipTwoFourBodyVisible ? 'Hide' : 'View'}
                  </p>
                </div>
              </div>
              {/* Step 4: Conditionally render based on state */}
              {isLeaderhipTwoFourBodyVisible && (
                <div className="Leadership-two-three-body lstcmn-body">
                  <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <h2>D Amarnadh</h2>
                        <p>AeroElectronics Club</p>
                    </div>
                   <div className="profile-card">
                        <img src={TechnologyCouncilConvener} alt="" />
                        <h2>Deepak Reddy</h2>
                        <p>ZeroOne Code Club</p>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <h2>Md Khaja Shaik</h2>
                        <p>Cyber Security</p>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <h2>A Dinesh</h2>
                        <p>WebApps</p>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <h2>C Harshitha</h2>
                        <p>Agriculture Club</p>
                    </div>
                    
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <h2>Dhruv Kohli</h2>
                        <p>The Design Sphere</p>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <h2>Srinivas</h2>
                        <p>Automobile Club</p>
                    </div>
                    <div className="profile-card">
                        <img src={AnonymousImage} alt="" />
                        <h2>Tanish</h2>
                        <p>TechHuma Club</p>
                    </div>
                    <div className="profile-card">
                        <img src={DanceFusionLead} alt="" />
                        <h2>Ajay</h2>
                        <p>Dance Club - Fusion</p>
                    </div>
                    <div className="profile-card">
                        <img src={FinanceCouncilConvener} alt="" />
                        <h2>John Rahul</h2>
                        <p>KL Talks</p>
                    </div>
                    <div className="profile-card">
                        <img src={Elcomicos} alt="" />
                        <h2>Muni Sai Charith</h2>
                        <p>El-comicos Club</p>
                    </div>
                    <div className="profile-card">
                        <img src={EventsCouncilConvener} alt="" />
                        <h2>Mohammad Jawaad</h2>
                        <p>Fashion Designing Club</p>
                    </div>
                    <div className="profile-card">
                        <img src={InternationalCouncilConvener} alt="" />
                        <h2>Swabrah Zalwango</h2>
                        <p>Ohana</p>
                    </div>
                    <div className="profile-card">
                        <img src={KutumbLead} alt="" />
                        <h2>Niranjan Shah</h2>
                        <p>Kutumb Society</p>
                    </div>
                    <div className="profile-card">
                        <img src={NarthanaLead} alt="" />
                        <h2>A Dev</h2>
                        <p>Narthana Club</p>
                    </div>
                    <div className="profile-card">
                        <img src={AcademicCouncilConvener} alt="" />
                        <h2>Hema Sri N</h2>
                        <p>Safe Life Club</p>
                    </div>
                    <div className="profile-card">
                        <img src={SVRLead} alt="" />
                        <h2>Aayaz Basha</h2>
                        <p>Smart Village Revolution</p>
                    </div>
                    <div className="profile-card">
                        <img src={VachasLead} alt="" />
                        <h2>V Kruthika Raj</h2>
                        <p>Vachas Club</p>
                    </div>
                    <div className="profile-card">
                        <img src={versatales} alt="" />
                        <h2>P Satyanarayana</h2>
                        <p>Versatales</p>
                    </div>
                    <div className="profile-card">
                        <img src={YuvaTourismLead} alt="" />
                        <h2>T Mihir kumar</h2>
                        <p>Yuva Tourism Club</p>
                    </div>

                </div>
              )}
            </div>
            {/* ... (other sections) */}
          </div>
        </div>

        
      </div>
      <Footer />
    </div>
  );
};

export default Page;
