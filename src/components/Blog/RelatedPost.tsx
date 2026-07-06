import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const RelatedPost = ({
  image,
  slug,
  title,
  date,
}: {
  image: StaticImageData;
  slug: string;
  title: string;
  date: string;
}) => {
  return (
    <div className="flex items-center lg:block xl:flex">
      <div className="mr-[9px] lg:mb-3 xl:mb-0">
        <Link rel="stylesheet" href={`/blog/${slug}`} className="href">
          <div className="relative h-[94px] w-[94px] cursor-pointer overflow-hidden rounded-full bg-[#f0f4f7] sm:h-[94px] sm:w-[94px]">
            <Image
              src={image}
              alt={title}
              fill
              className="h-[72px] w-[72px] rounded-full p-[11px]"
            />
          </div>
        </Link>
      </div>
      <div className="w-full">
        <Link
          href={`/blog/${slug}`}
          className="text-[15px] leading-[15px] text-[#48AFDB] hover:underline"
        >
          {title}
        </Link>
        <p className="text-[15px] font-medium text-[#75889C]">{date}</p>
      </div>
    </div>
  );
};

export default RelatedPost;
