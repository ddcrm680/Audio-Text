import AboutSection from "@/components/About/AboutSection";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SkillsChart from "@/components/About/SkillChart";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionBanner from "@/components/Common/SectionBanner";
import { Colors } from "@/utils/color";
import { Constant } from "@/utils/constants";
import { Eye, Flag, Rocket, Users } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Audio Text",
  // other metadata
};

const AboutPage = () => {
  return (
    <div>
      <SectionBanner
        title={Constant.ABOUT.title}
        subtitle={Constant.ABOUT.subTitle}
      />
      <div className="px-5" style={{ fontFamily: "Aileron Light" }}>
        <div className="mx-auto max-w-6xl py-[70px]">
          <div className="grid gap-[30px] md:grid-cols-[2fr_1fr]">
            <div className="grid grid-cols-1 gap-[30px]">
              <AboutSection
                icon={Users}
                title={Constant.ABOUT.userTitle}
                description={Constant.ABOUT.userDesc}
              />

              <AboutSection
                icon={Eye}
                title={Constant.ABOUT.visionTitle}
                description={Constant.ABOUT.visionDesc}
              />
              <AboutSection
                icon={Flag}
                title={Constant.ABOUT.missionTitle}
                description={Constant.ABOUT.missionDesc}
              />
            </div>
            <AboutSection
              icon={Rocket}
              title={Constant.ABOUT.skillsTitle}
              description={
                <SkillsChart
                  items={[
                    {
                      label: Constant.ABOUT.skillDesc.userFriendly,
                      value: 95,
                      color: Colors.userLight,
                    },
                    {
                      label: Constant.ABOUT.skillDesc.bestPayouts,
                      value: 90,
                      color: Colors.payoutLight,
                    },
                    {
                      label: Constant.ABOUT.skillDesc.exclusiveTermination,
                      value: 85,
                      color: Colors.exclusiveLight,
                    },
                    {
                      label: Constant.ABOUT.skillDesc.support,
                      value: 90,
                      color: Colors.supportLight,
                    },
                  ].reverse()}
                />
              }
            />
          </div>
        </div>
        <div className="mx-auto mt-[35px] max-w-6xl border-t border-[#d8d8d8]" />
        <div className="mx-auto mt-[0.5px] max-w-6xl border-t border-[#d8d8d8]" />

        {/* Footer Message */}
        <div className="mx-auto max-w-5xl pt-[35px] pb-[70px] text-center">
          <h2
            className="text-[36px] leading-[46px] font-light text-[#48AFDB] md:text-[38px]"
            style={{ fontFamily: "Aileron Light" }}
          >
            {Constant.ABOUT.aboutFooterMessage}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
