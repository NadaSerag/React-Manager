import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import './ProjectTable.css';

function ProjectTable({projects}) {
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
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell>{project.name}</TableCell>
            <TableCell>{project.description}</TableCell>
      <TableCell>
        <button>
          Edit
        </button>
        <button>
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