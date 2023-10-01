import React, { useState, useEffect } from 'react';

function RegistrationTable() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/registrations') // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setRegistrations(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ' + error.message);
      });
  }, []);

  // Function to render activities as a list
  const renderActivities = (activities) => {
    const activityList = activities.split(';').filter(Boolean);
    return (
      <ul>
        {activityList.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Registration Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>University ID</th>
            <th>Department</th>
            <th>Year</th>
            <th>ESO</th>
            <th>TEC</th>
            <th>CLH</th>
            <th>IIE</th>
            <th>HWB</th>
            <th>Residence</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration) => (
            <tr key={registration.ID}>
              <td>{registration.ID}</td>
              <td>{registration.university_id}</td>
              <td>{registration.Department}</td>
              <td>{registration.Year}</td>
              <td>{registration.ESO}</td>
              <td>{registration.TEC}</td>
              <td>{registration.CLH}</td>
              <td>{registration.IIE}</td>
              <td>{registration.HWB}</td>
              <td>{registration.Residence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegistrationTable;
