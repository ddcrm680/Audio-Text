import * as Yup from "yup";

export const validationSchema = Yup.object({
  // Personal Details
  firstName: Yup.string().trim().required("First Name is required"),

  lastName: Yup.string().trim().required("Last Name is required"),

  dateOfBirth: Yup.date().nullable(),

  street: Yup.string().trim().required("Street is required"),

  country: Yup.string().required("Country is required"),

  state: Yup.string().required("State is required"),

  city: Yup.string().required("City is required"),

  zipCode: Yup.string().trim().required("Zip Code is required"),

  // Contact Details
  contactNo: Yup.string().trim().required("Contact Number is required"),

  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),

  skypeId: Yup.string().trim().required("Skype ID is required"),

  otherImId: Yup.string().trim(),

  // Bank Details
  beneficiaryName: Yup.string().trim(),

  bankName: Yup.string().trim(),

  beneficiaryAddress: Yup.string().trim(),

  bankAddress: Yup.string().trim(),

  accountNumber: Yup.string().trim(),

  swiftCode: Yup.string().trim(),

  additionalInformation: Yup.string().trim(),

  uploadId: Yup.array().min(1, "Please upload at least one file"),

  paymentMethod: Yup.string().required("Payment Method is required"),

  captcha: Yup.string().trim().required("Captcha is required"),
});
