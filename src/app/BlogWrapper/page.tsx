import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";

import { Metadata } from "next";
import { BlogList } from "@/utils/constants";
import { formatBlogDate } from "@/utils/helpers";

export const metadata: Metadata = {
  title: "Blog Details | Audio Text",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogWrapper = ({ children }: { children: any }) => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="container">
          <div className="flex w-full flex-wrap gap-12 lg:gap-6">
            <div className="w-full lg:flex-1">{children}</div>
            <div className="w-full lg:w-4/12">
              {/* Popular Posts */}
              <div className="mb-12 rounded-xl border border-[#d7e2f0] bg-[#eef5ff] p-6 dark:border-[#2d3748] dark:bg-[#111827]">
                <h3 className="border-primary-blue mb-6 border-l-4 pl-3 text-[20px] leading-[28px] font-semibold text-[#0b3156] dark:text-sky-400">
                  Popular Posts
                </h3>

                <ul className="space-y-6">
                  {BlogList.slice(0, 3).map((blog) => (
                    <li key={blog.id}>
                      <RelatedPost
                        title={blog.title}
                        image={blog.image}
                        slug={blog.slug}
                        date={formatBlogDate(blog.publish_at)}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="dark:border-card-border-dark dark:bg-card-dark rounded-xl border border-[#d7e2f0] bg-[#eef5ff] p-6">
                <h3 className="border-primary-blue mb-6 border-l-4 pl-3 text-[20px] leading-[28px] font-semibold text-[#0b3156] dark:text-sky-400">
                  Recent Posts
                </h3>

                <ul className="space-y-6">
                  {BlogList.slice(0, 3).map((blog) => (
                    <li key={blog.id}>
                      <RelatedPost
                        title={blog.title}
                        image={blog.image}
                        slug={blog.slug}
                        date={formatBlogDate(blog.publish_at)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogWrapper;
