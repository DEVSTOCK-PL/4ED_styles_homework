import * as Yup from "Yup";
const registrationValidationSchema = Yup.object({
  name: Yup.string().min(2, "Must be at least 2 characters").required("Name is required"),
  secondName: Yup.string().min(2, "Must be at least 2 characters").required("Second name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
});

export default registrationValidationSchema;
