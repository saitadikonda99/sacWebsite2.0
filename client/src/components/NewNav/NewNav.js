import React from 'react';
import './NewNav.css'; 
import { Link } from 'react-router-dom';



const NewNav = () => {
  return (
    <div className='NewNavComponent'>
      <div className="NewNavContainer">
                
          <div className="NewNav-one">
          <div className="options">
                <div  className="options-inner"><Link to='/Home' className='opt-links'>SAC</Link></div>
                <div className="options-dropdown od-one">
                  <div className="options-dropdown-inner">
                    <h4>Deep Dive into SAC</h4>
                    <Link className='opt-drop-links'>About<i class="material-icons">trending_flat</i></Link>
                    <Link className='opt-drop-links'>Achievements<i class="material-icons">trending_flat</i></Link>
                    <Link className='opt-drop-links'>Upcoming Events<i class="material-icons">trending_flat</i></Link>
                    <Link className='opt-drop-links'>Contact<i class="material-icons">trending_flat</i></Link>
                  </div>
                </div>
              </div>
              <div className="options random">
                <div className="options-inner"><Link to='/Home/ActivitiesHome' className='opt-links'>Activities</Link></div>
                <div className="options-dropdown od-two">
                  <div className="options-dropdown-inner">
                    <h4>Explore Activities at SAC</h4>
                    <Link to='/Home/ActivitiesHome/Technology' className='opt-drop-links'>Technology<i class="material-icons">trending_flat</i></Link>
                    <Link to='/Home/ActivitiesHome/Liberal' className='opt-drop-links'>Liberal Arts <i class="material-icons">trending_flat</i></Link>
                    <Link to='/Home/ActivitiesHome/Social' className='opt-drop-links'>Innovation & Incubation <i class="material-icons">trending_flat</i></Link>
                    <Link to='/Home/ActivitiesHome/Society' className='opt-drop-links'>Society and Outreach <i class="material-icons">trending_flat</i></Link>
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="options-inner"><Link className='opt-links'>Student Governance</Link></div>
                <div className="options-dropdown od-four">
                  <div className="options-dropdown-inner">
                    <h4>Student Governance at SAC</h4>
                    <Link to='/Home/Leadership/StudentCouncil' className='opt-drop-links'>Governance and Structure<i class="material-icons">trending_flat</i></Link>
                    <Link to='/Home/Leadership/StudentCouncil' className='opt-drop-links'>Student Council<i class="material-icons">trending_flat</i></Link>
                    <Link to='/Home/Leadership/ExecutiveCouncil' className='opt-drop-links'>Executive Body<i class="material-icons">trending_flat</i></Link>
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="options-inner"><Link className='opt-links'>Mentorship</Link></div>
                <div className="options-dropdown od-five">
                  <div className="options-dropdown-inner">
                    <h4>Explore Mentorship at SAC</h4>
                    <Link className='opt-drop-links'>Student Mentors<i class="material-icons">trending_flat</i></Link>
                    <Link className='opt-drop-links'>Advisory Board<i class="material-icons">trending_flat</i></Link>
                    <Link className='opt-drop-links'>Alumini Support<i class="material-icons">trending_flat</i></Link>
                    <Link className='opt-drop-links'>Experts Panel Support<i class="material-icons">trending_flat</i></Link>
                    <Link className='opt-drop-links'>Industry Connect<i class="material-icons">trending_flat</i></Link>
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="options-inner"><Link className='opt-links'>Informal Learning</Link></div>
                <div className="options-dropdown od-six">
                  <div className="options-dropdown-inner">
                    <h4>Explore Informal Learning at SAC</h4>
                    <Link className='opt-drop-links'>Projects<i class="material-icons">trending_flat</i></Link>
                    <Link className='opt-drop-links'>Consultations<i class="material-icons">trending_flat</i></Link>
                    <Link className='opt-drop-links'>Innovation<i class="material-icons">trending_flat</i></Link>
                    <Link className='opt-drop-links'>Active Learning<i class="material-icons">trending_flat</i></Link>
                    <Link className='opt-drop-links'>360 Approach<i class="material-icons">trending_flat</i></Link>
                    <Link className='opt-drop-links'>SAC-Ed<i class="material-icons">trending_flat</i></Link>
                    <Link className='opt-drop-links'>Flip Learning<i class="material-icons">trending_flat</i></Link>
                  </div>
                </div>
              </div>
              <div className="options">
                <Link className='opt-links'>Blogs</Link>
              </div>
              <div className="options">
                <Link to='/Home/Gallery' className='opt-links'>Gallery</Link>
              </div>
          </div>
      </div>
    </div>
  )
}

export default NewNav
