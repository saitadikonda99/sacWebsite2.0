import React from 'react';
import './SIDScore.css'; 

import SIDTopNav from '../../SIDashBoardComponents/SIDTopNav/SIDTopNav';

const SIDScore = () => {
  return (
    <div className='SIDScoreComponent'>
      <SIDTopNav/>
        <div className="SIDScoreContainer">
            <div className="SIDS-heading">
              <span>Internship Score Card</span>
            </div>
            <div className="SIDS-main">
              <div className="SIDS-one">
                <table>
                  <th>sno</th>
                  <th>Topic</th>
                  <th>Max Marks</th>
                  <th>Marks/Score</th>
                  <tr>
                    <td>1</td>
                    <td>Report Day 2</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Report Day 3</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Report Day 4</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Report Day 5</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Report Day 6</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Report Day 7</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Report Day 8</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Report Day 9</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Report Day 10</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Cumulative Report</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>Total Score</td>
                    <td>100</td>
                    <td>100</td>
                  </tr>
                </table>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SIDScore