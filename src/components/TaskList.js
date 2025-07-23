import React from 'react';
 // We receive the 'tasks' array as a prop
 function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
 }

 export default TaskList;