import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const displayName = "Normal"
  const [tasks, setTasks] =useState([
    {
        'id':1,
        'task': "Work on the cycle",
        'priority':'High'
    },
    {
        'id':2,
        'task': "Play",
        'priority':'High'
    },
    {
        'id':3,
        'task': "Fix issues",
        'priority':'High'
    }
])
  return (
    <div className="container">
      <Header title ={"Tracker"}/>
      <h1>{displayName}</h1>
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;
