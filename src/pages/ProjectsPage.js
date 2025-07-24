
 import ProjectTable from '../components/ProjectTable';
 import ProjectForm from '../components/ProjectForm';
import { useSelector } from 'react-redux';

 function ProjectsPage() {
 
  const projects = useSelector((state) => state.projects.array);
   
  return (
    <div>
      <h1>My Project Manager</h1>
      {/* 4. Pass the tasks array down as a prop */}
       <ProjectTable projects = {projects}/>
       <ProjectForm  />
    </div>
  );
 }
 export default ProjectsPage;