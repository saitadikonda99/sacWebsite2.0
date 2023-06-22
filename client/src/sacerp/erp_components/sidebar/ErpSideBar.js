
import { Link, Outlet } from 'react-router-dom';
import React from 'react'
import { NavLink } from 'react-router-dom';

import newSacLogo2 from '../../../Assets/Logos/newSacLogo2.png'; 
import './ErpSideBar.css'; 

const routes = [

    {
        path: '/home/erp/',
        name: "Home"
    },
    {
        path: '/home/erp/profile',
        name: "Profile"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Club Course Registration"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Student Points"
    },
    {
        path: '/home/erp/studentpoints',
        name: "My Performance"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Attendance Flexibility"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Club Timetable"
    },
    {
        path: '/home/erp/studentpoints',
        name: "SAC Office"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Feedback"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Home"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Profile"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Club Course Registration"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Student Points"
    },
    {
        path: '/home/erp/studentpoints',
        name: "My Performance"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Attendance Flexibility"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Club Timetable"
    },
    {
        path: '/home/erp/studentpoints',
        name: "SAC Office"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Feedback"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Home"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Profile"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Club Course Registration"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Student Points"
    },
    {
        path: '/home/erp/studentpoints',
        name: "My Performance"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Attendance Flexibility"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Club Timetable"
    },
    {
        path: '/home/erp/studentpoints',
        name: "SAC Office"
    },
    {
        path: '/home/erp/studentpoints',
        name: "Feedback"
    }

];



const ErpSideBar = ({ children }) => {
  return (
    <div className='ErpSideBarComponent'>

            <section className='routes'>
                { routes.map((route)=>(
                  <div className="whole">
                      <NavLink to={route.path} key={route.name} className='link'>
                        <div className="link_text">{route.name}</div>
                        <i class="fa fa-angle-double-right" aria-hidden="true">
                        </i>

                        </NavLink>
                  </div>
                )) }
            </section>
            <main>{ children }</main>
            <Outlet></Outlet>
    </div>
  )
}

export default ErpSideBar