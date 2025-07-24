import ProjectTable from '../components/ProjectTable';
import ProjectForm from '../components/ProjectForm';

 function ProjectsPage() {
  return (
    <div>
      <h1>My Project Manager</h1>
      {/* 4. Pass the tasks array down as a prop */}
       <ProjectTable/>
       <ProjectForm  />
    </div>
  );
 }
 export default ProjectsPage;