import React, { useEffect, useState } from 'react';


import Reveal from 'react-reveal/Reveal';
import '../NavigationBar/NavBar.css';
import sac_logo from '../../Assets/Logos/sac_logo.png'; 
import { Link } from 'react-router-dom';






import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Tooltip from '@mui/material/Tooltip';

import Home from '../../pages/Home/Home';

import { MDBContainer } from "mdb-react-ui-kit";
import { color } from '@mui/system';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

function PaperComponent(props: PaperProps) {  
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}



const NavBar = () => {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const sticky = navbar.offsetTop;
      if (window.pageYOffset >= sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const toggleDropdown = (e) => {
    const dropdown = e.currentTarget.nextElementSibling;
    dropdown.classList.toggle("active");

    const otherDropdowns = document.querySelectorAll(".navbar-dropdown.active");
    otherDropdowns.forEach((d) => {
      if (d !== dropdown) {
        d.classList.remove("active");
      }
    });
  };

  const closeDropdowns = () => {
    const dropdowns = document.querySelectorAll(".navbar-dropdown.active");
    dropdowns.forEach((d) => {
      d.classList.remove("active");
    });
  };

  

  return (
    
    <div className={`NavBarComponent ${isSticky ? 'sticky' : ''}`}>
      <div className="NavBarContainer">

        
        <div className="NavBar-desc">
          <center><p><a href="https://www.kluniversity.in/default.aspx" target='_blank'>Koneru Lakshmaiah Education Foundation</a> | Student Activity Center - SAC</p></center>
        </div>
        

        
        
      
        
        <div id="navbar" className="NavBar-inner">
          <div className="logo">
            <Link to='/Home' ><img src={sac_logo} alt="" /></Link>
          </div>
          <div className="index">
            <div className="index-inner">
            <div className="ind">
                <Link to="/Home" className='links'>Home</Link>
              </div>

            <div class="dropdown">
              <div className="ind">
                <Link className='links homee'>Activities <i id='dropd' class="fa fa-sort-desc" aria-hidden="true"></i></Link>
              </div>
              <div class="dropdown-content">
              <div className="test">
        <div className="quicklinks">

            <div className="quicklinks-inner">
                  <div className="quick-one quick">
                      <h3>Technology Clubs</h3>
                      <ul>
                        <li><Link className='qls'>Coding School</Link>

                        <ul id='innerdrop'>
                          <li  >Programming and Algorithms Group (PAG)</li>
                          <li>Competitive Coding</li>
                          <li>Web Development</li>
                          <li >Open Source and Software Development Group</li>
                          <li>Infrastructure as Code Club (IACC) | DevOps</li>
                          <li>Women in Technology (WIT)</li>
                        </ul>
                        
                        </li>
                        <li><Link className='qls'>Cyber Security</Link></li>
                        <li><Link className='qls'>Automation</Link></li>
                        <li><Link className='qls'>Robotics</Link></li>
                        <li><Link className='qls'>Automobile</Link></li>
                        <li><Link className='qls'>Game Development</Link></li>
                        <li><Link className='qls'>Safe Life</Link></li>
                        <li><Link className='qls'>Film Technology</Link></li>
                        <li><Link className='qls'>Agriculture</Link></li>
                      </ul>
                  </div>
                  <div className="quick-two quick">
                      <h3>Liberal Arts</h3>
                      <ul>
                        <li><Link className='qls'>Music Club</Link></li>
                        <li><Link className='qls'>Narthana Club</Link></li>
                        <li><Link className='qls'>Fusion Club</Link></li>
                        <li><Link className='qls'>Standup Comedy</Link></li>
                        <li><Link className='qls'>Muse Arts</Link></li>
                        <li><Link className='qls'>Dramatics</Link></li>
                        <li><Link className='qls'>Film Making Club</Link></li>
                        <li><Link className='qls'>Handicarfts & Embroidery</Link></li>
                        <li><Link className='qls'>KL Radio</Link></li>
                        <li><Link className='qls'>Muse Arts</Link></li>
                        <li><Link className='qls'>Literary</Link></li>
                      </ul>
                  </div>
                  <div className="quick-three quick">
                        <div className="quick-three-one">
                          <h3>Innovation and Incubation</h3>
                          <ul>
                            <li><Link className='qls'>ACIC</Link></li>
                            <li><Link className='qls'>Start in Collge</Link></li>
                            <li><Link className='qls'>Ideas Hub</Link></li>
                          </ul>
                        </div>
                  </div>
                  <div className="quick-four quick">
                  <h3>Society and Outreach</h3>
                          <ul>
                          <li><Link className='qls'>SVR</Link></li>
                            <li><Link className='qls'>CEA</Link></li>
                            <li><Link className='qls'>NSS</Link></li>
                            <li><Link className='qls'>NCC</Link></li>
                            <li><Link className='qls'>YRC</Link></li>
                            <li><Link className='qls'>Tourism Club</Link></li>
                            <li><Link className='qls'>Women Forum</Link></li>
                            <li><Link className='qls'>Electorial Literacy</Link></li>
                            <li><Link className='qls'>K L Talks</Link></li>
                          </ul>
                  </div>
            </div>
            <div className="quick-image">
              {/* <a href="https://www.kluniversity.in/"><img src="https://i.ibb.co/YhMKv90/sac-logo-68af69157709144b2811.png" alt="" /></a> */}

              <h1>Quick Links for activities at SAC</h1>
              <div className="explore">
                <Link className="exp">Deep Dive
                <span class="material-symbols-outlined">open_in_new</span></Link>
              </div>
            </div>
            </div>
      </div>
              </div>
            </div>


              <div className="dropdown2 ind">
                {/* <button class="dropbtn2">Dropdown</button> */}
                <Link className='links dropbtn2'>Student Governance <i id='dropd' class="fa fa-sort-desc" aria-hidden="true"></i></Link>
                <div class="dropdown-content2 dropdown-content1">
                 <Reveal>
                  <Link to='/Home/Leadership/StudentCouncil' className='stu-links'>Student Council<i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                 </Reveal>
                  <Reveal>
                    <Link to='/Home/Leadership/ExecutiveCouncil' className='stu-links'>Executive Council<i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                  </Reveal>
                 
                </div>
              </div>
              <div className="dropdown2 dropdown3 ind">
                {/* <button class="dropbtn2">Dropdown</button> */}
                <Link className='links dropbtn2'>Mentorship<i id='dropd' class="fa fa-sort-desc" aria-hidden="true"></i></Link>
                <div class="dropdown-content2 dropdown-content3">
                 <Reveal>
                 <Link to='/Home/Leadership/StudentCouncil' className='stu-links'>Student Mentors <i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                  <Link to='/Home/Leadership/StudentCouncil' className='stu-links'>Advisory Board<i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                  <Link to='/Home/Leadership/ExecutiveCouncil' className='stu-links'>Alumini Support<i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                  <Link to='/Home/Leadership/ExecutiveCouncil' className='stu-links'>Industry Connect <i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                  <Link to='/Home/Leadership/ExecutiveCouncil' className='stu-links'>Experts Panel<i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                 </Reveal>
                </div>
              </div>

              <div className="dropdown2 ind">
                {/* <button class="dropbtn2">Dropdown</button> */}
                <Link className='links dropbtn2'>Informal Learning<i id='dropd' class="fa fa-sort-desc" aria-hidden="true"></i></Link>
                <div className="dropdown-content2">
                 <Reveal>
                    <Link to='/Home/Leadership/StudentCouncil' className='stu-links'>Projects <i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                  <Link to='/Home/Leadership/StudentCouncil' className='stu-links'>Consulations <i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                  <Link to='/Home/Leadership/ExecutiveCouncil' className='stu-links'>Innovation <i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                  <Link to='/Home/Leadership/ExecutiveCouncil' className='stu-links'>Active learning <i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                  <Link to='/Home/Leadership/ExecutiveCouncil' className='stu-links'>360 Approach <i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                  <Link to='/Home/Leadership/ExecutiveCouncil' className='stu-links'>SAC-Ed <i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                  <Link to='/Home/Leadership/ExecutiveCouncil' className='stu-links'>Flip-learning <i class="fa fa-external-link open" aria-hidden="true"></i><i class="fa fa-external-link-square" aria-hidden="true"></i></Link>
                 </Reveal>
                </div>
              </div>
              <div className="ind">
                <Link className='links'>Blogs</Link>
              </div>
            </div>

            {/* <div class="dropdown">
              <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
                

              </div>
            </div> */}


            
          </div>
          <div className="post-index">
            <a href="mailto:studentactivitycenter.klu@gmail.com"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
          </div>
          
        </div>
        
      </div>

      
      
    </div>

  );
};

export default NavBar;
