 import { useSelector } from 'react-redux';
 
 function Dashboard() {

  const totalProjects = useSelector((state) => state.projects.count)
  const totalTasks = useSelector((state) => state.tasks.count)
  const tasks = useSelector((state) => state.tasks.array)
  return(
    <>
    <h3>Total Number of Projects: {totalProjects}</h3>
    <h3>Total Number of Tasks: {totalTasks}</h3>
    <h3>Tasks In Progress: {tasks.filter((task)=> task.status === "In Progress").map((task) =><li key ={Date.now}>{task.title}</li>)}</h3>
    <h3>Tasks Completed: {tasks.filter((task)=> task.status === "Done").map((task) =><li key ={Date.now}>{task.title}</li>)}</h3>
    </>
  );
}
 export default Dashboard;