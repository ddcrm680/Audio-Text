import AboutSection from "@/components/About/AboutSection";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SkillsChart from "@/components/About/SkillChart";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionBanner from "@/components/Common/SectionBanner";
import FAQAccordion from "@/components/FAQ/FAQAccordion";
import { Constant, URLs } from "@/utils/constants";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Audio Text",
  // other metadata
};

const FaqPage = () => {
  return (
    <div>
      <SectionBanner
        backgroundImage={URLs.registerBg}
        title={Constant.FAQ.faqTitle}
        subtitle={Constant.FAQ.faqDesc}
      />
      <section
        className="px-6 py-[70px]"
        style={{ fontFamily: "Aileron Light" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-primary-blue mb-[20px] text-center text-[36px] tracking-wide uppercase">
            {Constant.FAQ.faqHeading}
          </h2>

          <FAQAccordion items={Constant.FAQ.items} />
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
