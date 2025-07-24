 import React, { useState } from 'react';
 import TaskTable from '../components/TaskTable';
 import TaskForm from '../components/TaskForm';


function TasksPage() {
   const firstTask = {
    id: 1, 
    title: "Task 1", 
    associatedProject:"React-Manager Project", 
    status: "In-Progress",
    dueDate: "7/10/2025",
  };
    const [tasks, setTasks] = useState([firstTask]);
  return (
    <div>
      <h1>My Task Manager</h1>
      <TaskTable tasks = {tasks}/>
       <TaskForm  />
    </div>
  );
 }
 export default TasksPage;