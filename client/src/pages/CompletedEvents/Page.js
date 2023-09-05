import React from 'react';
import './Page.css';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';

import CfcPoster from '../../Assets/CfcPoster.jpg';

const Page = () => {
  return (
    <div className='CompletedEventsComponent'>
        <div className="CompletedEventsContainer">
            <div className="CompletedEvents-header">
                <div className="CompletedEvents-header-in">
                    <h1>Completed Events and their Reports</h1>
                </div>
            </div>
            <div className="CompletedEvents-one">
                <div className="CompletedEvents-one-in">
                    <table>
                        <tr>
                            <th>Sno.</th>
                            <th>Event Name</th>
                            <th>Poster</th>
                            <th>Date</th>
                            <th>Student Coordinator</th>
                            <th>Faculty Coordinator</th>
                            <th>Event Report</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>CodeforCause Hackathon</td>
                            <td><img src={CfcPoster} alt="" /></td>
                            <td>28-09-2023</td>
                            <td>Deepak Reddy Gathpa</td>
                            <td>Ravi Babu K</td>
                            <td><Link>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>CodeforCause Hackathon</td>
                            <td><img src={CfcPoster} alt="" /></td>
                            <td>28-09-2023</td>
                            <td>Deepak Reddy Gathpa</td>
                            <td>Ravi Babu K</td>
                            <td><Link>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>CodeforCause Hackathon</td>
                            <td><img src={CfcPoster} alt="" /></td>
                            <td>28-09-2023</td>
                            <td>Deepak Reddy Gathpa</td>
                            <td>Ravi Babu K</td>
                            <td><Link>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>CodeforCause Hackathon</td>
                            <td><img src={CfcPoster} alt="" /></td>
                            <td>28-09-2023</td>
                            <td>Deepak Reddy Gathpa</td>
                            <td>Ravi Babu K</td>
                            <td><Link>Click Here</Link></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>CodeforCause Hackathon</td>
                            <td><img src={CfcPoster} alt="" /></td>
                            <td>28-09-2023</td>
                            <td>Deepak Reddy Gathpa</td>
                            <td>Ravi Babu K</td>
                            <td><Link>Click Here</Link></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Page