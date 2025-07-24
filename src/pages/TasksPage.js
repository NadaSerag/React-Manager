import TaskTable from '../components/TaskTable';
import TaskForm from '../components/TaskForm';


function TasksPage() {
  return (
    <div>
      <h1>My Task Manager</h1>
      <TaskTable/>
       <TaskForm  />
    </div>
        );
 }

 export default TasksPage;