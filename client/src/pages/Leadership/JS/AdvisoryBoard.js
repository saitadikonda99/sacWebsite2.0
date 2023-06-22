import React, { useEffect } from 'react';
import Footer from '../../../components/Footer/Footer';
import '../CSS/AdvisoryBoard.css';



import avatar from '../../../Assets/avatar.png'; 

const AdvisoryBoard = () => {

  useEffect(() => {
    document.title = 'AdvisoryBoard | KLU SAC';
  }, []);
  return (
    <div className='AdvisoryBoardComponent'>
      <div className="AdvisoryBoardComponent">
          <div className="one">
              <div className="one-header">
                  <h1> <span>Student Body/</span>Advisory Board</h1>
              </div>
          </div>
          <div className="two">
            <div className="two-inner">
              <div className="adv">
                <img src={avatar} alt="" />
                <h4>Name of the advisor</h4>
                <h5>Additional Details</h5>
              </div>
              <div className="adv">
                <img src={avatar} alt="" />
                <h4>Name of the advisor</h4>
                <h5>Additional Details</h5>
              </div>
              <div className="adv">
                <img src={avatar} alt="" />
                <h4>Name of the advisor</h4>
                <h5>Additional Details</h5>
              </div>
              <div className="adv">
                <img src={avatar} alt="" />
                <h4>Name of the advisor</h4>
                <h5>Additional Details</h5>
              </div>
              <div className="adv">
                <img src={avatar} alt="" />
                <h4>Name of the advisor</h4>
                <h5>Additional Details</h5>
              </div>
              <div className="adv">
                <img src={avatar} alt="" />
                <h4>Name of the advisor</h4>
                <h5>Additional Details</h5>
              </div>
              <div className="adv">
                <img src={avatar} alt="" />
                <h4>Name of the advisor</h4>
                <h5>Additional Details</h5>
              </div>
              <div className="adv">
                <img src={avatar} alt="" />
                <h4>Name of the advisor</h4>
                <h5>Additional Details</h5>
              </div>
            </div>
          </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AdvisoryBoard
