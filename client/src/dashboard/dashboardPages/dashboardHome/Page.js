import React from 'react';

import './Page.css'; 

// import OverviewComponentOne from '../../../Dashboard/dashboard-components/overviewComponents/overviewComponentOne/Page';
// import OverviewComponentTwo from '../../../Dashboard/dashboard-components/overviewComponents/overviewComponentTwo/Page'; 
// import OverviewComponentThree from '../../../Dashboard/dashboard-components/overviewComponents/overviewComponentThree/Page';

import OverviewComponentOne from '../../dashboardComponents/overviewComponents/overviewComponentOne/Page';
import OverviewComponentTwo from '../../dashboardComponents/overviewComponents/overviewComponentTwo/Page';
import OverviewComponentThree from '../../dashboardComponents/overviewComponents/overviewComponentThree/Page';

const page = () => {
  
  return (
    <div className='dashboardHome commonCss'>
      <div className="dashboardHomeContainer">
        <OverviewComponentOne/>
        <OverviewComponentTwo/>
        <OverviewComponentThree/>
      </div>
    </div>
  )
}

export default page