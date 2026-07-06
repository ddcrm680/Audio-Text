import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { formatDate } from "@/utils/helpers";

interface Props {
  blog: Blog;
  index: number;
  isShare?: boolean;
  isLast?: boolean;
}

export default function SingleBlog({
  index,
  blog,
  isShare = false,
  isLast = false,
}: Props) {
  const { day, month } = formatDate(blog.publish_at);
  const socials = [
    {
      icon: "/images/destination/facebook.png",
      link: blog.socialLinks.facebook,
    },
    {
      icon: "/images/destination/twitter.png",
      link: blog.socialLinks.twitter,
    },
    {
      icon: "/images/destination/google-plus-logo.png",
      link: blog.socialLinks.google,
    },

    {
      icon: "/images/destination/linkedin.png",
      link: blog.socialLinks.linkedin,
    },
    {
      icon: "/images/destination/stumble.png",
      link: blog.socialLinks.stumble,
    },
  ];
  return (
    <article className={`flex gap-6 ${index == 0 ? " " : "pt-15"}`}>
      {/* Date */}

      <div className="w-[70px] shrink-0 text-center">
        <div className="mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#48AFDB] text-[36px] font-light text-white">
          {day}
        </div>

        <div className="mt-[5px] text-[17px] text-[#333] uppercase dark:text-gray-300">
          {month}
        </div>
      </div>

      {/* Right */}

      <div className={`flex-1 border-b border-[#d6dde3] pb-[18px]`}>
        <Link href={`/blog/${blog.slug}`}>
          <h2 className="mb-[18px] text-[30px] leading-[38px] font-light text-[#48AFDB] uppercase transition hover:text-[#2d9fd5]">
            {blog.title}
          </h2>
        </Link>

        <div className="mx-auto mt-[9px] mb-[70px] w-full max-w-[1100px] md:w-[500px]">
          <Link href={`/blog/${blog.slug}`}>
            <Image
              src={blog.image}
              alt={blog.title}
              className="h-auto w-full md:w-[500px]"
            />
          </Link>
        </div>
        {isShare && (
          <div className="flex h-[35px] items-center gap-4">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:bg-primary-blue dark:hover:bg-primary-blue flex h-[35px] w-[35px] items-center justify-center rounded-full bg-gray-300 transition-colors duration-200`}
              >
                <Image src={item.icon} alt="" width={20} height={20} />
              </a>
            ))}
          </div>
        )}
        <div className="mt-[29px] flex items-center justify-between">
          <div className="flex flex-wrap items-center">
            {blog.category.map((cat, index) => (
              <div key={cat.slug} className="flex items-center">
                <Link
                  href={`/blog/category/${cat.slug}`}
                  className="text-[15px] text-[#48AFDB] hover:underline"
                >
                  {cat.name}
                </Link>

                {index !== blog.category.length - 1 && (
                  <span className="mx-3 text-[#c7c7c7]">|</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-[18px] text-[15px]">
            <span className="text-[#75889C]">0 comments</span>

            <Link
              href={`/blog/${blog.slug}`}
              className="flex items-center gap-1 text-[15px] text-[#48AFDB] hover:underline"
            >
              <ChevronRight size={17} />
              Read more
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
