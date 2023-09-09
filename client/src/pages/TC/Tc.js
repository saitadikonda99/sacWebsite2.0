import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Tc.css'

import Footer from '../../components/Footer/Footer'

function Tc() {
  return (
           <div className="Terms-Component">
            <div className="terms-com-in">
                <div className="terms-Nav">
                    <h2>KLEF SAC</h2>
                    
                    < Link className='terms-Nav-link' to='/'> Back to home </Link>
                    
                </div>
                <div className="terms-main">
                    <div className="terms-main-in">
                        <div className="terms-main-one">
                           <div className="terms-main-head-tr">
                             <h2>Terms and Conditions</h2>
                            </div>
                            <div className="terms-main-content">
                             <p>Welcome to KLEF SAC!</p>
                             <p>These terms and conditions outline the rules and regulations for the use of KLEF SAC's Website, located at <Link>https://www.klefsac.in</Link></p>
                             <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use KLEF SAC if you do not agree to take all of the terms and conditions stated on this page.</p>
                             <p>The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice, and all Agreements: "Client," "You," and "Your" refer to you, the person logging on this website and compliant with the Institution’s terms and conditions. "The Institution," "Ourselves," "We," "Our," and "Us" refer to our Institution. "Party," "Parties," or "Us" refer to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of the provision of the Institution’s stated services, in accordance with and subject to the prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and therefore as referring to the same.</p>
                             </div>
                        </div>

                        <div className="terms-main-two">
                           <div className="terms-main-head">
                             <h2>Cookies</h2>
                             <p>We do not use cookies.</p>
                            </div>
                        </div>

                        <div className="terms-main-three">
                           <div className="terms-main-head">
                             <h2>License</h2>
                             <p>MIT License.</p>
                            </div>
                        </div>

                        <div className="terms-main-four">
                           <div className="terms-main-head">
                             <h2>Hyperlinking to our Content</h2>
                             <p>The following organizations may link to our Website without prior written approval:.</p>
                            </div>
                            <div className="terms-main-content">
                                <ul>
                                    <li>Government agencies;</li>
                                    <li>Search engines;</li>
                                    <li>News organizations;</li>
                                    <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                                    <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                                </ul>
                             </div>
                        </div>

                        <div className="terms-main-five">
                           <div className="terms-main-head">
                             <h2>Removal of links from our website</h2>
                            </div>

                            <div className="terms-main-content">
                               <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                                  We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.  
                               </p>
                             </div>
                        </div>

                        <div className="terms-main-six">
                           <div className="terms-main-head">
                             <h2>Contact</h2>
                            <p> <a href="mailto:2100031817@kluniversity.in">2100031817@kluniversity.in</a></p> 
                            </div>
                        </div>


                  </div>
                </div>
                <div className="footer">
                  <Footer/>
                </div>
              </div>
           </div>          
  )  
}

export default Tc