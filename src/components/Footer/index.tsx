"use client";

import Linkedin from "../../../public/images/hero/linkedin.png";
import facebook from "../../../public/images/hero/facebook.png";
import Mail from "../../../public/images/hero/mail.png";
import Teams from "../../../public/images/hero/business.png";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS } from "@/utils/constants";
// import { Facebook, Linkedin, Mail, MailOpen, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <>
      <footer className="dark:bg-gray-dark footer relative z-10 bg-[#3b3e4f]">
        {/* Top Section */}
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-30 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Follow Us */}
            <div className="socials flex flex-col items-center md:items-start">
              <h2 className="mb-5 text-[36px] font-light text-white uppercase">
                Follow Us
              </h2>

              <div className="socials socials-icons flex items-center gap-4">
                <a
                  href="https://www.facebook.com/GlobalAudioTextSolutions"
                  target="_blank"
                  className="h-13 w-13"
                  title="facebook"
                >
                  <Image src={facebook} width={52} height={52} alt="facebook" />
                </a>
                <a
                  href="https://www.linkedin.com/company/audio-text-solution/"
                  target="_blank"
                  title="linkedin"
                  className="h-13 w-13"
                >
                  <Image src={Linkedin} width={52} height={52} alt="linkedin" />
                </a>

                <a
                  href="https://twitter.com/audiotexts"
                  target="_blank"
                  className="flex h-13 w-13 items-center justify-center rounded-full bg-[#707789] text-[#3f4253] transition hover:bg-[#48AFDB] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    style={{
                      height: "52px",
                      width: "52px",
                      borderRadius: "100%",
                      padding: "9px",
                      backgroundColor: "#7b848f",
                    }}
                  >
                    <path
                      fill="#3b3e4f"
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col items-center md:items-start">
              <h2 className="mb-5 text-[36px] font-light text-white uppercase">
                Quick Contact
              </h2>

              <div className="space-y-[9px]">
                <a
                  href="https://teams.microsoft.com/l/chat/0/0?users=support@audiotextsolutions.com"
                  className="flex items-center gap-[5px] text-white transition hover:text-[#48AFDB]"
                >
                  <Image src={Teams} width={20} height={20} alt="teams" />
                  <strong> support@audiotextsolutions.com</strong>
                </a>

                <a
                  href="mailto:sales@audiotextsolutions.com"
                  className="flex items-center gap-[5px] text-white transition hover:text-[#48AFDB]"
                >
                  <Image src={Mail} width={20} height={20} alt="mail" />
                  <strong>sales@audiotextsolutions.com</strong>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#2f313e] py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:pr-20 lg:pl-10">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {FOOTER_LINKS.map((item, id) => (
                <li key={id}>
                  <Link
                    href={item.link}
                    className="flex items-center text-[16px] font-light text-white transition hover:text-[#48AFDB]"
                  >
                    <span className="mr-2 text-[#48AFDB]">&gt;</span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="text-center text-[16px] leading-7 font-light text-white lg:text-left">
              <p>2015-2026 © Designed &amp; Hosted by</p>
              <p>Audiotext Development Team</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
