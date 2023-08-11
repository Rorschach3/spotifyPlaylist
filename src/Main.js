import React, { useState, useEffect } from 'react';
import Mainpage from './Mainpage'
import './Main.css';
import Nav from './Nav'

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
