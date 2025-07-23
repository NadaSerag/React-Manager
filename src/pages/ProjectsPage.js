import React, { useState } from 'react';
 import ProjectTable from '../components/ProjectTable';
 import ProjectForm from '../components/ProjectForm';

 function ProjectsPage() {
 
  // 1. State to hold the array of tasks
  const firstProject = {id: 1, name: "InitialProject", description:"React-Manager Project"};
  const [projects, setProjects] = useState([firstProject], firstProject);
  // 2. Function to add a new task to the list
  const handleAddProject = (newProject) => {
    // Use spread syntax to create a new array with the new task
    setProjects([...projects, newProject]);
  };
  return (
    <div>
      <h1>My Project Manager</h1>
      {/* 3. Pass the handleAddTask function down as a prop */}
      <ProjectForm onAddProject={handleAddProject} />
      {/* 4. Pass the tasks array down as a prop */}
       <ProjectTable projects = {projects}/>
    </div>
  );
 }
 export default ProjectsPage;