import AboutSection from "@/components/About/AboutSection";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SkillsChart from "@/components/About/SkillChart";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionBanner from "@/components/Common/SectionBanner";
import ContentSection from "@/components/ContentSection";
import TeamCard from "@/components/Team/TeamCard";
import TeamSection from "@/components/Team/TeamSection";
import { Colors } from "@/utils/color";
import { Constant, TEAM_MEMBERS } from "@/utils/constants";
import { Eye, Flag, Rocket, ThumbsUp, Users } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Audio Text",
  // other metadata
};

const TeamPage = () => {
  return (
    <div>
      <SectionBanner
        title={Constant.Team.title}
        subtitle={Constant.Team.desc}
      />
      <div className="px-5" style={{ fontFamily: "Aileron Light" }}>
        <div className="mx-auto max-w-6xl py-[70px]">
          <div className="mb-[16px]">
            <h1 className="text-[64px] leading-tight font-bold tracking-tight text-wrap lg:flex lg:items-center">
              Zealous Team —
              <span className="text-primary-blue block">Immersive Focus</span>
            </h1>

            <p className="mt-[32px] text-[16px] leading-[1.625] text-black dark:text-[#b9cacb]">
              {Constant.Team.ourZealousTeamDesc}
            </p>
          </div>

          <div className="bg-white pt-[30px] pb-[35px] dark:bg-slate-900">
            <div className="mx-auto max-w-7xl">
              <div className="mb-[48px] flex items-center justify-between">
                <div>
                  <h2 className="text-primary-blue text-[32px] leading-[40px] font-bold">
                    Core Command Centers
                  </h2>
                </div>
              </div>
              <TeamSection />
            </div>
          </div>
          <div className="mx-auto max-w-6xl border-t border-[#d8d8d8]" />
          <div className="mx-auto mt-[0.5px] max-w-6xl border-t border-[#d8d8d8]" />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
