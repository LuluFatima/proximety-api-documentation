import logo from './logo.svg';
import './App.css';
import 'rapidoc';
import Select from 'react-select';
import React, { useState } from 'react';
import ServiceList from './components/ServiceList';


function App() {
  

  return (
    <div className="App">
        <ServiceList/>
     </div>
  );
}

export default App;
