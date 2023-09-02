import React from 'react';

import ZeroOneClubLogo from '../../../Assets/Logos/ZeroOneClubLogo.png';


const page = () => {
  return (
    <div>
        <div className="clubs ZeroOne">
          <div className="clubs-in">
            <div className="clubs-nav">
              <div className="clubs-nav-in">
                <div className="clubs-nav-in-one">
                    <img src={ZeroOneClubLogo} alt="" />
                </div>
                <div className="clubs-nav-in-two">

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page