import React from 'react';
import './page.css';
import { Link as Scroll } from 'react-scroll';

import ZeroOneClubLogo from '../../../Assets/Logos/ZeroOneClubLogo.png';


const page = () => {
  return (
    <div>
        <div className="clubs ZeroOne">
          <div className="clubs-in">
            <div className="clubs-nav">
              <div className="clubs-nav-in">
                <div className="clubs-nav-in-one">
                    <img src={ZeroOneClubLogo} alt="" />
                </div>
                <div className="clubs-nav-in-two">
                 <ul>
                   <li>
                      <Scroll
                          activeClass="active"
                          to="clubs-body"
                          spy ={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >   
                        Home
                      </Scroll> 
                   </li>
                    <li>
                      <Scroll
                          activeClass="active"
                          to="clubs-activites"
                          spy ={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                        Activities
                      </Scroll>
                    </li>
                    <li>
                      <Scroll
                          activeClass="active"
                          to="clubs-team"
                          spy ={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                        Team
                      </Scroll>
                     </li>
                    </ul>
                  </div>
              </div>
            </div>
            <div className="clubs-body">
                 
              </div>
              <div className="clubs-activites">
                <h1>Activites</h1>
              </div>
              <div className="clubs-team">
                <h1>Team</h1>
              </div>
          </div>
        </div>
    </div>
  )
}

export default page