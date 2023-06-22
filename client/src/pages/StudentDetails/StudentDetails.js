import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';


import { Link } from 'react-router-dom';

import './StudentDetails.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [interestFilter, setInterestFilter] = useState('');
  const [branchFilter, setBranchFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState(''); 
  const [residencyFilter, setResidencyFilter] = useState(''); 
  const [stateNameFilter, setstateNameFilter] = useState(''); 
  const [districtNameFilter, setdistrictNameFilter] = useState(''); 
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);



  useEffect(() => {
    axios
      .get('/fetch')
      .then(response => {
        setStudents(response.data);
        setFilteredStudents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (interestFilter === '' && branchFilter === '' && genderFilter === '' && stateNameFilter === '' && districtNameFilter === '') {
      setFilteredStudents(students);
    } else {
      const filteredData = students.filter(
        student =>
          (interestFilter === '' || student.interest === interestFilter) &&
          (branchFilter === '' || student.branch === branchFilter) && 
          (genderFilter === '' || student.gender === genderFilter) &&
          (residencyFilter === '' || student.residency === residencyFilter) &&
          (stateNameFilter === '' || student.stateName === stateNameFilter ) && 
          (districtNameFilter === '' || student.districtName === districtNameFilter)
      );
      setFilteredStudents(filteredData);
    }
  }, [interestFilter, branchFilter, genderFilter, residencyFilter, stateNameFilter, districtNameFilter, students]);


  useEffect(() => {
    let maleCount = 0;
    let femaleCount = 0;
    students.forEach(student => {
      if (student.gender === 'male') {
        maleCount++;
      } else if (student.gender === 'female') {
        femaleCount++;
      }
    });
    setMaleCount(maleCount);
    setFemaleCount(femaleCount);
  }, [students]);


  const handleSubmit = e => {
    e.preventDefault();
    if (password === '123') {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect Credentials! This incident is reported');
    }
  };

  const handleInterestFilterChange = e => {
    setInterestFilter(e.target.value);
  };

  const handleBranchFilterChange = e => {
    setBranchFilter(e.target.value);
  };

  const handleGenderFilterChange = e => {
    setGenderFilter(e.target.value); 
  }; 

  const handleResidencyFilterChange = e => {
    setResidencyFilter(e.target.value); 
  }

  const handlestateNameFilterChange = e => {
    setstateNameFilter(e.target.value); 
  }

  const handledistrictNameFilterChange = e => {
    setdistrictNameFilter(e.target.value); 
  }



  return (
    <div className='StudentDetailsComponent'>
      {isLoggedIn ? (
        <div>
          <div className="pageheading">
            <span><h1>Admin Console</h1></span>
          </div>

          <div className="dashboard">
            
            <div className="totalStudents">
              <div className="totalStudentsHeading">
                <p>Student Count Analysis</p>
              </div>
              <div className="totalStudentsInner">
                <table>
                  <tr>
                    <td colspan="2">Total number of students registered:{students.length}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Total number of male students:{students.filter(student => student.gender === 'male').length}</td>
                  </tr>
                  <tr>
                  <td colspan="2">Total number of female students:{students.filter(student => student.gender === 'female').length}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Hostelers: {students.filter(student => student.residency === 'Hostel').length}</td>
                  </tr>
                  <tr>
                  <td colspan="2">Day-Scholars: {students.filter(student => student.residency === 'DayScholar').length}</td>
                  </tr>

                  <tr>
                    <td>Male & Hostel: {students.filter(student => student.residency === 'Hostel' && student.gender === 'male').length}</td>
                    <td>Male & DayScholar: {students.filter(student => student.residency === 'DayScholar' && student.gender === 'male').length}</td>
                  </tr>

                  <tr>
                    <td>Female & Hostel: {students.filter(student => student.residency === 'Hostel' && student.gender === 'female').length}</td>
                    <td>Female & DayScholar: {students.filter(student => student.residency === 'DayScholar' && student.gender === 'female').length}</td>
                  </tr>

                  <tr>
                  </tr>
                </table>
              </div>
            </div>

            <div className="branchWise">
              <div className="branchWiseHeading">
                <p>Branch wise analysis</p>
              </div>
                <div className="branchWiseInner">
                  <table>
                    <tr>
                      <td>CSE: {students.filter(student => student.branch === 'CSE').length}</td>
                      <td>CSIT: {students.filter(student => student.branch === 'CSIT').length}</td>
                      <td>IOT: {students.filter(student => student.branch === 'IOT').length}</td>
                    </tr>
                    <tr>
                       
                        <td>AIDS: {students.filter(student => student.branch === 'AIDS').length}</td>
                        <td>ECE: {students.filter(student => student.branch === 'ECE').length}</td>
                        <td>ECM: {students.filter(student => student.branch === 'ECM').length}</td>
                    </tr>
                    <tr>
                        <td>EEE: {students.filter(student => student.branch === 'EEE').length}</td>
                        <td>Mech: {students.filter(student => student.branch === 'Mech').length}</td>
                        <td>Civil: {students.filter(student => student.branch === 'Civil').length}</td>
                    </tr>
                    <tr>
                      <td>BioTech: {students.filter(student => student.branch === 'BioTech').length}</td>
                        <td>BBA: {students.filter(student => student.branch === 'BBA').length}</td>
                        <td>BA-LLB: {students.filter(student => student.branch === 'BA-LLB').length}</td>
                    </tr>
                    <tr>
                        <td>BCA: {students.filter(student => student.branch === 'BCA').length}</td>
                        <td>B.Com: {students.filter(student => student.branch === 'B.Com').length}</td>
                        <td>Hotel Management: {students.filter(student => student.branch === 'Hotel Management').length}</td>
                    </tr>
                    <tr>
                      <td>BA-IAS: {students.filter(student => student.branch === 'BA-IAS').length}</td>
                      <td>MBA: {students.filter(student => student.branch === 'MBA').length}</td>
                      <td>MCA: {students.filter(student => student.branch === 'MCA').length}</td>
                    </tr>
                    <tr>
                      <td>Visual Communications: {students.filter(student => student.branch === 'Visual Communications').length}</td>
                      <td>BArch: {students.filter(student => student.branch === 'BArch').length}</td>
                    </tr>
                  </table>
                </div>
              </div>



              <div className="interestWise">
                <div className="interestWiseHeading">
                  <p>Domain wise analysis</p>
                </div>
                <div className="interestWiseInner">
                  <table>
                    <tr>
                      <td>Smart Village Revolution: {students.filter(student => student.interest === 'Smart Village Revolution').length}</td>

                      <td>Ap Panchayat Raj & Rural Development: {students.filter(student => student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    </tr>
                    <tr>
                      <td>AP Krishna & Godavari Canal Cleaning Project: {students.filter(student => student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>

                      <td>AP Disaster Management System: {students.filter(student => student.interest === 'AP Disaster Management System').length}</td>
                    </tr>

                    <tr>
                      <td>AP Fisheries Department: {students.filter(student => student.interest === 'AP Fisheries Department').length}</td>
                      <td>AP Health Department: {students.filter(student => student.interest === 'AP Health Department').length}</td>
                    </tr>
                    <tr>
                      <td>Ap Tourism Department: {students.filter(student => student.interest === 'Ap Tourism Department').length}</td>
                      <td>Ap Cultural Department: {students.filter(student => student.interest === 'Ap Cultural Department').length}</td>
                    </tr>

                    <tr>
                      <td>Ap Science & Technology Department: {students.filter(student => student.interest === 'Ap Science & Technology Department').length}</td>
                      
                      <td>Ap Handloom & Textiles Department: {students.filter(student => student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    </tr>

                    <tr>
                      <td>Ap Tribal Welfare Department: {students.filter(student => student.interest === 'Ap Tribal Welfare Department').length}</td>
                      <td>Red Cross Organization: {students.filter(student => student.interest === 'Red Cross Organization').length}</td>
                    </tr>
                    <tr>
                      <td>UNICEF: {students.filter(student => student.interest === 'UNICEF').length}</td>
                    </tr>
                  </table>
                </div>
              </div>

          </div>

          <div className="division-info">
            <div className="division-info-one">
            <div className="lightgreen light">
                <div className="lightgreen-one">
                  <span>Total Count: </span>
                </div>
                <div className="lightgreen-two">
                </div>
            </div>
            <div className="lightblue light">
              <div className="lightblue-on">
              <span>Male Count: </span>
              </div>
              <div className="lightblue-two">
              </div>

            </div>
            <div className="lightpink light">
              <div className="lightpink-one">
              <span>Female Count: </span>
              </div>
              <div className="lightpink-two">

              </div>

            </div>

            </div>
            <div className="division-info-two">
                <h1>District & Interest Detailed Analysis</h1>
            </div>
          </div>

          <div className="division">
              <table className='division-table'>
                <th>District Name</th>
                <th >SVR</th>
                <th>River Cleaning</th>
                <th>Fisheries</th>
                <th>Tourism</th>
                <th>Science & Tech</th>
                <th>Tribal</th>
                <th>UNICEF</th>
                <th>Panchayat</th>
                <th>Disaster</th>
                <th>Health</th>
                <th>Cultural</th>
                <th>Handlooms</th>
                <th>RedCross</th>
                <th>Total</th>

                <tr>
                  <td>Srikakulam</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>



                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>



                  <td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Srikakulam' && student.gender === 'female').length}</td>
                  </td>
                </tr>




                <tr>
                  <td>Kakinada</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kakinada').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kakinada' && student.gender === 'female').length}</td>
                  </td>
                </tr>



                
                


                <tr>
                  <td>East Godavari</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'East Godavari').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'East Godavari' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                
                <tr>
                  <td>Dr. B. R. Ambedkar Konaseema</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Dr. B. R. Ambedkar Konaseema' && student.gender === 'female').length}</td>
                  </td>
                </tr>




                <tr>
                  <td>Eluru</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Eluru').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Eluru' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>West Godavari</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'West Godavari').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'West Godavari' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>NTR</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'NTR').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'NTR' && student.gender === 'female').length}</td>
                  </td>
                </tr>





                <tr>
                  <td>Krishna</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Krishna').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Krishna' && student.gender === 'female').length}</td>
                  </td>
                </tr>

                


                <tr>
                  <td>Palnadu</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Palnadu').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Palnadu' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>Guntur</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Guntur').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Guntur' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>Bapatla</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Bapatla').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Bapatla' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>Prakasam</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Prakasam').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Prakasam' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>Sri Potti Sriramulu Nellore</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Potti Sriramulu Nellore' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>Kurnool</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Kurnool').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Kurnool' && student.gender === 'female').length}</td>
                  </td>
                </tr>



                <tr>
                  <td>Nandyal</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Nandyal').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Nandyal' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>Anantapuramu</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anantapuramu' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>Sri Sathya Sai</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Sri Sathya Sai' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>YSR</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'YSR').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'YSR' && student.gender === 'female').length}</td>
                  </td>
                </tr>

                <tr>
                  <td>Annamayya</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Annamayya').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Annamayya' && student.gender === 'female').length}</td>
                  </td>
                </tr>



                <tr>
                  <td>Tirupati</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Tirupati').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Tirupati' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>Chittoor</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Chittoor').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Chittoor' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>Parvathipuram Manyam</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Parvathipuram Manyam' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>Vizianagaram</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Vizianagaram' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>Visakhapatnam</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Visakhapatnam' && student.gender === 'female').length}</td>
                  </td>
                </tr>



                <tr>
                  <td>Alluri Sitharama Raju</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Alluri Sitharama Raju' && student.gender === 'female').length}</td>
                  </td>
                </tr>


                <tr>
                  <td>Anakapalli</td>
                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male' && student.interest === 'Smart Village Revolution').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female' && student.interest === 'Smart Village Revolution').length}</td>
                  </td>
                  
                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male' && student.interest === 'AP Fisheries Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female' && student.interest === 'AP Fisheries Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male' && student.interest === 'Ap Tourism Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female' && student.interest === 'Ap Tourism Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male' && student.interest === 'UNICEF').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female' && student.interest === 'UNICEF').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male' && student.interest === 'AP Disaster Management System').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female' && student.interest === 'AP Disaster Management System').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male' && student.interest === 'AP Health Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female' && student.interest === 'AP Health Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male' && student.interest === 'Ap Cultural Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female' && student.interest === 'Ap Cultural Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male' && student.interest === 'Red Cross Organization').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female' && student.interest === 'Red Cross Organization').length}</td>
                  </td>

                  <td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'male').length}</td>
                    <td>{students.filter(student => student.districtName === 'Anakapalli' && student.gender === 'female').length}</td>
                  </td>
                </tr>
              </table>
            </div>

          <table>
              <thead className='tableheader'>
                <tr id='head'>
                  <th>Sno</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Gender
                  {/* <label htmlFor="genderFilter">Filter by Gender:</label> */}
                  <select id="genderFilter" value={genderFilter} onChange={handleGenderFilterChange}>
                    <option value="">All</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="prefernottosay">Prefer not to say</option>
                  </select>

                  </th>
                  <th>Branch
                  {/* <label htmlFor="branchFilter">Filter by Branch:</label> */}
                  <select id="branchFilter" value={branchFilter} onChange={handleBranchFilterChange}>
                    <option value="">All</option>
                    <option value="CSE">CSE</option>
                    <option value="CSIT">CSIT</option>
                    <option value="IOT">IOT</option>
                    <option value="AIDS">AIDS</option>
                    <option value="ECE">ECE</option>
                    <option value="ECM">ECM</option>
                    <option value="EEE">EEE</option>
                    <option value="Mech">Mech</option>
                    <option value="Civil">Civil</option>
                    <option value="BioTech">BioTech</option>
                    <option value="BBA">BBA</option>
                    <option value="BA-LLB">BA-LLB</option>
                    <option value="BCA">BCA</option>
                    <option value="B.Com">B.Com</option>
                    <option value="Hotel Management">Hotel Management</option>
                    <option value="BA-IAS">BA-IAS</option>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                    <option value="Visual Communications">Visual Communications</option>
                    <option value="BArch">BArch</option>
                  </select>
                  </th>
                  <th>Mobile</th>
                  <th>Parent Mobile</th>
                  <th>Residence</th>
                  <th>State
                    <select id="stateNameFilter" value={stateNameFilter} onChange={handlestateNameFilterChange}>
                      <option value="">All</option>
                      <option value="AndhraPradesh">ArunachalPradesh</option>
                      <option value="ArunachalPradesh">ArunachalPradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Haryana">Haryana</option>
                      <option value="HimachalPradesh">HimachalPradesh</option>
                      <option value="JammuKashmir">JammuKashmir</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="MadhyaPradesh">MadhyaPradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="TamilNadu">TamilNadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="UttarPradesh">UttarPradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="WestBengal">WestBengal</option>
                      <option value="AndamanAndNicobarIslands">AndamanAndNicobarIslands</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="DadraAndNagarHaveliAndDamanAndDiu">DadraAndNagarHaveliAndDamanAndDiu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="JammuAndKashmir">JammuAndKashmir</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                    </select>
                  </th>
                  <th>District
                    <select id="districtNameFilter" value={districtNameFilter} onChange={handledistrictNameFilterChange}>
                    <option value="">All</option>
                    <option value="Srikakulam">Srikakulam</option>
                    <option value="Parvathipuram Manyam">Parvathipuram Manyam</option>
                    <option value="Vizianagaram">Vizianagaram</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Alluri Sitharama Raju">Alluri Sitharama Raju</option>
                    <option value="Anakapalli">Anakapalli</option>
                    <option value="Kakinada">Kakinada</option>
                    <option value="East Godavari">East Godavari</option>
                    <option value="Dr. B. R. Ambedkar Konaseema">Dr. B. R. Ambedkar Konaseema</option>
                    <option value="Eluru">Eluru</option>
                    <option value="West Godavari">West Godavari</option>
                    <option value="NTR">NTR</option>
                    <option value="Krishna">Krishna</option>
                    <option value="Palnadu">Palnadu</option>
                    <option value="Guntur">Guntur</option>
                    <option value="Bapatla">Bapatla</option>
                    <option value="Prakasam">Prakasam</option>
                    <option value="Sri Potti Sriramulu Nellore">Sri Potti Sriramulu Nellore</option>
                    <option value="Kurnool">Kurnool</option>
                    <option value="Nandyal">Nandyal</option>
                    <option value="Anantapuramu">Anantapuramu</option>
                    <option value="Sri Sathya Sai">Sri Sathya Sai</option>
                    <option value="YSR">YSR</option>
                    <option value="Annamayya">Annamayya</option>
                    <option value="Tirupati">Tirupati</option>
                    <option value="Chittoor">Chittoor</option>
                    </select>

                  </th>
                  <th>Area of Interest

                  {/* <label htmlFor="interestFilter">Filter by Interest:</label> */}
                  <select id="interestFilter" value={interestFilter} onChange={handleInterestFilterChange}>
                    <option value="">All</option>
                    <option value="Smart Village Revolution">Smart Village Revolution</option>
                    <option value="Ap Panchayat Raj & Rural Development ">Ap Panchayat Raj & Rural Development</option>
                    <option value="AP Krishna & Godavari Canal Cleaning Project.">AP Krishna & Godavari Canal Cleaning Project.</option>
                    <option value="AP Disaster Management System">AP Disaster Management System</option>
                    <option value="AP Fisheries Department">AP Fisheries Department</option>
                    <option value="AP Health Department">AP Health Department</option>
                    <option value="Ap Tourism Department">Ap Tourism Department</option>
                    <option value="Ap Cultural Department">Ap Cultural Department</option>
                    <option value="Ap Science & Technology Department">Ap Science & Technology Department</option>
                    <option value="Ap Handloom & Textiles Department">Ap Handloom & Textiles Department</option>
                    <option value="Ap Tribal Welfare Department">Ap Tribal Welfare Department</option>
                    <option value="Red Cross Organization">Red Cross Organization</option>
                    <option value="UNICEF">UNICEF</option>
                  </select>
                  </th>
                  <th>Date and Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.idno}</td>
                    <td>{student.officialName}</td>
                    <td>{student.gender}</td>
                    <td>{student.branch}</td>
                    <td>{student.mobile_number}</td>
                    <td>{student.parent_mobile}</td>
                    <td>{student.residency}</td>
                    <td>{student.stateName}</td>
                    <td>{student.districtName}</td>
                    <td>{student.interest}</td>
                    <td>{student.Date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      ) : (
        <form className='AccessDBPage' onSubmit={handleSubmit}>
          <h1>Before we proceed <br />please provide login credentials</h1>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Admin Credentials' />
          
          <button type='submit'>Access DataBase</button>
        </form>
      )}
    </div>
  );
};

export default StudentList;
