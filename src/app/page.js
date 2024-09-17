"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Gallery from "@/components/Gallery";

export default function Home() {
  //SMOOTH SCROLL
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  //TEXT ENTRY EFFECT
  function AnimatedText({ children }) {
    const text = useRef(null);
    useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(text.current, {
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: "-200px center",
          end: "top+=100px center",
        },
        opacity: 1,
        left: "5vw",
        ease: "power3.Out",
      });
    }, []);

    return (
      <p ref={text} className="m-0 relative opacity-0">
        {children}
      </p>
    );
  }
  const phrases = [
    "Los Flamencos National Reserve",
    "is a nature reserve located",
    "in the commune of San Pedro de Atacama",
    "The reserve covers a total area",
    "of 740 square kilometres (290 sq mi)",
  ];

  //CURADO text entry animation
  // function AnimatedHead({ children }) {
  //   const head = useRef(null);
  //   useLayoutEffect(() => {
  //     let textAnimation = gsap.timeline();
  //     textAnimation.from(head.current, {
  //       y: 0,
  //       stagger: 0.05,
  //       delay: 0.2,
  //       duration: 1,
  //     });
  //   }, []);
  //   return (
  //     <p ref={head} className="">
  //       {children}
  //     </p>
  //   );
  // }
  return (
    <main>
      {/* Section 1: Video Background with Scrolling Cards */}
      <div className="section-1 relative w-full h-[350vh] z-1">
        {/* Video Background */}
        <div className="sticky top-0 left-0 h-[100vh] z-0">
          <video
            className="object-cover w-full h-full min-h-[100vh]"
            src="https://web-images.credcdn.in/v2/_next/assets/videos/escape/desktop/travel_intro_02.mp4"
            // src="vid.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <span className="logo-div absolute top-20 w-full flex justify-center font-oxygen text-5xl font-extrabold z-20">
          <Image
            src="https://web-images.credcdn.in/v2/_next/assets/images/escape/desktop/cred_logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </span>
        <div className="card-1 absolute top-0 w-full h-[100vh] z-10">
          <div className="text-center h-full flex justify-center items-center">
            <div className="flex flex-col gap-9">
              <span className="font-oxygen text-white italic text-3xl md:text-9xl font-extrabold">
                CURADO.
              </span>
            </div>
          </div>
        </div>
        <div className="card-2 absolute top-[100vh] w-full h-[100vh] z-10 ">
          <div className="text-center h-full flex justify-center items-center">
            <div className="text-white italic text-3xl md:text-5xl font-extrabold relative -ml-[10vw] max-w-[90vw]">
              {/* TEXT ENTRY EFFECT */}
              {/* add this in above classname: relative -ml-[10vw] max-w-[90vw] */}
              {phrases.map((phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>;
              })}
              {/* Some Text */}
            </div>
          </div>
        </div>
        <div className="card-3 absolute top-[200vh] w-full h-[100vh] z-10 ">
          <div className="text-center h-full flex justify-center items-center">
            <div className="text-white italic text-3xl md:text-5xl font-extrabold relative -ml-[10vw] max-w-[90vw] ">
              {/* TEXT ENTRY EFFECT */}
              {/* add this in above classname: relative -ml-[10vw] max-w-[90vw] */}
              <AnimatedText>Some more text</AnimatedText>
              {/* Some more text */}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: holiday*/}
      <div className="section-2 relative min-h-screen flex flex-col items-center justify-center text-center bg-[#fff2e3]">
        <div className="text-[#5f4125] font-oxygen font-semibold text-3xl items-center md:text-7xl tracking-wide absolute flex flex-col px-16 md:px-0">
          <span className="tracking-tighter">
            you&apos;ve travelled far & wide,
          </span>
          <span className="tracking-tighter md:mt-3">
            now it&apos;s time to
          </span>
          <span className=" md:mt-4 bg-[#5f4125] text-[#fffdea] max-w-fit rounded-full py-3 px-6">
            holiday!
          </span>
        </div>
      </div>
      {/* Section 3: numbers */}
      <div className="section-3 relative min-w-full min-h-full flex flex-col justify-center items-center text-center bg-[#fff2e3] pb-20 md:pb-40">
        <div className="w-[100%]">
          <video
            className="w-full h-full object-cover"
            src="https://web-images.credcdn.in/v2/_next/assets/videos/escape/desktop/properties.mp4?q-90"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="max-w-[80vw] flex flex-col justify-center items-center">
          <div className="flex flex-row text-center text-[#5f4125] ">
            <div>
              <div className="text-center text-base sm:text-xl md:text-3xl lg:text-6xl italic font-yatra">
                200
              </div>
              <div className="mt-1 text-center text-xs uppercase font-bold">
                countries
              </div>
            </div>
            <div className="ml-4 pl-4 md:ml-16 md:pl-16 border-l-2 border-[#5f4125]">
              <div className="text-center text-base sm:text-xl md:text-3xl lg:text-6xl italic font-yatra">
                Handpicked
              </div>
              <div className="mt-1 text-center text-xs uppercase font-bold">
                stays
              </div>
            </div>
            <div className="ml-4 pl-4 md:ml-16 md:pl-16 border-l-2 border-[#5f4125]">
              <div className="text-center text-base sm:text-xl md:text-3xl lg:text-6xl italic font-yatra">
                Authentic
              </div>
              <div className="mt-1 text-center text-xs uppercase font-bold">
                experiences
              </div>
            </div>
          </div>
          <div className="relative mt-20 flex flex-row text-center text-[#5f4125] font-oxygen font-semibold text-base md:text-xl lg:px-40 tracking-wider md:leading-10">
            with CURADO, it&apos;s like scrolling through exclusive stories from
            seasoned travelers, providing inspiration for your next getaway.
            Discover the finest selections & tailored itineraries to elevate
            your travel experience!
          </div>
        </div>
      </div>
      {/* section 4: oceans*/}
      <div className="w-full min-h-screen flex flex-col justify-center items-center text-center max-w-[100vw] bg-[#fff] ">
        <div className="w-[100%]">
          <video
            className="object-cover w-full h-full min-h-[100vh]"
            src="https://framerusercontent.com/assets/cXGGRdoWmVg2EP0rKNWhq3Z0aiY.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      {/* section 5: snow*/}
      <div className="w-full min-h-screen flex flex-col justify-center items-center text-center max-w-[100vw] bg-[#fff] ">
        <div className="w-[100%] text-black">SNOW</div>
      </div>
      {/* section 6: mountains*/}
      <div className="w-full min-h-screen flex flex-col justify-center items-center text-center max-w-[100vw] bg-[#fff] ">
        <div className="w-[100%]">
          <video
            className="object-cover w-full h-full min-h-[100vh]"
            src="https://framerusercontent.com/assets/iIT5IoZ61ffXs4CHLXHDwfqTdc.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      {/* section 7: driving*/}
      <div className="w-full min-h-screen flex flex-col justify-center items-center text-center max-w-[100vw] bg-[#fff] ">
        <div className="w-[100%] text-black">DRIVING</div>
      </div>
      {/* section 8: portfolio*/}
      <div className="w-full min-h-screen flex flex-col justify-center items-center text-center max-w-[100vw] bg-[#fffdea] ">
        <div className="w-[100%] text-black">image gallery</div>
      </div>
      {/* section 9: Image-gallery*/}
      <div className="relative max-h-fit">
        <Gallery />
        <Gallery />
      </div>
      {/* footer */}
      <footer
        className="bg-[#161517] text-[#fff] bg-center h-[40vh]"
        style={{
          backgroundImage: `url("https://framerusercontent.com/images/IM6I3jGVILkPEJvAckCDsXyaK7k.png?scale-down-to=2048")`,
        }}
      >
        <div className="p-10 md:p-20 lg:p-30"> CURADO</div>
      </footer>
    </main>
  );
}
