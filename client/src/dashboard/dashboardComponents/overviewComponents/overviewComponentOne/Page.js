import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './Page.css';

const BarChart = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const today = new Date();
  const labels = [];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  for (let i = 1; i <= 10; i++) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    const day = date.getDate();
    const month = date.getMonth();
    const monthName = monthNames[month];
    const suffix = getOrdinalSuffix(day);
    labels.unshift(`${day}${suffix} ${monthName}`);
  }

  function getOrdinalSuffix(day) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const lastDigit = day % 10;
    const suffix = lastDigit >= 1 && lastDigit <= 3 && (day < 11 || day > 13)
      ? suffixes[lastDigit]
      : suffixes[0];
    return suffix;
  }

  function calculateDuration(inTime, outTime) {
    const inTimeObj = new Date(`2000-01-01T${inTime}`);
    const outTimeObj = new Date(`2000-01-01T${outTime}`);
    const durationMs = outTimeObj - inTimeObj;
    const durationHours = durationMs / (1000 * 60 * 60);
    return `${durationHours.toFixed(1)} hours`;
  }

  const studentsLog = [
    {
      sno: 1,
      id: "ABC123",
      logDate: new Date(),
      branch: "Computer Science",
      inTime: "09:00 AM",
      purpose: "Meeting",
      outTime: "11:30 AM",
    },
    {
      sno: 2,
      id: "XYZ456",
      logDate: new Date(),
      branch: "Electronics",
      inTime: "10:30 AM",
      purpose: "Study",
      outTime: "01:00 PM",
    },

  ];

  const studentsLogCount = [300, 270, 410, 511, 310, 250, 300, 411, 117, 355];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Students Visited',
      data: studentsLogCount,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const configForLine = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        legend: {
          display: false
        }
      }
    }
  };

  return (
    <div className='overviewComponentOne'>
      <div className="overviewComponentOne-container">
        <div className="overviewComponentOne-one">
          <div className="overviewComponentOne-one-in">
            <div className="overviewComponentOne-one-header">
              <div className="overviewComponentOne-one-header-in">
                <h1>Analysis of students' visit to SAC <span>[{new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')} - {new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')}]</span></h1>
                <Button style={{ background: "rgb(0, 0, 0)", fontWeight: "bold", textTransform: "none" }} className='button-tv' onClick={handleClickOpen} variant="contained">Tabular View</Button>
              </div>
            </div>
            <div className="overviewComponentOne-one-one">
              <div className="overviewComponentOne-one-one-in">
                <Line data={data} options={configForLine.options} />
              </div>
            </div>
          </div>
        </div>

        <Dialog open={open} onClose={handleClose} maxWidth="lg">
          <DialogTitle style={{ display: 'flex', justifyContent: 'space-between' }} id="responsive-dialog-title">
            Students Log [{new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')} - {new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')}]
            <Button autoFocus onClick={handleClose}>Close Pane</Button>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <table className="tablealt" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr style={{ backgroundColor: "lightgrey", border: "1px solid black" }}>
                    <th style={{ border: "1px solid black" }}>Sno</th>
                    <th style={{ border: "1px solid black" }}>ID</th>
                    <th style={{ border: "1px solid black" }}>Log Date</th>
                    <th style={{ border: "1px solid black" }}>Branch</th>
                    <th style={{ border: "1px solid black" }}>In-time</th>
                    <th style={{ border: "1px solid black" }}>Purpose</th>
                    <th style={{ border: "1px solid black" }}>Out-time</th>
                    <th style={{ border: "1px solid black" }}>Duration</th>
                  </tr>
                </thead>

                <tbody>
                <thead>
                  <tr style={{ backgroundColor: "lightgrey", border: "1px solid black" }}>
                    <th style={{ border: "1px solid black" }}>Sno</th>
                    <th style={{ border: "1px solid black" }}>ID</th>
                    <th style={{ border: "1px solid black" }}>Log Date</th>
                    <th style={{ border: "1px solid black" }}>Branch</th>
                    <th style={{ border: "1px solid black" }}>In-time</th>
                    <th style={{ border: "1px solid black" }}>Purpose</th>
                    <th style={{ border: "1px solid black" }}>Out-time</th>
                    <th style={{ border: "1px solid black" }}>Duration</th>
                  </tr>
                </thead>

                <tbody>
                  {studentsLog.map((student, index) => (
                    <tr style={{ border: "1px solid black" }} key={index}>
                      <td style={{ border: "1px solid black", textAlign: 'center', padding: '5px' }}>{student.sno}</td>
                      <td style={{ border: "1px solid black", textAlign: 'center', padding: '5px' }}>{student.id}</td>
                      <td style={{ border: "1px solid black", textAlign: 'center', padding: '5px' }}>{student.logDate.toLocaleDateString('en-GB')}</td>
                      <td style={{ border: "1px solid black", textAlign: 'center', padding: '5px' }}>{student.branch}</td>
                      <td style={{ border: "1px solid black", textAlign: 'center', padding: '5px' }}>{student.inTime}</td>
                      <td style={{ border: "1px solid black", textAlign: 'center', padding: '5px' }}>{student.purpose}</td>
                      <td style={{ border: "1px solid black", textAlign: 'center', padding: '5px' }}>{student.outTime}</td>
                      <td style={{ border: "1px solid black", textAlign: 'center', padding: '5px' }}>{calculateDuration(student.inTime, student.outTime)}</td>
                    </tr>
                  ))}
                </tbody>
                </tbody>
              </table>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BarChart;
