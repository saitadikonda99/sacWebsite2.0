import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const options = [
  "Srikakulam",
  "Parvathipuram Manyam",
  "Vizianagaram",
  "Visakhapatnam",
  "Alluri Sitharama Raju",
  "Anakapalli",
  "Kakinada",
  "East Godavari",
  "Dr. B. R. Ambedkar Konaseema",
  "Eluru",
  "West Godavari",
  "NTR",
  "Krishna",
  "Palnadu",
  "Guntur",
  "Bapatla",
  "Prakasam",
  "Sri Potti Sriramulu Nellore",
  "Kurnool",
  "Nandyal",
  "Anantapuramu",
  "Sri Sathya Sai",
  "YSR",
  "Annamayya",
  "Tirupati",
  "Chittoor",
];

const BapatlaGraph = () => {
  const [students, setStudents] = useState([]);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const data1 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'Smart Village Revolution').length, 
        
        students.filter(student => student.districtName === selectedOption && student.gender === 'female' && student.interest === 'Smart Village Revolution').length],

        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const data3 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [
            students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'AP Fisheries Department').length,
            students.filter(student => student.districtName === selectedOption && student.gender === 'female' && student.interest === 'AP Fisheries Department').length],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const data4 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [
            students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'Ap Tourism Department').length,
            students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'Ap Tourism Department').length],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const data5 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [
            students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'Ap Science & Technology Department').length,
            students.filter(student => student.districtName === selectedOption && student.gender === 'female' && student.interest === 'Ap Science & Technology Department').length],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const data6 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [
            students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'Ap Tribal Welfare Department').length,
            students.filter(student => student.districtName === selectedOption && student.gender === 'female' && student.interest === 'Ap Tribal Welfare Department').length],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const data7 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [
            students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'UNICEF').length,
            students.filter(student => student.districtName === selectedOption && student.gender === 'female' && student.interest === 'UNICEF').length],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const data8 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [
            students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'Ap Panchayat Raj & Rural Development ').length,
            students.filter(student => student.districtName === selectedOption && student.gender === 'female' && student.interest === 'Ap Panchayat Raj & Rural Development ').length],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const data9 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [
            students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'AP Disaster Management System').length,
            students.filter(student => student.districtName === selectedOption && student.gender === 'female' && student.interest === 'AP Disaster Management System').length],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const data10 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [
            students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'AP Health Department').length,
            students.filter(student => student.districtName === selectedOption && student.gender === 'female' && student.interest === 'AP Health Department').length],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };
  const data11 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [
            students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'Ap Cultural Department').length,
            students.filter(student => student.districtName === selectedOption && student.gender === 'female' && student.interest === 'Ap Cultural Department').length],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const data12 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [
            students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'Ap Handloom & Textiles Department').length,
            students.filter(student => student.districtName === selectedOption && student.gender === 'female' && student.interest === 'Ap Handloom & Textiles Department').length],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const data13 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [
            students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'Red Cross Organization').length,
            students.filter(student => student.districtName === selectedOption && student.gender === 'female' && student.interest === 'Red Cross Organization').length],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
    
  };

  const data14 = {
    labels: ['Red', 'Blue'],
    datasets: [
      {
        data: [
            students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'Red Cross Organization').length,
            students.filter(student => student.districtName === selectedOption && student.gender === 'female' && student.interest === 'Red Cross Organization').length],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
    
  };

  const data2 = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [students.filter(student => student.districtName === selectedOption && student.gender === 'male' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length, students.filter(student => student.districtName === selectedOption && student.gender === 'female' && student.interest === 'AP Krishna & Godavari Canal Cleaning Project.').length],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  useEffect(() => {
    axios
      .get('/fetch')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='GunturGraphComponent'>
      <div className="SG-Heading">
        <h1>{selectedOption}</h1>
      </div>
      <div>
        <select value={selectedOption} onChange={handleOptionChange}>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="GunturGraphContainer">
        <div className="SG-one">
          <div className='SG-one-one'>
            {data1.datasets[0].data.every(val => val === 0) ? (
              <p>The data sets are zero</p>
            ) : (
              <Pie data={data1} />
            )}
            <h4>Total Boys & Girls</h4>
          </div>
          <div className='SG-one-two'>
          <div className='SG-one-one'>
            {data2.datasets[0].data.every(val => val === 0) ? (
              <p>The data sets are zero</p>
            ) : (
              <Pie data={data1} />
            )}
            <h4>Total Boys & Girls</h4>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BapatlaGraph;
