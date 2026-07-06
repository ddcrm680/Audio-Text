import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";

import { Metadata } from "next";
import { BlogList } from "@/utils/constants";

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
          <div className="flex w-full flex-wrap">
            <div className="w-full pr-16 lg:w-8/12">{children}</div>
            <div className="w-full lg:w-4/12">
              <div className="mb-[14px]">
                <h2 className="mb-[22px] text-[28px] leading-[38px] font-extralight text-[#48AFDB] uppercase">
                  Popular Posts
                </h2>
                <ul>
                  {BlogList.slice(0, 3).map((blog, index) => (
                    <li
                      key={blog.id}
                      className={`${index !== 0 ? "pt-[34px]" : ""} ${
                        index !== 2
                          ? ""
                          : "mb-[35px] border-b border-[#d9d9d9] pb-[35px]"
                      }`}
                    >
                      {" "}
                      <RelatedPost
                        title={blog.title}
                        image={blog.image}
                        slug={blog.slug}
                        date={blog.publish_at}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-[14px]">
                <h2 className="mb-[22px] text-[28px] leading-[38px] font-extralight text-[#48AFDB] uppercase">
                  Recent Posts
                </h2>
                <ul>
                  {BlogList.slice(0, 3).map((blog, index) => (
                    <li
                      key={blog.id}
                      className={`${index !== 0 ? "pt-[34px]" : ""}`}
                    >
                      {" "}
                      <RelatedPost
                        title={blog.title}
                        image={blog.image}
                        slug={blog.slug}
                        date={blog.publish_at}
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
