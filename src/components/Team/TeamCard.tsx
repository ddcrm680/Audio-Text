import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Skype from "../../../public/images/team/skype.png";
import Envelop from "../../../public/images/team/envelope.png";
import { TeamCardProps } from "@/types/team";

export default function TeamCard({
  image,
  title,
  points,
  skype,
  email,
}: TeamCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden bg-[#edf2f7] shadow-sm dark:bg-slate-800">
      <div className="relative h-[263px] xl:h-[160px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="bg-[#48AFDB] px-[40px] py-[30px] text-center">
        <h3 className="text-[24px] font-light text-white uppercase">{title}</h3>
      </div>

      <div className="flex flex-1 flex-col justify-between px-[40px] py-[47px]">
        <ul className="list-square space-y-15">
          {points.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[17px] leading-6 text-[#444] dark:text-gray-300"
            >
              <span className="mt-[13px] h-[5px] w-[5px] shrink-0 bg-[#2d3142] dark:bg-gray-400" />

              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex justify-evenly gap-10">
          <Link
            href={skype}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0078d4] transition hover:scale-110"
          >
            <Image src={Skype} width={32} height={32} alt="linkedin" />
          </Link>

          <Link
            href={email}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2f80ed] transition hover:scale-110"
          >
            <Image src={Envelop} width={32} height={32} alt="linkedin" />
          </Link>
        </div>
      </div>
    </div>
  );
}
