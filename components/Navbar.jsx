import React from "react";
import Link from "next/link";
import { NavLink } from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  return (
    <div className="mb-10 ">
      <nav className="w-full bg-subtleblue fixed top-0 left-0 right-0 z-10">
        <div className="justify-evenly px-4 mx-auto lg:max-w-7xl xl:items-center xl:flex xl:px-8">
          <div>
            <div className="flex items-center justify-between py-3 xl:py-5 xl:block">
              <Link href="/">
                <Image src="/hnj.svg" width={30} height={30} alt="logo" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="xl:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/menu.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 xl:block xl:pb-0 xl:mt-0 ${
                navbar ? "p-12 xl:p-0 block z-20" : "hidden"
              }`}
            >
              <ul className="h-screen xl:h-auto items-center justify-center xl:flex font-bold text-primaryColor xl:gap-4 ">
                <li className="pb-6 text-xl xl:text-sm py-2 xl:py-2 px-6   xl:px-2 text-center border-b-2 xl:border-b-0  hover:bg-purple-900  border-purple-900  xl:hover:text-purple-600 xl:hover:bg-transparent">
                  <Link
                    className={`link ${
                      pathname === "/"
                        ? "bg-primaryColor border-2 rounded-lg px-3 py-2 text-white"
                        : ""
                    }`}
                    href="/"
                    onClick={() => setNavbar(!navbar)}
                  >
                    HOME
                  </Link>
                </li>
                <li className="pb-6 text-xl xl:text-sm py-2 xl:py-2 px-6 xl:px-2  text-center  border-b-2 xl:border-b-0  hover:bg-purple-600  border-purple-900  xl:hover:text-purple-600 xl:hover:bg-transparent">
                  <Link href="./#aboutUs" onClick={() => setNavbar(!navbar)}>
                    ABOUT US
                  </Link>
                </li>
                <li className="pb-6 text-xl xl:text-sm py-2 xl:py-2 px-6 xl:px-2  text-center  border-b-2 xl:border-b-0  hover:bg-purple-600  border-purple-900  xl:hover:text-purple-600 xl:hover:bg-transparent">
                  <Link href="#contactUs" onClick={() => setNavbar(!navbar)}>
                    CONTACT US
                  </Link>
                </li>

                <li className="pb-6 text-xl xl:text-sm py-2 xl:py-2 px-6 xl:px-2  text-center  border-b-2 xl:border-b-0  hover:bg-purple-600  border-purple-900  xl:hover:text-purple-600 xl:hover:bg-transparent">
                  <Link
                    className={`link ${
                      pathname === "/consultancy"
                        ? "bg-primaryColor border-2 rounded-lg px-3 py-2 text-white"
                        : ""
                    }`}
                    href="/consultancy"
                    onClick={() => setNavbar(!navbar)}
                  >
                    CONSULTANCY
                  </Link>
                </li>
                <li className="pb-6 text-xl xl:text-sm py-2 xl:py-2 px-6 xl:px-2 text-center  border-b-2 xl:border-b-0  hover:bg-purple-600  border-purple-900  xl:hover:text-purple-600 xl:hover:bg-transparent">
                  <Link
                    className={`link ${
                      pathname === "/academy"
                        ? "bg-primaryColor border-2 rounded-lg px-3 py-2 text-white"
                        : ""
                    }`}
                    href="/academy"
                    onClick={() => setNavbar(!navbar)}
                  >
                    ACADEMY
                  </Link>
                </li>

                <li className="pb-6 text-xl xl:text-sm text-primaryColor py-2 xl:py-2 px-6 xl:px-2  text-center  border-b-2 xl:border-b-0  hover:bg-purple-600  border-purple-900  xl:hover:text-purple-600 xl:hover:bg-transparent">
                  +263 77 777 7777
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
