import React from 'react';
import './page.css';
import SHS_two from '../../Assets/SHS_two.png';
import { Link } from 'react-router-dom';

import Footer from '../../components/home/Footer/Footer';


const page = () => {
  return (
    <div className='shscomponent'>
    <div className='HomeNavComponent'>
          <div className="HomeNavContainer">
            <div className="HomeNavLogo">
              <div className="HomeNavLogo-in">
                <Link className='HomeNavLogo-in-link' to='/'><h1>Student Activity Center</h1></Link>
              </div>
            </div>
            <div className="HomeNavIndex">
              <div className="HomeNavIndex-in">
                <Link className='HomeNavIndex-in-link' to='/'>Back to Home</Link>
                <Link className='HomeNavIndex-in-link' to='/'>Explore Clubs</Link>
                <Link className='HomeNavIndex-in-link' to='/gallery'>Gallery</Link>
                <Link className='HomeNavIndex-in-link' to='/events'>Events</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="shscontainer">
            <div className="shs-one">
                <img src={SHS_two} alt="" />
            </div>
            <div className="shs-two">
                <div className="shs-two-in">
                   <div className="shs-two-in-header">
                        <h1>List of Locations for the Swachhata Hi Seva - Cleanlines Drive</h1>
                   </div>
                    <div className="shs-two-table">
                        <table>
                            <tr>
                                <th>S.no</th>
                                <th>Location/Place/Area</th>
                                <th>Registration Link</th>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Vijayawada Railway Station</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>Vijayawada Airport - Gannavaram Surroundings</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>Paturu Road – National Highway </td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>Krishna River Bank</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>05</td>
                                <td>Sitanagaram Ghat</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>06</td>
                                <td>Ramachandrapuram Village</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>07</td>
                                <td>Tadepalli PHC sideway slums</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>08</td>
                                <td>Manipal Hospital – Underpass</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>09</td>
                                <td>Flower Market beside the Municipal Office</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>    
                                <td>10</td>
                                <td>Kolanakonda Backlanes</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Sitanagaram Temples</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>MPDO Nulakapeta</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Undavalli Caves</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Vijayadwada Bus Stand</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Butterfly Park – Mulapadu</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Chinna Jeeyar Swami Gaushala</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Gandhi Hill</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>Peddavadlapudi</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>Ferry Ibrahimpatnam</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>Mangalgiri Auto Nagar</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td>Govt. Hospital - Near Railway Station</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>22</td>
                                <td>Revendrapadu - Anganwadis</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>23</td>
                                <td>Chirravuru – Govt. School & Surroundings</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                            <tr>
                                <td>24</td>
                                <td>Murusmalli Thanda – Mylavaram  (200 Students)</td>
                                <td> <Link
                                    className='registration-link-for-events'
                                    to='https://forms.gle/CbYzqcq66RtrjXGR8'
                                    target='_blank'
                                >Register</Link></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default page