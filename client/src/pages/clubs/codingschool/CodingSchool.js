import React from 'react';
import './CodingSchool.css';

import { Link } from 'react-router-dom';
import Coding from '../../../Assets/ClubsImages/Coding.jpeg';
import Footer from '../../../components/Footer/Footer';

const CodingSchool = () => {
  return (
    <div className="ClubsComponent">
        <div className="ClubsContainer">
            <div className="ClubsNavigation">
                <div className="ClubsNavigation-One">
                    <p><a href="www.kluniversity.in">Koneru Lakshmaiah Education Foundation</a> - Student Activity Center</p>
                </div>
                <div className="ClubsNavigation-two">
                    <div className="Club-logo">
                        <h1>Coding School</h1>
                    </div>
                    <div className="Club-Navigation">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Team</a>
                        <a href="#">Activities</a>
                        <a href="#">Upcoming Events</a>
                        <a href="#">Contact</a>
                        <a href="#">Gallery</a>
                    </div>
                    <div className="Club-Register">
                        <Link className='club-register-link'>Register</Link>
                    </div>
                </div>
            </div>
            <div className="Clubs-main">
                <h1>The School of Coding</h1>
            </div>
            <div className="Clubs-about">
                <div className="Clubs-about-inner">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus corrupti, nisi ipsum excepturi doloribus porro delectus eius quibusdam quaerat. Maxime eligendi dicta reprehenderit accusantium pariatur. Explicabo non eum nihil excepturi quidem culpa voluptates amet nulla eaque esse, ad quaerat dolor, natus ab! Deleniti quam est itaque soluta necessitatibus, expedita nisi qui minus, at quia omnis quidem amet animi sint eos laudantium ipsam corrupti fuga. Molestiae ab id iste ipsum doloremque minus ad maxime error tempore tenetur aliquid facere perspiciatis, impedit inventore! Eligendi sunt soluta quasi delectus repellendus deserunt ex fugiat explicabo alias maxime blanditiis rem eaque, labore illo ad porro.</p>
                </div>
            </div>

            <div className="Clubs-upcoming-activities">
                <h1>Upcoming Activities</h1>
                <div className="Clubs-upcoming-activities-inner">
                    <div className="club-activities">
                        <h2>Knockout Coding Challenge-1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quidem saepe velit nulla, quia, soluta consectetur ab itaque eaque, natus nisi obcaecati eveniet earum! Dolorem voluptatibus voluptas consequuntur corporis minus!</p>
                    </div>
                    <div className="club-activities">
                        <h2>New Web Development Full Stack Projects</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, obcaecati consectetur eos ut aut dolorum inventore fugiat unde saepe aliquid, iusto veritatis consequatur maiores cum vel quaerat fuga explicabo quia?</p>
                    </div>
                    <div className="club-activities">
                        <h2>Kockout Coding Challenge-2</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab fugiat sit accusantium provident laboriosam, distinctio dolorem ut. Fuga dolor consequatur ipsa omnis voluptate deserunt! Perferendis voluptatem quos eligendi neque iste.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CodingSchool
