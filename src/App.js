import './App.css';
import CurrentTeam from './CurrentTeam';
import React, { useState, useEffect } from 'react';
import initialTeam from './data';
import Form from './Form';

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
      <h1>Team Builder</h1>
      <h1>Current Team</h1>
  
    {
      currentTeam.map(member => {
        return(
          <CurrentTeam member={member} key = {member.id}/>
        )
      })
    }
    <h1>Add member</h1>
    <Form />
    </div>
  );
}

export default App;
