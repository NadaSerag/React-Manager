import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import './ProjectTable.css';

function ProjectTable() {
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
    <TableRow>
      <TableCell>Default Project</TableCell>
      <TableCell>React-Manager Project</TableCell>
      <TableCell>
        <button>
          Edit
        </button>
        <button>
          Delete
        </button>
        </TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
  );
}
export default ProjectTable;