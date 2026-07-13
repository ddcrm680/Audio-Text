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
                    <div className="overflow-hidden rounded-[6px] border border-[#d8e0e8] bg-white shadow-sm dark:border-gray-700 dark:bg-[#111827]">
                      {/* Featured Image */}
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1100}
                        height={600}
                        className="w-full rounded-[6px] border border-[#d8e0e8] object-cover"
                      />

                      {/* Blog Content */}
                      <div className="p-10">
                        <div
                          className="prose max-w-none text-[#555] [&_a]:text-[#48AFDB] [&_a]:no-underline hover:[&_a]:underline [&_h1]:mb-6 [&_h1]:text-[34px] [&_h1]:font-light [&_h1]:text-[#48AFDB] [&_h1]:uppercase [&_h2]:mb-5 [&_h2]:text-[30px] [&_h2]:font-light [&_h2]:text-[#48AFDB] [&_h2]:uppercase [&_h3]:mb-4 [&_h3]:text-[24px] [&_h3]:font-normal [&_h3]:text-[#48AFDB] [&_img]:rounded-md [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-5 [&_p]:text-[17px] [&_p]:leading-[34px] [&_ul]:list-disc [&_ul]:pl-6"
                          dangerouslySetInnerHTML={{ __html: blog.desc }}
                        />

                        {/* Author */}
                        <div className="mt-6 rounded-lg border border-[#bec8cf] bg-[#eff4ff] p-3">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d8edf8]">
                              <Image
                                src="/images/blog/user.jpg"
                                alt=""
                                width={30}
                                height={30}
                                className="rounded-full"
                              />
                            </div>

                            <div>
                              <h4 className="text-[18px] leading-[20px] font-semibold text-[#222]">
                                {blog.author}
                              </h4>

                              <p className="mt-1 flex flex-wrap text-[14px] leading-[20px] text-[#666]">
                                <span>
                                  {formatBlogDate(blog.publish_at)} in&nbsp;
                                </span>

                                {blog.category.map((item, index) => (
                                  <span key={item.slug}>
                                    <Link
                                      href={`/blog/category/${item.slug}`}
                                      className="font-semibold text-[#0077a8] hover:underline"
                                    >
                                      {item.name}
                                    </Link>

                                    {index !== blog.category.length - 1 && (
                                      <span className="mx-1">,</span>
                                    )}
                                  </span>
                                ))}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-6 border-t border-[#bec8cf] pt-4">
                          <div className="flex flex-col justify-between gap-4">
                            <div className="flex gap-2">
                              {socials.map((item, index) => (
                                <a
                                  key={index}
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-primary-blue flex h-8 w-8 items-center justify-center rounded-full border border-[#d8e1e8] transition-all duration-200 hover:border-[#48AFDB] hover:bg-[#39a6d6] dark:border-gray-600 dark:bg-[#2d3748] dark:hover:bg-[#48AFDB]"
                                >
                                  <Image
                                    src={item.icon}
                                    alt=""
                                    width={14}
                                    height={14}
                                    className="opacity-80 transition-opacity duration-200 hover:opacity-100"
                                  />
                                </a>
                              ))}
                            </div>

                            <div className="flex flex-wrap items-center text-[13px] text-[#777]">
                              <span>{formatBlogDate(blog.publish_at)}</span>

                              {blog.tag.map((tag) => (
                                <span
                                  key={tag.slug}
                                  className="flex items-center"
                                >
                                  <span className="mx-2">|</span>

                                  <Link
                                    href={`/blog/tag/${tag.slug}`}
                                    className="text-[#0077a8] hover:underline"
                                  >
                                    {tag.name}
                                  </Link>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 w-full border-y border-[#d9e3ea] py-6">
                      <div className="flex items-center justify-between">
                        {prevBlog ? (
                          <Link
                            href={`/blog/${prevBlog.slug}`}
                            className="group flex items-center gap-3"
                          >
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0077a8] text-white transition-colors duration-200 group-hover:bg-[#005f87]">
                              <ChevronLeft size={16} strokeWidth={2.5} />
                            </div>

                            <span className="text-[16px] font-normal tracking-[0.5px] text-[#0077a8] uppercase">
                              Previous Post
                            </span>
                          </Link>
                        ) : (
                          <div />
                        )}

                        {nextBlog ? (
                          <Link
                            href={`/blog/${nextBlog.slug}`}
                            className="group flex items-center gap-3"
                          >
                            <span className="text-[16px] font-normal tracking-[0.5px] text-[#0077a8] uppercase">
                              Next Post
                            </span>

                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0077a8] text-white transition-colors duration-200 group-hover:bg-[#005f87]">
                              <ChevronRight size={16} strokeWidth={2.5} />
                            </div>
                          </Link>
                        ) : (
                          <div />
                        )}
                      </div>
                    </div>
                    <div className="mt-12 w-full">
                      <h2 className="border-primary-blue mb-6 border-l-4 pl-3 text-[20px] leading-[28px] font-semibold text-[#0b3156] dark:text-sky-400">
                        Related Posts
                      </h2>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {relatedPosts.slice(0, 3).map((blog, index, arr) => (
                          <div
                            key={blog.id}
                            className={` ${index !== 0 ? "pt-[34px]" : ""} hover:border-primary-blue rounded-lg border border-[#bec8cf] bg-[#eff4ff] p-[8px]`}
                          >
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
              </div>
            </BlogWrapper>
          </div>
        </div>
      </div>
    </>
  );
}

// export default B;
