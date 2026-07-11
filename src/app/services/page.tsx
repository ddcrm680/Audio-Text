import AboutSection from "@/components/About/AboutSection";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SkillsChart from "@/components/About/SkillChart";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionBanner from "@/components/Common/SectionBanner";
import ContentSection from "@/components/ContentSection";
import ServiceCard from "@/components/Hero/ServiceCard";
import FeatureSection from "@/components/Services/FeatureSection";
import { useMediaQuery } from "@/hook/useMediaQuery";
import { Colors } from "@/utils/color";

import { Constant } from "@/utils/constants";
import {
  Accessibility,
  BriefcaseBusiness,
  ChevronRight,
  CirclePlay,
  Eye,
  Flag,
  Globe,
  Home,
  Link,
  Play,
  Rocket,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Audio Text",
  // other metadata
};

const ServicePage = () => {
  const cardClassName = `
    !bg-white
    !border
    !border-slate-200
    hover:!shadow-md
    !rounded-2xl
    !hover:shadow-xl
     dark:!bg-card-dark
  dark:!border-card-border-dark
  dark:hover:!bg-card-dark-hover
  `;
  const iconWrapperClassName = `
    !h-18
    !w-18
    !bg-[#c2e8ff]
    !border    
    !dark:bg-transparent
    !rounded-full
 `;
  const titleClassName = `
    !leading-tight
    !text-[20px]
!font-semibold
    !mb-4
    !normal-case
    !text-primary-blue
  `;
  const descClassName = `
    !text-center
    !text-slate-600
    dark:!text-slate-300
    !leading-[20px]`;
  return (
    <div>
      <SectionBanner
        title={Constant.Services.title}
        subtitle={Constant.Services.subTitle}
      />
      <div className="" style={{ fontFamily: "Aileron Light" }}>
        <div>
          <div className="lg:px-auto bg-[linear-gradient(135deg,_#f8f9ff_0%,_#e5eeff_100%)] px-5 py-[70px] dark:bg-[linear-gradient(135deg,var(--color-gradient-start-dark)_0%,var(--color-gradient-end-dark)_100%)]">
            <div className="mx-auto max-w-6xl">
              <ContentSection
                bg="!dark:bg-transparent"
                padding="pb-0"
                subParentClassName="!px-0 items-center gap-[30px] md:gap-[64px]"
                title={Constant.Services.peculiarServiceTitle}
                titleIcon={<BriefcaseBusiness size={20} />}
                image="/images/services/service_1.jpg"
                imageAlt="Service"
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
                description={
                  <>
                    <p className="text-[18px] leading-[28px] text-[#3f484e] dark:text-slate-300">
                      {Constant.Services.peculiarServiceDescription1}
                    </p>

                    <div className="relative mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-800">
                      <div className="bg-primary-blue absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-md">
                        <span className="relative top-[5px] text-2xl leading-none text-white">
                          ❞
                        </span>
                      </div>
                      <p className="text-[16px] leading-[28px] text-slate-600 italic dark:text-slate-300">
                        {Constant.Services.peculiarServiceDescription2}
                      </p>
                    </div>
                  </>
                }
              />
            </div>
          </div>
          <div className="lg:px-auto dark:bg-section-secondary-dark bg-[#d3e4fe4d] px-5 py-[70px]">
            <div className="mx-auto max-w-6xl">
              <FeatureSection
                layout="vertical"
                padding="pb-[64px]"
                childPadding="px-0"
                iconWrapperClassName={`
    !dark:bg-transparent
    !rounded-full !border-none !bg-transparent  !h-10 !w-10`}
                contentClassName="text-center"
                titleClassName={`${titleClassName} !text-[32px] `}
                descClassName={`${descClassName} w-auto md:w-3xl mx-auto`}
                icon={<Globe size={34} />}
                title={Constant.Services.internationalPremiumTitle}
                description={
                  <p>
                    <span className="mr-1">
                      {Constant.Services.internationalPremiumDesc1}
                    </span>
                    {Constant.Services.internationalPremiumDesc2}
                  </p>
                }
              />

              <div className="grid gap-5 md:grid-cols-2 lg:gap-x-[30px]">
                <FeatureSection
                  card
                  layout="vertical"
                  padding="p-10"
                  childPadding="px-0"
                  cardClassName={cardClassName}
                  iconWrapperClassName={iconWrapperClassName}
                  contentClassName="text-center"
                  titleClassName={titleClassName}
                  descClassName={descClassName}
                  icon={<Smartphone size={34} />}
                  title={Constant.Services.sessionInitiationTitle}
                  description={<p>{Constant.Services.sessionInitiationDesc}</p>}
                />
                <FeatureSection
                  card
                  layout="vertical"
                  padding="p-10"
                  childPadding="px-0"
                  cardClassName={cardClassName}
                  iconWrapperClassName={iconWrapperClassName}
                  contentClassName="text-center"
                  titleClassName={titleClassName}
                  descClassName={descClassName}
                  icon={<Play size={34} />}
                  title={Constant.Services.interativeVoiceTitle}
                  description={<p>{Constant.Services.interativeVoiceDesc}</p>}
                />
              </div>
              <section className="pt-[140px]">
                <div className="overflow-hidden rounded-2xl border border-[#bec8cf] bg-white lg:flex dark:border-slate-700 dark:bg-slate-900">
                  {/* Left Panel */}
                  <div className="bg-primary-blue flex w-full flex-row items-center justify-start gap-4 p-[48px] text-white lg:w-[350px] lg:flex-col lg:items-start lg:justify-center lg:gap-0">
                    <div className="flex h-20 w-fit items-center justify-center rounded-full bg-transparent/20">
                      <Home
                        size={34}
                        strokeWidth={2}
                        className="text-[#003f55]"
                      />
                    </div>
                    <h2 className="text-[32px] leading-[1.1] font-semibold text-[#003f55] capitalize lg:hidden">
                      {Constant.Services.domesticPremiumTitle}
                    </h2>
                    <h2 className="hidden text-[32px] leading-[1.1] font-semibold text-[#003f55] capitalize lg:block">
                      {Constant.Services.domestic}
                      <br />
                      {Constant.Services.premiumRate}
                      <br />
                      {Constant.Services.numbers}
                    </h2>

                    <div className="mt-4 hidden h-[3px] w-20 bg-[#003f554d] lg:block" />
                  </div>

                  {/* Right Panel */}
                  <div className="flex-1 p-[48px] lg:p-10">
                    <p className="text-[16px] !leading-[24px] text-slate-600 dark:text-slate-300">
                      {Constant.Services.domesticPremiumDesc1}
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <div className="rounded-xl bg-[#edf4ff] p-6 dark:bg-slate-800">
                        <p className="text-[14px] font-semibold text-[#006688] uppercase">
                          Tier One
                        </p>

                        <h4 className="mt-2 text-[14px] font-semibold text-slate-800 dark:text-white">
                          Pay Per Call (PPC)
                        </h4>
                      </div>

                      <div className="rounded-xl bg-[#edf4ff] p-6 dark:bg-slate-800">
                        <p className="text-[14px] font-semibold text-[#006688] uppercase">
                          Tier Two
                        </p>

                        <h4 className="mt-2 text-[14px] font-semibold text-slate-800 dark:text-white">
                          Pay Per Minute (PPM)
                        </h4>
                      </div>
                    </div>

                    <div className="border-primary-blue mt-6 flex gap-4 border-l-4 pl-5">
                      <p className="text-[14px] leading-6 text-slate-600 italic dark:text-slate-300">
                        {Constant.Services.domesticPremiumDesc2}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="lg:px-auto dark:bg-section-tertiary-dark bg-[#f8f9ff] px-5 py-[70px]">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-5 md:grid-cols-2 lg:gap-x-[30px]">
                <FeatureSection
                  card
                  layout="horizontal"
                  padding="p-10"
                  childPadding="px-0"
                  cardClassName={`!border
    !border-slate-200
    hover:!shadow-md
    !rounded-2xl
    !hover:shadow-xl
  dark:!bg-card-dark
  dark:!border-card-border-dark
  dark:hover:!bg-card-dark-hover !bg-[#eff4ff]`}
                  imageVerticalContainer={
                    "!items-start !mx-0 !lg:mx-auto !justify-start !lg:justify-center "
                  }
                  iconWrapperClassName={` !bg-white  !rounded-xl !w-[56px] !h-[56px] border `}
                  contentClassName="text-center"
                  titleClassName={`${titleClassName} text-start !text-[24px]`}
                  descClassName={`${descClassName} !text-left`}
                  icon={<TrendingUp size={34} />}
                  title={Constant.Services.bespokeTitle}
                  description={<p>{Constant.Services.bespokeDesc}</p>}
                />
                <FeatureSection
                  card
                  layout="horizontal"
                  padding="p-10"
                  childPadding="px-0"
                  cardClassName={`!border
                    
    !border-slate-200
    hover:!shadow-md
    !rounded-2xl
    !hover:shadow-xl
    dark:!bg-card-dark
  dark:!border-card-border-dark
  dark:hover:!bg-card-dark-hover !bg-[#eff4ff]`}
                  imageVerticalContainer={
                    "!items-start !mx-0 !lg:mx-auto !justify-start !lg:justify-center "
                  }
                  iconWrapperClassName={` !bg-white  !rounded-xl !w-[56px] !h-[56px] border `}
                  contentClassName="text-center"
                  titleClassName={`${titleClassName} text-start !text-[24px]`}
                  descClassName={`${descClassName} !text-left`}
                  icon={<Accessibility size={34} />}
                  title={Constant.Services.customizeSolutionTitle}
                  description={<p>{Constant.Services.customizeSolutionDesc}</p>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
