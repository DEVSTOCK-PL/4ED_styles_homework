import * as Yup from "Yup";
const contactValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  subject: Yup.string().min(2, "Must be at least 2 characters").required("Subject is required"),
  message: Yup.string().min(10, "Must be at least 10 characters").required("Message is required"),
});

export default contactValidationSchema;
