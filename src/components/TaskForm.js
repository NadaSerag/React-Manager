 import { useForm } from 'react-hook-form';
 import { yupResolver } from '@hookform/resolvers/yup';
 import { validation2 } from "./YupFormValidation";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';



 function TaskForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
  resolver: yupResolver(validation2)
});

 const dispatch = useDispatch();

  const onSubmit = (data) =>{
    
    //Providing user feedback that the form was successfully submitted.
    console.log("Form Successfully Submitted, Congratulations!");
   
    // dispatch the addTask action with the task as the payload
    dispatch(addTask(data));
    reset();

  }

  const projectsClaimedFromStore = useSelector((state) => state.projects.array);

  return (
    //handleSubmit prevents the deault behaviour of the form
    //and makes sure inputs are valid before calling onSubmit function we passed to it
    <form onSubmit = { handleSubmit(onSubmit)}>
      <input {...register("title")}
        type="text"
        placeholder="Add a new task" 
      />
      {errors.title && <p>{errors.title.message}</p>}

      <label>Choose Project</label>
      <select {...register("associatedProject")}>
        <option value="">--Select project--</option>
       {projectsClaimedFromStore.map((project) =>
        <option value= { project.name }> { project.name } </option>
          )}
      </select>

      <label>Choose Status:</label>
      <select {...register("status")}>
        <option value="">--Select Status--</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress...</option>
        <option value="Done">Done</option>
      </select>
      <input {...register("dueDate")}
        type="text" 
        placeholder="Enter due date"
      />
      {errors.dueDate && <p>{errors.dueDate.message}</p>}
      <button type="submit">Add Task</button>
    </form>
  );
 }
 export default TaskForm;