export const prompt1text = `Below is a sample React interview question along with a brief problem statement. The question is designed to test your understanding of React components, state, and props:

### Problem Statement:

You are required to create a simple React application to manage a list of tasks. Each task has a title and a status (either 'Complete' or 'Incomplete').

Your application should meet the following requirements:

1. Display a list of tasks.
2. Allow the user to add new tasks.
3. Allow the user to mark tasks as 'Complete' or 'Incomplete'.
4. Provide a button to clear all completed tasks.

#### Bonus:
- Implement functionality to edit a task.
- Persist the tasks in local storage so that they are not lost when the page is refreshed.

### Evaluation Criteria:

- Proper use of React components, state, and props.
- Handling user events (e.g., button clicks).
- Implementing conditional rendering.
- (Bonus) Local storage manipulation for data persistence.
- (Bonus) Demonstrating an understanding of React's lifecycle methods or hooks (e.g., 'useEffect') to manage side effects like local storage updates.

### Deliverables:
- A working React application meeting the described requirements.
- Clear, well-organized code following React best practices.
- (Optional) A live demo of the application hosted on a platform like CodeSandbox or GitHub Pages.
- (Optional) A brief explanation of your design decisions and any challenges you encountered.

Feel free to ask if you would like clarification on any part of this problem or if you'd like additional information!`;

/*


// Importing necessary hooks and library from React and Axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Defining a functional component named TaskList
function TaskList() {

  // Declaring a state variable named 'tasks' with its initial value as an empty array
  const [tasks, setTasks] = useState([]);

  // Declaring a state variable named 'newTask' with its initial value as an empty string
  const [newTask, setNewTask] = useState('');

  // useEffect hook to execute code on component mount (similar to componentDidMount in class components)
  useEffect(() => {

    // Attempting to load tasks from local storage when the component mounts
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {

      // If tasks are found in local storage, parsing and setting them to state
      setTasks(JSON.parse(savedTasks));
    } else {

      // If no tasks in local storage, fetching tasks from an external API
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => setTasks(response.data))  // On success, setting fetched tasks to state
        .catch(error => console.error('Error fetching tasks:', error));  // Logging any errors to console
    }
  }, []);  // Empty dependency array means this useEffect runs once on component mount

  // useEffect hook to execute code whenever tasks state changes
  useEffect(() => {

    // Saving the current state of tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);  // Dependency array with 'tasks' means this useEffect runs whenever 'tasks' state changes

  // Defining a function to add a new task
  const addTask = () => {
    if (newTask) {  // Checking if 'newTask' state is not an empty string

      // Sending a POST request to create a new task
      axios.post('https://jsonplaceholder.typicode.com/todos', { title: newTask, completed: false })
        .then(response => setTasks([...tasks, response.data]))  // On success, adding new task to state
        .catch(error => console.error('Error creating task:', error));  // Logging any errors to console
      setNewTask('');  // Resetting 'newTask' state to an empty string
    }
  };

  // Defining a function to toggle the status of a task
  const toggleTaskStatus = (id) => {
    const task = tasks.find(task => task.id === id);  // Finding the task by its id
    const updatedStatus = task.completed ? false : true;  // Toggling the completed status of the task

    // Sending a PUT request to update the status of the task
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { ...task, completed: updatedStatus })
      .then(response => {
        const updatedTasks = tasks.map(task =>
          task.id === id ? response.data : task  // Updating the task in state if its id matches
        );
        setTasks(updatedTasks);  // Setting the updated list of tasks to state
      })
      .catch(error => console.error('Error updating task:', error));  // Logging any errors to console
  };

  // Defining a function to clear completed tasks
  const clearCompleted = () => {

    // Filtering out completed tasks and updating the state
    const updatedTasks = tasks.filter(task => !task.completed);
    setTasks(updatedTasks);
  };

  // Rendering the component
  return (
    <div>
      <input
        type="text"
        value={newTask}  // Binding the input value to 'newTask' state
        onChange={(e) => setNewTask(e.target.value)}  // Updating 'newTask' state on input change
        placeholder="New Task"
      />
      <button onClick={addTask}>Add Task</button>  // Adding a new task on button click
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? 'Complete' : 'Incomplete'}
            <button onClick={() => toggleTaskStatus(task.id)}>  // Toggling task status on button click
              Toggle Status
            </button>
          </li>
        ))}
      </ul>
      <button onClick={clearCompleted}>Clear Completed</button>  // Clearing completed tasks on button click
    </div>
  );
}

// Exporting the TaskList component to be used in other parts of the app
export default TaskList;
*/
