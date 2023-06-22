import './App.css';
import Home from '../src/pages/Home/Home';
import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';



import StudentCouncil from './pages/Leadership/JS/StudentCouncil';
import ExecutiveCouncil from './pages/Leadership/JS/ExecutiveCouncil';
import AdvisoryBoard from './pages/Leadership/JS/AdvisoryBoard';
import ActivitiesHome from './pages/Activities/ActivitiesHome';
import Technology from './pages/Activities/Technology/Technology';
import Liberal from './pages/Activities/Liberal/Liberal';
import Social from './pages/Activities/Social/Social';
import Society from './pages/Activities/Society/Society';

import SvrHome from './pages/smartVillageRevolution/SvrHome/SvrHome';
import SvrLogin from './pages/smartVillageRevolution/SvrLogin/SvrLogin';
import SvrRegister from './pages/smartVillageRevolution/SvrRegister/SvrRegister';
import Confirm from './pages/smartVillageRevolution/SvrRegister/Confirm';
import Calendar from './pages/Calendar/Calendar';
import StudentDetails from './pages/StudentDetails/StudentDetails';
import Gallery from './pages/Gallery/Gallery';
import FacultyRegister from './pages/smartVillageRevolution/SvrRegister/FacultyRegister';
import SvrAuthenticate from './pages/smartVillageRevolution/SvrRegister/SvrAuthenticate';
import CodingSchool from './pages/clubs/codingschool/CodingSchool';
import RegisterSuccess from '../src/pages/smartVillageRevolution/SvrRegister/RegisterSuccess';
import RegisterFailure from '../src/pages/smartVillageRevolution/SvrRegister/RegisterFailure';



import StudentGraphs from '../src/pages/StudentDetails/StudentGraphs';


import ErpApp from '../src/sacerp/ErpApp';
import ErpLogin from './sacerp/erp_pages/erp_login/ErpLogin';

import SIDashBoardApp from './pages/smartVillageRevolution/SvrDashBoard/SIDashBoardApp';
import SIDashBoardLogin from './pages/smartVillageRevolution/SvrDashBoard/SIDashBoardLogin';
import { AuthContext, useAuth } from './auth-context/context-provider';



function App() {
  const [isLoading, setLoading] = useState(true);
  const { user, verifyAuth } = useAuth()

  async function isAuth() {

    try {

      const response = await fetch("http://localhost:8081/auth/is-verified", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();
      console.log(parseRes);


      // parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    verifyAuth();
  }, [])

  function someRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 4000));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path='/Home/Leadership/StudentCouncil' element={<StudentCouncil />} />
        <Route path='/Home/Leadership/ExecutiveCouncil' element={<ExecutiveCouncil />} />
        <Route path='/Home/Leadership/AdvisoryBoard' element={<AdvisoryBoard />} />
        <Route path='/Home/ActivitiesHome' element={<ActivitiesHome />} />
        <Route path='/Home/ActivitiesHome/Technology' element={<Technology />} />
        <Route path='/Home/ActivitiesHome/Liberal' element={<Liberal />} />
        <Route path='/Home/ActivitiesHome/Social' element={<Social />} />
        <Route path='/Home/ActivitiesHome/Society' element={<Society />} />

        <Route path='/Home/SvrHome' element={<SvrHome />} />
        <Route path='/Home/SvrHome/SvrLogin' element={<SvrLogin />} />
        <Route path='/Home/SocialInternship/Register' element={<SvrRegister />} />
        <Route path='/Home/SocialInternship/confirm' element={<Confirm />} />
        <Route path='/Home/Calendar' element={<Calendar />} />
        <Route path='/Home/StudentDetails' element={<StudentDetails />} />
        <Route path='/home/studentdetails/graphicalview' element={<StudentGraphs />} />



        <Route path='/Home/Gallery' element={<Gallery />} />
        <Route path='/Home/SocialInternship/FacultyRegister' element={<FacultyRegister />} />
        <Route path='/Home/SocialInternship/SvrAuthenticate' element={<SvrAuthenticate />} />
        <Route path='/Home/clubs/CodingSchool' element={<CodingSchool />} />
        <Route path='/Home/SocialInternship/RegisterSuccess' element={<RegisterSuccess />} />
        <Route path='/Home/SocialInternship/RegisterFailure' element={<RegisterFailure />} />
        <Route path='/home/erp/*' element={<ErpApp />}></Route>
        <Route path='/home/erplogin' element={<ErpLogin />}></Route>

        {/* <Route path='/home/internlogin' element={<SIDashBoardLogin/>}></Route>
        <Route path='/home/internship/*' element={<SIDashBoardApp/>}></Route> */}


        {/* <Route path='/home/internlogin' render={(props)=> !isAuthenticated ? <SIDashBoardLogin {...props} setAuth={setAuth} /> : <Navigate to='/home/internship/*' />}></Route> */}

        {/* <Route path='/home/internship' render={(props)=> isAuthenticated ? <SIDashBoardApp {...props} setAuth={setAuth}/> : <Navigate to='/home/internlogin' />}></Route> */}

        {/* <Route path="/home/internlogin" element={<SIDashBoardLogin setAuth={setAuth} />} /> */}

        <Route
          path="/home/internlogin"
          element={
            user ? (
              <Navigate to="/home/internship/" replace />
            ) : (
              <SIDashBoardLogin />
            )
          }
        />

        <Route
          path="/home/internship/*"
          element={user ? <SIDashBoardApp /> : <Navigate to="/home/internlogin" />}
        />

        <Route path='/temp' element={<temp />}></Route>
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
