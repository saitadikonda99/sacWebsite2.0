import React from 'react';
import './SvrAuthenticate.css'; 
import newSacLogo from '../../../Assets/Logos/newSacLogo.png';



const SvrAuthenticate = () => {
  return (
    <div className='SvrAuthenticateContainer'>
      <div className="SvrAuthenticateContainer">
       <div className="SvrAuth-image">
          <img src={newSacLogo} alt="" />
       </div>
       <div className="SvrAuth-heading">
        <h1>Please confirm your identity before your register for the program</h1>
       </div>
      </div>
    </div>
  )
}

export default SvrAuthenticate
