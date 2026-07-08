import SlideFive from "@/components/LandingScreeen/SlideFive";
import SlideFour from "@/components/LandingScreeen/SlideFour";
import SlideOne from "@/components/LandingScreeen/SlideOne";
import SlideThree from "@/components/LandingScreeen/SlideThree";
import discover from "../../public/images/payment/discover.png";
import Blog2 from "../../public/images/blog/blog-2.jpg";

import ANGUILLA from "../../public/images/destination/ANGUILLA.jpg";
import COMROS from "../../public/images/destination/COMROS.jpg";
import CONGO from "../../public/images/destination/CONGO.jpg";
import cuba from "../../public/images/destination/cuba.jpg";
import Estonia from "../../public/images/destination/Estonia.jpg";
import GAMBIA from "../../public/images/destination/GAMBIA.jpg";
import GuineaBissau from "../../public/images/destination/Guinea-Bissau.jpg";
import Holland from "../../public/images/destination/Holland.jpg";
import LATVIA from "../../public/images/destination/LATVIA.jpg";
import LIbya from "../../public/images/destination/LIbya.jpg";
import sierra from "../../public/images/destination/sierra.jpg";
import Morrocco from "../../public/images/destination/Morrocco.jpg";

import asean_Sales from "../../public/images/team/asean_Sales.jpg";
import asean_CRM from "../../public/images/team/asean_CRM.jpg";
import Finance_asian from "../../public/images/team/Finance_asian.jpg";
import tech_support from "../../public/images/team/tech_support.jpg";

import secondaryBannerBg from "../../public/images/common/Secondary_banner_bg.jpg";
import Blog1 from "../../public/images/blog/blog-1.jpg";
import SlideTwo from "@/components/LandingScreeen/SlideTwo";
import {
  Banknote,
  ContactRound,
  CreditCard,
  CreditCardIcon,
  Gift,
  Headphones,
  Landmark,
  LogIn,
  PenTool,
  Phone,
  SlidersHorizontal,
  Smartphone,
  User,
} from "lucide-react";
import { Colors } from "./color";
import { PaymentMethod } from "@/types/payment";

export const API_ENDPOINTS = {
  TEST: "/api/test",
};
export const URLs = {
  registerBg: secondaryBannerBg,
};
export const contactUsInitialValues = {
  name: "",
  skypeId: "",
  email: "",
  subject: "",
  message: "",
  captcha: "",
};
export const registerInitialValues = {
  // Personal Details
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  street: "",
  country: "",
  state: "",
  city: "",
  zipCode: "",

  // Contact Details
  contactNo: "",
  email: "",
  skypeId: "",
  otherImId: "",

  // Bank Details
  beneficiaryName: "",
  bankName: "",
  beneficiaryAddress: "",
  bankAddress: "",
  accountNumber: "",
  swiftCode: "",
  additionalInformation: "",
  uploadId: [],
  paymentMethod: "bank_transfer",
  captcha: "",
};
export const FOOTER_LINKS = [
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Resellers",
    link: "/resellers",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
  {
    title: "Policy",
    link: "/policy",
  },
];

export const SERVICES = [
  {
    title: "SESSION INITIATION PROTOCOL",
    description:
      "Session Initiation Protocol is a Communication Protocol used for redirecting your calls to your PSTN or Gateway. It proves to be very useful for applications like Instant Messaging, Online Games, Video Conferencing, File Transfer, and Streaming Multimedia Distribution.",
    icon: "phone",
    color: "#48AFDB",
  },
  {
    title: "INTERACTIVE VOICE RESPONSE",
    description:
      "Customized Solutions provide you various tools for your specific preferences. You may reveal your preferences to us and we will customize our services for you. We offer you these Unique, Effective, and Lucrative solutions to deliver you the services exactly as per your requisites.",
    icon: "smartphone",
    color: "#5A8FB5",
  },
  {
    title: "BESPOKE SOFTWARE",
    description:
      "Bespoke software is a highly expedient and adaptable solution for your Domestic Premium Rate Numbers. Bespoke supports various applications like Horoscope, Live Chats, Radio, T.V, and much more. These applications make your Premium Rate Numbers even more exhilarating.",
    icon: "sliders",
    color: "#48AFDB",
  },
  {
    title: "CUSTOMIZED SOLUTIONS",
    description:
      "Customized Solutions provide you various tools for your specific preferences. You may reveal your preferences to us and we will customize our services for you. We offer you these Unique, Effective, and Lucrative solutions to deliver you the services exactly as per your requisites.",
    icon: "penTool",
    color: "#5ED9C5",
  },
];
export const iconMap = {
  phone: Phone,
  smartphone: Smartphone,
  sliders: SlidersHorizontal,
  penTool: PenTool,
  network: LogIn,
  payment: CreditCard,
  support: Headphones,
  offers: Gift,
};
export const RESELLER_FEATURES = [
  {
    title: "Solid Network",
    description:
      "Get access over a world class network where you can ceaselessly demand International Premium Rate Numbers.",
    icon: "network",
    color: Colors.primary,
  },
  {
    title: "Secure Payment",
    description:
      "Get on time payment via reliable money transfer partners like Western Union, MoneyGram, and Bank Wire.",
    icon: "payment",
    color: Colors.primary,
  },
  {
    title: "Dedicated Support",
    description:
      "Get a Dedicated Account Manager, available 24x7x365 to resolve every cater you every possible required support.",
    icon: "support",
    color: Colors.primary,
  },
  {
    title: "Exclusive Offers",
    description:
      "Get access to our exciting and exclusive offers, best products, and beneficial deals on registering with us.",
    icon: "offers",
    color: Colors.primary,
  },
];
export const destinations = [
  {
    title: "COMROS – 2693231060",
    image: COMROS,

    share: {
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p%5Burl%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FCOMROS.jpg&p%5Btitle%5D=COMROS+%26%238211%3B+2693231060&p%5Bimages%5D%5B0%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FCOMROS.jpg",
      twitter:
        "https://twitter.com/intent/tweet?text=COMROS+%26%238211%3B+2693231060&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FCOMROS.jpg",

      google:
        "https://plus.google.com/share?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FCOMROS.jpg",

      pinterest:
        "http://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FCOMROS.jpg&media=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FCOMROS.jpg&description=COMROS+%26%238211%3B+2693231060",
    },
  },
  {
    title: "CONGO – 242800100654",
    image: CONGO,

    share: {
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p%5Burl%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcongo.jpg&p%5Btitle%5D=CONGO+%26%238211%3B+242800100654&p%5Bimages%5D%5B0%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcongo.jpg",

      twitter:
        "https://twitter.com/intent/tweet?text=CONGO+%26%238211%3B+242800100654&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcongo.jpg",

      google:
        "https://plus.google.com/share?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcongo.jpg",
      pinterest:
        "http://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcongo.jpg&media=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcongo.jpg&description=CONGO+%26%238211%3B+242800100654",

      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcongo.jpg&title=CONGO+%26%238211%3B+242800100654",

      stumble:
        "http://www.stumbleupon.com/submit?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcongo.jpg&title=CONGO+%26%238211%3B+242800100654",
    },
  },
  {
    title: "LATVIA – 37120901550",
    image: LATVIA,
    share: {
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p%5Burl%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLATVIA.jpg&p%5Btitle%5D=LATVIA+%26%238211%3B+37120901550&p%5Bimages%5D%5B0%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLATVIA.jpg",

      twitter:
        "https://twitter.com/intent/tweet?text=LATVIA+%26%238211%3B+37120901550&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLATVIA.jpg",

      google:
        "https://plus.google.com/share?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLATVIA.jpg",

      pinterest:
        "http://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLATVIA.jpg&media=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLATVIA.jpg&description=LATVIA+%26%238211%3B+37120901550",

      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLATVIA.jpg&title=LATVIA+%26%238211%3B+37120901550",

      stumble:
        "http://www.stumbleupon.com/submit?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLATVIA.jpg&title=LATVIA+%26%238211%3B+37120901550",
    },
  },
  {
    title: "HOLAND",
    image: Holland,
    share: {
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p%5Burl%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FHolland.jpg&p%5Btitle%5D=HOLAND&p%5Bimages%5D%5B0%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FHolland.jpg",

      twitter:
        "https://twitter.com/intent/tweet?text=HOLAND&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FHolland.jpg",

      google:
        "https://plus.google.com/share?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FHolland.jpg",

      pinterest:
        "http://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FHolland.jpg&media=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FHolland.jpg&description=HOLAND",

      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FHolland.jpg&title=HOLAND",

      stumble:
        "http://www.stumbleupon.com/submit?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FHolland.jpg&title=HOLAND",
    },
  },
  {
    title: "Estonia – 37240040900",
    image: Estonia,

    share: {
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p%5Burl%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FEstonia.jpg&p%5Btitle%5D=Estonia+%26%238211%3B+37240040900&p%5Bimages%5D%5B0%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FEstonia.jpg",

      twitter:
        "https://twitter.com/intent/tweet?text=Estonia+%26%238211%3B+37240040900&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FEstonia.jpg",

      google:
        "https://plus.google.com/share?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FEstonia.jpg",

      pinterest:
        "http://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FEstonia.jpg&media=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FEstonia.jpg&description=Estonia+%26%238211%3B+37240040900",

      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FEstonia.jpg&title=Estonia+%26%238211%3B+37240040900",

      stumble:
        "http://www.stumbleupon.com/submit?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FEstonia.jpg&title=Estonia+%26%238211%3B+37240040900",
    },
  },
  {
    title: "Guinea Bissau – 2455876600",
    image: GuineaBissau,

    share: {
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p%5Burl%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGuinea-Bissau.jpg&p%5Btitle%5D=Guinea+Bissau+%26%238211%3B+2455876600&p%5Bimages%5D%5B0%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGuinea-Bissau.jpg",

      twitter:
        "https://twitter.com/intent/tweet?text=Guinea+Bissau+%26%238211%3B+2455876600&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGuinea-Bissau.jpg",

      google:
        "https://plus.google.com/share?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGuinea-Bissau.jpg",

      pinterest:
        "http://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGuinea-Bissau.jpg&media=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGuinea-Bissau.jpg&description=Guinea+Bissau+%26%238211%3B+2455876600",

      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGuinea-Bissau.jpg&title=Guinea+Bissau+%26%238211%3B+2455876600",

      stumble:
        "http://www.stumbleupon.com/submit?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGuinea-Bissau.jpg&title=Guinea+Bissau+%26%238211%3B+2455876600",
    },
  },
  {
    title: "SIERRA LEONE – 23221109181",
    image: sierra,
    share: {
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p%5Burl%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fsierra.jpg&p%5Btitle%5D=SIERRA+LEONE+%26%238211%3B+23221109181&p%5Bimages%5D%5B0%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fsierra.jpg",

      twitter:
        "https://twitter.com/intent/tweet?text=SIERRA+LEONE+%26%238211%3B+23221109181&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fsierra.jpg",

      google:
        "https://plus.google.com/share?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fsierra.jpg",

      pinterest:
        "http://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fsierra.jpg&media=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fsierra.jpg&description=SIERRA+LEONE+%26%238211%3B+23221109181",

      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fsierra.jpg&title=SIERRA+LEONE+%26%238211%3B+23221109181",

      stumble:
        "http://www.stumbleupon.com/submit?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fsierra.jpg&title=SIERRA+LEONE+%26%238211%3B+23221109181",
    },
  },
  {
    title: "MOROCCO – 37745500001",
    image: Morrocco,
    share: {
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p%5Burl%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FMorrocco.jpg&p%5Btitle%5D=MOROCCO+%26%238211%3B+37745500001&p%5Bimages%5D%5B0%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FMorrocco.jpg",

      twitter:
        "https://twitter.com/intent/tweet?text=MOROCCO+%26%238211%3B+37745500001&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FMorrocco.jpg",

      google:
        "https://plus.google.com/share?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FMorrocco.jpg",

      pinterest:
        "http://www.pinterest.com/pin/create/button/?url=https://www.audiotextsolutions.com/wp-content/uploads/2015/08/Holland.jpg&media=https://www.audiotextsolutions.com/wp-content/uploads/2015/08/Holland.jpg&description=HOLAND",

      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FMorrocco.jpg&title=MOROCCO+%26%238211%3B+37745500001",

      stumble:
        "http://www.stumbleupon.com/submit?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FMorrocco.jpg&title=MOROCCO+%26%238211%3B+37745500001",
    },
  },

  {
    title: "GAMBIA – 2201150700",
    image: GAMBIA,
    share: {
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p%5Burl%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGAMBIA.jpg&p%5Btitle%5D=GAMBIA+%26%238211%3B+2201150700&p%5Bimages%5D%5B0%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGAMBIA.jpg",

      twitter:
        "https://twitter.com/intent/tweet?text=GAMBIA+%26%238211%3B+2201150700&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGAMBIA.jpg",

      google:
        "https://plus.google.com/share?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGAMBIA.jpg",
      pinterest:
        "http://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGAMBIA.jpg&media=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGAMBIA.jpg&description=GAMBIA+%26%238211%3B+2201150700",

      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGAMBIA.jpg&title=GAMBIA+%26%238211%3B+2201150700",

      stumble:
        "http://www.stumbleupon.com/submit?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FGAMBIA.jpg&title=GAMBIA+%26%238211%3B+2201150700",
    },
  },
  {
    title: "Libya – 218923128025",
    image: LIbya,
    share: {
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p%5Burl%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLIbya.jpg&p%5Btitle%5D=Libya+%26%238211%3B+218923128025&p%5Bimages%5D%5B0%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLIbya.jpg",

      twitter:
        "https://twitter.com/intent/tweet?text=Libya+%26%238211%3B+218923128025&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLIbya.jpg",

      google:
        "https://plus.google.com/share?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLIbya.jpg",

      pinterest:
        "http://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLIbya.jpg&media=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLIbya.jpg&description=Libya+%26%238211%3B+218923128025",

      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLIbya.jpg&title=Libya+%26%238211%3B+218923128025",

      stumble:
        "http://www.stumbleupon.com/submit?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FLIbya.jpg&title=Libya+%26%238211%3B+218923128025",
    },
  },

  {
    title: "Cuba – 5324413141",
    image: cuba,
    share: {
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p%5Burl%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcuba.jpg&p%5Btitle%5D=Cuba+%26%238211%3B+5324413141&p%5Bimages%5D%5B0%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcuba.jpg",

      twitter:
        "https://twitter.com/intent/tweet?text=Cuba+%26%238211%3B+5324413141&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcuba.jpg",

      google:
        "https://plus.google.com/share?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcuba.jpg",

      pinterest:
        "http://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcuba.jpg&media=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcuba.jpg&description=Cuba+%26%238211%3B+5324413141",

      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcuba.jpg&title=Cuba+%26%238211%3B+5324413141",

      stumble:
        "http://www.stumbleupon.com/submit?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2Fcuba.jpg&title=Cuba+%26%238211%3B+5324413141",
    },
  },
  {
    title: "ANGUILLA -12645370230",
    image: ANGUILLA,

    share: {
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p%5Burl%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FANGUILLA.jpg&p%5Btitle%5D=ANGUILLA+-12645370230&p%5Bimages%5D%5B0%5D=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FANGUILLA.jpg",

      twitter:
        "https://twitter.com/intent/tweet?text=ANGUILLA+-12645370230&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FANGUILLA.jpg",

      google:
        "https://plus.google.com/share?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FANGUILLA.jpg",

      pinterest:
        "http://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FANGUILLA.jpg&media=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FANGUILLA.jpg&description=ANGUILLA+-12645370230",

      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FANGUILLA.jpg&title=ANGUILLA+-12645370230",

      stumble:
        "http://www.stumbleupon.com/submit?url=https%3A%2F%2Fwww.audiotextsolutions.com%2Fwp-content%2Fuploads%2F2015%2F08%2FANGUILLA.jpg&title=ANGUILLA+-12645370230",
    },
  },
];
export const Landing_screen = [
  {
    title: "AUDIO TEXT SOLUTIONS LTD.",
    subTitle: "",
    desc: "A */Giant Telecom Partner/* that understands your */Business/* well Connecting the World with highly acquiescent */Premium Rate Numbers/*",
    image: "/images/destination/COMROS.jpg",
  },
  {
    title: "Be our Reseller",
    subTitle: "Let the World know you",
    desc: "Now creating a reseller account is absolutely */Hassle-Free!/*",
    CTA: "Register Now",
    image: "/images/destination/CONGO.jpg",
  },
  {
    title: "Fast Payment Terms",
    subTitle: "Secured Payments Methods",
    desc: "Now creating a reseller account is absolutely */Hassle-Free!/*",
    CTA: "Register Now",
    image: "/images/destination/CONGO.jpg",
  },
  {
    title: "CONGO - 242800100654",
    image: "/images/destination/CONGO.jpg",
  },
  {
    title: "LATVIA - 37120901550",
    image: "/images/destination/LATVIA.jpg",
  },
];

export const slideList = [SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive];
export const Constant = {
  BLOG: {
    title: "Blog",
    desc: "Follow us to know us more",
  },
  COMMON: {
    pageNotFound: "Page not found",
    backToHome: "Back To Home",
    pageNotFoundDesc: "Sorry, but the page you requested could not be found.",
  },
  ABOUT: {
    title: "About Us",
    subTitle: "We understand your business needs",
    userTitle: "Who We Are",
    userDesc: `Audio Text Solutions Pte. Ltd. deals in providing an excellent suite of audio and text solutions to the telecom industries worldwide. The organization came into existence in the year 2007 with its headquarters based in Singapore. Presently, we’ve got massive presence in several nations like London, Singapore, and USA. In addition, we have numerous of interconnections with major tier-1 carriers across the world and thus, we strive to provide you international as well as domestic premium rate numbers, covering a total of more than 200 destinations across the globe. We are empowered with a highly qualified team of technical experts who are dedicated to provide you a round the clock expertise support.

The packages of our exclusive services and products would definitely assist you to grow your business and take it to another higher level. Our client-centric approach has led us stand amongst the world’s most premier organizations. No matter you own a small business, or you are a business tycoon, we are always committed to expand your web presence.`,
    visionTitle: "Vision",
    visionDesc: `At ATS, we endeavor to bring out the best of our efforts to bestow our valued clients with the most reliable and prompt web solutions. We are continuously working towards becoming the most trusted IPRN and DPRN providers across the globe.`,
    missionTitle: "Mission",
    missionDesc: `We strive to offer you absolutely exclusive services with aid of enormous new opportunities so that you may thrive your business with your full strength. As a client-centric organization, we strongly believe that fulfilling the clients’ satisfaction is our major intention and for this, we tend to surpass your expectations by our unremitting dedication. We anticipate the best gateway services for international and domestic rate numbers so as to maintain a trustworthy bonding with our resellers.`,
    skillsTitle: "Our Skills",
    skillDesc: {
      userFriendly: "User Friendly Panel",
      bestPayouts: "Best Payouts",
      exclusiveTermination: "Exclusive Terminations",
      support: "24X7 Support",
    },
    aboutFooterMessage:
      "A telecom service provider with immense dedication, exceptional knowledge, expedient services, and exquisite work experience.",
  },
  Services: {
    title: "Services",
    subTitle: "Incredible service suite that suits you!",
    peculiarServiceTitle: "Peculiar service collection",
    peculiarServiceDescription1:
      "At Audio Text Solutions Pte. Ltd. , we provide you various exclusive ranges of services for premium rate numbers available internationally and domestically. Premium rate numbers are kind of special telephone numbers, generally used for business purposes to access a number of customizable and programmable application services. These services may include live chat, directory enquiries, technical support; and audio and text alerts for news, sports, weather forecast, mobile ringtones, videos, games, and horoscopes.The charges for these numbers are usually higher than that of the ordinary numbers. Service providers usually use premium rate numbers as micro payment solutions. The owners of such numbers get paid by the end users, every time their numbers get called. The routing procedure for these premium rate numbers is similar to that of the toll free telephone numbers; however, their billing procedure is somewhat different.",
    peculiarServiceDescription2:
      "We strive to endow you with the best of our services in terms of accessibility as well as reliability. With us, you always get immensely elite services at the most affordable prices",
    internationalPremiumTitle: "INTERNATIONAL PREMIUM RATE NUMBERS",
    internationalPremiumDesc1:
      "Audio Text Solutions Pte. Ltd. provides you a wide range of international premium rate numbers. We offer you a 24x7x365 expertize technical support in case you get struck somewhere accessing our services. Further, you get a multi-currency option for getting your revenue payments direct into your bank account.",
    internationalPremiumDesc2:
      "We’ve enabled these excellent services like Session Initiation Protocol and Interactive Voice Response to redirect your calls to your gateway or PSTN. Let’s have a look over how these services really work!",
    domesticPremiumTitle: "DOMESTIC PREMIUM RATE NUMBERS",
    domesticPremiumDesc1:
      "The domestic premium rate numbers are country specific, i.e. these numbers are useful for clients in a particular country and thus, the charges associated with these numbers also vary for different countries. We provide two types of DPRN i.e. Pay Per Call (PPC) and Pay Per Minute (PPM). All you have to do is to brief us about your preferred country and we will provide you a variety of domestic premium rate numbers that can be accessed in that country. Domestic premium rate numbers are easier to market because you just require to increase the popularity of your services by utilizing the marketing tools such as, TV and radio.",
    bespokeTitle: "Bespoke Software",
    bespokeDesc:
      "Bespoke software is a highly expedient and adaptable solution for your Domestic Premium Rate Numbers. Bespoke supports various applications like Horoscope, Live Chats, Radio, T.V, and much more. These applications make your Premium Rate Numbers even more exhilarating.",
    customizeSolutionTitle: "Customized Solutions",
    customizeSolutionDesc:
      "Customized Solutions provide you various tools for your specific preferences. You may reveal your preferences to us and we will customize our services for you. We offer you these Unique, Effective, and Lucrative solutions to deliver you the services exactly as per your requisites.",
    sessionInitiationTitle: "Session Initiation Protocol",
    sessionInitiationDesc:
      "Your calls are diverted to your PSTN (Public Switched Telephone Network) or gateway via a communication protocol, Session Initiation Protocol (SIP). This protocol is used for signaling and controlling multimedia for unicast as well as multicast sessions.The messages about the setting up and closure of the calls with aid of some other important elements are directed via this protocol. You may avail various applications under SIP, such as instant messaging, online games, video conferencing, file transfer, streaming multimedia distribution, and fax over internet protocol.",
    interativeVoiceTitle: "Interactive Voice Response",
    interativeVoiceDesc:
      "At GATS, we strive to increase our as well as your competencies and for this, we’ve brought an Interactive Voice Response. The IVR platform redirects your calls in an expedient and effective manner by allowing you to interact with the host system of the company via your keypad or even your voice. IVR service enables you to retort your own queries by tracking an IVR dialogue. This service is specifically useful where call volume and cost effectiveness are of prime concern. Further, it supports numerous of applications like telephone banking, tele-voting, and various other credit card services.",
  },
  RESELLERS: {
    title: "Resellers",
    subTitle: "Its Instant, Beneficial, and Easy",
    beOurSellerTitle: "Be our reseller",
    beOurSellerDesc1: {
      beforeLink:
        "ATS provides you an amazing online tool, empowering you to become our reseller. This enables you to create your own reseller account as well as accounts for your customers. Since our reseller platform is completely white labelled, our identity would never be revealed to the end users or customers. Further, on becoming our reseller, you can avail amazing advantages including free",
      linkText: " IVR hosting",
      linkHref: "/#",
      afterLink: ", IP routing, and much more.",
    },
    beOurSellerDesc2: {
      beforeLink:
        "You become an integral part of a world class network, when you register with us as our reseller, where you can ceaselessly demand",
      linkText: " International Premium Rate Numbers ",
      linkHref: "/services",
      afterLink:
        "and get some exciting and exclusive offers, best products, and beneficial deals. Further, you do not need to worry about your payment since we make it secure and swift via reliable money transfer partners like Western Union, MoneyGram, and Bank Wire. In addition, you get a Dedicated Account Manager available 24x7x365 to resolve your issues.",
    },
    featureTitle: "Get benefitted with these outstanding features",
    regularResellerTitle: "Regular Reseller",
    regularResellerDesc1:
      "After successful registration, clients are entitled to get these basic benefits",
    regularResellerDescPoint1: "Ability to create their own customers",
    regularResellerDescPoint2: "One way billing",
    regularResellerDescPoint3: "24x7x365 basic support",
    regularResellerDescPoint4: "Live call monitoring",
    superResellerTitle: "Super Reseller",
    superResellerDesc:
      "Once you become our super reseller, you get access over these advance services",
    superResellerDescPoint1: "Can make Sub-Resellers and Regular resellers",
    superResellerDescPoint3: "Customized Billing",
    superResellerDescPoint5: "Priority Service",
    superResellerDescPoint7: "Mobile Support",
    superResellerDescPoint2: "Special Rates and Payout",
    superResellerDescPoint4: "Exclusive Terminations",
    superResellerDescPoint6: "Customizable Panel",
    superResellerDescPoint8: "Can use their own brand/company logo",
    wantToBeReseller: "Want to be our reseller?",
    wantToBeResellerDesc:
      "Now create your own reseller account and dedicated accounts for your customers too!",
    registerNow: "Register Now",
    registerTitle: "Register With Us",
    registerDesc: "Expand your horizons with us",

    submit: "Submit",
  },
  FAQ: {
    faqTitle: "FAQ",
    faqDesc: "Got a query? Ask us!",
    faqHeading: "FREQUENTLY ASKED QUESTIONS",

    items: [
      {
        question: "Why ATS?",
        answer:
          "ATS believes in acquiring the core potentials of a client centric organization, including innovation, integrity, client satisfaction, and uprightness. We keep our valued clients at the main front of our focus and intend to offer them world class services. We provide you the best opportunities to earn more with our premium rate numbers. Further there are numerous other advantages that you may avail once you get connected with us. These advantages include excellent rates, no set up costs, 100% up time, and 24×7 technical support.",
      },
      {
        question: "How can I start using your services?",
        answer:
          "You may contact our sales team to know about various offers for our international premium rate numbers along with our access list. The sign up procedure for your new numbers is quick and easy-the entire process usually takes less than 24 hours. However, we usually have numbers ready in our stock. All you need to do is to send us an email at info@audiotextsolutions.com to get in touch with our sales team and we will revert you back at the earliest.",
      },
      {
        question: "How can you check the test numbers and their accessibility?",
        answer:
          "You may contact our sales team to know about various offers for our international premium rate numbers along with our access list. The sign up procedure for your new numbers is quick and easy-the entire process usually takes less than 24 hours. However, we usually have numbers ready in our stock. All you need to do is to send us an email at info@audiotextsolutions.com to get in touch with our sales team and we will revert you back at the earliest.",
      },
      {
        question:
          "How may I know whether the connected number is correct or not?",
        answer:
          "When you make a call to a number, if you listen to a recorded audio or view the live call in our panel, the number is correct.",
      },
      {
        question:
          "Can I make sub-users on test account and send traffic to the test numbers?",
        answer:
          "No, you can neither make sub-users on test account, nor send traffic to the test numbers since test numbers are meant to check the accessibility. You may send your traffic to your numbers only.",
      },
      {
        question: "How can I send the traffic?",
        answer:
          "You can send the traffic via live chats, voting, quiz shows, or using any other kind of organizational internet access.",
      },
      {
        question:
          "Are there any monthly charges or do I need to pay any sort of setup fee?",
        answer:
          "Certainly not. You are paid in accordance with the volume of minutes you send to your numbers as per the fixed rates indicated in the contract. If, for some reason, you cannot manage to generate any minutes on your numbers, you do not need to pay anything.",
      },
      {
        question: "How does ATS process payments?",
        answer:
          "ATS transfers you the funds exclusively via Bank Wire, Western Union, or Moneygram in order to ensure the maximum security.",
      },
      {
        question: "How often do I get paid?",
        answer:
          "The payment schedule is determined by the sort of premium rate numbers you select and the payment can be made on a regular or weekly basis.",
      },
      {
        question: "How can I get in touch with a sales representative?",
        answer:
          "You can reach our sales representatives via Skype, email, or yahoo messenger between 10:00 AM to 6:00 PM from Monday to Saturday. However, on Sundays and bank holidays, we generally operate as a scaled down team.",
      },
      {
        question: "How may I figure out the amount I will get paid?",
        answer:
          "Once you get registered with one of our sales manager, you are assigned with a username and password which enables you to access all statistics relating to the calls on your account. This also empowers you to access information about the amount of money you are making at your convenience.",
      },
      {
        question: "Do these numbers work all across the world?",
        answer:
          "No, there are different access methods for different countries. You may get in touch with our sales representatives in this regard. They will provide you access over the test numbers to check the best fitted extension for your requirements. You may also get the latest access list for vast majority of our extensions.",
      },
    ],
  },
  Policy: {
    policyTitle: "Policy",
    cookiesPolicyTitle: "Cookies Policy",
  },
  Team: {
    title: "Team",
    desc: "Our team is our sole strength",
    ourZealousTeamTitle: "Our Zealous Team",
    ourZealousTeamDesc:
      "Audio Text Solutions Pte. Ltd. comprises of various teams like Sales, Technical Support, Finance, and Customer Relationship Management. Highly qualified professionals are the sole strength of all these teams who persistently endeavor to take the reputation of the organization to another height. The foremost focus of our teams is into satisfying the expectations of our clients in every possible extent.",
  },
  Payment: {
    title: "Payment",
    desc: "Customization of your payment was never so easy!",
    paymentTerms: "Payment Terms",
    paymentDesc:
      "ATS introduces two types of payment terms namely, 1/3 Daily Payment and 7/3 Weekly Payment. You may choose the one that suits you. We have devised an automatic billing system which generates your bills and processes your payments exactly as per the payment term you’ve picked.",
    paymentSubDesc:
      "Please note that the minimal amount for payment should be 300 USD/EUR.",
    dailyPayment: "1/3 Daily Payment",
    dailyPaymentDesc:
      "We generate and deliver the invoices regularly in accordance with the minutes delivered to you on the previous day. The respective payment is released on the next day. It takes two working days to get the payment processed.",
    weeklyPayment: "7/3 Weekly Payment",
    weeklyPaymentDesc:
      "We provide you an invoice every Monday for the amount you delivered for the entire previous week (Mon-Sun). The payment is released next day to your account and can be received within 1-3 working days, after the status of your payment is updated to paid.",
    paymentMethods: "PAYMENT METHODS",
    paymentMethodDesc:
      "With ATS, you get various payment methods to choose from. These methods include MoneyGram, Western Union, and Bank Wire. You don’t have to worry about the smooth processing of your payment. We have a dedicated finance team to carry out your transaction cycle with immense effectiveness.",
  },
  Contact: {
    title: "Contact Us",
    desc: "Connect with us and get greater benefits!",
    contactSales: "Contact Sales",
    wantToGetInTouch: "WANT TO GET IN TOUCH WITH US?",
    send: "Send",
  },
  Career: {
    title: "Careers",

    joinUsTitle: "JOIN US",
    joinUsDesc:
      "Are you worrying about your career? Come and join ATS for an absolutely distinct career prospective. We have numerous opportunities for talented professionals as well as for freshers. At ATS, we've maintained various teams like Sales, Finance, Technical Support, and Carrier Relationship Management. You just need to click on the 'Current Job Openings' button provided below to see the validation of your candidature. If you find yourself suitable for any job, just click on 'Apply Now' and send your latest resume to us. If you fit in our expectations, we shall contact you for further rounds of selection procedure.",

    openingTitle: "CURRENT OPENINGS IN ATS",

    profile: "Profile : Laravel Developer",
    experience: "1 - 2 Years",
    location: "Noida Sec. 2",
    salary: "Up to 3 LPA",
    contactEmail: "hr@audiotextsolutions.com",
    companyWebsite: "www.audiotextsolutions.com",

    responsibilityTitle: "Roles & Responsibilities:",

    responsibilities: [
      "Must have worked on more than 2-3 different projects on Laravel.",
      "Must have good skills in Core PHP, MySQL, jQuery, JavaScript, AJAX, API development.",
      "Hands-on experience with SQL schema design, SOLID principles, REST API design.",
      "Additional knowledge of CodeIgniter/any other Frameworks, HTML5, CSS, Vue JS/Angular JS, etc. will be a plus point.",
      "MySQL profiling and query optimization.",
      "Creative and efficient problem solver.",
    ],

    note: "Only work from office/No work from home.",

    sisterCompanyTitle: "Sister concern companies:",

    sisterCompanies: [
      "https://www.detailingdevils.com/",
      "https://www.facebook.com/DetailingDevils/",
      "https://instagram.com/detailingdevils?igshid=YmMyMTA2M2Y=",
      "https://www.nutsandboltz.in/",
      "http://www.lumilor.co.in/",
      "https://www.facebook.com/LumiLorIndia/",
      "https://instagram.com/lumilorindia?igshid=YmMyMTA2M2Y=",
      "https://instagram.com/devilscustom?igshid=YmMyMTA2M2Y=",
    ],
  },
};
export const category = [
  {
    name: "Premium Rate Numbers",
    slug: "premium-rate-numbers",
  },
  {
    name: "ATS",
    slug: "ats",
  },
];
export const PER_PAGE = 2;
export const sections = [
  {
    id: "personal",
    title: "Personal",
    icon: User,
  },
  {
    id: "contact",
    title: "Contact",
    icon: ContactRound,
  },
  {
    id: "bank",
    title: "Banking",
    icon: Landmark,
  },
];
export const BlogList = [
  {
    id: 1,
    title: "Best Ivr Hosting Solutions | Ip Routing",
    image: Blog1,
    author: "ATS",
    slug: "best-ivr-hosting-solutions-ip-routing",
    desc: `IPRN is considered to be the safest channel, like totally hack-proof, and it is strictly confidential. It does not require details like credit card or bank account numbers. It just do its stuff while on the call. And, hence it is the safest.

People can also provide ivr hosting through IPRN. IVR is Interactive Voice Response, like you might have heard that lady instruct you, “for services Press 2” and so on.

This is extremely beneficial for those who have lots of different services and categories to provide.

The ultimate question is where can you find IPRN with great access? Audio Text Solutions has been providing IPRN with ip routing for more than a decade. It has established its frontier in the telecom industry and had made real sweet connections with Tier-1 carriers.`,
    publish_at: "2021-08-19",
    category: [
      {
        name: "ATS",
        slug: "ats",
      },
    ],
    socialLinks: {
      twitter:
        "https://twitter.com/intent/tweet?text=Best Ivr Hosting Solutions | Ip Routing&url=https://www.audiotextsolutions.com/best-ivr-hosting-solutions-ip-routing/",
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=https://www.audiotextsolutions.com/best-ivr-hosting-solutions-ip-routing/&p[title]=Best Ivr Hosting Solutions | Ip Routing",
      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https://www.audiotextsolutions.com/best-ivr-hosting-solutions-ip-routing/&title=Best Ivr Hosting Solutions | Ip Routing",
      google:
        "https://plus.google.com/share?url=https://www.audiotextsolutions.com/best-ivr-hosting-solutions-ip-routing/",
      stumble:
        "http://www.stumbleupon.com/submit?url=https://www.audiotextsolutions.com/best-ivr-hosting-solutions-ip-routing/&title=Best Ivr Hosting Solutions | Ip Routing",
    },
    tag: [
      {
        name: "International Premium Rate Numbers",
        slug: "international-premium-rate-numbers",
      },
      {
        name: "Premium Rate Numbers",
        slug: "premium-rate-numbers",
      },
    ],
  },
  {
    id: 2,
    author: "ATS",
    title: "What is DPRN and how to earn money through it?",
    image: Blog2,
    desc: "<p><strong>Business</strong> booms when its services are up to the mark...</p><h2>What could be the reason behind their higher rates you might ask?</h2><p>Well, these so called numbers...</p><ul><li>Ticketing</li><li>Songs on Demand</li><li>Live Chat</li></ul>",
    publish_at: "2021-08-11",
    slug: "what-is-dprn-and-how-to-earn-money-through-it",

    category: [
      {
        name: "ATS",
        slug: "ats",
      },
    ],
    socialLinks: {
      twitter:
        "https://twitter.com/intent/tweet?text=What is DPRN and how to earn money through it?&url=https://www.audiotextsolutions.com/what-is-dprn-and-how-to-earn-money-through-it/",
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=https://www.audiotextsolutions.com/what-is-dprn-and-how-to-earn-money-through-it/&p[title]=What is DPRN and how to earn money through it?",
      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https://www.audiotextsolutions.com/what-is-dprn-and-how-to-earn-money-through-it/&title=What is DPRN and how to earn money through it?",
      google:
        "https://plus.google.com/share?url=https://www.audiotextsolutions.com/what-is-dprn-and-how-to-earn-money-through-it/",
      stumble:
        "http://www.stumbleupon.com/submit?url=https://www.audiotextsolutions.com/what-is-dprn-and-how-to-earn-money-through-it/&title=What is DPRN and how to earn money through it?",
    },
    tag: [
      {
        name: "International Premium Rate Numbers",
        slug: "international-premium-rate-numbers",
      },
    ],
  },
  {
    id: 3,
    title: "Why are premium rate numbers beneficial to work on?",
    image: Blog1,
    slug: "why-are-premium-rate-numbers-beneficial-to-work-on",
    author: "ATS",
    desc: `Everyone thinks of a business which can earn money in a quick way without requiring many resources! Though every business is required to have a particular amount of investment and a handful of resources to continue forward.`,
    publish_at: "2021-08-12",
    category: [
      {
        name: "Premium Rate Numbers",
        slug: "premium-rate-numbers",
      },
    ],
    socialLinks: {
      twitter:
        "https://twitter.com/intent/tweet?text=Why are premium rate numbers beneficial to work on?&url=https://www.audiotextsolutions.com/why-are-premium-rate-numbers-beneficial-to-work-on/",
      facebook:
        "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=https://www.audiotextsolutions.com/why-are-premium-rate-numbers-beneficial-to-work-on/&p[title]=Why are premium rate numbers beneficial to work on?",
      linkedin:
        "http://www.linkedin.com/shareArticle?mini=true&url=https://www.audiotextsolutions.com/why-are-premium-rate-numbers-beneficial-to-work-on/&title=Why are premium rate numbers beneficial to work on?",
      google:
        "https://plus.google.com/share?url=https://www.audiotextsolutions.com/why-are-premium-rate-numbers-beneficial-to-work-on/",
      stumble:
        "http://www.stumbleupon.com/submit?url=https://www.audiotextsolutions.com/why-are-premium-rate-numbers-beneficial-to-work-on/&title=Why are premium rate numbers beneficial to work on?",
    },
    tag: [
      {
        name: "Premium Rate Numbers",
        slug: "premium-rate-numbers",
      },
    ],
  },
];
export const ContactList = [
  {
    name: "CORP. OFFICE",
    desc: "GLOBAL AUDIO TEXT SOLUTIONS PVT. LTD. D-50, Sector 2, Noida, Uttar Pradesh – 201301 INDIA",
  },
  {
    name: "HEAD OFFICE",
    contact: "mailto:sales@audiotextsolutions.com?Subject=Website%20Query",
    desc: "AUDIO TEXT SOLUTIONS PTE LTD 2 VENTURE DRIVE #11-15, VISION EXCHANGE, SINGAPORE 608526",
  },
  {
    name: "BUSINESS ADDRESS",
    desc: "AUDIO TEXT SOLUTIONS PTE LTD 2 VENTURE DRIVE #11-15, VISION EXCHANGE, SINGAPORE 608526",
    contact: "mailto:sales@audiotextsolutions.com?Subject=Website%20Query",
  },
];
export const PAYMENT_METHOD: PaymentMethod[] = [
  {
    title: "MoneyGram",
    icon: Banknote,
    desc: "It can be used in case you don’t have the bank account. You can receive the payment from any part of the world.",
  },
  {
    icon: CreditCard,
    title: "Western Union",
    desc: "It can be used in case you don’t have the bank account. You can receive the payment from any part of the world.",
  },
  {
    image: discover,
    title: "Bank Wire",
    desc: "Bank Wire transfer is very suitable if you have a bank account, depending upon the location and capabilities of your bank.",
  },
];

export const TEAM_MEMBERS = [
  {
    image: asean_Sales,
    title: "SALES",
    points: [
      "Dedicated Account Manager",
      "Tranquil Registration Process",
      "24x7x365 Customized Expert Advice",
    ],
    skype: "/team/skype:live:sales.audiotext_1",
    email: "mailto:sales.audiotextsoltions.com",
  },
  {
    image: asean_CRM,
    title: "CRM",
    points: [
      "Excellent Portfolio with 251 Countries",
      "5400+ Access Points",
      "More than 5 Lakh Numbers",
    ],
    skype: "/teeam/support:sales.audiotext?chat",
    email: "mailto:support@audiotextsoltions.com",
  },
  {
    image: tech_support,
    title: "TECH SUPPORT",
    points: [
      "Timely Conveyed Support",
      "24x7x365 Support for Hosting Numbers",
      "24x7x365 Technical Assistance",
    ],
    skype: "/team/skype:live:sales.audiotext_1",
    email: "mailto:support@audiotextsoltions.com",
  },
  {
    image: Finance_asian,
    title: "FINANCE",
    points: [
      "Secured Online Payment Service",
      "Flexible Payment Options",
      "24x7x365 Chat Support for Billing Queries",
    ],
    skype: "/team/support@audiotextsolutions.com",
    email: "mailto:finance@audiotextsoltions.com",
  },
];
export const PAYMENT_METHODS = [
  {
    label: "Bank Transfer",
    value: "bank_transfer",
  },
  {
    label: "PayPal",
    value: "paypal",
  },
  {
    label: "Western Union / MoneyGram",
    value: "western_union_moneygram",
  },
  {
    label: "Credit Card",
    value: "credit_card",
  },
];
