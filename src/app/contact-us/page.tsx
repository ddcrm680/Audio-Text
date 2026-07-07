import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionBanner from "@/components/Common/SectionBanner";
import Contact from "@/components/Contact";
import MapWrapper from "@/components/Contact/MapWrapper";
// import Map from "@/components/Contact/Map";
import ContentSection from "@/components/ContentSection";
import { Constant, ContactList } from "@/utils/constants";
import { Mail, MapPin } from "lucide-react";
import Contact_Us from "../../../public/images/contact/contact_us.jpg";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Audio Text",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <SectionBanner
        title={Constant.Contact.title}
        subtitle={Constant.Contact.desc}
      />{" "}
      <div className="px-5" style={{ fontFamily: "Aileron Light" }}>
        <div className="mx-auto max-w-6xl py-[70px]">
          <div className="grid gap-[13px] pb-[40px] md:gap-[30px] xl:grid-cols-3 xl:pb-0">
            {ContactList.map((item, index) => {
              return (
                <ContentSection
                  key={index}
                  bg=""
                  subParentClassName="!px-0"
                  titleIcon={<MapPin size={20} strokeWidth={2} />}
                  padding="xl:pb-[40px] "
                  title={item.name}
                  description={
                    <div className="relative">
                      <p>
                        {item.desc}
                        {item?.contact && (
                          <Link
                            href={item.contact}
                            className="text-primary-blue ml-1 hover:text-[#2b98c7]"
                          >
                            {Constant.Contact.contactSales}
                          </Link>
                        )}
                      </p>
                    </div>
                  }
                />
              );
            })}
          </div>
          <div className="mx-auto flex items-center justify-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
            <MapWrapper />
          </div>
          <ContentSection
            bg=""
            subParentClassName="!px-0 mt-[32px] "
            titleIcon={<Mail size={20} strokeWidth={2} />}
            padding="xl:pb-[40px] "
            title={Constant.Contact.wantToGetInTouch}
            description={
              <div className="mt-[50px] grid gap-[30px] md:grid-cols-2">
                <Contact />
                <Image
                  src={Contact_Us}
                  alt={"Contact Us"}
                  width={700}
                  height={500}
                  className="w-full object-cover dark:border-slate-700"
                />
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
