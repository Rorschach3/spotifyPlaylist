import React, { useState, useEffect } from 'react';
import Mainpage from './Mainpage.js'
import SignUpForm from './components/SignUpForm/SignUpForm.js';
import Login from './components/LoginForm/Login.js';
import WebPlayback from './pages/WebApp/WebPlayback.js';
import Nav from './Nav';
import './Main.css';

function Main() {

  return (
  <>
    <Nav />
    <Mainpage />
    <WebPlayback />
    <Login />
    <SignUpForm /> 
  </>
    );
}

export default Main;
