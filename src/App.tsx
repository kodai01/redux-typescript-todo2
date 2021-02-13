import React, { useState } from 'react';
import TaskList from './Components/TaskList'
import TaskInput from './Components/TaskInput'
import {Task} from './Types'
import './App.css';
const initialState: Task[] = [
  {
    id: 2,
    title: '次にやるやつ',
    done: false
  },{
    id: 1,
    title: 'はじめにやるやつ',
    done: true
  }
]

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState)
  
  return (
    <div>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  )
}

export default App
