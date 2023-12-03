"use client";
import React, { useState } from "react";
import Image from "next/image";
import Idpn_logo from "../../../public/logo.jpg";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const navbarToggle = () => {
    setIsMobile(!isMobile);
  };
  const pathname = usePathname();

  const Links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Courses",
      href: "https://moneymitra.com/course/all/",
    },
    {
      name: "Contact",
      href: "https://ideapreneurnepal.com/contact",
    },
    {
      name: "Insights",
      href: "https://moneymitra.com/posts/",
    },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 flex justify-around p-5 bg-white">
        <Link href="https://ideapreneurnepal.com/">
          <Image
            src={Idpn_logo}
            alt="image"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <div className=" gap-10 items-center hidden  md:flex">
          {Links.map((i, idx) => {
           return <a
              key={idx}
              href={i.href}
              className={`hover:text-green ${
                pathname === i.href ? "text-green hover:text-green" : ""
              }`}
            >
              <span>{i.name}</span>
            </a>;
          })}
        </div>
        <div></div>
        <div className="pt-1 md:hidden lg:hidden">
          <button onClick={navbarToggle}>
            {isMobile ? (
              <svg
                className="w-6 h-6 text-gray"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isMobile && (
        <div className="sticky z-50 flex flex-col items-start gap-3 pl-3 bg-white top-14 md:hidden lg:hidden dark:bg-light-black">
          <a href="https://ideapreneurnepal.com/">Home</a>
          <a href="https://ideapreneurnepal.com/about">About</a>
          <a href="https://moneymitra.com/course/all/">Courses</a>
          <a href="https://ideapreneurnepal.com/contact">Contact</a>
          <a href="https://moneymitra.com/posts/">Insights</a>
        </div>
      )}
    </>
  );
}

export default Header;
