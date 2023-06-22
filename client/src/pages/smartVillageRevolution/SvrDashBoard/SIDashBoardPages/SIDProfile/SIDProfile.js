import React, { useState, useEffect, useContext } from 'react';
import './SIDProfile.css'; 

import SIDTopNav from '../../SIDashBoardComponents/SIDTopNav/SIDTopNav';
import { AuthContext } from '../../../../../auth-context/context-provider';


const SIDProfile = ({setAuth}) => {

    const [username, setUserName] = useState("");
    const { isAuthenticated } = useContext(AuthContext);
    console.log("state",isAuthenticated);

  async function getUserName() {
    try {

      const response = await fetch('http://localhost:8081/dashboard', {
        method: "GET",
        headers: { token: localStorage.token }
      });
      const parseRes = await response.json();
      setUserName(parseRes.username); 

    } catch(err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <div className='SIDProfileComponent'>
        <SIDTopNav/>
        <div className="SIDProfileContainer">
            <div className="SIDProfileHeading">
                <span>Student Profile</span>
            </div>
            <div className="SIDProfileMain">
                {/* <div className="SIDProfile-one">
                    <img src={avatar} alt="" />
                </div> */}
                <div className="SIDProfile-two">
                    <table>
                        <tr>
                            <td>Registered University ID:</td>
                            <td>{username}</td>
                        </tr>
                        <tr>
                            <td>Name as per University Records:</td>
                            <td>Deepak Reddy Gathpa</td>
                        </tr>
                        <tr>
                            <td>Primary Email ID:</td>
                            <td>2100031817@kluniversity.in</td>
                        </tr>
                        <tr>
                            <td>Personal Email ID: </td>
                            <td>deepakreddygathpa@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Mobile:</td>
                            <td>6304181863</td>
                        </tr>
                        <tr>
                            <td>Alternate Mobile: </td>
                            <td>8125331337</td>
                        </tr>
                        <tr>
                            <td>Branch: </td>
                            <td>Computer Science and Education</td>
                        </tr>
                        <tr>
                            <td>Gender: </td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <td>Field of interest:</td>
                            <td>Smart Village Revolution</td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SIDProfile