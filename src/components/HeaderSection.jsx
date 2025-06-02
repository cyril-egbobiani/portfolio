import React from "react";
import { Locate, X } from "lucide-react";

export default function HeaderSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] mt-25">
      {/* Card */}
      <div
        className="
    w-[vw] max-w-xs
    sm:max-w-sm
    md:max-w-[40vw]
    lg:max-w-[32vw]
    xl:max-w-[28vw]
    2xl:max-w-[24vw]
    rounded-[2rem]
    border border-gray-100
    p-4
    flex flex-col items-center shadow-sm
    bg-white
  "
        style={{
          background:
            "linear-gradient(180deg, #fff 60%, #F9CBA6 90%, #7B5CFA 100%)",
          boxShadow:
            "0 4px 24px 0 rgba(123,92,250,0.10), 0 1.5px 8px 0 rgba(249,203,166,0.10)",
        }}
      >
        <div className="flex items-center w-full gap-3">
          {/* Image */}
          <div className="w-30 h-20 overflow-visible rounded-3xl flex-shrink-0 relative flex items-center justify-center">
            <span className="absolute inset-0 rounded-2xl ring-3 ring-indigo-50 border-2 border-white pointer-events-none"></span>
            <img
              src="/profile.jpg"
              alt="Cyril Egbobiani"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          {/* Name and Location */}
          <div className="flex flex-col justify-center mr-10">
            <span className="font-extrabold text-2xl text-left leading-tight Instrument Sans text-gray-700">
              Cyril
            </span>
            <span className="font-extrabold text-2xl leading-tight text-left Instrument Sans -mt-1 text-gray-700">
              Egbobiani
            </span>
            <span className="flex items-center gap-1 text-emerald-500 font-medium text-sm mt-1 Instrument Sans">
              <Locate className="w-4 h-4" />
              Lagos, Nigeria
            </span>
          </div>
        </div>
        {/* Button */}
        <button
          className="
    w-full mt-4 py-3
    rounded-2xl
    text-white font-semibold Instrument Sans
    flex items-center justify-center text-base
    shadow-lg
    border-b-4 border-indigo-900
    transition-all duration-150
    active:scale-95 active:shadow-none
    hover:shadow-[0_2px_8px_0_rgba(80,80,180,0.18)]
    relative z-10
  "
          style={{
            background: "linear-gradient(180deg, #181818 80%, #7B5CFA 120%)",
          }}
        >
          Lets connect <span className="ml-2">👋🏼</span>
        </button>
      </div>
      {/* Description */}
      <div className="w-full max-w-md mt-8">
        <h1 className=" text-center text-2xl md:text-3xl font-bold Instrument Sans text-gray-800 leading-tight">
          Software Developer designing with empathy and developing with clarity.
        </h1>
      </div>
      {/* Social Icons */}
      <div className="flex gap-4 mt-8">
        <button className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-800 text-xl   hover:bg-gray-100 transition">
          <img src={"/x.svg"} />
        </button>
        <button className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-800 text-xl   hover:bg-gray-100 transition">
          <img src={"/instagram.svg"} />
        </button>
        <button className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-800 text-xl   hover:bg-gray-100 transition">
          <img src={"/linkedin.svg"} />
        </button>
        <button className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-800 text-xl   hover:bg-gray-100 transition">
          <img src={"/github.svg"} />
        </button>
      </div>
    </section>
  );
}

// Don't forget to import X from lucide-react and add FontAwesome CDN for social icons in your index.html if not already present.
