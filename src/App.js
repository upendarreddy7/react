import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard'
import Activities from './components/pages/Activities'
import Eventrates from './components/pages/Eventrates'
import Locations from './components/pages/Locations'
import Market from './components/pages/Market'
import Myprofile from './components/pages/Myprofile'
import Signout from './components/pages/Signout'
import Virtuallocations from './components/pages/Virtuallocations'




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={Dashboard} />
        <Route path='/Activities' element={Activities} />
        <Route path='/Eventrates' element={Eventrates} />
        <Route path='/Locations' element={Locations} />
        <Route path='/Signout' element={Signout} />
        <Route path='/Market' element={Market} />
        <Route path='/Myprofile' element={Myprofile} />
        <Route path='/Virtuallocations' element={Virtuallocations} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
