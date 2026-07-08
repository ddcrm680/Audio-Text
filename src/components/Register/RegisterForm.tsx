"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import BankDetails from "./BankDetails";
import { validationSchema } from "@/validations/registerSchema";
import { Constant, registerInitialValues } from "@/utils/constants";
import { logger } from "@/utils/helpers";
import RegisterSidebar from "./RegisterSidebar";

export default function RegisterForm() {
  const handleSubmit = (values: typeof registerInitialValues) => {
    // logger.log(values);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[230px_1fr]">
      <div className="hidden lg:block">
        <RegisterSidebar />
      </div>

      <Formik
        initialValues={registerInitialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange
        validateOnBlur
      >
        <Form className="space-y-12">
          <PersonalDetails />

          <ContactDetails />

          <BankDetails />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary-blue hover:shadow-signUp flex h-10 shrink-0 cursor-pointer items-center justify-center rounded-md px-6 text-white shadow-md transition duration-300 ease-in-out hover:bg-[#39a6d6]"
            >
              <span className="dark:text-gray-dark leading-[1.8] font-light whitespace-nowrap text-[1p6x]">
                {Constant.RESELLERS.submit}
              </span>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
