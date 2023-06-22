import React from 'react';
import './SIDTimetable.css';


import SIDTopNav from '../../SIDashBoardComponents/SIDTopNav/SIDTopNav';

const SIDTimetable = () => {
  return (
    <div className='SIDTimetableComponent'>
      <SIDTopNav/>
        <div className="SIDTimetableContainer">
            <div className="SIDTT-heading">
              <span>Internship Timetable Tracker</span>
            </div>
            <div className="SIDTT-main">
              <div className="SIDTT-one">
                  <table>
                    <th>Sno</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Activity</th>
                    <th>Venue</th>

                    <tr>
                      <td>1</td>
                      <td>11-05-2023</td>
                      <td>09:00 AM</td>
                      <td>11:00 PM</td>
                      <td>Brainstroming</td>
                      <td>Campus</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>11-05-2023</td>
                      <td>09:00 AM</td>
                      <td>11:00 PM</td>
                      <td>Brainstroming</td>
                      <td>Campus</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>11-05-2023</td>
                      <td>09:00 AM</td>
                      <td>11:00 PM</td>
                      <td>Brainstroming</td>
                      <td>Campus</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>11-05-2023</td>
                      <td>09:00 AM</td>
                      <td>11:00 PM</td>
                      <td>Brainstroming</td>
                      <td>Campus</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>11-05-2023</td>
                      <td>09:00 AM</td>
                      <td>11:00 PM</td>
                      <td>Brainstroming</td>
                      <td>Campus</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>11-05-2023</td>
                      <td>09:00 AM</td>
                      <td>11:00 PM</td>
                      <td>Brainstroming</td>
                      <td>Campus</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>11-05-2023</td>
                      <td>09:00 AM</td>
                      <td>11:00 PM</td>
                      <td>Brainstroming</td>
                      <td>Campus</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>11-05-2023</td>
                      <td>09:00 AM</td>
                      <td>11:00 PM</td>
                      <td>Brainstroming</td>
                      <td>Campus</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>11-05-2023</td>
                      <td>09:00 AM</td>
                      <td>11:00 PM</td>
                      <td>Brainstroming</td>
                      <td>Campus</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>11-05-2023</td>
                      <td>09:00 AM</td>
                      <td>11:00 PM</td>
                      <td>Brainstroming</td>
                      <td>Campus</td>
                    </tr>
                  </table>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SIDTimetable