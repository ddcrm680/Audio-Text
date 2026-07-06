import Link from "next/link";
import { ChevronRight } from "lucide-react";

import SectionBanner from "@/components/Common/SectionBanner";
import { Constant, URLs } from "@/utils/constants";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Audio Text",
};

const NotFoundPage = () => {
  return (
    <div style={{ fontFamily: "Aileron Light" }}>
      <SectionBanner
        backgroundImage={URLs.registerBg}
        title={Constant.COMMON.pageNotFound}
      />

      <section className="px-6 py-[90px]">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-[58px] leading-none font-light text-[#48AFDB] uppercase md:text-[58px] dark:text-sky-400">
            Page Not Found.
          </h1>

          <p className="mt-10 max-w-3xl text-[17px] leading-9 text-black dark:text-gray-300">
            Sorry, but the page you requested could not be found.
          </p>
          <Link
            href="/"
            className="bg-primary-blue mt-[20px] flex w-full shrink-0 items-center justify-center gap-3 px-8 py-4 text-white transition hover:bg-[#39a6d6] md:inline-flex md:w-auto"
          >
            <span className="text-[21px] leading-[1.8] font-light whitespace-nowrap text-white dark:text-gray-300">
              {Constant.COMMON.backToHome}
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
