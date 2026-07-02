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
  title: "Service | Audio Text",
  // other metadata
};

const ServicePage = () => {
  return (
    <div>
      <SectionBanner
        title={Constant.Services.title}
        subtitle={Constant.Services.subTitle}
      />
      <div className="md:px-5" style={{ fontFamily: "Aileron Light" }}>
        <div className="mx-auto max-w-6xl py-[70px]">
          <ContentSection
            bg=""
            titleIcon={<BriefcaseBusiness size={20} strokeWidth={2} />}
            padding="pb-[60px]"
            title={Constant.Services.peculiarServiceTitle}
            image="/images/services/service_1.jpg"
            imageAlt="service Image "
            description={
              <div className="relative">
                <p>{Constant.Services.peculiarServiceDescription1}</p>
                <blockquote className="leading-[25px]">
                  <p className="italic">
                    {Constant.Services.peculiarServiceDescription2}
                  </p>
                </blockquote>
              </div>
            }
          />
          <ContentSection
            bg=""
            titleIcon={<Globe size={20} strokeWidth={2} />}
            padding="pb-[60px]"
            title={Constant.Services.internationalPremiumTitle}
            description={
              <div className="relative">
                <p>{Constant.Services.internationalPremiumDesc1}</p>
                <p className="mt-4">
                  {Constant.Services.internationalPremiumDesc2}
                </p>
              </div>
            }
          />
          <div className="grid gap-5 md:grid-cols-2 lg:gap-x-[30px]">
            <FeatureSection
              padding="pb-[60px]"
              layout="vertical"
              icon={<Smartphone size={42} strokeWidth={4} />}
              title={Constant.Services.sessionInitiationTitle}
              description={<p>{Constant.Services.sessionInitiationDesc}</p>}
            />

            <FeatureSection
              layout="vertical"
              padding="pb-[60px]"
              icon={<Play size={42} strokeWidth={4} />}
              title={Constant.Services.interativeVoiceTitle}
              description={<p>{Constant.Services.interativeVoiceDesc}</p>}
            />
          </div>
          <ContentSection
            bg=""
            titleIcon={<Home size={20} strokeWidth={2} />}
            padding="pb-[50px]"
            title={Constant.Services.domesticPremiumTitle}
            description={
              <div className="relative">
                <p>{Constant.Services.domesticPremiumDesc1}</p>
              </div>
            }
          />

          <FeatureSection
            layout={"horizontal"}
            icon={<TrendingUp size={42} strokeWidth={4} />}
            title={Constant.Services.bespokeTitle}
            description={
              <>
                <p>{Constant.Services.bespokeDesc}</p>
              </>
            }
          />
          <FeatureSection
            layout={"horizontal"}
            icon={<Accessibility size={42} strokeWidth={4} />}
            title={Constant.Services.customizeSolutionTitle}
            description={
              <>
                <p>{Constant.Services.customizeSolutionDesc}</p>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
