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
import {
  CalendarDays,
  CalendarDaysIcon,
  Clock3,
  CreditCard,
  Eye,
  Flag,
  Rocket,
  Users,
} from "lucide-react";

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
      <div className="" style={{ fontFamily: "Aileron Light" }}>
        <div className="">
          <div className="lg:px-auto bg-card-light px-5 py-[70px] dark:bg-[linear-gradient(135deg,var(--color-gradient-start-dark)_0%,var(--color-gradient-end-dark)_100%)]">
            <div className="mx-auto max-w-6xl">
              <ContentSection
                bg="!dark:bg-transparent"
                padding="pb-0"
                subParentClassName="!px-0 items-center gap-[30px] md:gap-[64px]"
                titleIcon={<CreditCard size={20} />}
                title={Constant.Payment.paymentTerms}
                image={payment}
                titleClassName={"font-[600] !capitalize   "}
                contentClassName="pt-2"
                descriptionClassName="space-y-6 "
                imageWrapperClassName="md:max-w-[50%] flex items-center justify-center h-full"
                imageClassName="
    rounded-xl
    border-2
    border-white
    shadow-xl
    object-cover
  "
                imageAlt="Payment Term Image "
                description={
                  <div className="relative">
                    <p className="text-[16px] leading-[28px]">
                      {Constant.Payment.paymentDesc}
                    </p>
                    <div className="mt-[24px] flex items-start gap-3 rounded-lg border border-[#bfd7f4] bg-[#eaf4ff] px-5 py-4 dark:border-[#3b5878] dark:bg-[#213754]">
                      <div className="mt-0.5 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-payment-note-light h-5 w-5 dark:text-[#7fd8ff]"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16v-4" />
                          <path d="M12 8h.01" />
                        </svg>
                      </div>

                      <p className="text-payment-note-light text-[16px] leading-6 dark:text-[#d8efff]">
                        <strong className="font-semibold">
                          {Constant.Payment.paymentSubDesc}
                        </strong>
                      </p>
                    </div>
                  </div>
                }
              />
            </div>
          </div>

          <div className="bg-section-primary px-5 py-[48px] dark:bg-[#162236]">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Daily Payment */}
                <section className="dark:!bg-card-dark dark:!border-card-border-dark dark:hover:!bg-card-dark-hover rounded-xl border border-[#dce8f5] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <h4 className="text-primary-blue text-[24px] leading-tight font-semibold">
                      {Constant.Payment.dailyPayment}
                    </h4>

                    <div className="dark:bg-icon-dark flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#bfe8ff]">
                      <Clock3
                        size={20}
                        className="text-primary-blue dark:text-sky-400"
                      />
                    </div>
                  </div>

                  <p className='font-["Aileron_Light"] text-[16px] leading-7 text-slate-600 dark:text-slate-400'>
                    {Constant.Payment.dailyPaymentDesc}
                  </p>
                </section>

                {/* Weekly Payment */}
                <section className="dark:!bg-card-dark dark:!border-card-border-dark dark:hover:!bg-card-dark-hover rounded-xl border border-[#dce8f5] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <h4 className="text-primary-blue text-[24px] leading-tight font-semibold">
                      {Constant.Payment.weeklyPayment}
                    </h4>

                    <div className="dark:bg-icon-dark flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#bfe8ff]">
                      <CalendarDaysIcon
                        size={20}
                        className="text-primary-blue dark:text-sky-400"
                      />
                    </div>
                  </div>

                  <p className='font-["Aileron_Light"] text-[16px] leading-7 text-slate-600 dark:text-slate-400'>
                    {Constant.Payment.weeklyPaymentDesc}
                  </p>
                </section>
              </div>
            </div>
          </div>
          <div className="lg:px-auto bg-white px-5 py-[70px] dark:bg-[#182439]">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col items-center gap-[12px] pb-[30px]">
                <h2 className="text-primary-blue text-[32px] font-semibold uppercase">
                  {Constant.Payment.paymentMethods}
                </h2>

                <p className='mx-auto hidden w-auto text-center font-["Aileron_Light"] text-[16px] leading-7 sm:inline md:w-3xl'>
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
                     dark:!bg-card-dark
  dark:!border-card-border-dark
  dark:hover:!bg-card-dark-hover
                    hover:border-[#11d9ff]/40
                    hover:shadow-xl
                    transition-all
                    duration-300
                "
                  />
                ))}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
