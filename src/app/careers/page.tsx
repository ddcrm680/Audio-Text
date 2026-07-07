import SectionBanner from "@/components/Common/SectionBanner";
import { Constant } from "@/utils/constants";
import Link from "next/link";

export const metadata = {
  title: "Career | Audio Text",
};

export default function CareersPage() {
  const career = Constant.Career;

  return (
    <div>
      <SectionBanner title={career.title} />

      <section
        className="px-5 py-[70px]"
        style={{ fontFamily: "Aileron Light" }}
      >
        <div className="mx-auto max-w-6xl text-[17px] leading-[25px] text-[#555] dark:text-gray-300 [&_ul]:mt-[17px]">
          <h3 className="text-primary-blue mb-[23px] text-[30px] uppercase">
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
        </div>
      </section>
    </div>
  );
}
