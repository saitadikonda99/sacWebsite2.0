import React from 'react'; 
import './ErpApp.css'; 


import ErpTopNav from '../sacerp/erp_components/topnav/ErpTopNav'; 
import ErpSideBar from '../sacerp/erp_components/sidebar/ErpSideBar'; 
import Footer from '../components/Footer/Footer'; 
import {Routes, Route } from 'react-router-dom';



import ErpHome from './erp_pages/erp_home/ErpHome';
import ErpStudentPoints from '../sacerp/erp_pages/erp_studentPoints/ErpStudentPoints'; 
import ErpProfile from '../sacerp/erp_pages/erp_profile/ErpProfile'; 

const ErpApp = () => {
  return (
    <div className='ErpAppComponent'>
      <div className="ErpAppContainer">
      <ErpTopNav/>
      <div className="ErpAppMain">
          <ErpSideBar>
          </ErpSideBar>
          <Routes>
                <Route path='/' element={<ErpHome/>}></Route>
                <Route path='/studentpoints' element={<ErpStudentPoints/>}></Route>
               <Route path='/profile' element={<ErpProfile/>}></Route>
              </Routes>
      </div>
      <Footer/>
      </div>
      
    </div>
  )
}

export default ErpApp