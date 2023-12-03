import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import AboutSvg from "../../../public/about-us-banner.svg"

export function generateMetadata({ params }) {
  return {
    title: "Ideapreneur-Landing About",
  };
}

function AboutPage() {
  return (
    <div className="container mx-auto">
      <div className=" items-center  grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-self-start pl-5 pb-10 gap-10">
        <div className="relative lg:w-[550px] lg:h-[550px] ml-40">
          <Image
            src={AboutSvg}
            alt="Logo"
            fill
            className="lg:w-[1/2] bg-white rounded-md"
          />
        </div >
          <div className="flex flex-col  justify-center gap-5 w-full">
            <h1 className="text-lg text-green font-medium pr-20">
              Welcome to Ideapreneur Nepal.
            </h1>
            <h1 className="text-4xl font-bold w-2/3">
              You can join with Ideapreneur Nepal and upgrade your skill for
              your bright future.
            </h1>
            <p className="lg:w-3/4 md:3/4 w-full text-lg  text-justify font-extralight">
              Ideapreneur Nepal aims to be an integrated platform that bundles
              Scientific financial planning, Handpicked courses and customized
              stock analytics into one convenient Account. For now we are
              focused on empowering Nepalese youth through financial literacy
              which is going to have a life changing impact. We educate and also
              spread awareness to young entrepreneurs into making right choice
              and help then in Making their idea into successful
              entrepreneurship. Ideapreneur stands for a place where IDEAS meet
              ENTREPRENEURS.
            </p>
            <Link
              href="https://moneymitra.com/course/all/"
              className="bg-green h-10 p-2 text-sm  rounded-3xl mr-60 w-[150px] text-white lg:w-[150px] md:w-[150px] text-center font-semibold"
            >
              Start a course
            </Link>
          </div>
        </div>
    </div>
  );
}

export default AboutPage