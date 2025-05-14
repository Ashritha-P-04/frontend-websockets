
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Files from './Components/Files';
import Menu from './Customers/Menu';
import Billing from './Billing/Billing';

function App() {
  return (
    <div className="App">
      {/* Navbar placed outside Routes so it appears on all pages */}
      {/* <Navbar /> */}
      
      <Routes>
        <Route path="/" element={<Files />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bill" element={<Billing></Billing>}></Route>
      </Routes>
    </div>
  );
}



export default App;
