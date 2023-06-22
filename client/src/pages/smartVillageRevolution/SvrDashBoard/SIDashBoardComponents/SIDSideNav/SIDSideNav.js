
import { Link, Outlet } from 'react-router-dom';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Home, Person } from '@material-ui/icons';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ArticleIcon from '@mui/icons-material/Article';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GradingIcon from '@mui/icons-material/Grading';
import FeedbackIcon from '@mui/icons-material/Feedback';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';


import newSacLogo from '../../../../../Assets/Logos/newSacLogo.png';

import './SIDSideNav.css';

const routes = [

    {
        path: '/home/internship/',
        name: "Home",
        icon: <Home />,
    },
    {
        path: '/home/internship/siprofile',
        name: "Profile",
        icon: <Person />,
    },
    {
        path: '/home/internship/siattendance',
        name: "Attendance",
        icon: <CheckBoxIcon/>
    },
    {
        path: '/home/internship/sisubmissions',
        name: "Submissions",
        icon: <AssignmentTurnedInIcon/>
    },
    {
        path: '/home/internship/siresources',
        name: "Internship Resources",
        icon: <ArticleIcon/>
    },
    {
        path: '/home/internship/sitransport',
        name: "Transport",
        icon: <DirectionsBusIcon/>
    },
    {
        path: '/home/internship/sitimetable',
        name: "Timetable",
        icon: <CalendarMonthIcon/>
    },
    {
        path: '/home/internship/siscore',
        name: "Internship Score",
        icon: <GradingIcon/>
    },
    {
        path: '/home/internship/sidfeedback',
        name: "Feedback",
        icon: <FeedbackIcon/>
    },
    {
        path: '/home/internship/sidticketing',
        name: "Ticketing Support",
        icon: <HelpCenterIcon/>
    }
];



const SIDSideNav = ({ children }) => {
  return (
    <div className='SIDSideNavComponent'>

            <div className="presection">
                <img src={newSacLogo} alt="" />
            </div>
            <section className='routes'>
                { routes.map((route)=>(
                  <div className="whole">
                      <NavLink to={route.path} key={route.name} className='link'>
                        <div className="link_text">
                            <div className="link_icons">
                                {route.icon}
                            </div>
                            <div className="link_names">
                                {route.name}
                            </div>
                        </div>
                        </NavLink>
                  </div>
                )) }
            </section>
            <main>{ children }</main>

            <div className="designedby">
                <span>Designed and Developed By Deepak Reddy Gathpa | The School of Coding</span> 
            </div>
            <Outlet></Outlet>
    </div>
  )
}

export default SIDSideNav