 import React, { useState } from 'react';
 // We receive the 'onAddTask' function as a prop
 function ProjectForm({ onAddProject }) {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    if (inputValue.trim() === '') return; // Don't add empty projects
    onAddProject(inputValue); // Call the function from the parent
    setInputValue(''); // Reset the input field
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new project"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">Add Project</button>
    </form>
  );
 }
 export default ProjectForm;