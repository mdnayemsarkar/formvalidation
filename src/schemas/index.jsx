import * as Yup from "Yup";

export const signUpSchema = Yup.object({
  first_name: Yup.string().min(4).max(15).required("Please enter Your First Name "),
  last_name: Yup.string().min(4).max(15).required("Please enter Your Last Name "),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(5).required("Please enter Your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password does not Matched"),
});
