import React from "react";
import { Locate, X } from "lucide-react";

export default function HeaderSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] mt-10 md:mt-20">
      {/* Card */}
      <div
        className="
          rounded-[2rem]
          border border-gray-100
          p-4
          w-[85vw] max-w-xs
          flex flex-col items-center shadow-sm
          bg-white
          md:p-4
          md:max-w-[26vw]
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
          <div className="w-30 h-20 overflow-hidden rounded-[1.2rem] flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Cyril Egbobiani"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name and Location */}
          <div className="flex flex-col justify-center">
            <span className="font-extrabold text-2xl text-left leading-tight text-gray-800 Instrument Sans">
              Cyril
            </span>
            <span className="font-extrabold text-2xl leading-tight text-left text-gray-800 Instrument Sans -mt-1">
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
            w-full mt-4 mb-1 py-3
            rounded-2xl
            text-white font-semibold Instrument Sans
            flex items-center justify-center text-base
            shadow-md transition
            bg-black
            md:mt-6
          "
          style={{
            background: "linear-gradient(180deg, #181818 80%, #7B5CFA 120%)",
            boxShadow:
              "0 2px 8px 0 rgba(123,92,250,0.10), 0 1.5px 8px 0 rgba(249,203,166,0.10)",
          }}
        >
          Lets connect <span className="ml-2">👋🏼</span>
        </button>
      </div>
      {/* Description */}
      <div className="w-full max-w-md mt-8">
        <h1 className=" text-center text-2xl md:text-3xl font-bold Instrument Sans text-gray-900 leading-tight">
          Software Developer <span>creating solutions</span>
          <span className=" px-3 mx-1.5 mb-2 bg-gray-900 rounded-full pb-1 text-white text-xl ">
            one
          </span>
          step at a time.
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
