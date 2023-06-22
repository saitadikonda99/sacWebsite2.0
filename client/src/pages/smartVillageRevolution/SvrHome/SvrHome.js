
import React, { useState, useEffect } from 'react';

import './SvrHome.css'; 
import Footer from '../../../../src/components/Footer/Footer'; 

import { Link } from 'react-router-dom';

//import images here 
import DomainOne from '../../../Assets/svrImages/Departments/DomainOne.png';
import DomainTwo from '../../../Assets/svrImages/Departments/DomainTwo.png';
import DomainThree from '../../../Assets/svrImages/Departments/DomainThree.png';
import DomainFour from '../../../Assets/svrImages/Departments/DomainFour.png';
import DomainFive from '../../../Assets/svrImages/Departments/DomainFive.png';
import DomainSix from '../../../Assets/svrImages/Departments/DomainSix.png';
import DomainSeven from '../../../Assets/svrImages/Departments/DomainSeven.png';
import DomainEight from '../../../Assets/svrImages/Departments/DomainEight.png';
import DomainNine from '../../../Assets/svrImages/Departments/DomainNine.png';
import DomainTen from '../../../Assets/svrImages/Departments/DomainTen.png';
import DomainEleven from '../../../Assets/svrImages/Departments/DomainEleven.png';
import DomainTwelve from '../../../Assets/svrImages/Departments/DomainTwelve.png';
import DomainThirteen from '../../../Assets/svrImages/Departments/DomainThirteen.png';
import DomainFourteen from '../../../Assets/svrImages/Departments/DomainFourteen.png';
import DomainFifteen from '../../../Assets/svrImages/Departments/DomainFifteen.png';
import DomainSixteen from '../../../Assets/svrImages/Departments/DomainSixteen.png';
import DomainSeventeen from '../../../Assets/svrImages/Departments/DomainSeventeen.png';
import DomainEighteen from '../../../Assets/svrImages/Departments/DomainEighteen.png';
import DomainNineteen from '../../../Assets/svrImages/Departments/DomainNineteen.png';
import DomainTwenty from '../../../Assets/svrImages/Departments/DomainTwenty.png';
import DomainTwentyOne from '../../../Assets/svrImages/Departments/DomainTwentyOne.png';
import NewNav from '../../../components/NewNav/NewNav';

import newSacLogo2 from '../../../Assets/Logos/newSacLogo2.png'; 
//import javaScript files here 
const SvrHome = () => {
  

  useEffect(() => {
    document.title = 'Social Internship | KLU SAC';
  }, []);
  
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(true);


  function toggleOverlay() {
    setIsActive(!isActive);
  } 

  useEffect(() => {
    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-105px";
      }
      setPrevScrollpos(currentScrollPos);
    };
  }, [prevScrollpos]);
      
    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 1000));
  
        setLoading((loading) => !loading);
      };
        
      loadData();
    }, [])

    if (loading) {
        return <div>
            <div class="box">
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
            </div>

        </div>
    }
  else {
    return (
      <div className='SvrHomeComponent'>
        <div className="SvrHomeContainer">
              <div className="other">
                 <Link to='/Home'>
                 <img id='oldsac' className={isActive ? '' : 'hidden'} src={newSacLogo2} alt=""  /></Link>
                  <Link to='/Home'>
                  <img id='newsac' className={isActive ? 'hidden' : ''} src={newSacLogo2} alt="" /></Link>
               </div>


               <div className='mainAnother'  id='navbar' >
                  <div className="users">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <div className={`button_container strides ${isActive ? 'active' : ''}`} onClick={toggleOverlay}>
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                  </div>
               </div>
               
                <div className={`overlay ${isActive ? 'open' : ''}`} id="overlay">
                    <NewNav/>
                </div>
            <div className="SvrHomeOne">
              <div className="SvrHomeOne-one">
                 <div className="SvrHomeOne-one-inner">
                  <h1>Y22 Social Internship and Smart Village Revolution Program by Student Activity Center, KLEF</h1>
                    <div className="SvrHomeOne-one-description">
                    <p>Dates: 11th May - 21st May 2023 (All Engineering Departments) <br />
                    Dates: 25th May - 7th June 2023 (All MHS Departments) <br />
                    Duration: 80 Hours (10 days) <br />
                    Credits Offered: 1 Credit <br />
                    </p>
                    </div>
                 </div>
  
              </div>
              
              <div className="SvrHomeOne-two">
                  <div className="SvrHomeOne-two-inner">
                    <Link to='/Home/StudentDetails' className='RegLinks'>Admin Dashboard</Link>
                    <span id='sor'>OR</span>                    
                    <Link className='RegLinks beta btn btn-secondary' data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">SI Student DashBoard <span>(beta)</span></Link>
                  </div>
              </div>
            </div>


            <div className="explain">
              <div  className="explain-inner">
                <div  id='overview' className="explain-one">
                    <h2>Overview of Social Internship / Smart Village Revolution by Student Activity Center</h2>
                    <p>Smart village revolution (SVR) is an initiative undertaken by KLEF with primary focus on harness the benefits of technology learned in the classroom for the rural folks. The initiative is a community effort to mobilize the collective strengths of faculty, students and people from various streams and integrate it with technology to provide benefits to the rural community. The SVR encourages, builders, developers, owners, architects and consultants to design & construct green buildings, thereby enhancing the economic and environmental performance of buildings. Inspired by the Gandhian philosophy and thoughts, the Smart Villages Revolution was conceived by KLEF to provide 'Technical solutions to the Local Needs' by launching the faculty and students as the community forum to be along with the locals and involve them to search for the sustainable solution. The Project aims to build a mass movement driven by communities to empower them with knowledge and skills to take on the challenges in the technological world. KLEF strives to foster social development beyond its academic contribution. As a philosophy of the university, sustainable rural development is the key objective of this initiative.</p>
                </div>
                <div className="explain-two">
                  <h1>Social Internship: <br /> From the Director, SAC</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/q9R8qWt3fmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
            </div>



            <div id='timeline' className="SvrTimeline">
                  <div id="content">
                  <h1>Internship Timeline Concept</h1>

                  <ul className="timeline">
                    <li className="event" data-date="12:30 - 1:00pm">
                      <h3>Social Internship Pre-BootCamp Program</h3>
                      <h2>11th May 2023</h2>
                      <p>
                      The Social Internship Pre-BootCamp Program offers hands-on experience in social work before an internship, with workshops on communication, teamwork, and problem-solving to prepare participants.
                      </p>
                    </li>
                    <li className="event" data-date="2:30 - 4:00pm">
                      <h3>Training</h3>
                      <h2>12th & 13th May</h2>
                      <p>Training program on selected fields of Social Internship</p>    
                    </li>
                    <li className="event" data-date="5:00 - 8:00pm">
                      <h3>Field Study</h3>
                      <h2>14th May</h2>
                      <p>The Social Internship Field Study program exposes participants to real-world social work settings and challenges them to work with vulnerable populations. Participants will work closely with experienced professionals, develop skills in case management and advocacy, and gain a deeper understanding of social justice issues. The program provides invaluable experience for aspiring social workers.</p>    
                    </li>
                    <li className="event" data-date="8:30 - 9:30pm">
                      <h3>End of Social Internship</h3>
                      <h2>20th May 2023</h2>
                      <p>The Social Internship program will end on May 20th.</p>    
                    </li>
                    <li className="event" data-date="8:30 - 9:30pm">
                      <h3>Report Submission</h3>
                      <h2>21st May 2023</h2>
                      <p>All the Social Internship participants should submit the reports on 21st may for grading</p>    
                    </li>
                  </ul>
                </div>
              </div>
        </div>
        <Footer/>
      </div>
    )
  }
  
}

export default SvrHome
