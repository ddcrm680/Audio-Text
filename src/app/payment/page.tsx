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
            bg=""
            titleIcon={<CreditCard size={20} strokeWidth={2} />}
            padding="pb-[30px] "
            title={Constant.Payment.paymentTerms}
            image="https://www.audiotextsolutions.com/wp-content/uploads/2015/08/payment.jpg"
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
          <div className="grid gap-[30px] px-6 md:grid-cols-2">
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
          <div className="grid gap-5 px-6 lg:grid-cols-3 lg:gap-x-[30px]">
            {PAYMENT_METHOD.map((item) => (
              <FeatureSection
                key={item.title}
                descClassName="!text-[17px] !leading-[25px]"
                childPadding="px-0"
                titleClassName="!text-[30px] !mb-[23px]"
                padding="pb-[60px]"
                layout="vertical"
                imageContainerClassName="!border-[2px] !border-[#00C1CF]"
                icon={
                  item.icon ? (
                    <item.icon size={75} strokeWidth={1} color="#00C1CF" />
                  ) : (
                    <Image
                      src={item.image!}
                      alt={item.title}
                      width={65}
                      height={65}
                    />
                  )
                }
                title={item.title}
                description={<p>{item.desc}</p>}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
