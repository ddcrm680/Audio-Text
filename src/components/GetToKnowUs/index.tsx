"use client";

import Link from "next/link";
import ContentSection from "../ContentSection";

export default function GetToKnowUs() {
  return (
    <ContentSection
      title="GET TO KNOW US"
      image="/images/about/get-to-know-us.jpg"
      imageAlt="About Audio Text Solutions"
      buttonText="KNOW MORE"
      buttonLink="/about-us"
      description={
        <>
          <span>
            Ever since it came into existence Audio Text Solutions Pte. Ltd. has
            been providing excellent audio and text based solutions to the
            telecom industry. The organization started back during 2007 and now
            have branched across London, Singapore and the USA.
          </span>

          <span>
            We have interconnections with major Tier-1 carriers across the world
            and currently, we are one of the{" "}
            <Link
              href="/#"
              className="font-medium text-[#48AFDB] hover:underline"
            >
              best premium rate numbers providers
            </Link>
            .
          </span>

          <span>
            We strive to provide you{" "}
            <Link
              href="/#"
              className="font-medium text-[#48AFDB] hover:underline"
            >
              domestic premium rate numbers
            </Link>{" "}
            as well as{" "}
            <Link
              href="/#"
              className="font-medium text-[#48AFDB] hover:underline"
            >
              international premium numbers
            </Link>{" "}
            to destinations across the globe.
          </span>

          <span>
            Our team is dedicated to providing premium quality technical
            support. We provide PRN (IVR & DPRN),{" "}
            <Link
              href="/#"
              className="font-medium text-[#48AFDB] hover:underline"
            >
              IVR Hosting
            </Link>
            , SIP on premium rate calls and other{" "}
            <Link
              href="/#"
              className="font-medium text-[#48AFDB] hover:underline"
            >
              premium rate services
            </Link>{" "}
            like live radio, weather forecast, games and much more.
          </span>

          <span>
            Audio Text Solutions is constantly expanding its services across the
            world while delivering reliable and innovative telecom solutions.
          </span>
        </>
      }
    />
  );
}
