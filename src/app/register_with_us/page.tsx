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
import { Constant, RESELLER_FEATURES, SERVICES, URLs } from "@/utils/constants";
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
  title: "Register with Us | Audio Text",
  // other metadata
};

const ResellersPage = () => {
  return (
    <div style={{ fontFamily: "Aileron Light" }}>
      <SectionBanner
        backgroundImage={URLs.registerBg}
        title={Constant.RESELLERS.registerTitle}
        subtitle={Constant.RESELLERS.registerDesc}
      />
      <div className="" style={{ fontFamily: "Aileron Light" }}>
        <div className="mx-auto max-w-6xl py-[70px]"></div>
      </div>
    </div>
  );
};

export default ResellersPage;
