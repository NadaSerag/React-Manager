 import { useForm } from 'react-hook-form';
 import { yupResolver } from '@hookform/resolvers/yup';
 import { validation2 } from "./YupFormValidation";
import { useSelector } from 'react-redux';



 function TaskForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: yupResolver(validation2)
});

  const onSubmit = (data) =>{
    //Providing user feedback that the form was successfully submitted.
    console.log("Form Successfully Submitted, Congratulations!");
    alert("Task Added Successfully!")
  }

  const projects = useSelector((state) => state.projects.array);

  return (
    //handleSubmit prevents the deault behaviour of the form
    //and makes sure inputs are valid before calling onSubmit function we passed to it
    <form onSubmit = { handleSubmit(onSubmit)}>
      <input {...register("title")}
        type="text"
        placeholder="Add a new task" 
      />
      {errors.title && <p>{errors.title.message}</p>}

      <label>Choose an Associated-Project</label>
      <select {...register("status")}>
        <option value="">--Select project--</option>
       {projects.map((project) =>
        <option value= { project.name }> { project.name } </option>
          )}
      </select>

      <label>Choose Status:</label>
      <select {...register("status")}>
        <option value="">--Select Status--</option>
        <option value="toDo">To Do</option>
        <option value="inProgress">In Progress...</option>
        <option value="done">Done</option>
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