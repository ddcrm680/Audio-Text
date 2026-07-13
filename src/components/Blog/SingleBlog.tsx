import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MessageSquare } from "lucide-react";
import { formatDate } from "@/utils/helpers";

interface Props {
  blog: Blog;
  index: number;
  isShare?: boolean;
  isLast?: boolean;
}

export default function SingleBlog({ blog }: Props) {
  const { day, month } = formatDate(blog.publish_at);

  return (
    <article className="group z-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-[#374151] dark:bg-[#111827]">
      {" "}
      {/* Image */}
      <Link href={`/blog/${blog.slug}`} className="block">
        <div className="relative">
          <Image
            src={blog.image}
            alt={blog.title}
            width={700}
            height={420}
            className="z-0 h-[320px] w-full transition-transform duration-500 group-hover:scale-105"
          />
          {/* Date */}
          <div className="bg-primary-blue absolute top-4 left-4 flex flex-col items-center justify-center rounded-lg p-3 text-white shadow-lg">
            <span className="text-[24px] leading-[16px] font-semibold">
              {day}
            </span>

            <span className="mt-1 text-[14px] leading-[16px] font-semibold uppercase">
              {month}
            </span>
          </div>
        </div>
      </Link>
      {/* Content */}
      <div className="p-6">
        <Link href={`/blog/${blog.slug}`}>
          <h2 className="text-primary-blue line-clamp-2 text-[32px] leading-tight font-semibold uppercase transition-colors duration-200 group-hover:text-sky-500 dark:text-[#6EC9F0] dark:group-hover:text-[#8BD8F5]">
            {" "}
            {blog.title}
          </h2>
        </Link>

        <div className="my-4 border-t border-[#bec8cf] dark:border-[#374151]" />

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-5">
          {/* Categories */}
          <div className="flex flex-wrap items-center">
            {blog.category.map((cat, index) => (
              <div key={cat.slug} className="flex items-center">
                <Link
                  href={`/blog/category/${cat.slug}`}
                  className="text-[16px] font-semibold text-[#4e6073] transition-colors hover:text-[#48AFDB] hover:underline dark:text-[#D1D5DB] dark:hover:text-[#6EC9F0]"
                >
                  {cat.name}
                </Link>

                {index !== blog.category.length - 1 && (
                  <span className="mx-3 text-slate-300 dark:text-[#4B5563]">
                    |
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-[14px] font-semibold text-slate-500 dark:text-[#9CA3AF]">
              <MessageSquare size={16} />0 Comments
            </span>

            <Link
              href={`/blog/${blog.slug}`}
              className="text-primary-blue flex items-center gap-1 text-[14px] font-semibold transition-colors hover:underline dark:text-[#6EC9F0] dark:hover:text-[#8BD8F5]"
            >
              Read More
              <ChevronRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
