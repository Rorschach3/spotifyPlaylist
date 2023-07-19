import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Login from './Login';


function Mainpage() {
  return (

    <BrowserRouter>
    <Nav />
    <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="Login" element={<Login />} />
          <Route path="WebPlayback" element={<WebPlayback />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default Mainpage;