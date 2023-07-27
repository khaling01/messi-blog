import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Setting from './pages/settings/Setting';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  const user = true;
  return (
    <div className="App">
      <>
        <Router>
          <TopBar />
        <Routes>
          <Route path="/" exact element={<Home/>}></Route> 
          <Route path="/register" element={ user? <Home /> : <Register />} ></Route>
          <Route path="/login" element={ user? <Home /> : <Login />} ></Route>
          <Route path="/settings" element={ user? <Home /> : <Setting />} ></Route>
          <Route path="/posts/:id" element ={<Single />}></Route>
        </Routes>  
        </Router>
      </>
    </div>
  );
}

export default App;
