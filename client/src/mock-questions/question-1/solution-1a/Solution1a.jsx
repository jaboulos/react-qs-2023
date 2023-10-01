import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { prompt1text } from '../prompt-text-1';
import axios from 'axios';

export const Solution1a = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  // state variable to hold tasks
  const [tasks, setTasks] = useState([]);
  // state variable for creating tasks
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // fetch from api
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setTasks(res.data.slice(0, 5)))
      .catch((error) => console.error('Error fetching', error));
  }, []);

  const handleTogglePrompt = () => {
    setShowPrompt((prevState) => !prevState);
  };

  // add tasks to the UI after clicking add button
  const addTask = () => {
    // validation check, make sure the next text has content in the input
    if (newTaskTitle) {
      // make post request
      axios
        .post('https://jsonplaceholder.typicode.com/todos', {
          title: newTaskTitle,
          completed: false,
        })
        // then take the response and set it to the state
        .then((res) => setTasks([...tasks, res.data]))
        .catch((error) => console.error('Error occurred ==> ', error));
      // set new task state to empty
      setNewTaskTitle('');
    }
  };

  // toggle task status on UI (edit a task)
  const toggleTaskStatus = (id) => {
    // Find the task in the state first
    const foundTask = tasks.find((task) => task.id === id);
    // toggle the found tasks status
    const updatedTaskStatus = foundTask.completed ? false : true;
    // put request to update the task with the matching id, toggle status
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        ...foundTask,
        completed: updatedTaskStatus,
      })
      // update state
      .then((res) => {
        const updatedTaskList = tasks.map((task) =>
          task.id === id ? res.data : task
        );
        setTasks(updatedTaskList);
        console.log('tasks', tasks, 'updatedTaskList', updatedTaskList);
      })
      .catch((error) => console.error('Error', error));
  };

  // clear tasks with the status of 'completed'
  const filterCompletedTasks = () => {
    const filteredTasks = tasks.filter((task) => !task.completed);
    setTasks(filteredTasks);
  };

  // refresh task list
  const refresh = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    setTasks(res.data.slice(0, 5));
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <div>
        <div>
          <button onClick={goBack}>Back</button>
        </div>
        <p style={{ display: 'inline-block', marginRight: '10px' }}>
          Problem Description
        </p>
        <button
          onClick={handleTogglePrompt}
          style={{ display: 'inline-block' }}
        >
          <div>{showPrompt ? `Hide Prompt` : `Show Prompt`}</div>
        </button>
        <div>
          {showPrompt ? (
            <p style={{ border: '3px solid #ccc' }}>{prompt1text}</p>
          ) : null}
        </div>

        <input
          value={newTaskTitle}
          placeholder={'Enter task title...'}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <button
                onClick={() => {
                  toggleTaskStatus(task.id);
                }}
              >
                Toggle Task Status
              </button>
              {task.title} - {task.completed ? 'Complete' : 'Incomplete'}
            </li>
          ))}
        </ul>
        <button onClick={filterCompletedTasks}>Clear Completed Tasks</button>
        <button
          onClick={refresh}
          style={{ display: 'block', marginTop: '15px' }}
        >
          Refresh List
        </button>
      </div>
    </div>
  );
};
