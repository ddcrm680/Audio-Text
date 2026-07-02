import AboutSection from "@/components/About/AboutSection";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SkillsChart from "@/components/About/SkillChart";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionBanner from "@/components/Common/SectionBanner";
import ContentSection from "@/components/ContentSection";
import ServiceCard from "@/components/Hero/ServiceCard";
import { Colors } from "@/utils/color";
import { Constant, RESELLER_FEATURES, SERVICES } from "@/utils/constants";
import { Eye, Flag, Rocket, User, Users } from "lucide-react";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resellers | Audio Text",
  // other metadata
};

const ResellersPage = () => {
  return (
    <div style={{ fontFamily: "Aileron Light" }}>
      <SectionBanner
        title={Constant.RESELLERS.title}
        subtitle={Constant.RESELLERS.subTitle}
      />
      <div className="" style={{ fontFamily: "Aileron Light" }}>
        <div className="mx-auto max-w-6xl py-[70px]">
          <ContentSection
            bg=""
            titleIcon={<User size={20} strokeWidth={2} />}
            padding="pb-[30px] "
            title={Constant.RESELLERS.beOurSellerTitle}
            image="/images/resellers/join_uss.jpg"
            imageAlt="reseller Image "
            description={
              <div className="relative">
                <p>
                  {Constant.RESELLERS.beOurSellerDesc1.beforeLink}

                  <Link
                    href={Constant.RESELLERS.beOurSellerDesc1.linkHref}
                    className="text-[#48AFDB] hover:text-[#2b98c7]"
                  >
                    {Constant.RESELLERS.beOurSellerDesc1.linkText}
                  </Link>

                  {Constant.RESELLERS.beOurSellerDesc1.afterLink}
                </p>
                <p>
                  {Constant.RESELLERS.beOurSellerDesc2.beforeLink}

                  <Link
                    href={Constant.RESELLERS.beOurSellerDesc2.linkHref}
                    className="text-[#48AFDB] hover:text-[#2b98c7]"
                  >
                    {Constant.RESELLERS.beOurSellerDesc2.linkText}
                  </Link>

                  {Constant.RESELLERS.beOurSellerDesc2.afterLink}
                </p>
              </div>
            }
          />
          <div className="px-5 md:p-0">
            <div className="flex items-center justify-center">
              <h2 className="mb-[30px] text-center text-[25px] leading-snug font-light text-[#48AFDB] md:text-4xl lg:w-full dark:text-sky-400">
                {Constant.RESELLERS.featureTitle}
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:gap-x-[30px] lg:gap-y-16 xl:grid-cols-4">
              {RESELLER_FEATURES.map((feature) => (
                <ServiceCard
                  {...feature}
                  title={
                    <h4
                      className={`mb-[15px] max-w-[220px] text-[18px] font-bold text-[#48AFDB] uppercase md:text-[22px] dark:text-white`}
                    >
                      {feature.title}
                    </h4>
                  }
                  enableHoverScale={false}
                  descClassName="text-[17px]"
                  parentClassName={"!cursor-default"}
                  titleClassName={"!text-[#48AFDB]"}
                  key={feature.title}
                  iconClassName={"h-[60px] w-[60px] !text-[#48AFDB]"}
                  imageContainerClassName={
                    "w-[100px] h-[100px] !bg-white !border-[#48AFDB] border-[4px] !group-hover:scale-0"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResellersPage;
