import './App.css'
import data from "./data.js"
import Learner from './components/learner.jsx'
import SearchBar from './components/SearchBar.jsx';
import { useState } from 'react';


function App() {

  const[name ,setName] = useState("");


  const filteredLearners = data.filter(learner => {
      if(name === "") {
        return true;

      } else {
     return learner.name.toLowerCase().includes(name.toLowerCase())
      }
  });
  
  const learners = filteredLearners.map(d =>( <Learner{ ...d}/>)) 

  return (
    <>

     <SearchBar text = {name} setText = {setName}/>
    {learners}
 
    </>
  )
}

export default App
