import SingleBlog from "@/components/Blog/SingleBlog";
import SectionBanner from "@/components/Common/SectionBanner";
import { BlogList, Constant, PER_PAGE } from "@/utils/constants";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;

  const currentPage = Number(params.page ?? 1);

  const totalPages = Math.ceil(BlogList.length / PER_PAGE);

  const blogs = BlogList.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  return (
    <div style={{ fontFamily: "Aileron Light" }}>
      <SectionBanner
        title={Constant.BLOG.title}
        subtitle={Constant.BLOG.desc}
      />
      <div className="px-5" style={{ fontFamily: "Aileron Light" }}>
        <div className="mx-auto max-w-6xl py-[70px]">
          <div className="flex flex-col">
            {blogs.map((blog, index) => (
              <SingleBlog
                index={index}
                key={blog.id}
                blog={blog}
                isLast={index === blogs.length - 1}
              />
            ))}
          </div>

          {/* Pagination */}

          <div className="mt-[20px] mb-[30px] flex justify-center">
            <div className="flex items-center gap-[17px]">
              {currentPage > 1 && (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="flex h-[49px] w-[49px] items-center justify-center rounded-full border border-[#48AFDB] text-[#48AFDB] transition hover:bg-[#48AFDB] hover:text-white"
                >
                  <ChevronLeft size={30} />
                </Link>
              )}

              {Array.from({ length: totalPages }, (_, i) => {
                const page = i + 1;

                return (
                  <Link
                    key={page}
                    href={`/blog?page=${page}`}
                    className={`flex h-[49px] w-[49px] items-center justify-center rounded-full border text-[30px] font-light transition ${
                      currentPage === page
                        ? "border-[#48AFDB] bg-[#48AFDB] text-white"
                        : "border-[#48AFDB] text-[#444] hover:bg-[#48AFDB] hover:text-white dark:text-gray-300"
                    }`}
                  >
                    {page}
                  </Link>
                );
              })}

              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="flex h-[49px] w-[49px] items-center justify-center rounded-full border border-[#48AFDB] text-[#48AFDB] transition hover:bg-[#48AFDB] hover:text-white"
                >
                  <ChevronRight size={30} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
