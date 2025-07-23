import React, { useState } from 'react';
 import TaskList from '../components/TaskList';
 import TaskForm from '../components/TaskForm';
 function TasksPage() {
  // 1. State to hold the array of tasks
  const [tasks, setTasks] = useState(['Learn React Components', 'Learn React State']);
  // 2. Function to add a new task to the list
  const handleAddTask = (newTask) => {
    // Use spread syntax to create a new array with the new task
    setTasks([...tasks, newTask]);
  };
  return (
    <div>
      <h1>My Task Manager</h1>
      {/* 3. Pass the handleAddTask function down as a prop */}
      <TaskForm onAddTask={handleAddTask} />
      {/* 4. Pass the tasks array down as a prop */}
      <TaskList tasks={tasks} />
    </div>
  );
 }
 export default TasksPage;