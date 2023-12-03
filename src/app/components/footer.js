import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="grid  lg:pl-40 lg:pr-40 md:pl-40 md:pr-40  sm:grid-cols-1 lg:grid:cols-5 md:grid-cols-5 ">
          <div className="flex flex-col gap-4 lg:pl-11 md:pl-11">
            <h1 className="text-lg font-bold text-green">About</h1>
            <div className="flex flex-col gap-3">
              <span className="overflow-hidden text-sm font-light tracking-tight">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
            <div className="item-center">
              <h1 className="font-bold text-green">Contact with us</h1>
            </div>
            <div className="flex flex-wrap gap-8">
              <a href="https://www.facebook.com/ideapreneurnepal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 256 256"
                  className="p-1 rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-110"
                >
                  <path
                    fill="green"
                    stroke=""
                    strokeWidth={8}
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com/ideapreneurnepal/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 256 256"
                  className="p-1 rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-110"
                >
                  <path
                    fill="green"
                    stroke=""
                    strokeWidth={8}
                    d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12"
                  />
                </svg>
              </a>
              <a href="https://www.youtube.com/c/IdeapreneurNepal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 256 256"
                  className="p-1 rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-110"
                >
                  <path
                    fill="green"
                    stroke=""
                    strokeWidth={8}
                    d="m164.44 121.34l-48-32A8 8 0 0 0 104 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 145.05V111l25.58 17Zm114.33-75.53a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48m-15.49 113a8 8 0 0 1-4.77 5.49c-31.65 12.22-85.48 12-86 12H128c-.54 0-54.33.2-86-12a8 8 0 0 1-4.77-5.49C34.8 173.39 32 156.57 32 128s2.8-45.39 5.16-54.47A8 8 0 0 1 41.93 68c30.52-11.79 81.66-12 85.85-12h.27c.54 0 54.38-.18 86 12a8 8 0 0 1 4.77 5.49C221.2 82.61 224 99.43 224 128s-2.8 45.39-5.16 54.47Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid col-span-4 text-left lg:text-center md:text-center lg:grid-cols-3 md:gris-cols-3 sm:grid-cols-1">
            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-bold text-green">Category</h1>
              <div className="flex flex-col gap-3 font-light ">
                <a
                  href="https://moneymitra.com/course/all/"
                  className="hover:text-green"
                >
                  All Courses
                </a>
                <a
                  href="https://ideapreneurnepal.com/login/"
                  className="hover:text-green"
                >
                  Sign In
                </a>
                <a
                  href="https://ideapreneurnepal.com/register/"
                  className="hover:text-green"
                >
                  Register
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-bold text-green">Quick Links</h1>
              <div className="flex flex-col gap-3 font-light ">
                <a
                  href="https://ideapreneurnepal.com/privacy-policy"
                  className="hover:text-green"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://ideapreneurnepal.com/terms-and-condition"
                  className="hover:text-green"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-bold text-green">Subscribe</h1>
              <div className="flex flex-col gap-3 font-light ">
                <p className="text-justify">
                  Get notification on your email, everytime we publish new
                  courses or news.
                </p>
                <a
                  href="https://ideapreneurnepal.com/contact"
                  className=" bg-green p-2 rounded-xl text-white"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full pb-10 pt-10">
          <hr className="w-11/12 h-px border-0 bg-grey" />
          <span className="text-lg font-light text-green">
            Copyright ©2023 2023 Ideapreneur Nepal
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
