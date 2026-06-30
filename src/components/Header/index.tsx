"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  console.log(openIndex, "openIndex");

  const handleSubmenu = (index: number) => {
    // Desktop -> don't use click
    if (isDesktop) return;

    setOpenIndex((prev) => (prev === index ? -1 : index));
  };
  const usePathName = usePathname();
  console.log(navbarOpen, "navbarOpen");

  return (
    <>
      <header
        className={`dark:bg-gray-dark fixed top-0 left-0 z-50 w-full border-b border-[#ececec] bg-white transition-all duration-300 ${
          sticky ? "shadow-sm" : ""
        }`}
      >
        <div className="flex flex-row px-[14px] md:flex-col lg:mx-auto lg:flex-row lg:items-center lg:justify-center lg:gap-8 lg:px-40 xl:justify-between">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky
                  ? "py-5 md:pt-3 md:pb-0 lg:py-3"
                  : "py-5 md:pt-5 md:pb-0 lg:py-5"
              } `}
            >
              <Image
                src="/images/logo/GATS.png"
                alt="logo"
                width={155}
                height={65}
                priority
              />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <div>
              <div className="flex items-center gap-4 md:gap-8">
                <div className="block md:hidden">
                  <ThemeToggler />
                </div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary block rounded-lg px-3 py-[6px] focus:ring-2 md:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
              </div>
              <nav
                id="navbarCollapse"
                className={`navbar dark:bg-dark absolute right-0 z-30 mt-2 w-[230px] rounded border border-[#d9d9d9] bg-white py-2 shadow-lg duration-300 md:visible md:static md:mt-0 md:w-auto md:border-none md:bg-transparent md:p-0 md:shadow-none lg:visible lg:static lg:w-auto lg:border-none lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0 md:visible md:opacity-100"
                }`}
              >
                <ul className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-4">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className={`group relative md:border-b-0`}>
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          className={`block w-full px-[25px] py-[7px] text-left text-[15px] font-light tracking-[0.02em] uppercase transition-colors duration-300 md:w-auto md:px-0 md:py-8 lg:px-5 lg:py-[14px] ${
                            usePathName === menuItem.path
                              ? "text-[#48AFDB] dark:text-white"
                              : "text-black hover:text-[#48AFDB] dark:text-white/70 dark:hover:text-white"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className={`flex w-full items-center justify-between px-[25px] py-[7px] text-[15px] font-light tracking-[0.02em] uppercase transition-colors duration-300 md:w-auto md:px-0 md:py-8 lg:px-5 lg:py-[14px] ${
                              usePathName === menuItem.path
                                ? "text-[#48AFDB]"
                                : "text-black hover:text-[#48AFDB] dark:text-white/70"
                            }`}
                            // className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                          >
                            {menuItem.title}
                            <span
                              className={`ml-2 transition-transform duration-300 ${
                                openIndex === index
                                  ? "rotate-180 md:rotate-0"
                                  : ""
                              }`}
                            >
                              {" "}
                              <svg width="20" height="20" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={`transition-all duration-300 ${
                              openIndex === index
                                ? isTablet
                                  ? "dark:bg-gray-dark absolute top-[110%] left-0 z-50 w-[250px] rounded border border-t-0 border-[#ececec] bg-white p-2 shadow-lg dark:border-gray-700"
                                  : "dark:bg-gray-dark block bg-[#f8f8f8]"
                                : isDesktop
                                  ? "lg:invisible lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100"
                                  : "hidden"
                            } dark:lg:bg-gray-dark lg:absolute lg:top-[110%] lg:left-0 lg:w-[250px] lg:rounded lg:border lg:border-t-0 lg:border-[#ececec] lg:bg-white lg:p-2 lg:shadow-lg dark:lg:border-gray-700`}
                          >
                            {" "}
                            {menuItem.submenu.map((submenuItem, index) => (
                              <Link
                                key={index}
                                href={submenuItem.path}
                                className={`block border-l-2 border-transparent px-8 py-3 text-[14px] font-light transition-all duration-200 ${
                                  usePathName === submenuItem.path
                                    ? "border-[#48AFDB] bg-[#eef9fe] text-[#48AFDB] dark:bg-[#1f2937]"
                                    : "text-black hover:border-[#48AFDB] hover:bg-[#f4fbff] hover:text-[#48AFDB] dark:text-white/80 dark:hover:bg-[#2a3142] dark:hover:text-[#48AFDB]"
                                }`}
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                  <li className="hidden md:block">
                    <ThemeToggler />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
