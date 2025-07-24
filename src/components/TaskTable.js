import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import './TaskTable.css';

function TaskTable({tasks}) {
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
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.associatedProject}</TableCell>
            <TableCell>{task.dueDate}</TableCell>
            <TableCell>{task.status}</TableCell>
    </TableRow>
        ))}
  </TableBody>
</Table>
</div>
  );
}
export default TaskTable;