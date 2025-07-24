import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import './TaskTable.css';
import { useSelector } from 'react-redux';
 import { useDispatch } from 'react-redux';
import { filterByProject } from '../features/tasks/taskSlice';


function TaskTable() {
  const tasksClaimedFromStore = useSelector((state) => state.tasks.array);
  const projectsClaimedFromStore = useSelector((state) => state.projects.array);
  const dispatch = useDispatch();

  return(
    <div className = "MainTable">
    <label>Filter By Project: </label>
    {/*we need to pass the Project that the user chose here to filterByProject() 
    as the action.payload for this action is the project name, which is event.target.value as the options are the projects names
    so the target.value is the chosen projec.*/}
      <select onChange= {(event) => { dispatch(filterByProject(event.target.value))} }>
        <option value="">--Select project--</option>
       {projectsClaimedFromStore.map((project) =>
        <option value= { project.name }> { project.name } </option>
          )}
      </select>
<Table>
  <TableHead>
    <div className="FirstRow">
    <TableRow>
      <TableCell>Task Title</TableCell>
      <TableCell>Associated Project</TableCell>
      <TableCell>Due Date</TableCell>
       <TableCell>Status</TableCell>
    </TableRow>
     </div>
  </TableHead>
 <TableBody>
        {tasksClaimedFromStore.map((task) => (
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