import AboutSection from "@/components/About/AboutSection";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SkillsChart from "@/components/About/SkillChart";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionBanner from "@/components/Common/SectionBanner";
import ContentSection from "@/components/ContentSection";
import FeatureSection from "@/components/Services/FeatureSection";
import { Colors } from "@/utils/color";
import { Constant, PAYMENT_METHOD } from "@/utils/constants";
import { CreditCard, Eye, Flag, Rocket, Users } from "lucide-react";

import { Metadata } from "next";
import Image from "next/image";
import payment from "../../../public/images/payment/payment.webp";
import ServiceCard from "@/components/Hero/ServiceCard";
export const metadata: Metadata = {
  title: "Payment | Audio Text",
  // other metadata
};

const PaymentPage = () => {
  return (
    <div>
      <SectionBanner
        title={Constant.Payment.title}
        subtitle={Constant.Payment.desc}
      />
      <div className="px-5" style={{ fontFamily: "Aileron Light" }}>
        <div className="mx-auto max-w-6xl py-[70px]">
          <ContentSection
            subParentClassName="!px-0"
            bg=""
            titleIcon={<CreditCard size={20} strokeWidth={2} />}
            padding="pb-[30px] "
            title={Constant.Payment.paymentTerms}
            image={payment}
            imageAlt="Payment Term Image "
            description={
              <div className="relative">
                <p>{Constant.Payment.paymentDesc}</p>
                <p>&nbsp;</p>
                <p>
                  {" "}
                  <strong className="font-bold">
                    {Constant.Payment.paymentSubDesc}
                  </strong>
                </p>
              </div>
            }
          />
          <div className="grid gap-[30px] md:grid-cols-2">
            <section className={`bg-registerBg dark:bg-slate-800`}>
              <div className="flex flex-col items-start gap-[30px] p-[40px]">
                <h4 className="text-primary-blue text-[24px] font-light uppercase">
                  {Constant.Payment.dailyPayment}
                </h4>

                <p className='inline max-w-2xl font-["Aileron_Light"] text-[17px] leading-[25px]'>
                  {Constant.Payment.dailyPaymentDesc}
                </p>
              </div>
            </section>
            <section className={`bg-registerBg dark:bg-slate-800`}>
              <div className="flex flex-col items-start gap-[30px] p-[40px]">
                <h4 className="text-primary-blue text-[24px] font-light uppercase">
                  {Constant.Payment.weeklyPayment}
                </h4>

                <p className='inline max-w-2xl font-["Aileron_Light"] text-[17px] leading-[25px]'>
                  {Constant.Payment.weeklyPaymentDesc}
                </p>
              </div>
            </section>
          </div>
          <div className="flex flex-col items-center gap-[30px] pt-[60px] pb-[30px]">
            <h2 className="text-primary-blue text-[36px] font-light uppercase">
              {Constant.Payment.paymentMethods}
            </h2>

            <p className='hidden text-center font-["Aileron_Light"] text-[17px] leading-[25px] sm:inline'>
              {Constant.Payment.paymentMethodDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-x-[30px]">
            {PAYMENT_METHOD.map((item, index) => (
              <ServiceCard
                {...item}
                // enableScrollAnimation
                animationDirection={index < 2 ? "left" : "right"}
                parentClassName="!cursor-default"
                cardVariant="feature"
                title={
                  <h2
                    className={`text-primary-blue mb-[15px] text-xl leading-[30px] font-semibold uppercase dark:text-sky-400`}
                  >
                    {item.title}
                  </h2>
                }
                description={item.desc}
                iconWrapperClassName="
                    h-14
                    w-14
                    rounded-xl
                    bg-primary-blue dark:bg-[#00dbe91a]
                "
                iconClassName="h-7 w-7 !text-[#11d9ff]"
                descriptionClassName="
                    text-[15px]
                    leading-7
                    text-slate-500
                    dark:text-slate-400
                "
                cardClassName="
                    p-4
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    dark:bg-[#171a1f]
                    dark:border-slate-800
                    hover:border-[#11d9ff]/40
                    hover:shadow-xl
                    transition-all
                    duration-300
                "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
