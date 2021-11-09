import './App.css';
import CurrentTeam from './CurrentTeam';
import React, { useState, useEffect } from 'react'

const initialTeam = [{
  id: 0,
  name: "Sisyphus",
  email: "ih8zeus@ouroboros.net",
  role: "Struggler"
}]

function App() {
  const [currentTeam, setCurrentTeam] = useState([])
  // setCurrentTeam(initialTeam);
  console.log(initialTeam);
  useEffect(() =>{
    setCurrentTeam(initialTeam);
    console.log(currentTeam);
  }, [])
  return (
    <div>
      <h1>hello world</h1>
  
    {
      currentTeam.map(member => {
        return(
          <CurrentTeam member={member} key = {member.id}/>
        )
      })
    }
    </div>
  );
}

export default App;
