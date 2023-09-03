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

const Page = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [studentsLog, setStudentsLog] = useState([]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    axios
      .get('http://localhost:8081/getStudentsLog')
      .then(response => {
        const years = ['First Years', 'Second Years', 'Third Years', 'Fourth Years'];

        const yearData = years.map((year, index) => {
          const yearCode = (2300 - index * 100).toString();
          const yearStudents = response.data.filter(student => student.id.startsWith(yearCode));
          const malesCount = yearStudents.filter(student => student.gender.toLowerCase() === 'male').length;
          const femalesCount = yearStudents.filter(student => student.gender.toLowerCase() === 'female').length;
          const totalCount = yearStudents.length;

          return {
            year,
            males: malesCount,
            females: femalesCount,
            total: totalCount
          };
        });

        setData(yearData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const chartData = {
    labels: data.map(entry => entry.year),
    datasets: [
      {
        label: 'Males',
        data: data.map(entry => entry.males),
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Females',
        data: data.map(entry => entry.females),
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      // {
      //   label: 'Total',
      //   data: data.map(entry => entry.total),
      //   backgroundColor: 'rgba(255, 205, 86, 0.4)',
      //   borderColor: 'rgba(255, 205, 86, 1)',
      //   borderWidth: 1
      // }
    ]
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        stacked: true, // Display the bars as a stack
      },
      y: {
        stacked: true, // Display the bars as a stack
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    },
    responsive: true,
    datasets: [
      {
        label: 'Males',
        data: data.map(entry => entry.males),
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        barThickness: 1 // Set the default bar thickness to 1 for males, females, and total
      },
      {
        label: 'Females',
        data: data.map(entry => entry.females),
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        barThickness: 1 // Set the default bar thickness to 1 for males, females, and total
      },
      {
        label: 'Total',
        data: data.map(entry => entry.total),
        backgroundColor: 'rgba(255, 205, 86, 0.4)',
        borderColor: 'rgba(255, 205, 86, 1)',
        borderWidth: 1,
        barThickness: 1 // Set the default bar thickness to 1 for males, females, and total
      }
    ]
  };
  
  

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
            <h1>Student Visit Analysis based on Year</h1>
            <Button
              style={{ background: "rgb(0, 0, 0)", fontWeight: "bold", textTransform: "none" }}
              className='button-tv'
              variant="contained"
              onClick={handleClickOpen}
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
            Analysis based on year [{new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')} - {new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')}]
            <Button autoFocus onClick={handleClose}>Close Pane</Button>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr style={{ backgroundColor: "lightgrey", border: "1px solid black" }}>
                    <th style={{ border: "1px solid black" }}>Year</th>
                    <th style={{ border: "1px solid black" }}>Males</th>
                    <th style={{ border: "1px solid black" }}>Females</th>
                    <th style={{ border: "1px solid black" }}>Total</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map(entry => (
                    <tr key={entry.year} style={{ border: "1px solid black" }}>
                      <td style={{ border: "1px solid black", textAlign: 'center', padding: '2px' }}>{entry.year}</td>
                      <td style={{ border: "1px solid black", textAlign: 'center', padding: '2px' }}>{entry.males}</td>
                      <td style={{ border: "1px solid black", textAlign: 'center', padding: '2px' }}>{entry.females}</td>
                      <td style={{ border: "1px solid black", textAlign: 'center', padding: '2px' }}>{entry.total}</td>
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