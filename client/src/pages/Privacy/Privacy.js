import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './Privacy.css'

import Footer from '../../components/home/Footer/Footer'
import '../../components/home/HomeNav/HomeNav.css';


function Privacy() {

    useEffect(() => {
        document.title = 'Privacy & Policy | KLU SAC';
        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = 'Student Activity Center at KLEF';
        document.head.appendChild(metaDescription);
    
        return () => {
          document.head.removeChild(metaDescription);
        };
      }, []);

  return (
          <div className="Privacy-Component">
            <div className="privacy-Component-in">
                <div className="HomeNavComponent">
                    <div className="HomeNavContainer">
                        <div className="HomeNavLogo">
                            <div className="HomeNavLogo-in">
                                <Link className='HomeNavLogo-in-link' to='/'><h3>Student Activity Center</h3></Link>
                            </div>
                        </div>
                        <div className="HomeNavIndex">
                            <div className="HomeNavIndex-in">
                                <Link className='HomeNavIndex-in-link' to='/'>Back to Home</Link>
                                <Link className='HomeNavIndex-in-link' to='/'>Explore Clubs</Link>
                                <Link className='HomeNavIndex-in-link' to='/'>Read Blogs</Link>
                                <Link className='HomeNavIndex-in-link' to='/gallery'>Gallery</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Privacy-Container">
                    <div className="Privacy-Container-in">
                        <div className="PrivacyOne">
                            <h2>Privacy Policy for KLEF University Student Activity Center</h2>
                             <p>Effective Date: September 10</p>
                             <p>At KLEF, we are committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use the Student Activity Center website. By using our website, you consent to the practices described in this policy.</p>
                        </div>
                        <div className="PrivacyTwo">
                            <h3>Information We Collect</h3>
                             <p> <span className='PrivacySpan' >Personal Information: </span>We may collect personal information such as your name, email address, contact number, and student ID when you register for events or use our website.</p>
                             <p> <span className='PrivacySpan' >Usage Information:</span>  We may collect information about how you interact with our website, including your IP address, browser type, and pages visited.</p>
                        </div>
                        <div className="PrivacyThree">
                            <h3>How We Use Information</h3>
                            <p> <span className='PrivacySpan' >Event Registration:</span>  We use your personal information to facilitate event registration and communication related to the Student Activity Center.</p>
                            <p> <span className='PrivacySpan' >Website Improvement:</span>  We may use usage information to improve our website's functionality and user experience.</p>
                        </div>
                        <div className="PrivacyFour">
                            <h3>Disclosure of Your Information</h3>
                            <p>We do not sell or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in website operations and event management. We may also disclose your information when required by law or to protect our rights.</p>
                        </div>
                        <div className="PrivacyFive">
                            <h3>Security</h3>
                            <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, or alteration. However, no data transmission over the internet is entirely secure, so we cannot guarantee the absolute security of your data.</p>
                        </div>
                        <div className="PrivacySix">
                            <h3>Changes to This Policy</h3>
                            <p>We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on this page with the revised effective date.</p>
                        </div>
                        <div className="PrivacySeven">
                            <h3>Contact Us</h3>
                            <p> <a href="mailto:2100031817@kluniversity.in">2100031817@kluniversity.in</a></p> 
                        </div>
                    </div>
                </div>
                    <div className="PrivacyFooter">
                        <Footer />
                    </div>
            </div>
        </div>
  )
}

export default Privacy