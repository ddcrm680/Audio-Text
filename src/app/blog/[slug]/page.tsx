import { Metadata } from "next";
import BlogWrapper from "@/app/BlogWrapper/page";
import SectionBanner from "@/components/Common/SectionBanner";
import { BlogList, category, PER_PAGE, URLs } from "@/utils/constants";
import Link from "next/link";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
import ShareMenu from "@/components/TopDestinations/ShareMenu";
import { formatBlogDate } from "@/utils/helpers";
type Props = {
  params: { slug: string };
  searchParams: { page?: string };
};

export const metadata: Metadata = {
  title: "Blog Category | Audio Text",
  // other metadata
};

export default async function BlogDetails({ params }: Props) {
  console.log(params, "paramsparams");
  const { slug: slug } = await params;
  const currentIndex = BlogList.findIndex((item) => item.slug === slug);

  const prevBlog = currentIndex > 0 ? BlogList[currentIndex - 1] : null;

  const nextBlog =
    currentIndex < BlogList.length - 1 ? BlogList[currentIndex + 1] : null;
  const blog = BlogList.find((item) => item.slug === slug);
  const relatedPosts = BlogList.filter(
    (item) =>
      item.slug !== blog.slug &&
      item.category.some((c) => blog.category.some((x) => x.slug === c.slug)),
  ).slice(0, 3);
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
    <>
      <div style={{ fontFamily: "Aileron Light" }}>
        <SectionBanner backgroundImage={URLs.registerBg} title={blog.title} />
        <div style={{ fontFamily: "Aileron Light" }}>
          <div className="mx-auto max-w-6xl py-[70px]">
            <BlogWrapper>
              <div>
                <div className="flex flex-wrap items-center justify-between pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-10">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1100}
                        height={600}
                        className="mb-10 w-full"
                      />

                      <div
                        className="mx-auto max-w-full text-[17px] leading-[30px] text-[#555] [&_a]:text-[#48AFDB] [&_a]:underline [&_h1]:mb-6 [&_h2]:mt-10 [&_h2]:mb-6 [&_h2]:text-[42px] [&_h2]:font-extralight [&_h2]:text-[#48AFDB] [&_h2]:uppercase [&_h3]:mt-8 [&_h3]:mb-5 [&_h3]:text-[30px] [&_h3]:font-light [&_h3]:text-[#48AFDB] [&_li]:mb-2 [&_p]:mb-5 [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-8"
                        dangerouslySetInnerHTML={{
                          __html: blog.desc,
                        }}
                      />
                    </div>

                    {/* Author */}
                    <div className="mt-[53px] w-full bg-[#f4f7fa] px-[35px] py-[30px]">
                      <div className="flex items-start gap-6">
                        <div className="flex h-[94px] w-[94px] items-center justify-center rounded-full bg-white">
                          <Image
                            src="/images/blog/user.jpg"
                            className="rounded-full"
                            width={72}
                            height={72}
                            alt=""
                          />
                        </div>

                        <div>
                          <h3 className="text-[24px] font-light text-black">
                            {blog?.author}
                          </h3>

                          <p className="mt-[3px] flex flex-wrap items-center text-[15px] text-[#75889C]">
                            <span>
                              {formatBlogDate(blog.publish_at)} in&nbsp;
                            </span>

                            {blog.category.map((item, index) => (
                              <span
                                key={item.slug}
                                className="flex items-center"
                              >
                                <Link
                                  href={`/blog/category/${item.slug}`}
                                  className="text-[#48AFDB] hover:underline"
                                >
                                  {item.name}
                                </Link>

                                {index < blog.category.length - 1 && (
                                  <span className="mx-1 text-[#75889C]">,</span>
                                )}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[52px] mb-[23px] flex w-full flex-col gap-[18px] border-b border-[#d6dde3] pb-[10px]">
                      {/* Share Icons */}
                      <div className="flex h-[35px] items-center gap-4">
                        {socials.map((item, index) => (
                          <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex h-[35px] w-[35px] items-center justify-center rounded-full bg-gray-300 hover:bg-primary-blue  transition-colors duration-200`}
                          >
                            <Image
                              src={item.icon}
                              alt=""
                              width={20}
                              height={20}
                            />
                          </a>
                        ))}
                      </div>
                      <div className="flex w-full flex-wrap justify-end text-[15px] text-[#75889C]">
                        <span>{formatBlogDate(blog.publish_at)}</span>

                        {blog.tag.map((tag) => (
                          <span key={tag.slug} className="flex items-center">
                            <span className="mx-[10px] text-[#75889C]">|</span>

                            <Link
                              href={`/blog/tag/${tag.slug}`}
                              className="text-[#48AFDB] hover:underline"
                            >
                              {tag.name}
                            </Link>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-full pb-[52px]">
                      <div className="flex items-center justify-between">
                        {/* Previous */}

                        {prevBlog ? (
                          <Link
                            href={`/blog/${prevBlog.slug}`}
                            className="group flex items-center gap-2"
                          >
                            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#48AFDB] text-white transition group-hover:bg-[#2d9fd5]">
                              <ChevronLeft size={18} />
                            </div>

                            <div>
                              <p className="text-[15px] text-[#444] uppercase">
                                Previous Post
                              </p>
                            </div>
                          </Link>
                        ) : (
                          <div />
                        )}

                        {/* Next */}

                        {nextBlog ? (
                          <Link
                            href={`/blog/${nextBlog.slug}`}
                            className="group flex items-center gap-2"
                          >
                            <div className="text-right">
                              <p className="text-[15px] text-[#444] uppercase">
                                Next Post
                              </p>
                            </div>

                            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#48AFDB] text-white transition group-hover:bg-[#2d9fd5]">
                              <ChevronRight size={18} />
                            </div>
                          </Link>
                        ) : (
                          <div />
                        )}
                      </div>
                    </div>

                    <div className="mb-[14px]">
                      <h2 className="mb-[22px] text-[28px] leading-[38px] font-extralight text-[#48AFDB] uppercase">
                        Related Posts
                      </h2>
                      <div className="flex gap-[18px]">
                        {relatedPosts.slice(0, 3).map((blog, index) => (
                          <div
                            key={blog.id}
                            className={`${index !== 0 ? "pt-[34px]" : ""} ${
                              index !== 2 ? "" : "mb-[35px] pb-[35px]"
                            }`}
                          >
                            {" "}
                            <RelatedPost
                              title={blog.title}
                              image={blog.image}
                              slug={blog.slug}
                              date={formatBlogDate(blog.publish_at)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </BlogWrapper>
          </div>
        </div>
      </div>
    </>
  );
}

// export default B;
