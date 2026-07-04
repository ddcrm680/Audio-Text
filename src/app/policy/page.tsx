import SectionBanner from "@/components/Common/SectionBanner";
import { Constant, URLs } from "@/utils/constants";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Policy | Audio Text",
  // other metadata
};

const PolicyPage = () => {
  return (
    <div>
      <SectionBanner
        backgroundImage={URLs.registerBg}
        title={Constant.Policy.policyTitle}
      />
      <section
        className="px-6 py-[70px]"
        style={{ fontFamily: "Aileron Light" }}
      >
        <div className="mx-auto max-w-6xl text-[17px] leading-[25px] text-[#555] dark:text-gray-300 [&_p]:mb-[10px] [&>ul]:my-[17px]">
          {" "}
          <p>
            We at <strong>Audio Text Solutions Pvt. Ltd.</strong> are committed
            to protecting and respecting your privacy.
          </p>
          <p className="">
            Audio Text Solutions, we, us, our operate in accordance with data
            protection principles laid out by the enforcements of GDPR,
            including the principles of purpose limitation, storage limitation,
            data accuracy, data security and integrity, and data minimisation.
          </p>
          <p className="">
            This policy is laid out to describe the circumstances under which
            the personal data we collect from you, or provided by you, can or
            may be processed by us. Please read the following policies carefully
            to understand how we collect, store and process your personal data.
            By visiting www.audiotextsolutions.com (the Site), you consent to
            these policies and the data collected from you.
          </p>
          {/* ---------------- Information ---------------- */}
          <p>
            <strong className="text-[17px] text-[#2d3142] dark:text-white">
              Information we collect
            </strong>
          </p>
          <p>
            The following information about you can be collected and scrutinized
            by us:
          </p>
          <p className="">
            <strong>Data given by you:</strong> We collect personal information
            given by you when you fill in forms on our Site or when you submit
            reports, requests, or contact us via text or otherwise. This
            includes information you provide when you register to use our Site,
            subscribe to our service, send us messages via our Site and/or when
            you report a problem with our Site. You may also provide information
            to satisfy our due diligence and verification-of-identity
            requirements. The information you give us may include your name,
            address, email address and phone number, financial and credit card
            information.
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>Data we collect about you.</strong> We may automatically
              collect the following information whenever you visit our website.
              <ul className="mt-2 list-[circle] pl-8">
                <li>
                  Information such as Internet protocol (IP) address, login
                  details, browser version and type, time zone settings, browser
                  plug-in types and their versions, Operating System (OS) and
                  platform;
                </li>

                <li>
                  Information about your visit, the URL you have previously
                  visited or going to visit, products you viewed or searched
                  for; your interaction with the page and time spent on it.
                </li>
              </ul>
            </li>

            <li>
              <strong>Data we receive from other sources.</strong> We may
              receive information about you if you use any of our services. We
              work with third parties (for example, business partners,
              sub-contractors in IT/ technical support, payment services,
              advertising networks, analytics providers, search information
              providers) and may receive information about you from them.
            </li>

            <li>
              <strong>Cookies.</strong> Our Site uses cookies to remember you
              from other users of our Site. This helps us to enrich your
              visiting experience set according to your preference when you
              browse the Site and allows us to improve it. For detailed
              information on the cookies we use and the purposes for which we
              use them see our Cookie policy
              <Link
                href="/cookies-policy/"
                className="text-primary-blue ml-1 font-medium hover:underline"
              >
                www.audiotextsolutions.com/cookies-policy
              </Link>
            </li>
          </ul>
          {/* ---------------- Processing ---------------- */}
          <p>
            <strong className="text-[17px] text-[#2d3142] dark:text-white">
              Our reasons to collect your personal information
            </strong>
          </p>
          <p>
            We only collect or process any of your personal data under the
            strict compliance of legal norms. This means that we will regularly
            appraise the three elements of the ‘legitimate interests’ test:
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>Purpose:</strong> The delivery of a secure, swift and
              effective payment and billing service which benefits our direct
              customers, contacts, suppliers and business partners
            </li>

            <li>
              <strong>Necessity:</strong> Only by processing various items of
              personal data (ID requirements at registration or using your email
              or phone number to contact or respond to you), can we deliver the
              payment and billing services.
            </li>

            <li>
              <strong>Balancing rights:</strong> We have balanced the privacy
              rights and interests of the individuals with whom we come into
              contact. We conclude that (i) the agreement provided by our
              contractual relationships (and all parties in that contract chain,
              from suppliers to customers) in addition to (ii) the reasonable
              expectation of all our contacts that Audio Text Solutions should
              have recourse to use their personal data prevails.
            </li>
          </ul>
          <p>
            Our legitimate interest is prudently counterbalanced by the constant
            right of an individual to make data access, cessation of processing
            or erasure request to us so that we can stop such processing and
            render inactive their account and data as soon as possible.
          </p>
          {/* ---------------- Usage ---------------- */}
          <p className="text-[17px] text-[#2d3142] dark:text-white">
            <strong> How we use your information</strong>
          </p>
          <p>We use the collected information for the following reasons.</p>
          <ul className="list-disc pl-8">
            <li>
              to exercise our rights and/or carry out our obligations arising
              from any contracts entered-into between you and us and to provide
              you with the information, products and services that you request
              from us;
            </li>

            <li>
              to perform due diligence and credits checks prior to providing or
              as a condition of our continued supply to you of such services and
              to satisfy the requirements of any regulator relevant to our
              services;
            </li>

            <li>
              to send you information about our services and/or to update you on
              or notify you of changes to our services or business and/or to
              conduct any marketing of our services;
            </li>

            <li>
              to ensure that our site’s content is engaging and presented
              effectively to you.
            </li>

            <li>
              for the requirement of troubleshooting, data analysis, testing &
              research to allow you to participate in interactive features &
              service whenever you wish to do so
            </li>

            <li>to keep our site safe & secure</li>

            <li>
              to deliver relevant content, offers, advertisement that may
              interest you
            </li>
          </ul>
          {/* ---------------- Disclosure ---------------- */}
          <p className="text-[17px] text-[#2d3142] dark:text-white">
            <strong> Data Disclosure</strong>
          </p>
          <p className="text-[17px] text-[#2d3142] dark:text-white">
            <strong> Disclosure for Law Enforcement</strong>
          </p>
          <p>
            If there arises any circumstance where we are obligated to disclose
            your Personal Data to legal authorities then we will be bound to do
            so.
          </p>
          {/* ---------------- Security ---------------- */}
          <p className="text-[17px] text-[#2d3142] dark:text-white">
            <strong> Security of Data</strong>
          </p>
          <p>
            Your data security is extremely important to us and we have taken
            certain measures to secure it. However, transmission over the
            Internet involves risks and no method can be guaranteed as
            absolutely secure.
          </p>
          {/* ---------------- Rights ---------------- */}
          <p className="text-[17px] text-[#2d3142] dark:text-white">
            <strong>Your rights</strong>
          </p>
          <p>
            Under certain circumstances, as per the guidelines, you have the
            following rights you can exercise according to your will.
          </p>
          <ul className="list-disc pl-8">
            <li>
              Right to confirmation – we are happy to comply with any query from
              your end regarding your data collection, its security, and its
              purpose.
            </li>

            <li>
              Right to rectification – you can ask us to rectify your data
              should you find it incorrect.
            </li>

            <li>
              Right of erasure – should you wish to erase the data related to
              you, we will comply with your request except when there is a legal
              issue to do so. Under circumstances of legal involvement, we are
              obliged to keep your data, which will be rendered not usable for
              the future.
            </li>

            <li>
              Right to restriction of processing – we will restrict processing
              your data as far as legally possible.
            </li>

            <li>
              Right to object – your request will be entertained should you wish
              to object about any consent you have already given.
            </li>

            <li>
              You also have the right to lodge a complaint to a supervisory
              authority about the processing of your personal data.
            </li>
          </ul>
          {/* ---------------- Google Analytics ---------------- */}
          <p className="text-[17px] text-[#2d3142] dark:text-white">
            <strong> Google Analytics</strong>
          </p>
          <p>
            vGoogle Analytics is a service offered by Google for web analysis
            which is useful in tracking and reporting website traffic. Google
            uses the collected data for tracking and monitoring purposes in
            regard to the usage of our website. Other Google services also share
            this data. Google uses this data for its own advertising network and
            for contextualization.
          </p>
          <p className="">
            At any given time, feel free to opt-out from the Google Analytics
            service by simply installing Google Analytics opt-out add-on in your
            browser.
          </p>
          <p>
            For more information on Google Analytics, please visit the Google
            Privacy Terms web page:
            <Link
              href="https://policies.google.com/privacy?hl=en"
              className="text-primary-blue ml-1 font-medium hover:underline"
            >
              http://www.google.com/intl/en/policies/privacy/
            </Link>
          </p>
          {/* ---------------- Changes ---------------- */}
          <p className="text-[17px] text-[#2d3142] dark:text-white">
            <strong> Changes to Our Privacy Policy</strong>
          </p>
          <p>
            Audio Text Solutions reserves the right to make changes to this
            Privacy Policy at any given time. It is your responsibility to check
            it regularly before using the website. Using the website will serve
            as your consent to acknowledge this privacy policy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PolicyPage;
