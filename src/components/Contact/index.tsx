"use client";
import { Constant, contactUsInitialValues } from "@/utils/constants";
import NewsLatterBox from "./NewsLatterBox";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../Form/FormInput";
import FormTextarea from "../Form/FormTextarea";
import { contactUsSchema } from "@/validations/contactUsSchema";
import { logger } from "@/utils/helpers";

const Contact = () => {
  const handleSubmit = (values: typeof contactUsInitialValues) => {
    // logger.log(values);
  };
  return (
    <Formik
      initialValues={contactUsInitialValues}
      validationSchema={contactUsSchema}
      onSubmit={handleSubmit}
      validateOnChange
      validateOnBlur
    >
      <Form className="space-y-8">
        <div className="grid gap-4 md:grid-cols-1">
          <FormInput name="name" label="Name" required />

          <FormInput name="skypeId" label="Skype Id" required />

          <FormInput name="email" label="Email" required type="email" />
          <FormInput name="subject" label="Subject" required />
          <FormTextarea name="message" label="Messages" required rows={3} />
          <FormInput name="captcha" label="1 + 1 = ?" type="number" />
        </div>
        <div className="flex w-full items-end justify-start lg:w-auto">
          <button
            type="submit"
            className="bg-primary-blue hover:shadow-signUp flex h-10 shrink-0 cursor-pointer items-center justify-center px-6 text-white shadow-md transition duration-300 ease-in-out hover:bg-[#39a6d6]"
          >
            <span className="dark:text-gray-dark text-[16px] leading-[1.8] font-light whitespace-nowrap">
              {Constant.Contact.send}
            </span>
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default Contact;
