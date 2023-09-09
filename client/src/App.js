import React, { useState, useEffect } from 'react'; 
import { Routes, Route } from 'react-router-dom'; 

import './App.css'; 

//import components here 

//import pages here 
import Home from '../src/pages/Home/Home';
import ZeroOne from './ClubPages/TechnicalClubs/ZeroOneCodeClub/Cpage'
import Dashboard from '../src/dashboard/DashboardApp';
import Leadership from '../src/pages/Leadership/Page';
import CompletedEvents from '../src/pages/CompletedEvents/Page';
import ClubsPage from '../../client/src/ClubPages/ClubPageApp';
import Events from './pages/Events/Event';
import Gallery from './pages/Gallery/Gallery';
import Blogs from './pages/Blogs/Blogs';
import Terms from './pages/TC/Tc';
import NotFound from './pages/NotFound/NotFound';


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
        <Route path="clubs/*" element={<ClubsPage/>} />
        <Route path="/studentclubs" element={<ClubsPage/>} />
        <Route path="/leadership" element={<Leadership/>} />
        <Route path="/dashboard/*" element={<Dashboard/>} />
        <Route path="/completedevents" element={<CompletedEvents/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
