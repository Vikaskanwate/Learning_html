import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../src/App.css'
const App = () => {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")


  useEffect(() => {
    axios.get('http://localhost:8000/tasks/')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err))
  }, [])

  const addTask = () => {
    axios.post("http://localhost:8000/tasks/", { title, status: "pending" })
      .then(res => setTasks([...tasks, res.data.task]))
      .catch(err => console.error(err))
    setTitle("")
  }

  const updateTask = () => {
    axios.put(`http://localhost:8000/tasks/${id}`)
      .then(() => setTasks(tasks.map(t => t.id === id ? res.data : item)))
      .catch(err => console.error(err))
  }

  const deleteTask = (id) => {
    axios.delete(`http://localhost:8000/tasks/${id}`)
      .then(() => setTasks(tasks.filter(t => t.id !== id)))
      .catch(err => console.error(err));
  };
  return (
    <div className='app'>
      <h1>Task Manager</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            

            {task.title} - {task.status}

            <button className='delete-btn' onClick={() => deleteTask(task.id)}>Delete</button>
            <button className="update-btn" onClick={() => updateTask(task.id)}>update</button>
          
          </li>
        ))}
      </ul>
    </div>)
}

export default App