"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import construtionSVG from "../../../public/construction-worker-svgrepo-com.svg";
import Idpn_logo from "../../../public/Artboard 1.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-reveal";
import Slide from "react-reveal/Slide";
import tulkey from '../../../public/tulkey-standing.png'

function SectionTwo() {
  const [results, setResults] = useState();
  async function bullet() {
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/api/v1/bullet-dashboard/`,
        {
          cache: "no-cache",
        }
      );

      if (!resp.ok) {
        throw new Error(`Error: ${resp.status} - ${resp.statusText}`);
      }

      const data = await resp.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  console.log(results);

  useEffect(() => {
    bullet();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  function LeftArrow({ onClick }) {
    return (
      <div onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className=" rounded-full  cursor-pointer absolute md:top-[50%] lg:top-[50%] top-[100%] left-80 p-2 z-10 active:bg-grey"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14M5 12l4 4m-4-4l4-4"
          />
        </svg>
      </div>
    );
  }

  function RightArrow({ onClick }) {
    return (
      <div onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className=" p-2   rounded-full  cursor-pointer absolute md:top-[50%] lg:top-[50%] top-[100%] z-10  right-80 active:bg-grey"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14m-4 4l4-4m-4-4l4 4"
          />
        </svg>
      </div>
    );
  }

  const data = [
    {
      Name: "Sanjok Koirala",
      Quote:
        "If we tried to think of a good idea, we wouldn't have been able to think of a good idea.",
      Email: "palidob516@notedns.com",
    },
    {
      Name: "Suman Dhungel",
      Quote:
        "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
      Email: "palidob516@notedns.com",
    },
    {
      Name: "Rajesh Pudasaini",
      Quote: "It’s not a bug; it’s an undocumented feature. ",
      Email: "palidob516@notedns.com",
    },
  ];
  return (
    <div className="container mx-auto">
      <section className="pt-10">
        <div className="flex flex-wrap  p-10 font-light text-center justify-evenly items-center mt-20">
          <Fade bottom cascade>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-extrabold text-green">99.55%</h1>
              <div className="w-48">
                <span className="pt-2 text-lg font-medium tracking-tight">
                  Ratings 4.9 from user
                </span>
                <br></br>
                <span className="tracking-tight ">
                  Far far away, behind the word mountains.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-extrabold text-green">99.55%</h1>
              <div className="w-48">
                <span className="pt-2 text-lg font-medium tracking-tight">
                  Ratings 4.9 from user
                </span>
                <br></br>
                <span className="tracking-tight ">
                  Far far away, behind the word mountains.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-extrabold text-green">99.55%</h1>
              <div className="w-48">
                <span className="pt-2 text-lg font-medium tracking-tight">
                  Ratings 4.9 from user
                </span>
                <br></br>
                <span className="tracking-tight ">
                  Far far away, behind the word mountains.
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-extrabold text-green">99.55%</h1>
              <div className="w-48">
                <span className="pt-2 text-lg font-medium tracking-tight">
                  Ratings 4.9 from user
                </span>
                <br></br>
                <span className="tracking-tight ">
                  Far far away, behind the word mountains.
                </span>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <section className="pt-10">
        <div>
          <Fade bottom cascade>
            <div className="flex flex-col justify-center items-center">
              <span className="text-sm font-semibold text-green">
                How it works
              </span>
              <p className=" lg:w-1/3 md:w-1/3 sm:w-full text-center break-words  lg:text-3xl sm:text-sm font-bold">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </Fade>
        </div>
      </section>
      <section className="pt-10 flex justify-evenly">
        <div className="flex flex-col  itmes-start lg:w-4/5 md:w-4/5">
          <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap gap-8">
            <Slide bottom>
              <div className="flex flex-col  lg:items-center md:items-center  gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="75"
                  viewBox="0 0 24 24"
                  className="ml-6"
                >
                  <path
                    fill="currentColor"
                    d="M10.85 2L9.18 4.5l1.14.75L7.14 10H7a2 2 0 0 0-2 2a2 2 0 0 0 1.58 1.95L10.62 20H7v2h10v-2h-4l-4.47-6.72A2 2 0 0 0 9 12c0-.3-.07-.6-.2-.87L12 6.37c-.22 1.68.75 3.52 2.45 4.63l4.44-6.63c-1.69-1.13-3.77-1.33-5.24-.5L10.85 2m7.48 5l-1.66 2.5c.68.45 1.62.27 2.08-.42c.46-.69.25-1.62-.42-2.08Z"
                  />
                </svg>
                <div className="flex flex-col lg:items-center sm:items-start md:items-center  gap-3">
                  <h1 className="pr-20 font-bold">1. Create an account</h1>
                  <p className="lg:w-2/3 md:w-2/3">
                    Connect your store, import your products, then send us your
                    inventory.
                  </p>
                </div>
              </div>
            </Slide>
            <Slide bottom>
              <div className="flex flex-col   gap-3 lg:items-center md:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="75"
                  viewBox="0 0 14 14"
                  className="ml-6"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 8a3.5 3.5 0 1 0-5.06 3.12v1.72a.39.39 0 0 0 .39.38h2.34a.39.39 0 0 0 .39-.38v-1.75A3.5 3.5 0 0 0 10.5 8ZM7 .81v1.5m4-.07L9.94 3.31m3.34 2.03h-1.5M3 2.24l1.06 1.07M.72 5.34h1.5"
                  />
                </svg>
                <div className="flex flex-col lg:items-center sm:items-start md:items-center  gap-3">
                  <h1 className="pr-20 font-bold">1. Create an account</h1>
                  <p className="lg:w-2/3 md:w-2/3">
                    Connect your store, import your products, then send us your
                    inventory.
                  </p>
                </div>
              </div>
            </Slide>
            <Slide bottom>
              <div className="flex flex-col  gap-3 lg:items-center md:items-center">
                <Image
                  src={construtionSVG}
                  alt="img"
                  width={75}
                  height={75}
                  className=" ml-6"
                />
                <div className="flex flex-col lg:items-center sm:items-start md:items-center  gap-3">
                  <h1 className="pr-20 font-bold">1. Create an account</h1>
                  <p className="lg:w-2/3 md:w-2/3 ">
                    Connect your store, import your products, then send us your
                    inventory.
                  </p>
                </div>
              </div>
            </Slide>
          </div>
          <div className="flex  p-8  flex-wrap lg:flex-nowrap md:flex-nowrap pt-10 gap-8  w-full">
            <div className="flex flex-col  gap-4  justify-end pl-8">
              <Fade bottom cascade>
                <div className="flex flex-col  lg:items-start sm:items-center md:items-start gap-4 lg:w-10/12 md:w-11/12">
                  <small className="font-bold text-green text-left w-full">
                    Services
                  </small>
                  <h1 className="text-2xl font-bold w-full">
                    Far far away, behind the word mountains
                  </h1>
                  <p className=" w-full  break-words  text-lg ">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live.
                  </p>
                </div>

                <div className="lg:pr-28">
                  <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li class="flex items-center">
                      <svg
                        class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Behind the word Mountains.
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Far far away Mountains.
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Large language Ocean.
                    </li>
                  </ul>
                </div>
              </Fade>
            </div>
            <div className="relative w-full h-[400px] ">
              <Image src={tulkey} alt="Logo" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" w-full  sm:h-[400px] lg:h-[200px] flex flex-col p-10 mt-10">
          <Slider {...settings}>
            {data.map((i) => {
              return (
                <div>
                  <Fade bottom cascade>
                    <div className="flex flex-col justify-center items-center gap-4">
                      <Image
                        src={Idpn_logo}
                        alt="image"
                        width={75}
                        height={75}
                        className="rounded-full"
                      />
                      <p className="w-96 text-center">"{i.Quote}"</p>
                      <div className="flex flex-col justify-center items-center">
                        <h3 className="text-sm font-bold">{i.Name}</h3>
                        <h3>{i.Email}</h3>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
      <section className="mt-32">
        <div className="">
          <div className="flex justify-center">
            <h1 className="font-bold text-3xl">Latest Updates</h1>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 mt-10 gap-20  lg:pr-56 lg:pl-56 md:pr-56 md:pl-56 pl-12">
            {results?.results.slice(0, 4).map((i, idx) => {
              return (
                <>
                  <div className=" bullets border border-grey shadow-md p-5 rounded-md w-4/5 lg:w-[275px] md:w-[275px] h-6/7 hover:scale-105 hover:-translate-y-4 duration-300">
                    <div>
                      <h5 class="mb-2 text-xs">As of : {i?.date}</h5>
                      <span class="text-sm text-gray-700 dark:text-gray-400 font-medium pt-3">
                        {i?.title}
                      </span>
                      <div
                        className="bullethtml text-sm pt-3"
                        dangerouslySetInnerHTML={{
                          __html:
                            (i?.content || "")
                              .slice(0, 275)
                              .replace(
                                /style="color:#000000,"|style="background-color:#ffffff"|style="font-size:16px"|style="font-family:Times New Roman,Times,serif"/g,
                                ""
                              ) + "...",
                        }}
                      />
                    </div>
                    <div />
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-center pt-8 ">
            <a
              href="https://moneymitra.com/gyan/bullet"
              className=" bg-green text-white p-2 rounded-lg"
            >
              View more →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionTwo;
