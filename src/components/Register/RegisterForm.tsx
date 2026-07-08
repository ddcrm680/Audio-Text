"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import BankDetails from "./BankDetails";
import { validationSchema } from "@/validations/registerSchema";
import { Constant, registerInitialValues } from "@/utils/constants";

export default function RegisterForm() {
  const handleSubmit = (values: typeof registerInitialValues) => {
    // console.log(values);
  };

  return (
    <Formik
      initialValues={registerInitialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange
      validateOnBlur
    >
      <Form className="space-y-10">
        <PersonalDetails />

        <ContactDetails />

        <BankDetails />
        <div className="flex w-full items-end justify-start lg:w-auto">
          <button
            type="submit"
            className="bg-primary-blue flex w-full shrink-0 cursor-pointer items-center justify-center gap-3 px-[25px] py-[14px] text-white transition hover:bg-[#39a6d6] md:w-auto"
          >
            <span className="text-[19px] leading-[1.8] font-light whitespace-nowrap">
              {Constant.RESELLERS.submit}
            </span>
          </button>
        </div>
      </Form>
    </Formik>
  );
}
