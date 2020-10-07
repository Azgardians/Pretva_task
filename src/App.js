import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>      
        </div>  
      </BrowserRouter>
  );
}

export default App;
