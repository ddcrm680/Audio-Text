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
      <div className="relative h-[64px] w-[64px] shrink-0 overflow-hidden rounded-md border border-slate-200 bg-white dark:border-[#374151] dark:bg-[#1F2937]">
        <Image
          src={image}
          alt={title}
          fill
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <h3 className="hover:text-primary-blue line-clamp-2 text-[14px] leading-[16px] font-semibold text-[#495466] transition-colors duration-200 group-hover:text-[#48AFDB] dark:text-[#F3F4F6] dark:group-hover:text-[#48AFDB]">
          {title}
        </h3>

        <p className="mt-2 text-[13px] leading-[20px] text-[#6B7280] dark:text-[#9CA3AF]">
          {date}
        </p>
      </div>
    </Link>
  );
}
