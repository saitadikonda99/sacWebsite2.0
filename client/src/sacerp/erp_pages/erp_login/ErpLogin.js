import React from 'react';
import './ErpLogin.css';

import { Link } from 'react-router-dom';

import ErpTopNav from '../../erp_components/topnav/ErpTopNav';

import Footer from '../../../components/Footer/Footer';


const ErpLogin = () => {
  return (
    <div className='ErpLoginComponent'>
        <div className="ErpLoginContainer">
            <ErpTopNav/>
            <div className="ErpLoginMain">
                <div className="ErpLoginOne">
                    <h4>Welcome to Student-Parent portal of Koneru Lakshmaiah Education Foundation, Student Activity Center.</h4>
                </div>
                <div className="ErpLoginTwo">
                   <div className="ErpLoginTwo-inner">
                        <div className="ErpLoginTwo-one">
                            <Link to='/home/erp/' className='erplogin-link'>Student Login</Link>
                        </div>
                        <div className="ErpLoginTwo-two">
                            <Link className='erplogin-link'>Staff Login</Link>
                        </div>
                        <div className="ErpLoginTwo-three">
                            <Link className='erplogin-link'>Parent Login</Link>
                        </div>
                   </div>
                </div>
                <div className="ErpLoginThree">
                    <div className="ErpLoginThree-inner">
                        <div className="ErpLoginThree-one">
                            <h4>KLEF SACErp Student-Parent Portal Features:</h4>
                            <p>Student - Parent portal is the front end web based application that brings all the stake holders – Student, Parent, Teacher - into a single platform.</p>
                        </div>

                        <div className="ErpLoginThree-two">
                            <h5>Features:</h5>
                            <ul>
                                <li>View Alerts from the Institution</li>
                                <li>View Events</li>
                                <li>View Notifications like forthcoming exams, exam results etc.</li>
                                <li>View Subject wise/Slot wise attendance</li>
                                <li>View Timetable information</li>
                                <li>Online fee payment</li>
                                <li>View Transportation/Hostel details</li>
                                <li>View profile information</li>
                                <li>Give feedback to teachers</li>
                                <li>Search library book availability</li>
                                <li>View Library transactions</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ErpLoginFour">
                    <div className="ErpLoginFour-inner">
                        <p>For Student-Parent portal assistance send an email to letters@hindustanuniv.ac.in <br />
Include your name and admission number of student and a description of the problem of your request.</p>
                    </div>
                    <div className="ErpLoginFour-one">
                        <p>Instructions to Parent: - <br />
                        User ID - pXXXXXXXX (X is the 8-digit admission number of your Ward) <br />
                        Password - Date of birth of your ward in DDMMYYYY. (E.g. 15081947) <br />
                        First time login [You must change your password in My Account – Change  Password]</p>
                    </div>
                    <div className="ErpLoginFour-two">
                    <p>Instructions to Student: - <br />
                    User ID - XXXXXXXX (X is the 8-digit admission number) <br />
                    Password - Date of birth in DDMMYYYY. (E.g. 15081947) <br />
                    First time login [You must change your password in My Account – Change Password] <br /></p>
                    </div>
                </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ErpLogin