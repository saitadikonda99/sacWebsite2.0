import React from 'react';
import './SIDFeedback.css'; 

import SIDTopNav from '../../SIDashBoardComponents/SIDTopNav/SIDTopNav';

const SIDFeedback = () => {
  return (
    <div className='SIDFeedbackComponent'>
      <SIDTopNav/>
        <div className="SIDFeedbackContainer">
            <div className="SIDFed-heading">
              <span>Social Internship Feedback</span>
            </div>
            <div className="SIDFed-main">
              <span>This page is yet to be live</span>
            </div>
        </div>
    </div>
  )
}

export default SIDFeedback