import React, { useState, useEffect } from 'react';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import Gallery from './components/Gallery';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  
  const [team, setTeam] = useState([]);

  const fetchTeamData = async _ => {
      const response = await fetch("http://www.testdomain.com/v1/api/teamdata");
      const responseJSON = await response.json();
      setTeam(responseJSON)
  };

  useEffect(() => {
      fetchTeamData();
  }, [])


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team team={team} />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
