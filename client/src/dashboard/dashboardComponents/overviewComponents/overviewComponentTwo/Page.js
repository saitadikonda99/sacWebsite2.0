import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import './Page.css';

const departments = [
  "Department of Computer Science and Engineering",
  "Department of Electronics and Communication Engineering",
  "Department of Electrical and Electronics Engineering",
  "Department of Civil Engineering",
  "Department of Mechanical Engineering",
  "Department of Aerospace Engineering",
  "Department of Biotechnology",
  "Department of Food Technology",
  "Department of Chemical Engineering",
  "Department of Petroleum Engineering",
  "Department of Architecture",
  "Department of Mathematics",
  "Department of Physics",
  "Department of Chemistry",
  "Department of English",
  "Department of Commerce",
  "Department of Management Studies (MBA)",
  "Department of Hotel Management",
  "Department of Pharmacy"
];

const Page = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [studentsLog, setStudentsLog] = useState([]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

 

  const chartData = {
    labels: departments,
    datasets: [{
      label: 'Student Visited',
      data: data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(255, 159, 64, 0.4)',
        'rgba(255, 205, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(201, 203, 207, 0.4)',
        'rgba(221, 103, 107, 0.4)',
        'rgba(201, 203, 207, 0.4)',
        'rgba(201, 203, 207, 0.4)',
        'rgba(255, 159, 64, 0.4)',
        'rgba(255, 205, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(201, 203, 207, 0.4)',
        'rgba(221, 103, 107, 0.4)',
        'rgba(201, 203, 207, 0.4)',
        'rgba(201, 203, 207, 0.4)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
        'rgb(201, 203, 207)',
        'rgb(201, 203, 207)',
        'rgb(201, 203, 207)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
        'rgb(201, 203, 207)',
        'rgb(201, 203, 207)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  const chartOptions = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      }
    }
  };

  function calculateDuration(inTime, outTime) {
    const inTimeObj = new Date(`2000-01-01T${inTime}`);
    const outTimeObj = new Date(`2000-01-01T${outTime}`);
    const durationMs = outTimeObj - inTimeObj;
    const durationHours = durationMs / (1000 * 60 * 60);
    return `${durationHours.toFixed(1)} hours`;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='overviewComponentTwo'>
      <div className="overviewComponentTwo-container">
        <div className="overviewComponentTwo-header">
          <div className="overviewComponentTwo-header-in">
            <h1>Student Visit Analysis based on Branch</h1>
            <Button
              style={{ background: "rgb(0, 0, 0)", fontWeight: "bold", textTransform: "none" }}
              className='button-tv'
              variant="contained"
              onClick={handleClickOpen} // Assign handleClickOpen to onClick event
            >
              Tabular View
            </Button>
          </div>
        </div>
        <div className="overviewComponentTwo-one">
          <div className="overviewComponentTwo-one-in">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>

        <Dialog open={open} onClose={handleClose} maxWidth="md">
          <DialogTitle style={{ display: 'flex', justifyContent: 'space-between' }} id="responsive-dialog-title">
            Analysis based on branch [{new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')} - {new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')}]
            <Button autoFocus onClick={handleClose}>Close Pane</Button>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr style={{ backgroundColor: "lightgrey", border: "1px solid black" }}>
                    <th style={{ border: "1px solid black" }}>Sno</th>
                    <th style={{ border: "1px solid black" }}>Department</th>
                    <th style={{ border: "1px solid black" }}>Student Count</th>
                  </tr>
                </thead>

                <tbody>
                {departments.map((department, index) => (
                  <tr  style={{ border: "1px solid black" }} key={index}>
                    <td style={{ border: "1px solid black", textAlign: 'center', padding: '2px' }}>{index + 1}</td>
                    <td style={{ border: "1px solid black", textAlign: 'center', padding: '2px' }}>{department}</td>
                    <td style={{ border: "1px solid black", textAlign: 'center', padding: '2px' }}>{data[index]}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </DialogContentText>
          </DialogContent>
          
        </Dialog>
      </div>
    </div>
  );
}

export default Page;