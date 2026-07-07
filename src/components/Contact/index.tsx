"use client";
import { Constant, contactUsInitialValues } from "@/utils/constants";
import NewsLatterBox from "./NewsLatterBox";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../Form/FormInput";
import FormTextarea from "../Form/FormTextarea";
import { contactUsSchema } from "@/validations/contactUsSchema";

const Contact = () => {
  const handleSubmit = (values: typeof contactUsInitialValues) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={contactUsInitialValues}
      validationSchema={contactUsSchema}
      onSubmit={handleSubmit}
      validateOnChange
      validateOnBlur
    >
      <Form className="space-y-10">
        <div className="grid gap-[15px] md:grid-cols-1">
          <FormInput name="name" label="Name" required />

          <FormInput name="skypeId" label="Skype Id" required />

          <FormInput name="email" label="Email" required type="email" />
          <FormInput name="subject" label="Subject" required />
          <FormTextarea name="messsage" label="Messages" required rows={3} />
          <FormInput name="captcha" label="1 + 1 = ?" type="number" />
        </div>
        <div className="flex w-full items-end justify-start lg:w-auto">
          <button
            type="submit"
            className="bg-primary-blue flex w-full shrink-0 cursor-pointer items-center justify-center gap-3 px-[25px] py-[14px] text-white transition hover:bg-[#39a6d6] md:w-auto"
          >
            <span className="text-[19px] leading-[1.8] font-light whitespace-nowrap uppercase">
              {Constant.Contact.send}
            </span>
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default Contact;
