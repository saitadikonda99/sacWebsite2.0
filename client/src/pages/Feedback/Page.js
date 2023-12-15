import React from 'react'
import axios from 'axios';
import { useState } from 'react';



function Feedback() {

    const [formData, setFormData] = useState({
        universityId: '',
        name: '',
        email: '',
        MajorArea: '',  
        branch: '',  
        Suggestions: '',  
        Staff_Interaction: 0,  
        Overall_Satisfaction: '',
      });
      
      const handleChange = (e) => {

        const { name, value, type, checked } = e.target;
      
        // Use a conditional to handle different input types
        const newValue = type === 'checkbox' ? checked : value;
      
        setFormData({ ...formData, [name]: newValue });
      };
      
    
const handleSubmit = async (e) => {
    e.preventDefault();
    
    const feedbackData = {
      universityId: formData.universityId,
      name: formData.name,
      email: formData.email,
      MajorArea: formData.MajorArea,
      branch: formData.branch,
      Suggestions: formData.Suggestions,
      Staff_Interaction: formData.Staff_Interaction,
      Overall_Satisfaction: formData.Overall_Satisfaction,
    };


    try {
        // Send the feedback data to the Node.js backend
        const response = await axios.post('http://localhost:3001/api/submitFeedback', feedbackData);
        console.log(response.data);
        alert('Feedback submitted successfully');
      } catch (error) {
        console.error('Error submitting feedback:', error);
        alert('Error submitting feedback: ' + error.response?.data?.error || 'Unknown error');
      }
      
    }
       
  return (
    <div className="Feedback-component">
        <div className="feedback-component-in">
                <div className="feedback-main">
                    <div className="feedback-main-in">
                        <form action="" onSubmit={handleSubmit} >
                            <div className="feed-head fm-in-flex">
                                <h1>Feedback Form</h1>
                            </div>

{/* ------------------------------- universityId ------------------------------- */}

                            <div className="feed-id fm-in-flex">
                                <label htmlFor="universityId">Univeristy Id  <span>*</span> </label>
                                <input 
                                    type="text" 
                                    name="universityId" 
                                    id="universityId" 
                                    placeholder="Enter your Id"
                                    value={formData.universityId}
                                    onChange={handleChange} 
                                    required />
                            </div>


{/* ------------------------------- name ------------------------------- */}

                            <div className="feed-name fm-in-flex">
                                <label htmlFor="name">Name as per the University Records  <span>*</span> </label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name"
                                    onChange={handleChange} 
                                    value={formData.name}
                                    placeholder="Enter your name" />
                            </div>

{/* ------------------------------- email ------------------------------- */}


                            <div className="feed-email fm-in-flex">
                                <label htmlFor="email">University Email <span>*</span> </label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    placeholder="Enter your email" />
                            </div>

{/* ------------------------------- MajorArea ------------------------------- */}

                           <div className="feed-Teaching fm-in-flex">
                                <label htmlFor="MajorArea">MajorArea<span>*</span> </label>
                                <input 
                                    type="text" 
                                    name='MajorArea'
                                    value={formData.MajorArea}
                                    onChange={handleChange} />
                           </div>


{/* ------------------------------- branch ------------------------------- */}

                           <div className="feed-Course fm-in-flex">
                                <label htmlFor="branch">Branch<span>*</span> </label>
                                <input 
                                    type="text" 
                                    name='branch'
                                    value={formData.branch}
                                    onChange={handleChange} />
                           </div>


{/* ------------------------------- Suggestions for Improvement: ------------------------------- */}

                           <div className="feed-Classroom fm-in-flex">
                                <label htmlFor="Suggestions">Suggestions for Improvement:<span>*</span> </label>
                                <input 
                                    type="text" 
                                    name='Suggestions'
                                    value={formData.Suggestions}
                                    onChange={handleChange} />
                           </div>

{/* ------------------------------- Staff_Interaction ------------------------------- */}


                           <div className="feed-Interaction fm-in-flex">
                                <label htmlFor="Staff_Interaction">Staff Interaction<span>*</span> </label> <br />
                                  <div className="Interaction-column">
                                   <input 
                                        type="range" 
                                        name='Staff_Interaction'
                                        value={formData.Staff_Interaction}
                                        onChange={handleChange} /> 
                                 </div>
                           </div>


{/* ------------------------------- Overall_Satisfaction ------------------------------- */}

                           <div className="feed-text-words fm-in-flex">
                                <label htmlFor="Overall_Satisfaction"> Write How do you feel? <span>*</span> </label>
                                <textarea
                                        name="Overall_Satisfaction" 
                                        id="Overall_Satisfaction" 
                                        cols="5" 
                                        rows="5" 
                                        placeholder='Min 30 Words'
                                        onChange={handleChange}
                                        >
                                    
                                        </textarea>
                           </div>


{/* ------------------------------- Submit ------------------------------- */}
                           <div className="feed-button m-in-flex">
                                <button 

                                > Submit
                                </button>
                           </div>
                        </form>



                    </div>
                    
                 </div>


                   
            </div>
        </div>
  )
}

export default Feedback