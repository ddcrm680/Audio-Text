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
    <div>
      <SectionBanner
        title={Constant.RESELLERS.title}
        subtitle={Constant.RESELLERS.subTitle}
      />
      <div className="px-5" style={{ fontFamily: "Aileron Light" }}>
        <div className="mx-auto max-w-6xl py-[70px]">
          <ContentSection
            bg=""
            titleIcon={<User size={20} strokeWidth={2} />}
            padding="pb-[30px] "
            subParentClassName="!px-0"
            title={Constant.RESELLERS.beOurSellerTitle}
            image="/images/resellers/join_uss.jpg"
            imageAlt="reseller Image "
            description={
              <div className="relative">
                <p>
                  {Constant.RESELLERS.beOurSellerDesc1.beforeLink}

                  <Link
                    href={Constant.RESELLERS.beOurSellerDesc1.linkHref}
                    className="text-primary-blue hover:text-[#2b98c7]"
                  >
                    {Constant.RESELLERS.beOurSellerDesc1.linkText}
                  </Link>

                  {Constant.RESELLERS.beOurSellerDesc1.afterLink}
                </p>
                <p>
                  {Constant.RESELLERS.beOurSellerDesc2.beforeLink}

                  <Link
                    href={Constant.RESELLERS.beOurSellerDesc2.linkHref}
                    className="text-primary-blue hover:text-[#2b98c7]"
                  >
                    {Constant.RESELLERS.beOurSellerDesc2.linkText}
                  </Link>

                  {Constant.RESELLERS.beOurSellerDesc2.afterLink}
                </p>
              </div>
            }
          />
          <div className="pb-[35px] md:p-0 md:pb-[35px]">
            <div className="flex items-center justify-center">
              <h2 className="text-primary-blue mb-[30px] text-center text-[25px] leading-snug font-light md:text-4xl lg:w-full dark:text-sky-400">
                {Constant.RESELLERS.featureTitle}
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
              {RESELLER_FEATURES.map((feature, index) => (
                <ServiceCard
                  {...feature}
                  key={feature.title}
                  // enableScrollAnimation
                  animationDirection={index < 2 ? "left" : "right"}
                  parentClassName="!cursor-default"
                  cardVariant="feature"
                  title={
                    <h2
                      className={`text-primary-blue mb-[15px] text-xl leading-[30px] font-semibold uppercase dark:text-sky-400`}
                    >
                      {feature.title}
                    </h2>
                  }
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
          <div className="mt-12 flex flex-col gap-8 md:flex-row">
            <ResellerBenefits
              icon={<Bookmark size={22} />}
              title={Constant.RESELLERS.regularResellerTitle}
              description={Constant.RESELLERS.regularResellerDesc1}
              points={[
                Constant.RESELLERS.regularResellerDescPoint1,
                Constant.RESELLERS.regularResellerDescPoint2,
                Constant.RESELLERS.regularResellerDescPoint3,
                Constant.RESELLERS.regularResellerDescPoint4,
              ]}
              variant="light"
            />

            <ResellerBenefits
              icon={<Crosshair size={22} />}
              title={Constant.RESELLERS.superResellerTitle}
              description={Constant.RESELLERS.superResellerDesc}
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
              columns={2}
              variant="primary"
            />
          </div>
          <div className="">
            <section
              className={`bg-registerBg mt-[82px] px-8 py-10 dark:bg-slate-800`}
            >
              <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                <div className="flex items-start gap-6 md:items-center">
                  <div className="bg-primary-blue flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full text-white sm:h-[100px] sm:w-[100px]">
                    <Flag
                      strokeWidth={1.5}
                      className="h-[30px] w-[30px] -rotate-[15deg] fill-[#3d3f56] text-[#3d3f56] sm:h-[50px] sm:w-[50px]"
                    />
                  </div>
                  <div>
                    <h2 className="text-primary-blue text-4xl font-light uppercase">
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
                    className="bg-primary-blue flex w-full shrink-0 items-center justify-center gap-3 px-8 py-4 text-white transition hover:bg-[#39a6d6] md:w-auto"
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
    </div>
  );
};

export default ResellersPage;
