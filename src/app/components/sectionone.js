'use client'
import Image from "next/image";
import React from "react";
import Idpn_logo from "../../../public/Artboard 1.svg";
import ProtactorSvg from "../../../public/protractor-svgrepo-com.svg";
import bookSvg from "../../../public/books-svgrepo-com.svg";
import Link from "next/link";
import {Fade} from 'react-reveal'

function SectionOne() {
  return (
    <div className="container mx-auto">
      <div className=" items-center  grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-self-start ">
        <div className="w-full">
          <div className="flex flex-col lg:items-center justify-center gap-5">
            <h1 className="text-4xl font-bold pr-4">Ideapeanure Nepal</h1>
            <p className="lg:w-2/4 md:2/4 w-full text-lg  text-ellipsisx font-extralight">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <Link
              href=""
              className="bg-green h-10 p-2 text-sm  rounded-3xl mr-72 w-[100px] text-white lg:w-[100px] md:w-[100px] "
            >
              Get Started
            </Link>
          </div>
          <div className="flex flex-wrap gap-10 pt-8 lg:justify-center md:justify-center">
            <div className="flex flex-col gap-5">
              <Image src={ProtactorSvg} alt="image" width={50} height={50} />
              <h1 className="text-lg font-semibold text-thin">High Quality</h1>
              <p className="w-40 font-extralight">
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <Image src={bookSvg} alt="image" width={50} height={50} />
              <h1 className="text-lg font-semibold">High Quality</h1>
              <p className="w-40 font-extralight">
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
          </div>
        </div>
        <div className="relative lg:w-[550px] lg:h-[600px] ">
          <Image
            src={Idpn_logo}
            alt="Logo"
            fill
            className="lg:w-[1/2] bg-white"
          />
          <Fade right>
            <div className="absolute bg-grey -right-48 lg:visible md:visible -bottom-20 w-5/6 h-5/6  -z-50"></div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
