import React from 'react';
import './SIDashBoardAttendance.css';

import SIDTopNav from '../../SIDashBoardComponents/SIDTopNav/SIDTopNav';

const SIDashBoardAttendance = () => {
  return (
    <div className='SIDashBoardAttendanceComponent'>
        <SIDTopNav/>
        <div className="SIDashBoardAttendanceContainer">
            <div className="SIDA-heading">
                <span>Attendance Report</span>
            </div>
            <div className="SIDA-main">
              <div className="SIDA-main-one">
                <table>
                  <th>Sno</th>
                  <th>Date</th>
                  <th>Session 01</th>
                  <th>Session 02</th>
                  <th>Day-final</th>

                  <tr>
                    <td>01</td>
                    <td>11-05-2023</td>
                    <td>Present</td>
                    <td>Absent</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>12-05-2023</td>
                    <td>Present</td>
                    <td>Absent</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>13-05-2023</td>
                    <td>Present</td>
                    <td>Absent</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>14-05-2023</td>
                    <td>Present</td>
                    <td>Absent</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>15-05-2023</td>
                    <td>Present</td>
                    <td>Absent</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>16-05-2023</td>
                    <td>Present</td>
                    <td>Absent</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>07</td>
                    <td>17-05-2023</td>
                    <td>Present</td>
                    <td>Absent</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>08</td>
                    <td>18-05-2023</td>
                    <td>Present</td>
                    <td>Absent</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>09</td>
                    <td>19-05-2023</td>
                    <td>Present</td>
                    <td>Absent</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>20-05-2023</td>
                    <td>Present</td>
                    <td>Absent</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td id='attendance-tot' colSpan="4"></td>
                    <td>100%</td>
                  </tr>
                </table>

              </div>
              <div className="SIDA-main-two">

              </div>
              
            </div>
        </div>
    </div>
  )
}

export default SIDashBoardAttendance