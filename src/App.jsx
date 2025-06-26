import './App.css'
import data from "./data.js"
import Learner from './components/learner.jsx'


function App() {
  
  const learners = data.map(d =>( <Learner{ ...d}/>)) 

  return (
    <>
    {learners}
    </>
  )
}

export default App
