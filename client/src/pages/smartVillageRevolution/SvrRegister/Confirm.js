import React, { useEffect } from 'react';
import '../../../pages/smartVillageRevolution/SvrRegister/Confirm.css'; 

import teacher from '../../../Assets/svrImages/teacher.png'; 
import student from '../../../Assets/svrImages/student.png'; 
import { Link } from 'react-router-dom'; 

function Confirm () {

  useEffect(() => {
    document.title = 'Confirm | KLU SAC';
  }, []);

  return (
    <div className="confirmComponent">
      <div className="confirmContainer">
        <div className="confirmHeading">
          <h1>How would you like to register?</h1>
        </div>
        <div className="confirmPost">
          <Link to='/Home/SocialInternship/FacultyRegister' className='confirmlinks'>
            <div className="confirmPost-one">
                <div className="confirmPost-one-img">
                  <img src={teacher} alt="" />
                </div>
                <div className="confirmPost-one-text">
                  <h1>Register as Faculty</h1>
                </div>
            </div>
          </Link>

          <Link to='/Home/SocialInternship/Register' className='confirmlinks'>
            <div className="confirmPost-two">
              <div className="confirmPost-two-img">
                <img src={student} alt="" />
              </div>
              <div className="confirmPost-two-text">
                <h1>Register as Student</h1>    
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Confirm
