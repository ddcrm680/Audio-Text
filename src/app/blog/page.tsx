import SingleBlog from "@/components/Blog/SingleBlog";
import SectionBanner from "@/components/Common/SectionBanner";
import { BlogList, Constant, PER_PAGE } from "@/utils/constants";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogWrapper from "../BlogWrapper/page";

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
          {" "}
          <BlogWrapper>
            <div className="flex flex-col gap-12">
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

            <div className="mt-[48px] flex justify-center">
              <div className="flex items-center gap-[8px]">
                {currentPage > 1 && (
                  <Link
                    href={`/blog?page=${currentPage - 1}`}
                    className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#48AFDB] text-[#48AFDB] transition hover:bg-[#48AFDB] hover:text-white"
                  >
                    <ChevronLeft size={20} />
                  </Link>
                )}

                {Array.from({ length: totalPages }, (_, i) => {
                  const page = i + 1;

                  return (
                    <Link
                      key={page}
                      href={`/blog?page=${page}`}
                      className={`flex h-[40px] w-[40px] items-center justify-center rounded-full border text-[20px] font-light transition ${
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
                    className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#48AFDB] text-[#48AFDB] transition hover:bg-[#48AFDB] hover:text-white"
                  >
                    <ChevronRight size={20} />
                  </Link>
                )}
              </div>
            </div>
          </BlogWrapper>
        </div>
      </div>
    </div>
  );
}
