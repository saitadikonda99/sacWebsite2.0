import React, { useState } from 'react';
import './Page.css';

import Footer from '../../components/Footer/Footer';

import DP from '../../Assets/CouncilMembers/DP.jpg';

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



  return (
    <div className="LeadershipComponent">
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
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
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
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                </div>
              )}
            </div>



            <div className="Leadership-two-three">
              <div className="Leadership-two-three-header">
                <div className="Leadership-two-three-header-in lstcmn">
                  <h1>Executive Team</h1>
                  <p onClick={toggleLeaderhipTwoThreeBody}>
                    {isLeadershipTwoOneBodyVisible ? 'Hide' : 'View'}
                  </p>
                </div>
              </div>
              {/* Step 4: Conditionally render based on state */}
              {isLeaderhipTwoThreeBodyVisible && (
                <div className="Leadership-two-three-body lstcmn-body">
                   <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
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
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
                    </div>
                    <div className="profile-card">
                        <img src={DP} alt="" />
                        <h2>John Doe</h2>
                        <p>Web Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque justo quis tortor tincidunt.</p>
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
