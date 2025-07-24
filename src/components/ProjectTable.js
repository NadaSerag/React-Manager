import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import './ProjectTable.css';
import { useDispatch } from 'react-redux';
import { removeProject } from '../features/projects/projectsSlice';
import { useSelector } from 'react-redux';


function ProjectTable() {

  const projectsCalimedFromStore = useSelector((state) => state.projects.array);
  const dispatch = useDispatch();

  return(
    <div classname = "MainTable">
<Table>
  <TableHead>
    <div classname="FirstRow">
    <TableRow>
      <TableCell>Project Name</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Actions</TableCell>
    </TableRow>
     </div>
  </TableHead>
 <TableBody>
        {projectsCalimedFromStore.map((project) => (
          <TableRow key={project.id}>
            <TableCell>{project.name}</TableCell>
            <TableCell>{project.description}</TableCell>
      <TableCell>
        <button>
          Edit
        </button>
        <button onClick= {() => {dispatch(removeProject(project.id))}}>
          Delete
        </button>
        </TableCell>
    </TableRow>
        ))}
  </TableBody>
</Table>
</div>
  );
}
export default ProjectTable;