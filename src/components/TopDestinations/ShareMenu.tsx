import Image from "next/image";

import pinterest from "../../../public/images/destination/pinterest.png";

import twitter from "../../../public/images/destination/twitter.png";

import linkedin from "../../../public/images/destination/linkedin.png";
import googleplusLogo from "../../../public/images/destination/google-plus-logo.png";

import facebook from "../../../public/images/destination/facebook.png";

import stumble from "../../../public/images/destination/stumble.png";
import { useState } from "react";
export default function ShareMenu() {
  const socials = [
    facebook,
    twitter,
    googleplusLogo,
    pinterest,
    linkedin,
    stumble,
  ];
  const [active, setActive] = useState(5);
  return (
    <div className="flex h-[60px] bg-[#48AFDB]">
      {socials.map((icon, index) => (
        <button
          key={index}
          onMouseEnter={() => setActive(index)}
          onClick={() => setActive(index)}
          className={`flex flex-1 cursor-pointer items-center justify-center transition-colors duration-200 ${
            active === index ? "bg-[#3b5578]" : "hover:bg-sky-500"
          }`}
        >
          <Image src={icon} alt="" width={20} height={20} />
        </button>
      ))}
    </div>
  );
}
