import React, { Fragment, useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext, useAuth } from '../../../auth-context/context-provider';


const SIDashBoardLogin = () => {

  const {user, setUser, verifyAuth } = useAuth();
  console.log("user", user);

  const [inputs, setInputs] = useState({
    username: '',
    stpassword: ''
  });


  const { username, stpassword } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username, stpassword };
      // const response = await fetch('http://localhost:8081/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(body)
      // });


      fetch('http://localhost:8081/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then(async(data) => {
          console.log("data", data);
          await localStorage.setItem('user', JSON.stringify(data.user));
          await verifyAuth()
        });

      // const parseRes = await response.json();
      // if (parseRes.token) {
      //   localStorage.setItem('token', parseRes.token);

      //   toast.success('Login Successfully', {
      //     position: toast.POSITION.TOP_CENTER
      //   });
      // } else {
      //   toast.error(parseRes);
      // }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className='text-center my-5'>Login</h1>
      <ToastContainer />
      <form onSubmit={onSubmitForm}>
        <input
          type='text'
          name='username'
          placeholder='Please Input your username'
          className='form-control my-3'
          value={username}
          onChange={(e) => onChange(e)}
        />
        <input
          type='password'
          name='stpassword'
          placeholder='Enter Password'
          className='form-control my-3'
          value={stpassword}
          onChange={(e) => onChange(e)}
        />
        <button className='btn btn-success btn-block'>Submit</button>
      </form>
    </Fragment>
  );
};

export default SIDashBoardLogin;