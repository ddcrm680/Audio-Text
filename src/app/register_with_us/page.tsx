import SectionBanner from "@/components/Common/SectionBanner";
import RegisterForm from "@/components/Register/RegisterForm";
import { Constant, URLs } from "@/utils/constants";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register with Us | Audio Text",
  // other metadata
};

const RegisterWithUsPage = () => {
  return (
    <div>
      <SectionBanner
        backgroundImage={URLs.registerBg}
        title={Constant.RESELLERS.registerTitle}
        subtitle={Constant.RESELLERS.registerDesc}
      />
      <div className="" style={{ fontFamily: "Aileron Light" }}>
        <div className="mx-auto max-w-6xl py-[70px]">
          <div className="mt-[15px] mb-[35px] text-center">
            <h2 className="text-primary-blue text-[24px] leading-[46px] font-light uppercase">
              Register With Us
            </h2>

            <div className="mx-auto h-[2px] w-[100px] bg-[#1bb998]" />
          </div>
          <div className="px-5">
            <RegisterForm></RegisterForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterWithUsPage;
