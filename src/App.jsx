"use client";

import NavBar from "./component/NavBar";
import FindJobs from "./component/FindJobs";
import Footer from "./component/Footer";
import SearchBar from "./component/SearchBar";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";

export default function App() {
  useGSAP(() => {
    gsap.fromTo(
      "#header",
      { x: -100, opacity: 0 },
      { x: 0, duration: 2, opacity: 1, ease: "power1.inOut" }
    );
  }, []);

  return (
    <div className="bg-[#f0f5ff] font-header">
      <NavBar />
      <div className="mt-0 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center lg:pl-18 ">
            <h1
              id="header"
              className="text-3xl text-shadow-md font-semibold capitalize lg:mt-7 mt-10  font-body  text-[#02101b]  text-balance  sm:text-5xl"
            >
              Find your dream job from the comfort of your home.
            </h1>
            <SearchBar id="searchbar" />
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="text-sm/6  text-gray-900">
                Manager
              </a>
              <a href="#" className="text-sm/6  text-gray-900">
                Cook
              </a>

              <a href="#" className="text-sm/6   w-15 ">
                Driver
              </a>

              <a href="#" className="text-sm/6  text-gray-900">
                Teacher
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#ff80b5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>

        <div className="flex-1 flex justify-center px-4">
          <img
            src="https://i.ibb.co/twqh0zm6/Cartoon-of-Simon-Baker-The-Mentalist-s-actor-Photoroom.png"
            alt="Cartoon"
            className="w-45 md:w-64 lg:w-72 xl:w-80 lg:-mt-8 -mt-40  object-contain"
          />
        </div>
      </div>
      <div className="bg-[#02101b]   text-center flex justify-center items-center text-[#f0f5ff]  w-full -mt-13 h-16 absolute lg:-mt-49">
        <h2>SWIFT || RELIABLE || REAL || TRUSTED</h2>
      </div>
     <FindJobs/>
     <Footer/>
    </div>

   
  );
}
