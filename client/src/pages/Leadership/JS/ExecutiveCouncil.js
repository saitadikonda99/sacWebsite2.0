import React from "react";
import {useEffect, useState} from "react";
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavigationBar/NavBar'; 
import '../CSS/ExecutiveCouncil.css'; 

import executive from '../../../Assets/executive.png';
import star from '../../../Assets/star.png';
import discussion from '../../../Assets/discussion.jpg'; 

const ExecutiveCouncil = () => {

  useEffect(() => {
    document.title = 'ExecutiveCouncil | KLU SAC';
  }, []);

  const [loading, setLoading] = useState(true);
      
    useEffect(() => {
      // Loading function to load data or 
      // fake it using setTimeout;
      const loadData = async () => {
  
        // Wait for two second
        await new Promise((r) => setTimeout(r, 1000));
  
        // Toggle loading state
        setLoading((loading) => !loading);
      };
        
      loadData();
    }, [])
      
    // If page is in loading state, display 
    // loading message. Modify it as per your 
    // requirement.
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
        <div className='ExecutiveCouncilComponent'>
          <NavBar/>
          <div className="ExecutiveCouncilContainer">
          <div className="one">
            <div className="one-heading">
              <h1><span>Leadership/</span>Executive Council</h1>
            </div>
            <div className="one-inner">
              <div className="one-inner-one">
                <img id='img-1' src={star} alt="" />
                <img id='img-2' src={star} alt="" />
                <img id='img-3' src={star} alt="" />
                <img id='img-4' src={star} alt="" />
                <img id='img-5' src={star} alt="" />
              </div>
              <div className="one-inner-two">
                  <h1>THE Student Governing Body of <br />Koneru Lakshmaiah Education Foundation</h1>
                  <h4>United in diversity, empowered to achieve: the student body of KLEF.</h4>
              </div>
            </div>
          </div>
          <div className="two">
            <div className="two-inner">
              <div className="two-one">
                <p>As members of the ADCPS Student council for the year 2022-23, we are committed to making sure that every student at IIT Bombay has an enriching and fulfilling experience. Whether you're a returning student or a new member of our community, we warmly welcome you to the start of a fresh academic year in 2022. We are a tightly-knit student body, and we encourage you to reach out to any of our council members for any questions, concerns, or to extend your cooperation. <br /> <br />
    
                We believe that learning, exploring, and growing together is essential to creating a positive and successful academic environment. Therefore, we're looking forward to working with you all to achieve this goal. Let's make this year one to remember, and let's do it together!</p>
    
                <img src={discussion} alt="" />
    
    
    
                <p>The Institute’s Student Governance process is led by the Executive Council, a group of student representatives who are elected directly by the general student body. This council is highly visible and serves as a key component of the Institute’s student leadership structure. The council is comprised of various executive positions.These positions are integral to ensuring that the student body’s needs are effectively addressed, and that the Institute remains a vibrant and engaging community for all.</p>
    
                <ul>
                  <li>The Student General Secretary</li>
                  <li>The Hostel Affairs Secretary</li>
                  <li>The Sports Secretary</li>
                  <li>The Co Curricular Affairs Secretary</li>
                  <li>The Academic Affairs Secretary</li>
                  <li>The Research Affairs Secretary</li>
                  <li>The International and Alumni Relations Secretary</li>
                  <li>The Cultural Affairs Secretary (Literary)</li>
                  <li>The Cultural Affairs Secretary (Arts)</li>
                  <li>Speaker, Students Legislative Committee</li>
                </ul>
    
              </div>
              <div className="two-two">
                {/* <h1><span>Executive Council <br /></span> Student Legislative Council</h1> */}
              </div>
          </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      )
        
    }
  
}

export default ExecutiveCouncil
