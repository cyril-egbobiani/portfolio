import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" }, // Added Home nav item
  { label: "About me", href: "#about" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Featured Projects", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {/* Desktop Navbar (lg and above) */}
      <div className="hidden lg:flex lg:border backdrop-blur-2xl justify-center items-between py-3 bg-white rounded-full fixed top-4 left-1/2 -translate-x-1/2 border border-gray-200 z-50 px-5 pl-3">
        {/* Logo */}
        <img src="/logo.svg" alt="Cyril" className="mr-25" />
        <ul className="flex-1 flex gap-8 font-normal w-fit ">
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
      {/* Mobile/Tablet Navbar (md and below) */}
      <div
        className={`lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full py-2 flex items-center justify-between z-50 border border-gray-200 w-fit px-2 transition-all duration-300 ${
          open ? "shadow-xl scale-95" : "shadow-md scale-100"
        } md:p-3`}
      >
        {/* Logo */}
        <img
          src={"/logo.svg"}
          className="flex-1 flex items-center font-bold text-lg tracking-widest md:w-12 md:h-12 w-8 h-8"
          alt="Cyril"
        />
        {/* Spacer */}
        <div className="w-8 md:w-12" />
        {/* Menu/X Icon */}
        <button
          className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 flex-1 bg-gray-100 border border-gray-300 flex items-center justify-center md:p-3"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="transition-all duration-300 ease-in-out">
            {open ? (
              <X className="w-7 h-7 md:w-8 md:h-8 rotate-180 transition-transform duration-300" />
            ) : (
              <Menu className="w-7 h-7 md:w-8 md:h-8 rotate-0 transition-transform duration-300" />
            )}
          </span>
        </button>
      </div>
      {/* Modal Menu with smooth transition */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 bottom-20 z-[70] w-fit flex flex-col items-center lg:hidden transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="relative w-[vw] max-w-xs sm:max-w-sm md:max-w-[40vw] lg:max-w-[32vw] xl:max-w-[28vw] 2xl:max-w-[24vw] rounded-[2rem] border border-gray-100 p-4 flex flex-col items-center shadow-sm bg-white ">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-normal text-black hover:text-emerald-600 transition text-lg md:text-xl mb-4"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
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
