import React, { useState, useEffect } from 'react'; 
import { Routes, Route } from 'react-router-dom'; 

import './App.css'; 

//import components here 

//import pages here 
import Home from '../src/pages/Home/Home';
import ClubsPage from '../src/ClubPages/clubspage';
import ZeroOne from './ClubPages/TechnicalClubs/ZeroOne/Cpage'
import Dashboard from '../src/dashboard/DashboardApp';
import Leadership from '../src/pages/Leadership/Page';
import CompletedEvents from '../src/pages/CompletedEvents/Page';

function App() {
  const [isLoading, setLoading] = useState(true);
  
  function someRequest() {
    return new Promise(resolve => setTimeout(() => resolve(),4000));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });
  if (isLoading) {
    return null;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zeroOne" element={<ZeroOne/>} />
        <Route path="/studentclubs" element={<ClubsPage/>} />
        <Route path="/leadership" element={<Leadership/>} />
        <Route path="/dashboard/*" element={<Dashboard/>} />
        <Route path="/completedevents" element={<CompletedEvents/>} />
      </Routes>
    </div>
  );
}

export default App;
