import SectionBanner from "@/components/Common/SectionBanner";
import FeatureSection from "@/components/Services/FeatureSection";
import { Constant } from "@/utils/constants";
import {
  AlertCircle,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Globe,
  IndianRupee,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
export const metadata = {
  title: "Career | Audio Text",
};

export default function CareersPage() {
  const career = Constant.Career;
  const titleClassName = `
    !leading-tight
!font-semibold
    !normal-case
    
  `;
  const descClassName = `
    !text-center
    !text-slate-600
    dark:!text-slate-300
    !leading-[20px]`;
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
    !bg-gradient-end-light
    !border-none  
    dark:!bg-[#00dbe91a]
    !rounded-full
 `;
  return (
    <div>
      <SectionBanner title={career.title} />

      <section style={{ fontFamily: "Aileron Light" }}>
        <div className="lg:px-auto bg-white px-5 py-[70px] dark:bg-[linear-gradient(135deg,var(--color-gradient-start-dark)_0%,var(--color-gradient-end-dark)_100%)]">
          <div className="mx-auto max-w-6xl">
            <div className="mb-[16px]">
              <span className="text-primary-blue text-[16px] font-semibold tracking-[3px] uppercase">
                Work With Us
              </span>

              <h1 className="mt-4 text-[48px] leading-tight font-semibold text-[#10213d] md:text-[48px] dark:text-white">
                {career.joinUsTitle}
              </h1>

              <p className="mt-6 text-[18px] leading-7 text-[#3f484e] dark:text-slate-300">
                {career.joinUsDesc1}
              </p>

              <p className="mt-6 text-[18px] leading-7 text-[#3f484e] dark:text-slate-300">
                {career.joinUsDesc2}
              </p>
            </div>
          </div>{" "}
        </div>
        <div className="lg:px-auto dark:bg-section-secondary-dark bg-card-light px-5 py-[48px]">
          <div className="mx-auto max-w-6xl">
            {/* Heading */}
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <div>
                <h2 className="text-primary-blue text-[32px] font-semibold uppercase">
                  {career.openingTitle}
                </h2>

                <p className="mt-1 text-[16px] text-slate-500 dark:text-slate-400">
                  Join our high-performance technical team
                </p>
              </div>

              <div className="self-end md:self-auto">
                <div className="border-primary-blue/20 dark:border-card-border-dark dark:bg-card-dark w-fit rounded-full border bg-white px-4 py-2 shadow-sm">
                  <span className="flex items-center gap-2 text-[14px] font-semibold">
                    <span className="h-2 w-2 rounded-full bg-green-600" />1
                    Position Available
                  </span>
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="dark:border-card-border-dark dark:bg-card-dark overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid lg:grid-cols-[320px_1fr]">
              {/* Left Side */}
              <div className="dark:border-card-border-dark flex flex-col justify-between border-r border-slate-200 p-8">
                <div className="flex flex-col">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="bg-primary-blue flex h-12 w-12 items-center justify-center rounded-xl text-white">
                      <BriefcaseBusiness size={28} />
                    </div>

                    <h3 className="text-[24px] font-semibold text-slate-800 dark:text-white">
                      Laravel Developer
                    </h3>
                  </div>

                  <div className="space-y-3 text-[14px] text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-3">
                      <MapPin size={14} />
                      <span>{career.location}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <BriefcaseBusiness size={14} />
                      <span>{career.experience}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <IndianRupee size={14} />
                      <span>{career.salary}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <hr className="dark:border-card-border-dark my-6 border-slate-200" />

                  <p className="text-[12px] tracking-widest text-slate-500 uppercase">
                    Direct Contact
                  </p>

                  <Link
                    href={`mailto:${career.contactEmail}`}
                    className="text-primary-blue mt-1 block text-[18px] font-semibold"
                  >
                    {career.contactEmail}
                  </Link>

                  <Link
                    href={`mailto:${career.contactEmail}`}
                    className="bg-primary-blue mt-4 block rounded-lg px-[24px] py-[12px] text-center text-[16px] font-semibold text-white transition hover:opacity-90"
                  >
                    Apply for this Position
                  </Link>
                </div>
              </div>

              {/* Right Side */}
              <div className="p-8 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <FileText size={18} className="text-primary-blue" />

                  <h4 className="text-[14px] font-semibold tracking-[2px] uppercase">
                    {career.responsibilityTitle}
                  </h4>
                </div>

                <ul className="space-y-4">
                  {career.responsibilities.map((item) => (
                    <li key={item} className="flex gap-4">
                      <CheckCircle2
                        size={18}
                        className="text-primary-blue mt-1 shrink-0"
                      />

                      <span className="leading-7 text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    </li>
                  ))}

                  <li className="flex gap-4">
                    <AlertCircle
                      size={18}
                      className="mt-1 shrink-0 text-red-500"
                    />

                    <span className="text-black-500 font-semibold">
                      {career.note}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-auto dark:bg-section-tertiary-dark bg-white px-5 py-[70px]">
          <div className="mx-auto max-w-6xl">
            {/* sister concern companies */}
            <FeatureSection
              layout="vertical"
              padding="pb-[48px]"
              contentClassName="text-center"
              titleClassName={`${titleClassName} !text-[20px] !text-primary-blue !text-[32px] !mb-0 `}
              descClassName={`${descClassName} w-auto md:w-3xl mx-auto`}
              title={Constant.Career.sisterConcern}
            />

            <div className="grid gap-4 md:grid-cols-3 lg:gap-x-[30px]">
              {Constant.Career.sisterCompanies.map((item: any, index) => {
                const Icon = item.icon;
                return (
                  <FeatureSection
                    card
                    layout="vertical"
                    padding="p-10"
                    childPadding="px-0"
                    cardClassName={cardClassName}
                    iconWrapperClassName={iconWrapperClassName}
                    contentClassName="text-center"
                    description={
                      <div className="dark:border-card-border-dark mt-6 border-t border-slate-200 pt-5">
                        <div className="flex items-center justify-center gap-4">
                          {item?.social?.website && (
                            <Link
                              href={item?.social?.website}
                              target="_blank"
                              className="text-primary-blue transition hover:scale-110"
                            >
                              <Globe size={18} />
                            </Link>
                          )}

                          {item?.social?.facebook && (
                            <Link
                              href={item?.social?.facebook}
                              target="_blank"
                              className="text-primary-blue transition hover:scale-110"
                            >
                              <FaFacebookF size={18} />
                            </Link>
                          )}

                          {item?.social?.instagram?.map((link, index) => (
                            <Link
                              key={index}
                              href={link}
                              target="_blank"
                              className="text-primary-blue transition hover:scale-110"
                            >
                              <FaInstagram size={18} />
                            </Link>
                          ))}
                        </div>
                      </div>
                    }
                    titleClassName={`${titleClassName} !text-[16px] !text-black dark:!text-white mb-4`}
                    descClassName={descClassName}
                    icon={
                      <Icon
                        size={34}
                        className="dark:text-primary-blue text-[#4e6073]"
                      />
                    }
                    title={item.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* <h3 className="text-primary-blue mb-[23px] text-[30px] uppercase">
            {career.joinUsTitle}
          </h3>

          <p>{career.joinUsDesc}</p>

          <h3 className="text-primary-blue mt-[20px] mb-[23px] text-[24px] uppercase">
            {career.openingTitle}
          </h3>

          <h3 className="text-primary-blue mb-[17px] text-[18px]">
            <strong>{career.profile}</strong>
          </h3>

          <ul className="list-disc pl-[22px] leading-[25px]">
            <li>Experience : {career.experience}</li>

            <li>Job location : {career.location}</li>

            <li>Salary: {career.salary}</li>

            <li>
              Contact Details :{" "}
              <Link
                href={`mailto:${career.contactEmail}`}
                className="text-primary-blue hover:underline"
              >
                {career.contactEmail}
              </Link>
            </li>

            <li>
              Company link :{" "}
              <Link
                href={`/`}
                target="_blank"
                className="text-primary-blue hover:underline"
              >
                {career.companyWebsite}
              </Link>
            </li>
          </ul>

          <p className="mt-[15px] mb-[15px] text-[17px] text-[#2d3142] dark:text-white">
            <strong> {career.responsibilityTitle}</strong>
          </p>

          <ul className="list-disc pl-[22px]">
            {career.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="mt-[20px] mb-[30px] text-[17px]">
            <strong className="text-[17px] text-[#2d3142] dark:text-white">
              Note :
            </strong>{" "}
            {career.note}
          </p>
          <p>&nbsp;</p>

          <strong className="text-[17px] text-[#2d3142] dark:text-white">
            {career.sisterCompanyTitle}
          </strong>

          <div className="flex flex-col items-start gap-0">
            {career.sisterCompanies.map((url) => (
              <Link
                key={url}
                href={url}
                target="_blank"
                className="text-primary-blue inline break-all transition hover:underline"
              >
                {url}
              </Link>
            ))}
          </div>
        </div> */}
      </section>
    </div>
  );
}
