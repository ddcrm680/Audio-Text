import Image from "next/image";
import Link from "next/link";
import Skype from "../../../public/images/team/skype.png";
import Envelope from "../../../public/images/team/envelope.png";
import { TeamCardProps } from "@/types/team";
import { CheckCircle } from "lucide-react";

export default function TeamCard({
  image,
  title,
  active,
  index,
  points,
  onClick,
  skype,
  email,
}: TeamCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative min-h-[247px] overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 lg:h-[560px]"
    >
      {" "}
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className={`object-cover transition-transform duration-700 ${
          active ? "scale-[1.05]" : "scale-100 group-hover:scale-[1.05]"
        }`}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 transition-all duration-700 group-hover:from-black/80 group-hover:via-black/20 group-hover:to-black/10" />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Top */}
        <div className="flex items-start justify-between">
          <span className="rounded bg-[#11d9ff] px-[12px] py-[4px] text-[11px] font-bold tracking-wider text-[#071019] uppercase">
            Dept. 0{index + 1}
          </span>

          <div
            className={`absolute top-6 right-6 flex gap-2 transition-all duration-500 ${
              active
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-4 opacity-0 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
            }`}
          >
            {" "}
            <Link
              href={skype}
              target="_blank"
              className="group/icon flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur transition hover:bg-[#11d9ff]"
            >
              <Image
                src={Skype}
                alt=""
                width={18}
                height={18}
                className="transition group-hover/icon:brightness-0"
              />
            </Link>
            <Link
              href={email}
              target="_blank"
              className="group/icon flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur transition hover:bg-[#11d9ff]"
            >
              <Image
                src={Envelope}
                alt=""
                width={18}
                height={18}
                className="transition group-hover/icon:brightness-0"
              />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`transition-all duration-700 ${
            active ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"
          }`}
        >
          <h3
            className={`leading-none font-bold text-white transition-all duration-500 ${
              active ? "text-[34px]" : "text-[28px] group-hover:text-[34px]"
            }`}
          >
            {" "}
            {title}
          </h3>

          <ul
            className={`mt-4 space-y-2 transition-all duration-500 ${
              active ? "opacity-100" : "opacity-70 group-hover:opacity-100"
            }`}
          >
            {" "}
            {points.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[14px] leading-6 text-gray-200"
              >
                {/* <span className="mt-[8px] h-[7px] w-[7px] rounded-full bg-[#11d9ff]" /> */}
                <span
                  className="text-primary-fixed-dim text-primary-blue material-symbols-outlined mt-1 text-[12px]"
                  data-icon="check_circle"
                  data-weight="fill"
                >
                  <CheckCircle size={12} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
