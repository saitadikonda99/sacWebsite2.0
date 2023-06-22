import React from 'react';
import './SIDashBoardApp.css'; 



import {Routes, Route} from 'react-router-dom'; 
import SIDashBoardHome from './SIDashBoardPages/SIDashBoardHome/SIDashBoardHome';

import SIDSideNav from './SIDashBoardComponents/SIDSideNav/SIDSideNav';
import SIDProfile from './SIDashBoardPages/SIDProfile/SIDProfile';
import SIDashBoardAttendance from './SIDashBoardPages/SIDashBoardAttendance/SIDashBoardAttendance';
import SIDSubmissions from './SIDashBoardPages/SIDSubmissions/SIDSubmissions';
import SIDResources from './SIDashBoardPages/SIDResources/SIDResources';
import SIDTransport from './SIDashBoardPages/SIDTransport/SIDTransport';
import SIDTimetable from './SIDashBoardPages/SIDTimetable/SIDTimetable';
import SIDScore from './SIDashBoardPages/SIDScore/SIDScore';
import SIDFeedback from './SIDashBoardPages/SIDFeedback/SIDFeedback';
import SIDTicketing from './SIDashBoardPages/SIDTicketing/SIDTicketing';

import SIDashBoardLogin from './SIDashBoardLogin';

const SIDashBoardApp = () => {


  
  return (
    <div className='SIDashBoardAppComponent'>
        <div className="SIDashBoardAppContainer">
            <div className="SIDashBoardAppMain">
            <SIDSideNav />
            <Routes>
              <Route path='/' element={<SIDashBoardHome/>}></Route>
              <Route path='/siprofile' element={<SIDProfile/>}></Route>
              <Route path='/siattendance' element={<SIDashBoardAttendance/>}></Route>
              <Route path='/sisubmissions' element={<SIDSubmissions/>}></Route>
              <Route path='/siresources' element={<SIDResources/>}></Route>
              <Route path='/sitransport' element={<SIDTransport/>}></Route>
              <Route path='/sitimetable' element={<SIDTimetable/>}></Route>
              <Route path='/siscore' element={<SIDScore/>}></Route>
              <Route path='/sidfeedback' element={<SIDFeedback/>}></Route>
              <Route path='/sidticketing' element={<SIDTicketing/>}></Route>
            </Routes>
            </div>
        </div>
    </div>
  )
}

export default SIDashBoardApp