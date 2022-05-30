import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
