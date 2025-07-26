import ProjectTable from '../components/ProjectTable';
import ProjectForm from '../components/ProjectForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../features/projects/projectsSlice';

 function ProjectsPage() {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(fetchProjects());}, []);

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