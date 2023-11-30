import Image from "next/image";
import React from "react";
import Idpn_logo from "../../../public/Artboard 1.svg";
import ProtactorSvg from "../../../public/protractor-svgrepo-com.svg";
import bookSvg from "../../../public/books-svgrepo-com.svg";

function SectionOne() {
  return (
    <div className="container mx-auto">
      <div className=" items-center gap-5 p-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div>
          <div className="flex flex-col items-end justify-end gap-3">
            <h1 className="text-4xl font-bold ">Ideapeanure Nepal</h1>
            <p className="w-2/4 text-lg break-words text-clip font-extralight">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 pt-8 justify-end">
            <div className="flex flex-col gap-2">
              <Image src={ProtactorSvg} alt="image" width={65} height={65} />
              <h1 className="text-lg font-semibold text-thin">High Quality</h1>
              <p className="w-40 font-extralight">
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Image src={bookSvg} alt="image" width={65} height={65} />
              <h1 className="text-lg font-semibold">High Quality</h1>
              <p className="w-40 font-extralight">
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[550px] ">
          <Image src={Idpn_logo} alt="Logo" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
