import Image from "next/image";

import pinterest from "../../../public/images/destination/pinterest.png";
import twitter from "../../../public/images/destination/twitter.png";
import linkedin from "../../../public/images/destination/linkedin.png";
import googleplusLogo from "../../../public/images/destination/google-plus-logo.png";
import facebook from "../../../public/images/destination/facebook.png";
import stumble from "../../../public/images/destination/stumble.png";

import { useState } from "react";
import { ShareMenuProps } from "@/types/destination";

export default function ShareMenu({ share }: ShareMenuProps) {
  const socials = [
    {
      icon: facebook,
      link: share.facebook,
    },
    {
      icon: twitter,
      link: share.twitter,
    },
    {
      icon: googleplusLogo,
      link: share.google,
    },
    {
      icon: pinterest,
      link: share.pinterest,
    },
    {
      icon: linkedin,
      link: share.linkedin,
    },
    {
      icon: stumble,
      link: share.stumble,
    },
  ];

  const [active, setActive] = useState(5);

  return (
    <div className="flex h-[60px] bg-[#48AFDB]">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setActive(index)}
          className={`flex flex-1 items-center justify-center transition-colors duration-200 ${
            active === index ? "bg-[#3b5578]" : "hover:bg-sky-500"
          }`}
        >
          <Image src={item.icon} alt="" width={20} height={20} />
        </a>
      ))}
    </div>
  );
}
