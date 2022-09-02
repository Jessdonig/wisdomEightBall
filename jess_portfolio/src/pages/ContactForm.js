import { useForm } from "react-hook-form";
import "./ContactForm.css";



function ContactForm() {

  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  const onSubmit = data => console.log(data);

  console.log("this is first", watch("first_name"))
  console.log("this is last", watch("last_name"))

  return(
    <div>
      <h4>Join my mailing list</h4>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("first_name", { required : true })}></input>
      {errors.first_name && <div>This is a required field</div>}
      <input {...register("last_name", {required : true})}></input>
      {errors.last_name && <div>This is a required field</div>}
      <input className="submit-button" type='submit'></input>
    </form>
    </div>
  )
}

export default ContactForm;