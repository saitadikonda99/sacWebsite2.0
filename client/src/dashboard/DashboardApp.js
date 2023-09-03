import React from 'react';
import './DashboardApp.css';

import {Routes, Route} from 'react-router-dom';

import Sidebar from './dashboardComponents/sidebar/sidebar';
import DashboardHome from '../dashboard/dashboardPages/dashboardHome/Page';



const DashboardApp = () => {
  return (
    <div className='DashboardAppComponent'>
        <div className="sidebarcomp">
            <Sidebar />
        </div>
        <div className="mainbarcomp">
            <Routes>
                <Route path="/" element={<DashboardHome />} />
            </Routes>
        </div>
    </div>
  )
}

export default DashboardApp