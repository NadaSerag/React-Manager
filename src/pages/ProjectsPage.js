import React, { useState } from 'react';
 import ProjectTable from '../components/ProjectTable';
 import ProjectForm from '../components/ProjectForm';

 function ProjectsPage() {
 
  // 1. State to hold the array of tasks
  const [projects, setProjects] = useState(['Project Trial', 'Project Initial']);
  // 2. Function to add a new task to the list
  const handleAddProject = (newProject) => {
    // Use spread syntax to create a new array with the new task
    setProjects([...projects, newProject]);
  };
  return (
    <div>
      <h1>My Task Manager</h1>
      {/* 3. Pass the handleAddTask function down as a prop */}
      <ProjectForm onAddProject={handleAddProject} />
      {/* 4. Pass the tasks array down as a prop */}
       <ProjectTable projects = {projects}/>
    </div>
  );
 }
 export default ProjectsPage;