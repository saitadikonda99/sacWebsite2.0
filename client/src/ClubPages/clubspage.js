import React from 'react';
import './clubspage.css';

import { Link } from 'react-scroll';

import Footer from '../components/Footer/Footer';

import StudentClubsImage from '../Assets/StudentClubsImage.jpeg';
import ClubsPageDemo from '../Assets/ClubsPageDemo.jpeg';


import { MdOutlineOpenInNew } from "react-icons/md";

const clubspage = () => {
  return (
    <div className='clubspageComponent'>
        <div className="clubspageContainer">
            <div className="clubspage-header">
                <div className="clubspage-header-in">
                    <h1>Student Clubs</h1>
                    <p>From Nobel Prize winners to undergraduates, all members of the Stanford community are engaged in the creation of knowledge.</p>
                </div>
            </div>
            <div className="clubspage-one">
                <img src={StudentClubsImage} alt="" />
            </div>
            <div className="clubspage-two">
                <div className="clubspage-two-in">
                    <div className="clubspage-two-in-comps">
                        <h1>5,302</h1>
                        <p>Actively Engaged Members</p>
                    </div>
                    <div className="clubspage-two-in-comps">
                        <h1>521</h1>
                        <p>Peer Mentoring Students</p>
                    </div>
                    <div className="clubspage-two-in-comps">
                        <h1>791</h1>
                        <p>Projects and Research Works</p>
                    </div>
                </div>
            </div>
            <div className="clubspage-three">
                <div className="clubspage-three-in">
                    <div className="clubspage-three-in-header">
                        <h1>Clubs Division into 5 Segments</h1>
                    </div>
                <div className="clubspage-three-one">
                    <div className="clubspage-three-one-in">
                        <div className="clubspage-three-one-comps">
                            <div className="clubspage-three-one-comps-one">
                                <img src={ClubsPageDemo} alt="" />
                            </div>
                            <div className="clubspage-three-one-comps-two">
                                <h3>Technology Clubs</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione culpa necessitatibus excepturi numquam animi ex minima vel maiores reiciendis.</p>

                                <Link to='/zeroOne' className='ctoct-link'>Technology Clubs</Link>
                            </div>
                        </div>
                        <div className="clubspage-three-one-comps">
                            <div className="clubspage-three-one-comps-one">
                                <img src={ClubsPageDemo} alt="" />
                            </div>
                            <div className="clubspage-three-one-comps-two">
                                <h3>Cultural Clubs</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione culpa necessitatibus excepturi numquam animi ex minima vel maiores reiciendis.</p>

                                <Link className='ctoct-link' to='/'>Cultural Clubs</Link>
                            </div>
                        </div>
                        <div className="clubspage-three-one-comps">
                            <div className="clubspage-three-one-comps-one">
                                <img src={ClubsPageDemo} alt="" />
                            </div>
                            <div className="clubspage-three-one-comps-two">
                                <h3>Sports</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione culpa necessitatibus excepturi numquam animi ex minima vel maiores reiciendis.</p>

                                <Link className='ctoct-link' to='/'>Sports</Link>
                            </div>
                        </div>
                    </div>
                    <div className="clubspage-three-one-in">
                        <div className="clubspage-three-one-comps">
                            <div className="clubspage-three-one-comps-one">
                                <img src={ClubsPageDemo} alt="" />
                            </div>
                            <div className="clubspage-three-one-comps-two">
                                <h3>Innovation Clubs</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione culpa necessitatibus excepturi numquam animi ex minima vel maiores reiciendis.</p>

                                <Link className='ctoct-link' to='/'>Innovation Clubs</Link>
                            </div>
                        </div>
                        <div className="clubspage-three-one-comps">
                            <div className="clubspage-three-one-comps-one">
                                <img src={ClubsPageDemo} alt="" />
                            </div>
                            <div className="clubspage-three-one-comps-two">
                                <h3>Health and Wellness</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione culpa necessitatibus excepturi numquam animi ex minima vel maiores reiciendis.</p>

                                <Link className='ctoct-link' to='/'>Health and Wellness</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default clubspage