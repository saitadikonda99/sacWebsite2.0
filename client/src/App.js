import React, { useState, useEffect } from 'react'; 
import { Routes, Route } from 'react-router-dom'; 

import './App.css'; 

//import components here 

//import pages here 
import Home from '../src/pages/Home/Home';


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
      </Routes>
    </div>
  );
}

export default App;
