import './App.css';
import CurrentTeam from './CurrentTeam';
import React, { useState, useEffect } from 'react';
import initialTeam from './data';
import Form from './Form';

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}
function App() {
  
  const [currentTeam, setCurrentTeam] = useState([])
  // setCurrentTeam(initialTeam);
  
  useEffect(() =>{
    setCurrentTeam(initialTeam);
  }, [])
  const [formValues, setFormValues] = useState(initialFormValues);
 
  // clarify how exactly updateForm is working, what is spread doing and what is bracket notation
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newMember ={
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    };
    setCurrentTeam(initialTeam.concat(newMember));
  }
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
    <Form values={formValues} update={updateForm} submit={submitForm}/>
    </div>
  );
}

export default App;
