import AboutSection from "@/components/About/AboutSection";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SkillsChart from "@/components/About/SkillChart";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionBanner from "@/components/Common/SectionBanner";
import ContentSection from "@/components/ContentSection";
import TeamCard from "@/components/Team/TeamCard";
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
          <ContentSection
            bg=""
            titleIcon={<ThumbsUp size={20} strokeWidth={2} />}
            padding="pb-[20px] "
            title={Constant.Team.ourZealousTeamTitle}
            description={
              <div className="relative">
                <p>{Constant.Team.ourZealousTeamDesc}</p>
              </div>
            }
          />
          <div className="bg-white pt-[70px] pb-[35px] dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-5">
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {TEAM_MEMBERS.map((member) => (
                  <TeamCard key={member.title} {...member} />
                ))}
              </div>
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
