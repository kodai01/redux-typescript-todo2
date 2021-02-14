import React from 'react';
import TaskList from './Components/TaskList'
import TaskInput from './Components/TaskInput'
import './App.css';

const App: React.FC = () => {
  
  return (
    <div>
      <TaskInput />
      <TaskList />
    </div>
  )
}

export default App
