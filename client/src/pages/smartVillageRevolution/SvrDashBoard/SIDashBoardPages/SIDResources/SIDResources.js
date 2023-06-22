import React from 'react';
import './SIDResources.css'; 


import { Link } from 'react-router-dom';

import SIDTopNav from '../../SIDashBoardComponents/SIDTopNav/SIDTopNav';

const SIDResources = () => {
  return (
    <div className='SIDResourcesComponent'>
      <SIDTopNav/>
        <div className="SIDResourcesContainer">
            <div className="SIDRes-heading">
              <span>Internship Resources</span>
            </div>
            <div className="SIDRes-main">
              <div className="SIDRes-one">
                <Link className='SIDRes-one-links'>Social Internship Overview</Link>
                <Link className='SIDRes-one-links'>Social Internship Project Ideas</Link>
                <Link className='SIDRes-one-links'>Social Internship Rubrics</Link>
                <Link className='SIDRes-one-links'>Social Internship Report Format</Link>
                <Link className='SIDRes-one-links'>Social Internship Cummulative Report Format</Link>
                <Link className='SIDRes-one-links'>Social Internship Pilot Study Reports</Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SIDResources