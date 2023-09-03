import React, { useState, useEffect} from 'react';
import './Page.css';
import { Link } from 'react-router-dom';
import Scroll from "react-scroll-to-top";

import newSacLogo from '../../Assets/Logos/newSacLogo.png';


const Page = () => {
    const [isNavScrolled, setNavScrolled] = useState(false);
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className='NavComponent'>
        <div className={`nav ${isNavScrolled ? 'scrolled' : ''}`}>
                <div className="nav-in">
                <div className="nav-in-two">
                    <div className="nav-in-two-in">
                    {!isNavScrolled && <img className='logoini' src={newSacLogo} alt="" />}
                    {isNavScrolled && <h1><Link className='homelink' to='/'>Student Activity Center</Link></h1>}
                    </div>
                </div>
                <div className="nav-in-one">
                    <div className="nav-in-one-in">
                    <ul>
                        <li>
                        <Scroll
                            activeClass="active"
                            to="news"
                            spy ={true}
                            smooth={true}
                            offset={100}
                            duration={200}
                            >   
                            News
                        </Scroll>  
                        </li>
                        <li>
                        <Scroll
                                activeClass="active"
                                to="news-two"
                                spy ={true}
                                smooth={true}
                                offset={-10}
                                duration={200}
                            >   
                            Events
                            </Scroll>  
                        </li>
                        <li>
                        <Scroll
                                activeClass="active"
                                to="about"
                                spy ={true}
                                smooth={true}
                                offset={-10}
                                duration={200}
                            >   
                            About
                            </Scroll>  
                        </li>
                        <li>
                        <Link className='nav-links' to='/StudentClubs'>Clubs</Link>
                        </li>
                        <li>
                        <Link className='nav-links'  to='/'>Team</Link>
                        </li>
                        <li>
                        <Scroll
                                activeClass="active"
                                to="about"
                                spy ={true}
                                smooth={true}
                                offset={-10}
                                duration={200}
                            >   
                            Student Council
                            </Scroll>  
                        </li>
                        <li>
                        <Scroll
                                activeClass="active"
                                to="about"
                                spy ={true}
                                smooth={true}
                                offset={-10}
                                duration={200}
                            >   
                            News Letter
                            </Scroll>  
                        </li>

                    </ul>
                    </div>
                </div>
                </div>
                </div>
    </div>
  )
}

export default Page