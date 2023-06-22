import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Footer/Footer'; 
import '../CSS/StudentCouncil.css'; 
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'; 

import StudentLeads from '../../../Assets/StudentLeads.png';
import avatar from '../../../Assets/avatar.png'; 
import favatar from '../../../Assets/favatar.png';

import NavBar from '../../../components/NavigationBar/NavBar';

const StudentCouncil = () => {

    useEffect(() => {
      document.title = 'StudentCouncil | KLU SAC';
    }, []);

    const [filter, setFilter] = useState('');
    const customers = [
      { department:'Administration and Planning',name: 'Chunduru Raja Chowdary',idnumber:'190069032',branch:'EEE 4th Year',designation: 'Senior Vice President', image: avatar },
      { department:'Administration and Planning',name: 'Parth Deepak Thakker',idnumber:'2010040020',branch:'ECE 3rd Year',designation: 'Vice - President', image: avatar },
      { department:'Administration and Planning',name: 'J.V. Kalyan',idnumber:'2100080201',branch:'AI & DS 2nd Year',designation: 'Vice - President', image: avatar },
      { department:'Administration and Planning',name: 'Cherukuri Tarun Sai Teja ',idnumber:'2000080099',branch:'AI & DS 3rd Year',designation: 'Vice - President', image: avatar },


      { department:'Technology',name: 'M. Sandeep',idnumber:'2100520145',branch:'BCA 2nd Year',designation: ' Sr. Vice - President', image: avatar },
      { department:'Technology',name: 'Deepak Reddy Gathpa',idnumber:'2100031817',branch:'EEE 2nd Year ',designation: 'Vice - President', image: avatar },
      { department:'Technology',name: 'Amarnadh.D',idnumber:'210069001',branch:'CSE - Hons',designation: 'Vice - President', image: avatar},
      { department:'Technology',name: 'R.Srinivas',idnumber:'2000060007',branch:'Mech 2nd Year',designation: 'Vice - President', image: avatar},


      

      { department:'Society & Outreach',name: 'N. Nagendra Kumar',idnumber:'2000060007',branch:'EEE 3rd Year ',designation: 'Sr. Vice - President', image: avatar },
      { department:'Society & Outreach',name: 'P Dhanya Siri',idnumber:'2000020013',branch:'Civil 3rd Year',designation: 'Vice - President', image: favatar },
      { department:'Society & Outreach',name: 'B.Rithika Reddy ',idnumber:'2000590003',branch:'BA-IAS 3rd Year',designation: 'Vice - President', image: favatar },
      { department:'Society & Outreach',name: 'D Geethanjali',idnumber:'190550044',branch:'BBA-LLB 4th Year ',designation: 'Vice - President', image: favatar },



      { department:'Cultural',name: 'Varsha',idnumber:'190030678',branch:'CSE 4th Year ',designation: 'Sr Vice - President', image: favatar },
      { department:'Sports',name: 'Vivek ',idnumber:'2000620125',branch:'AGBSC 3rd Year ',designation: 'Sr Vice - President', image: avatar },
      { department:'Sports',name: 'A.Narendra Babu ',idnumber:'2100030762',branch:'CSE 2nd Year ',designation: 'Sr Vice - President', image: avatar },
      { department:'Sports',name: 'Razak',idnumber:'2000620135',branch:'AGBSC 3rd Year',designation: 'Sr Vice - President', image: avatar },


      { department:'Innovation and Incubation',name: 'K. Pranay ',idnumber:'190250017',branch:'CSE 4th year',designation: 'Sr Vice - President', image: avatar },
      { department:'Innovation and Incubation',name: 'Kavya',idnumber:'2000620183',branch:'AGBSC 3rd Year',designation: 'Vice - President', image: favatar },



      { department:'International Student Affairs ',name: 'Doren Manaka',idnumber:'190250017',branch:'B.Sc 4th Year ',designation: 'Sr Vice - President', image: favatar },
      { department:'International Student Affairs ',name: 'Kazim Nazar ',idnumber:'190020044',branch:'Civil 4th Year ',designation: 'Sr Vice - President', image: avatar },
      { department:'International Student Affairs ',name: 'Bartho Igboke Chinermerem ',idnumber:'190181013',branch:'B.Pharm 4th Year',designation: 'Sr Vice - President', image: avatar },


      { department:'Social Equity',name: 'Kommana Vahineetha',idnumber:'2000080154',branch:'AI & DS 3rd Year',designation: 'Sr Vice - President', image: favatar },
      { department:'Social Equity',name: 'Ch. Archana ',idnumber:'2000510021',branch:'B.Arch 3rd Year ',designation: 'Vice - President', image: favatar },
      { department:'Social Equity',name: 'Shaik Chand Basha ',idnumber:'2100030854',branch:'CSE 2nd Year',designation: 'Vice - President', image: avatar },


      { department:'Public Relations',name: 'K. Bala Sankar ',idnumber:'190030790',branch:'CSE 4th Year',designation: 'Sr. Vice - President', image: avatar },
      { department:'Public Relations',name: 'Alexa Flarance ',idnumber:'2100520126',branch:'BCA 2nd Year',designation: 'Sr. Vice - President', image: favatar },
    ];
  
    const handleInputChange = (event) => {
      setFilter(event.target.value.toUpperCase());
    };

    const [loading, setLoading] = useState(true);
      
    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 1000));
  
        setLoading((loading) => !loading);
      };
        
      loadData();
    }, [])

    if (loading) {
        return <div>
            <div class="box">
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
            </div>

        </div>
    }
    else {
      return (
        <div className='StudentCouncilComponent'>
          <NavBar></NavBar>
            <div className="StudentCouncilContainer">
                <div className="one">
                    <div className="one-header">
                        <h1> <span>Leadership/</span>Student Council</h1>
                    </div>
                    <div className="one-inner">
                        <div className="one-one">
                            <h3>A student council at a student activity center is a group of students elected or appointed to represent the interests and needs of their peers within the activity center. The council typically consists of a group of students who work collaboratively to organize events, activities, and initiatives that enhance the student experience at the activity center. They may also act as a liaison between students and the administration, advocating for changes or improvements to the center's facilities or policies. Ultimately, the goal of a student council at a student activity center is to create a positive and engaging environment for students to pursue their interests and passions outside of the classroom.</h3>
    
                            <div className="one-one-one">
                                <h4>Quick Stats</h4>
                                <hr />
                                <div className="one-one-one-inner">
                                    <div className="triple-one-sub">
                                        <h4>Technology</h4>
                                        <div className="cnt">
                                            <CountUp start={0} duration={4} end={4} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                <span id='refer' ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                            </CountUp>
                                        </div>
                                    </div>
                                    <div className="triple-one-sub">
                                        <h4>Administration</h4>
                                        <div className="cnt">
                                            <CountUp start={0} duration={4} end={4} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                <span id='refer' ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                            </CountUp>
                                        </div>
                                    </div>
                                  
                                    <div className="triple-one-sub">
                                        <h4>Society & Outreach</h4>
                                        <div className="cnt">
                                            <CountUp start={0} duration={4} end={4} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                <span id='refer' ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                            </CountUp>
                                        </div>
                                    </div>
                                    <div className="triple-one-sub">
                                        <h4>Innovation & Incubation</h4>
                                        <div className="cnt">
                                            <CountUp start={0} duration={4} end={2} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                <span id='refer' ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                            </CountUp>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="one-two">
                            <img src={StudentLeads} alt="" />
                        </div>
                    </div>
                </div>
    
              <div className="searchbar">
                <input type="text" id="myInput" onChange={handleInputChange} placeholder="Search for names.." title="Type in a name" />
              </div>
    <table id="myTable">
      <thead>
        <tr className="header">
          <th>Department</th>
          <th>Name</th>
          <th>ID Number</th>
          <th>Branch</th>
          <th>Designation</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        {customers
          .filter((customer) => customer.name.toUpperCase().includes(filter))
          .map((customer, index) => (
            <tr key={index}>
              <td>{customer.department}</td>
              <td>{customer.name}</td>
              <td>{customer.idnumber}</td>
              <td>{customer.branch}</td>
              <td>{customer.designation}</td>
              <td>
                <img src={customer.image}/>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
                
    
                
    
            </div>
            <Footer></Footer>
        </div>
      )

    }
  



  
}

export default StudentCouncil

