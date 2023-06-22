import React, { Fragment, useState, useEffect, useContext } from 'react';

import './SIDTopNav.css';
import { AuthContext, useAuth } from '../../../../../auth-context/context-provider';
import { Navigate } from 'react-router-dom';
const SIDTopNav = ({ setAuth }) => {
  const [id, setId] = useState("");
  const { user, logout } = useAuth();

  async function getId() {
    try {
      const response = await fetch("http://localhost:8081/InternAttendance", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setId(parseRes.id);
    } catch (err) {
      console.error(err.message);
    }
  }

  const handleClick = (e) => {
    return <Navigate to='/home/internlogin' />;
  };
  useEffect(() => {
    getId();
  }, []);

  return (
    <div className="SIDTopNavComponent">
      <div className="SIDTopNavContainer">
        <div className="SIDTopNav-one">
          <div className="SIDTopNav-one-inner">
            <div className="SIDTN-one-one">
              <h1>Social Internship Student DashBoard</h1>
            </div>

            {user? (
              <div className="SIDTN-one-two">
              <span>{id}</span>
              <button onClick={() => logout()}>Logout</button>
            </div>

            ) : (

              <div className="SIDTN-one-two">
              <span>{id}</span>
              <button onClick={handleClick}>login</button>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIDTopNav;

