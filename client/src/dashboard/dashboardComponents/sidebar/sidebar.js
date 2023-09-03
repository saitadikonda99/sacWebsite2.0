import React from 'react';
import './sidebar.css';

import {Link, Outlet, NavLink} from 'react-router-dom'; 


import { GrOverview } from "react-icons/gr";
import { IoTodayOutline } from "react-icons/io5";
import {MdOutlineExplore } from "react-icons/md";

const routes = [
  {
    path: '/',
    name: "Overview",
  },
  {
    path: '/club-analytics',
    name: "Clubs Analytics",
  },
  {
    path: '/gallery',
    name: "Photo Gallery",
  },
  {
    path: '/socialmedia',
    name: "Social Media Feed",
  }

]; 

const sidebar = ({children}) => {
  return (
    <div className='sidebarcomponent'>
        <div className="sidebar-header">
          <h1>Student Activity Center Dashboard</h1>
          <p>KLEF</p>
        </div>

        <div className="sidebarcontainer">
              <section className='routes'>
                {routes.map((route) => (
                  <div className="whole">
                    <NavLink to={route.path} key={route.name} className='link'>
                        <div className="icons">
                          {route.icon}
                        </div>
                        <div className="link_text">{route.name}</div>
                    </NavLink>
                  </div>
                ))}

              </section>
              <main>{ children }</main>
              <Outlet></Outlet>
        </div>

        <div className="designedby">
          <p>This site is Engineered by  <br /><span>Deepak Reddy Gathpa</span> <span id='idno'>(2100031817)</span><br />Chief Technology Officer | SAC</p>
        </div>
    </div>
  )
}

export default sidebar