import React from 'react';
import './SIDSubmissions.css'; 

import { Link } from 'react-router-dom';

import SIDTopNav from '../../SIDashBoardComponents/SIDTopNav/SIDTopNav';

const SIDSubmissions = () => {
  return (
    <div className='SIDSubmissionsComponent'>
      <SIDTopNav/>
        <div className="SIDSubmissionsContainer">
            <div className="SIDSub-heading">
              <span>Submissions</span>
            </div>
            <div className="SIDSub-main">
              <div className="SIDSub-one">
                <Link className='SIDSub-links'>
                  <div className="SIDSub-one-one">
                    <span>Daily Report Generator</span>
                  </div>
                </Link>
                <Link className='SIDSub-links'>
                  <div className="SIDSub-one-one">
                    <span>Cumulative Report Generator</span>
                  </div>
                </Link>
              </div>
              <div className="SIDSub-two">
                <div className="SIDSub-two-one">
                  <div className="SIDSub-two-one-heading">
                    <span>Daily Wise Report Submissions</span>
                  </div>
                  <div className="SIDSub-two-one-main">
                        <table>
                          <th>Sno</th>
                          <th>Report</th>
                          <th>Status</th>

                          <tr>
                            <td>1</td>
                            <td>Day 1 Report</td>
                            <td>Submitted</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Day 2 Report</td>
                            <td>Submitted</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Day 3 Report</td>
                            <td>Submitted</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Day 4 Report</td>
                            <td>Submitted</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Day 5 Report</td>
                            <td>Submitted</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Day 6 Report</td>
                            <td>Submitted</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>Day 7 Report</td>
                            <td>Submitted</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>Day 8 Report</td>
                            <td>Submitted</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>Day 9 Report</td>
                            <td>Submitted</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>Day 10 Report</td>
                            <td>Submitted</td>
                          </tr>
                        </table>
                  </div>
                </div>
                <div className="SIDSub-two-two">
                  <div className="SIDSub-two-two-heading">
                    <span>Internship Cummulative Report</span>
                  </div>
                  <div className="SIDSub-two-two-main">
                    <table>
                          <th>Sno</th>
                          <th>Report</th>
                          <th>Status</th>

                          <tr>
                            <td>1</td>
                            <td>Internship Cumulative Report</td>
                            <td>Submitted</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Final Presentation</td>
                            <td>Submitted</td>
                          </tr>

                    </table>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SIDSubmissions