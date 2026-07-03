import AboutSection from "@/components/About/AboutSection";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SkillsChart from "@/components/About/SkillChart";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionBanner from "@/components/Common/SectionBanner";
import ContentSection from "@/components/ContentSection";
import ServiceCard from "@/components/Hero/ServiceCard";
import ResellerBenefits from "@/components/resellers/ResellerBenefits";
import { Colors } from "@/utils/color";
import { Constant, RESELLER_FEATURES, SERVICES } from "@/utils/constants";
import {
  Bookmark,
  ChevronRight,
  Crosshair,
  Eye,
  Flag,
  Rocket,
  User,
  Users,
} from "lucide-react";

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
          <div className="px-5 pb-[35px] md:p-0 md:pb-[35px]">
            <div className="flex items-center justify-center">
              <h2 className="mb-[30px] text-center text-[25px] leading-snug font-light text-[#48AFDB] md:text-4xl lg:w-full dark:text-sky-400">
                {Constant.RESELLERS.featureTitle}
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:gap-x-[30px] lg:gap-y-16 xl:grid-cols-4">
              {RESELLER_FEATURES.map((feature, index) => (
                <ServiceCard
                  {...feature}
                  title={
                    <h2
                      className={`mb-[15px] text-4xl leading-[46px] font-light text-[#48AFDB] uppercase md:text-2xl dark:text-sky-400`}
                    >
                      {feature.title}
                    </h2>
                  }
                  enableScrollAnimation
                  animationDirection={index < 2 ? "left" : "right"}
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
          <ResellerBenefits
            icon={<Bookmark size={24} />}
            title={Constant.RESELLERS.regularResellerTitle}
            description={Constant.RESELLERS.regularResellerDesc1}
            points={[
              Constant.RESELLERS.regularResellerDescPoint1,
              Constant.RESELLERS.regularResellerDescPoint2,
              Constant.RESELLERS.regularResellerDescPoint3,
              Constant.RESELLERS.regularResellerDescPoint4,
            ]}
          />
          <ResellerBenefits
            icon={<Crosshair size={24} />}
            title={Constant.RESELLERS.superResellerTitle}
            animateDescription
            animatePoints
            description={Constant.RESELLERS.superResellerDesc}
            columns={2}
            points={[
              Constant.RESELLERS.superResellerDescPoint1,
              Constant.RESELLERS.superResellerDescPoint2,
              Constant.RESELLERS.superResellerDescPoint3,
              Constant.RESELLERS.superResellerDescPoint4,
              Constant.RESELLERS.superResellerDescPoint5,
              Constant.RESELLERS.superResellerDescPoint6,
              Constant.RESELLERS.superResellerDescPoint7,
              Constant.RESELLERS.superResellerDescPoint8,
            ]}
          />
          <section
            className={`mx-6 mt-[35px] bg-[#f0f4f7] px-8 py-10 dark:bg-slate-800`}
          >
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="flex items-start gap-6 md:items-center">
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#48AFDB] text-white sm:h-[100px] sm:w-[100px]">
                  <Flag
                    strokeWidth={1.5}
                    className="h-[30px] w-[30px] -rotate-[15deg] fill-[#3d3f56] text-[#3d3f56] sm:h-[50px] sm:w-[50px]"
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-light text-[#48AFDB] uppercase">
                    {Constant.RESELLERS.wantToBeReseller}
                  </h2>

                  <p className='mt-5 hidden max-w-2xl font-["Aileron_Light"] text-[17px] leading-8 sm:inline'>
                    {Constant.RESELLERS.wantToBeResellerDesc}
                  </p>
                </div>
              </div>
              <p className='inline max-w-2xl font-["Aileron_Light"] text-[17px] leading-8 sm:hidden'>
                {Constant.RESELLERS.wantToBeResellerDesc}
              </p>
              <div className="flex w-full items-end justify-end lg:w-auto">
                <Link
                  href="/register_with_us"
                  className="flex w-full shrink-0 items-center justify-center gap-3 bg-[#48AFDB] px-8 py-4 text-white transition hover:bg-[#39a6d6] md:w-auto"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white">
                    <ChevronRight size={14} />
                  </span>

                  <span className="text-[21px] leading-[1.8] font-light whitespace-nowrap text-white dark:text-gray-300">
                    {Constant.RESELLERS.registerNow}
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResellersPage;
