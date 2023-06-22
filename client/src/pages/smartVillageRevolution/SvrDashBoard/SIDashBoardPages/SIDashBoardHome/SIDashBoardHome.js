import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



import SIDTopNav from '../../SIDashBoardComponents/SIDTopNav/SIDTopNav';
import './SIDashBoardHome.css'; 


const SIDashBoardHome = ({setAuth}) => {

  const [username, setUserName] = useState("");

  async function getUserName() {
    try {

      const response = await fetch('http://localhost:8081/dashboard', {
        method: "GET",
        headers: { token: localStorage.token }
      });
      const parseRes = await response.json();
      setUserName(parseRes.username); 

    } catch(err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getUserName();
  }, []);


  return (
    <div className='SIDashBoardHomeComponent'>
      <SIDTopNav/>
        <div className="SIDashBoardHomeContainer">
          <div className="SIDH-inner">
            <div className="SIDH-one">
              <div className="SIDH-one-one">
                <h2>WELCOME BACK! {username}</h2>
                <span>You have completed 60% of your goal this week! <br />start a new goal and improve your result</span>

                <Link className='SIDH-one-one-link'>Learn More</Link>
              </div>

              <div className="stats">
                <div className="stats-one">
                    <div className="stats-one-one">
                        <div className="stats-one-one-one">
                            <span>90%</span>
                        </div>
                        <div className="stats-one-one-two">
                          <h4>Internship Attendence</h4>
                          <span>06-05-2022</span>
                          <span>Calculated from 11th to 21st May</span>
                        </div>
                    </div>
                    <div className="stats-one-one">
                        <div className="stats-one-one-one">
                            <span>95/100</span>
                        </div>
                        <div className="stats-one-one-two">
                          <h4>Internship Score</h4>
                          <span>06-05-2022</span>
                          <span>Calculated from 11th to 21st May</span>
                        </div>
                    </div>
                </div>
                <div className="stats-one">
                      <div className="stats-one-one">
                      
                      </div>
                      <div className="stats-one-one">
  
                      </div>
                </div>
              </div>

              <div className="reportssub">
                <div className="reportssubHeading">
                  <span>Report Submissions</span>
                </div>
                <div className="reportssub-one">
                  <div className="reportssub-one-one">
                    <span>12th</span>
                  </div>
                  <div className="reportssub-one-one">
                    <span>13th</span>
                  </div>
                  <div className="reportssub-one-one">
                    <span>14th</span>
                  </div>
                  <div className="reportssub-one-one">
                    <span>15th</span>
                  </div>
                  <div className="reportssub-one-one">
                    <span>16th</span>
                  </div>
                  <div className="reportssub-one-one">
                    <span>17th</span>
                  </div>
                  <div className="reportssub-one-one">
                    <span>18th</span>
                  </div>
                  <div className="reportssub-one-one">
                    <span>19th</span>
                  </div>
                  <div className="reportssub-one-one">
                    <span>20th</span>
                  </div>
                  <div className="reportssub-one-one">
                    <span>21st</span>
                  </div>
                </div>
                <div className="reportssub-two">
                    <div className="reportsub-two-one"><span>NA</span></div>
                    <div className="reportsub-two-one"><span>NA</span></div>
                    <div className="reportsub-two-one"><span>NA</span></div>
                    <div className="reportsub-two-one"><span>NA</span></div>
                    <div className="reportsub-two-one"><span>NA</span></div>
                    <div className="reportsub-two-one"><span>NA</span></div>
                    <div className="reportsub-two-one"><span>NA</span></div>
                    <div className="reportsub-two-one"><span>NA</span></div>
                    <div className="reportsub-two-one"><span>NA</span></div>
                    <div className="reportsub-two-one"><span>NA</span></div>
                </div>
              </div>



              <div className="schedule">
                <div className="scheduleHeading">
                  <span>Internship Schedule</span>
                </div>
                <div className="schedule-one">
                    <div className="schedule-one-child">
                      <span>Day 1</span>
                    </div>
                    <div className="schedule-one-child">
                      <span>Day 2</span>
                    </div>
                    <div className="schedule-one-child">
                      <span>Day 3</span>
                    </div>
                    <div className="schedule-one-child">
                      <span>Day 4</span>
                    </div>
                    <div className="schedule-one-child">
                      <span>Day 5</span>
                    </div>
                    <div className="schedule-one-child">
                      <span>Day 6</span>
                    </div>
                    <div className="schedule-one-child">
                      <span>Day 7</span>
                    </div>
                    <div className="schedule-one-child">
                      <span>Day 8</span>
                    </div>
                    <div className="schedule-one-child">
                      <span>Day 9</span>
                    </div>
                    <div className="schedule-one-child">
                      <span>Day 10</span>
                    </div>
                </div>
                <div className="schedule-two">
                    <div className="schedule-two-child">
                      <span>Pre-Bootcamp</span>
                    </div>
                    <div className="schedule-two-child">
                      <span>Training</span>
                    </div>
                    <div className="schedule-two-child">
                      <span>Training</span>
                    </div>
                    <div className="schedule-two-child">
                      <span>Field Action</span>
                    </div>
                    <div className="schedule-two-child">
                      <span>Field Action</span>
                    </div>
                    <div className="schedule-two-child">
                      <span>Field Action</span>
                    </div>
                    <div className="schedule-two-child">
                      <span>Field Action</span>
                    </div>
                    <div className="schedule-two-child">
                      <span>Field Action</span>
                    </div>
                    <div className="schedule-two-child">
                      <span>Field Action</span>
                    </div>
                    <div className="schedule-two-child">
                      <span>Report Submission</span>
                    </div>
                </div>
              </div>
            </div>
            <div className="SIDH-two">
              <div className="SIDH-two-one">
                <span id='dname'>Team</span>
                <span>Team Number: SIT_1000</span>
                <span>Team Lead: 2100031817</span>
              </div>
              <div className="SIDH-two-one">
                <span id='dname'>Student Mentor</span>
                <span>Ravi Prakesh Sharma</span>
              </div>
              <div className="SIDH-two-one">
                <span id='dname'>Faculty Mentor</span>
                <span>Vamsi Narayana Metta</span>
              </div>
              <div className="SIDH-two-one">
                <span id='dname'>Domain</span>
                <span>Smart Village Revolution</span>
              </div>
              <div className="SIDH-two-one">
                <span id='dname'>Villlage</span>
                <span>Lorem ipsum dolor sit amet.</span>
              </div>

              <div className="upcomingtasks">
                <div className="ut-heading">
                  <span>Upcoming tasks</span>
                </div>
                <div className="ut-tasks">
                  <div className="utt-one">
                    <span>12th</span>
                  </div>
                  <div className="utt-two">
                    <span>Lorem ipsum dolor sit.</span>
                    <span>08:00 Am - 05:00 Pm</span>
                  </div>
                </div>
                <div className="ut-tasks">
                  <div className="utt-one">
                    <span>12th</span>
                  </div>
                  <div className="utt-two">
                    <span>Lorem ipsum dolor sit.</span>
                    <span>08:00 Am - 05:00 Pm</span>
                  </div>
                </div>
                <div className="ut-tasks">
                  <div className="utt-one">
                    <span>12th</span>
                  </div>
                  <div className="utt-two">
                    <span>Lorem ipsum dolor sit.</span>
                    <span>08:00 Am - 05:00 Pm</span>
                  </div>
                </div>
                <div className="ut-tasks">
                  <div className="utt-one">
                    <span>12th</span>
                  </div>
                  <div className="utt-two">
                    <span>Lorem ipsum dolor sit.</span>
                    <span>08:00 Am - 05:00 Pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SIDashBoardHome