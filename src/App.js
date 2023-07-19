import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Role from './Role';
import Employee from './Employee';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="top-nav">
          <h1>Employee Management</h1>
        </header>
        <div className='main-container2 '>
          <Navigation />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Role />} /> 
              <Route path="/home" element={<Role />} />
              <Route path="/employee" element={<Employee />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
