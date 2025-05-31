import React, { useState } from "react";
import { Menu, X, Sparkle } from "lucide-react";

const navItems = [
  { label: "About me", href: "#about" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Featured Projects", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {/* Desktop Navbar */}
      <div className="hidden md:flex backdrop-blur-2xl  justify-center items-between py-3 bg-white rounded-full fixed top-4 left-1/2 -translate-x-1/2 border border-gray-200 z-50 w-[-70vw] px-5 pl-3">
        {/* Logo */}
        <img src="/logo.svg" alt="Cyril" className="mr-20" />
        <ul className="flex-1 flex gap-8 font-normal w-fit">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-emerald-500 transition-colors duration-300 Instrument Sans"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile/Tablet Navbar */}
      <div
        className={`md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full py-2 flex items-center justify-between z-50 border border-gray-200 w-fit px-2 transition-all duration-300 ${
          open ? "shadow-xl scale-95" : "shadow-md scale-100"
        }`}
      >
        {/* Logo */}
        <img
          src={"/logo.svg"}
          className="flex-1 flex items-center gap-2 font-bold text-lg tracking-widest"
          alt="Cyril"
        />
        {/* Spacer */}
        <div className="w-8" />
        {/* Menu/X Icon */}
        <button
          className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 flex-1 bg-gray-100 border border-gray-300 flex items-center justify-center"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="transition-all duration-300 ease-in-out">
            {open ? (
              <X className="w-7 h-7 rotate-180 transition-transform duration-300" />
            ) : (
              <Menu className="w-7 h-7 rotate-0 transition-transform duration-300" />
            )}
          </span>
        </button>
      </div>
      {/* Modal Menu */}
      {open && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-20 z-[70] w-fit flex flex-col items-center md:hidden">
          <div className="bg-white rounded-4xl shadow-sm shadow-gray-100 border border-gray-300 w-[50vw] max-w-xs py-6 px-4 flex flex-col gap-6 items-center transition-all duration-300 animate-fadeInUp opacity-100 translate-y-0 pointer-events-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-normal text-black hover:text-emerald-600 transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
      {/* Animation styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.3s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
    </nav>
  );
}
