import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

//import components here

//import pages here
import Home from "../src/pages/Home/Home";
import Leadership from "../src/pages/Leadership/Page";
import ClubsPage from "../../client/src/ClubPages/ClubPageApp";
import Events from "./pages/Events/Event";
import Gallery from "./pages/Gallery/Gallery";
import Blogs from "./pages/Blogs/BlogOne";
import Terms from "./pages/TC/Tc";
import Dashboard from "../src/pages/Dashboard/Page";
import NotFound from "./pages/NotFound/NotFound";
import Privacy from "./pages/Privacy/Privacy";
import SIL from "./pages/SIL/Page";
import CompletedEvents from './pages/CompletedEvent/Page';
import SocialMedia from './pages/SocialMedia/page';
import Feedback from "./pages/Feedback/Page";
import ViewFeedback from "./pages/Admin/Page";
import SHS from './pages/SHS/page';
import RegistrationTable from "./pages/SilRegistrations/RegistrationTable";
import RegistrationData from "./pages/SilRegistrations/RegistrationData";
import DepartmentWise from "./pages/SilRegistrations/DepartmentWise";

function App() {
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 4000));
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

  const routes = [
    { path: "/", element: <Home /> },
    { path: "clubs/*", element: <ClubsPage /> },
    { path: "/studentclubs", element: <ClubsPage /> },
    { path: "/leadership", element: <Leadership /> },
    { path: "/dashboard/*", element: <Dashboard /> },
    { path: "/completedevents", element: <CompletedEvents /> },
    { path: "/events", element: <Events /> },
    { path: "/terms", element: <Terms /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/privacy", element: <Privacy /> },
    { path: "*", element: <NotFound /> },
    { path: "/sil", element: <SIL /> },
    { path: "/completedevents", element: <CompletedEvents /> },
    { path: "/socialmedia", element: <SocialMedia/> },
    { path: "/Feedback", element: <Feedback/>},
    { path: "/viewFeedback", element: <ViewFeedback/>},
    { path: "/swachhatahiseva", element: <SHS/>},
    { path: "/registration", element: <RegistrationTable/>},
    { path: "/registrationdata", element: <RegistrationData/>},
    { path: "/departmentwise", element: <DepartmentWise/>}
    
  ];

  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
