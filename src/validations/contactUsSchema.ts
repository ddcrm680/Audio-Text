import * as Yup from "yup";

export const contactUsSchema = Yup.object({
  // Personal Details
  name: Yup.string().trim().required("Name is required"),

  skypeId: Yup.string().trim().required("Skype ID is required"),

  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  subject: Yup.string().trim().required("Subject is required"),

  message: Yup.string().trim().required("Message is required"),

  captcha: Yup.string().trim().required("Captcha is required"),
});
