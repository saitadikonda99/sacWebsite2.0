import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

import NavBar from './NavBar';

import Footer from '../../components/Footer/Footer';


const Page = () => {


  const [isLeadershipTwoOneBodyVisible, setLeadershipTwoOneBodyVisible] = useState(false);

  // Step 3: Event handler function to toggle visibility
  const toggleLeadershipTwoOneBody = () => {
    setLeadershipTwoOneBodyVisible(!isLeadershipTwoOneBodyVisible);
  };

  const [isLeaderhipTwoTwoBodyVisible, setLeaderhipTwoTwoBodyVisible] = useState(false);
  const toggleLeaderhipTwoTwoBody = () => {
    setLeaderhipTwoTwoBodyVisible(!isLeaderhipTwoTwoBodyVisible);
  };

  const [isLeaderhipTwoThreeBodyVisible, setLeaderhipTwoThreeBodyVisible] = useState(false);
  const toggleLeaderhipTwoThreeBody = () => {
    setLeaderhipTwoThreeBodyVisible(!isLeaderhipTwoThreeBodyVisible);
  };

  const [isLeaderhipTwoFourBodyVisible, setLeaderhipTwoFourBodyVisible] = useState(false);
  const toggleLeaderhipTwoFourBody = () => {
    setLeaderhipTwoFourBodyVisible(!isLeaderhipTwoFourBodyVisible);
  };


  //   ---------------------------------------------

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
      setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleResize);

      return () => {
      window.removeEventListener('resize', handleResize);
      };
  }, []);

//   ---------------------------------------------
  // Define an array of activities
  const activities = [
    {
      sno: '01',
      name: 'Bash Scripting for Developers',
      clubname: 'ZeroOne Code Club',
      date: '27th September',
      time: '5.30 - 7.30 pm',
      venue: 'Jasmine Hall',
    },
    {
      sno: '02',
      name: 'React Router DOM V6',
      clubname: 'ZeroOne Code Club',
      date: '26th September',
      time: '5.30 - 7.30 pm',
      venue: 'M002A',
    },
    {
      sno: '03',
      name: 'Angular JS',
      clubname: 'ZeroOne Code Club',
      date: '25th September',
      time: '5.30 - 7.30 pm',
      venue: 'M002A',
    },
    {
      sno: '04',
      name: 'El Comicos Stand Up Show',
      clubname: 'El Comicos',
      date: '26th September 2023',
      time: '6:00 PM - 7:00 PM',
      venue: 'Jasmine Hall',
    },
    {
      sno: '05',
      name: 'Versatales Club Senario Ink Battle',
      clubname: 'Versatales',
      date: '28th September 2023',
      time: '3:30 PM - 7:30 PM',
      venue: 'Rose Hall',
    },
    {
      sno: '06',
      name: 'Electoral literacy club session on why to vote',
      clubname: 'Electoral literacy club',
      date: '30th September 2023',
      time: '5.30 PM - 7.30 PM',
      venue: 'Sac Hall',
    },
    {
      sno: '07',
      name: 'KL FILM CLUB MASTERCRAFT',
      clubname: 'KL FILM CLUB',
      date: '27th September 2023',
      time: '5:00 PM - 7:00 PM',
      venue: 'NEW SEMINAR HALL',
    },
    {
      sno: '08',
      name: 'Ohana Charity Outreach',
      clubname: 'Ohana',
      date: '30th September 2023',
      time: '3:00 PM - 6:00 PM',
      venue: 'Guntur',
    },
    {
      sno: '09',
      name: 'Yuva Tourism Club Travel for Life Webinar',
      clubname: 'Yuva Tourism Club',
      date: '29th September 2023',
      time: '5:40 PM - 7:20 PM',
      venue: 'Any Room',
    },
    {
      sno: '10',
      name: 'FUSION-DANCE CLUB RETRO HITS',
      clubname: 'FUSION-DANCE CLUB',
      date: '27th September 2023',
      time: '5:00 PM - 7:00 PM',
      venue: 'NEW SEMINAR HALL',
    },
    {
      sno: '11',
      name: 'KUTUMB WordWeave',
      clubname: 'KUTUMB',
      date: '29th September 2023',
      time: '5:30 PM - 7:10 PM',
      venue: 'SAC hall',
    },
    {
      sno: '12',
      name: 'Narthana Dance Club Tremendous Tuesday',
      clubname: 'Narthana Dance Club',
      date: '26th September 2023',
      time: '5:00 PM - 7:00 PM',
      venue: 'New Seminar Hall',
    },
    {
      sno: '13',
      name: 'SVR "EcoGas Harvest"',
      clubname: 'SVR',
      date: '27th September 2223',
      time: '9:00 AM - 5:00 PM',
      venue: 'Morusumilli thanda',
    },
    {
      sno: '14',
      name: 'Cyber Security Club Introduction to Burp Suite',
      clubname: 'Cyber Security Club',
      date: '25th September 23',
      time: '5:40 PM - 7:10 PM',
      venue: 'Sac Hall',
    },
    {
      sno: '15',
      name: 'Mobile E-Sports Club Mobile Sports Tournament',
      clubname: 'Mobile E-Sports Club',
      date: '27th September 2223',
      time: '5:40 PM - 7:00 PM',
      venue: 'Sac Hall',
    },
    {
      sno: '16',
      name: 'Agriculture Club Orientation and Hydroponics chapter one',
      clubname: 'Agriculture Club',
      date: '29th September 2023',
      time: '6:00 PM - 7:00 PM',
      venue: 'Jasmine Hall',
    },
    {
        sno: '17',
        name: 'UI/UX Designing',
        clubname: 'WebApps Club',
        date: '29th September 2023',
        time: '6:00 PM - 7:00 PM',
        venue: 'Jasmine Hall',
      },
      {
        sno: '18',
        name: 'App Development Session',
        clubname: 'WebApps Club',
        date: '29th September 2023',
        time: '6:00 PM - 7:00 PM',
        venue: 'Jasmine Hall',
      },
      {
        sno: '19',
        name: 'Web Development Session',
        clubname: 'WebApps Club',
        date: '29th September 2023',
        time: '6:00 PM - 7:00 PM',
        venue: 'Jasmine Hall',
      },
  ];



  
  
  const projects = [ 
    {
        sno: '01',
        name: 'ZeroOne website in Next.js',
        clubname: 'ZeroOne Code Club',
        resource: 'https://github.com/DeepakReddyG/cyd-nextjs',
        description: 'The primary aim of this project is to develop a cutting-edge web application for ZeroOne club. Leveraging the advanced capabilities of Next.js, an enhanced version of React, this project places significant emphasis on crafting an exceptional user interface. The application is intended to cater not only to the club members but also to other users seeking an engaging and seamless experience.',
    },
    {
        sno: '02',
        name: 'ZeroOne Learning',
        clubname: 'ZeroOne Code Club',
        resource: 'https://github.com/saitadikonda99/ZeroOne-Learning',
        description: 'ZeroOne Learning E-Portal is a user-friendly website designed to facilitate beginner-level C programming education. Our platform offers a seamless learning experience, providing easy-to-follow tutorials and interactive exercises for mastering C programming concepts. With a focus on simplicity and effectiveness, aspiring programmers can quickly grasp fundamental coding skills and embark on their programming journey confidently. Join us at ZeroOne Learning E-Portal and unlock your potential in C programming!',
    },
    {
        sno: '02',
        name: 'ZeroOne Learning',
        clubname: 'ZeroOne Code Club',
        resource: 'https://github.com/saitadikonda99/ZeroOne-Learning',
        description: 'ZeroOne Learning E-Portal is a user-friendly website designed to facilitate beginner-level C programming education. Our platform offers a seamless learning experience, providing easy-to-follow tutorials and interactive exercises for mastering C programming concepts. With a focus on simplicity and effectiveness, aspiring programmers can quickly grasp fundamental coding skills and embark on their programming journey confidently. Join us at ZeroOne Learning E-Portal and unlock your potential in C programming!',
    },
    {
        sno: '03',
        name: 'ZeroOne ERP',
        clubname: 'ZeroOne Code Club',
        resource: 'https://github.com/DeepakReddyG/clubRegistrations',
        description: 'ZeroOne Learning E-Portal is a user-friendly website designed to facilitate beginner-level C programming education. Our platform offers a seamless learning experience, providing easy-to-follow tutorials and interactive exercises for mastering C programming concepts. With a focus on simplicity and effectiveness, aspiring programmers can quickly grasp fundamental coding skills and embark on their programming journey confidently. Join us at ZeroOne Learning E-Portal and unlock your potential in C programming!',
    },
    {
        sno: '04',
        name: 'SAC Admin Panel',
        clubname: 'ZeroOne Code Club',
        resource: 'https://github.com/DeepakReddyG/sac-dashboard',
        description: 'ZeroOne Learning E-Portal is a user-friendly website designed to facilitate beginner-level C programming education. Our platform offers a seamless learning experience, providing easy-to-follow tutorials and interactive exercises for mastering C programming concepts. With a focus on simplicity and effectiveness, aspiring programmers can quickly grasp fundamental coding skills and embark on their programming journey confidently. Join us at ZeroOne Learning E-Portal and unlock your potential in C programming!',
    },
    {
        sno: '05',
        name: 'SAC Website',
        clubname: 'ZeroOne Code Club',
        resource: 'https://github.com/Hallos74/DotFiles',
        description: 'ZeroOne Learning E-Portal is a user-friendly website designed to facilitate beginner-level C programming education. Our platform offers a seamless learning experience, providing easy-to-follow tutorials and interactive exercises for mastering C programming concepts. With a focus on simplicity and effectiveness, aspiring programmers can quickly grasp fundamental coding skills and embark on their programming journey confidently. Join us at ZeroOne Learning E-Portal and unlock your potential in C programming!',
    },
    {
        sno: '06',
        name: 'Customizing ArchLinux ',
        clubname: 'ZeroOne Code Club',
        resource: 'https://github.com/DeepakReddyG/Zvim',
        description: 'ZeroOne Learning E-Portal is a user-friendly website designed to facilitate beginner-level C programming education. Our platform offers a seamless learning experience, providing easy-to-follow tutorials and interactive exercises for mastering C programming concepts. With a focus on simplicity and effectiveness, aspiring programmers can quickly grasp fundamental coding skills and embark on their programming journey confidently. Join us at ZeroOne Learning E-Portal and unlock your potential in C programming!',
    },
    {
        sno: '07',
        name: 'ZVIM',
        clubname: 'ZeroOne Code Club',
        resource: 'https://github.com/DeepakReddyG/Zvim',
        description: 'ZeroOne Learning E-Portal is a user-friendly website designed to facilitate beginner-level C programming education. Our platform offers a seamless learning experience, providing easy-to-follow tutorials and interactive exercises for mastering C programming concepts. With a focus on simplicity and effectiveness, aspiring programmers can quickly grasp fundamental coding skills and embark on their programming journey confidently. Join us at ZeroOne Learning E-Portal and unlock your potential in C programming!',
    },
    
    ];


    const [visibleProjectIndex, setVisibleProjectIndex] = useState(-1);

    // Step 2: Event handler function to toggle visibility of a specific project
    const toggleProjectDescription = (index) => {
      if (index === visibleProjectIndex) {
        setVisibleProjectIndex(-1); // Toggle off if already visible
      } else {
        setVisibleProjectIndex(index); // Toggle on for the clicked project
      }
    };

  return (
    <div className='SILComponent'>

<div className="Event-Nav">
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
                {screenWidth < 768 ?  <NavBar/> : '' }
        </div>
      <div className="SILContainer">

        <div className="sil-header">
            <div className="sil-header-in">
                <h1>Social Immersive Learning through Student Activity Center</h1>
                <p>The Student Activity Center is <mark>duly authorized to facilitate activities associated with the Social Immersive Learning Course</mark>. The following is a comprehensive list of activities that the Student Activity Center (SAC) organizes, scheduled on the dates specified, in collaboration with the diverse clubs operating within SAC.</p>
            </div>
        </div>

        <div className="silactivites">
          <div className="silactivities-in">
           <div className="silactivities-in-header">
                <h1>List of Activities & Events</h1>
           </div>
            <table>
              <thead>
                <tr>
                  <th>Sno</th>
                  <th>Activity Name</th>
                  <th>Organizing Club</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Venue</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr key={index}>
                    <td>{activity.sno}</td>
                    <td>{activity.name}</td>
                    <td>{activity.clubname}</td>
                    <td>{activity.date}</td>
                    <td>{activity.time}</td>
                    <td>{activity.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="silactivities-in-header silactivities-in-header-two">
                <h1>List of Ongoing Projects</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Project Name</th>
                            <th>Organizing Club</th>
                            <th>Resource</th>
                            <th>Project Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.sno}</td>
                <td>{project.name}</td>
                <td>{project.clubname}</td>
                <td>
                  <a href={project.resource} target="_blank" rel="noopener noreferrer">
                    Resource Link
                  </a>
                </td>
                <td>
                  {/* Step 3: Add a "View Description" button for each row */}
                  <button className='viewdesc' onClick={() => toggleProjectDescription(index)}>
                    {visibleProjectIndex === index ? 'Hide Description' : 'View Description'}
                  </button>
                </td>
              </tr>
            ))}
                    </tbody>
                </table>
        {visibleProjectIndex !== -1 && (
          <div>
            <h2>Project Description</h2>
            <p>{projects[visibleProjectIndex].description}</p>
          </div>
        )}
           </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default Page;
