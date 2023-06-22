import React from 'react';
import './ErpTopNav.css'; 

import newSacLogo2 from '../../../Assets/Logos/newSacLogo2.png'; 

import { Link } from 'react-router-dom';

const ErpTopNav = () => {
  return (
    <div className='ErpTopNavComponent'>
        <div className="ErpTopNavContainer">
            <div className="ErpTopNavMain">
                <div className="ErpTopNavMain-one">
                   <Link to='/Home'>
                    <img src={newSacLogo2} alt="" />
                   </Link>
                </div>
                <div className="ErpTopNavMain-two">
                   <div className="ErpTopNavMain-two-inner">
                      <h3>Koneru Lakshmaiah Education Foundation's</h3>
                      <h1>Student Activity Center - Student Central</h1>
                   </div>
                </div>
                <div className="ErpTopNavMain-three">
                    <p>2100012345 <br />
                    <hr />
                      Deepak Reddy Gathpa
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ErpTopNav