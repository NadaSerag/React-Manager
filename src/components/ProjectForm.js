 import { useForm } from 'react-hook-form';
 import { yupResolver } from '@hookform/resolvers/yup';
 import { validation } from "./YupFormValidation";
 import { useDispatch } from 'react-redux';
 import { addProject } from '../features/projects/projectsSlice';

 function ProjectForm() {

  //'reset' is a built-in reset() function that comes from useForm(). 
  // its used to clear the input values after submitting a form in React Hook Form.

  //we're here destructuring reset from useForm():
  const { register, handleSubmit, formState: { errors }, reset} = useForm({
  resolver: yupResolver(validation)
});

  const dispatch = useDispatch();

  const onSubmit = (data) =>{
    //Providing user feedback that the form was successfully submitted.
    console.log("Form Successfully Submitted, Congratulations!");
    dispatch(addProject(data));

    //adding a slight delay here so that this way, React has a moment to update the table before the alert appears.
    setTimeout(() => {alert("Project Added Successfully!")}, 100); 

    //then we're calling reset() inside onSubmit() after dispatching to clear the form fields.
    reset();
  }


  return (
    //handleSubmit prevents the deault behaviour of the form
    //and makes sure inputs are valid before calling onSubmit function we passed to it
    <form onSubmit = { handleSubmit(onSubmit)}>
      {/*register() connects the input to React Hook Form’s 
      state management and validation system. 
      register():
      First Argument - Name of the input field 'project'
      Second argument – an options object for validation rules.
      "required: true" ensures the project name isnt empty 
      {...register("project", { required: true })}
      We can also use custom validation using 'validate', example: 'validate: (value) => value.includes("@"),'
      But we already used validation from yup so no need for that here.
      */}
      <input {...register("name")}
        type="text"
        placeholder="Add a new project" 
      />
      {/* Checking if there are errors (i.e our validation is not met),
      Hence we want to display the error message as a paragraph here
      the actual text was enetered as a paramater in the schema or 'validation' in yup (file: YupFormValidation.js).
      */}
      {errors.project && <p>{errors.project.message}</p>}
      <input {...register("description")}
        type="text" 
        placeholder="Description"
      />
      {errors.description && <p>{errors.description.message}</p>}
      <button type="submit">Add Project</button>
    </form>
  );
 }

 export default ProjectForm;