import SectionBanner from "@/components/Common/SectionBanner";
import { Constant, URLs } from "@/utils/constants";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies Policy | Audio Text",
  // other metadata
};

const CookiesPolicyPage = () => {
  return (
    <div>
      <SectionBanner
        backgroundImage={URLs.registerBg}
        title={Constant.Policy.cookiesPolicyTitle}
      />
      <section
        className="px-5 py-[70px]"
        style={{ fontFamily: "Aileron Light" }}
      >
        <div className="mx-auto max-w-6xl text-[17px] leading-[25px] text-[#555] dark:text-gray-300 [&_h3]:mt-[18px] [&_h3]:mb-[15px] [&_h3]:leading-[30px] [&_h3]:capitalize [&>ul]:my-[17px]">
          {" "}
          <p>
            Cookies are small pieces of text sent by your web browser on a
            website you visit. A cookie file is placed in your web browser and
            allows that website or a third-party to recognize you and make your
            next visit set with your preferences, more personalized and make our
            website more useful to you.
          </p>
          <p>
            <Link
              href="/"
              target="_blank"
              className="text-primary-blue mr-1 font-medium hover:underline"
            >
              Global audio text solutions
            </Link>
            use cookies which are shared by several other trusted websites. By
            using our services, you consent to the use of cookies.
          </p>
          <h3 className="text-primary-blue text-[30px]">Cookies Are Enabled</h3>
          <p className="">
            When you use and access our website, we may place a number of
            cookies in your web browser to remember your preferences and deliver
            a personalized web experience. We use cookies for the following
            purposes:
          </p>
          <ul className="list-disc pl-5">
            <li>To enable certain functions of the services</li>
            <li>To provide analytics</li>
            <li>To store your preferences</li>
            <li>
              To enable advertisements delivery, including behavioral
              advertising
            </li>
            <li>For remarketing</li>
          </ul>
          <p className="">
            Global audio text solutions never use cookies to disclose your
            identity unless you specifically provide your identification details
            to us by sending us a question, register or download a resource. We
            only share information about your use of our site to our social
            media, advertising and analytics partners in accordance with our
            Privacy policy. We don’t share any personal information with third
            parties. Third-party vendors, including Google, may show Global
            audio text solutions ads on sites across the Internet. This policy
            does not govern cookies used by third-parties.
          </p>
          <h3 className="text-primary-blue text-[30px]">Cookies we use</h3>
          <h3 className="text-primary-blue text-[30px]">Google Analytics :</h3>
          <p>
            This cookie is used to examine visitors, their visited pages,
            browser usage, traffic sources, remarketing, etc. This helps us in
            improving our website. You can use the link for{" "}
            <Link
              href="https://policies.google.com/privacy"
              target="_blank"
              className="text-primary-blue ml-1 font-medium hover:underline"
            >
              more details
            </Link>
          </p>
          <h3 className="text-primary-blue text-[30px]">Google Ads :</h3>
          <p>
            This cookie is used to guide us and present you with the most
            suitable ads and trace the ad which you have clicked to get on this
            site and also remarketing. You can use the link for
            <Link
              href="https://policies.google.com/privacy"
              target="_blank"
              className="text-primary-blue ml-1 font-medium hover:underline"
            >
              more details
            </Link>
          </p>
          <h3 className="text-primary-blue text-[30px]">Facebook Ads :</h3>
          <p>
            This cookie provides an analytical function powered by Facebook
            pixel for remarketing. It allows encrypted metadata to help us trace
            the ad which you have clicked to get on this site. The cookie stays
            in your browser until you delete it or it expires. You can use the
            link for
            <Link
              href="https://www.facebook.com/policies/cookies/"
              target="_blank"
              className="text-primary-blue ml-1 font-medium hover:underline"
            >
              more details
            </Link>
          </p>
          <h3 className="text-primary-blue text-[30px]">LinkedIn tracking :</h3>
          <p>
            This cookie is powered by the LinkedIn Insight Tag that looks after
            analytical functions. It allows encrypted metadata to help us trace
            the ad which you have clicked to get on this site. The cookie stays
            in your browser until you delete it or it expires. You can use the
            link for
            <Link
              href="https://www.linkedin.com/legal/privacy-policy"
              target="_blank"
              className="text-primary-blue ml-1 font-medium hover:underline"
            >
              more details
            </Link>
          </p>
          <h3 className="text-primary-blue text-[30px]">
            Tawk.to live chat tool :
          </h3>
          <p>
            This cookie enables the online chat tool on our website. We collect
            information about customers such as their name, email, location. It
            also records preferences,queries and responds the customers with the
            best possible solutions. You can use this link for
            <Link
              href="https://www.tawk.to/privacy-policy/"
              target="_blank"
              className="text-primary-blue ml-1 font-medium hover:underline"
            >
              more details
            </Link>
          </p>
          <h3 className="text-primary-blue text-[30px]">
            What are your choices regarding cookies
          </h3>
          <p>
            If you’d like to delete cookies or instruct your web browser to
            delete or refuse cookies, please visit the help pages of your web
            browser. Please note, however, that if you delete cookies or refuse
            to accept them, you might not be able to use all of the features we
            offer, you may not be able to store your preferences, and some of
            our pages might not display properly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CookiesPolicyPage;
