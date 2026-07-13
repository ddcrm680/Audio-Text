import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface RelatedPostProps {
  image: StaticImageData;
  slug: string;
  title: string;
  date: string;
}

export default function RelatedPost({
  image,
  slug,
  title,
  date,
}: RelatedPostProps) {
  return (
    <Link href={`/blog/${slug}`} className="group flex gap-3">
      {/* Thumbnail */}
      <div className="dark:border-card-border-dark relative h-[64px] w-[64px] shrink-0 overflow-hidden rounded-md border border-slate-200 bg-white">
        <Image
          src={image}
          alt={title}
          fill
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <h3 className="hover:text-primary-blue line-clamp-2 text-[14px] leading-[16px] font-semibold text-[#495466]">
          {title}
        </h3>

        <p className="mt-2 text-[13px] leading-[20px] text-[#6b7280]">{date}</p>
      </div>
    </Link>
  );
}
