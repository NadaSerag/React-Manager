import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import './TaskTable.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterByProject } from '../features/tasks/taskSlice';
import { filterByStatus } from '../features/tasks/taskSlice';



function TaskTable() {
  const tasksClaimedFromStore = useSelector((state) => state.tasks.arrayShownToUser);
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

      <label>Filter By Status: </label>
    {/*we need to pass the Project that the user chose here to filterByProject() 
    as the action.payload for this action is the project name, which is event.target.value as the options are the projects names
    so the target.value is the chosen projec.*/}
      <select onChange= {(event) => { dispatch(filterByStatus(event.target.value))} }>
        <option value="">--Select status--</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress...</option>
        <option value="Done">Done</option>
      </select>
<Table>
  <TableHead>
    <TableRow>
      <TableCell className="FirstRow">Task Title</TableCell>
      <TableCell className="FirstRow">Associated Project</TableCell>
      <TableCell className="FirstRow">Due Date</TableCell>
       <TableCell className="FirstRow">Status</TableCell>
    </TableRow>
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