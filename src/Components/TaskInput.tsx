import React, { useState } from 'react'
import { addTask } from '../modules/taskModules'
import { useDispatch } from 'react-redux';

const TaskInput: React.FC = () => {
  const dispatch = useDispatch()
  const [inputTitle, setInputTitle] = useState("")
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }
  const handleSubmit = () => {
    dispatch(addTask(inputTitle))
    setInputTitle("")
  }
  return (
    <div className="input-form">
      <div className="inner">
        <input type="text" className="input" value={inputTitle} onChange={handleInputChange}/>
        <button onClick={handleSubmit} className="btn is-primary">追加</button>
      </div>
    </div>
  )
}

export default TaskInput
