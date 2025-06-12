import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [iconOut, setIconOut] = useState(false);

  const handleMenuClick = () => {
    setIconOut(true);
    setAnimating(true);
    setTimeout(() => {
      setOpen((prev) => !prev);
      setIconOut(false);
      setAnimating(false);
    }, 220); // Duration matches animation
  };

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav>
      {/* Desktop Navbar (lg and above) */}
      <div className="hidden lg:flex lg:border justify-center items-between py-3 bg-white/70 backdrop-blur-sm rounded-3xl fixed top-4 left-1/2 -translate-x-1/2 border border-gray-200 z-50 px-5 pl-3">
        {/* Logo */}
        <img src="/logo.svg" alt="Cyril" className="lg:mr-25" />
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
        className={`lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-sm rounded-4xl p-2 flex items-center justify-between z-50 border border-gray-200 w-fit px-2 transition-all duration-300 ${
          open ? "shadow-xl scale-95" : "shadow-md scale-100"
        } md:p-3`}
      >
        {/* Logo */}
        {/* <img
          src={"/logo.svg"}
          className="tracking-widest md:w-12 md:h-12 w-11 h-10"
          alt="Cyril"
        /> */}
        {/* Menu/X Icon */}
        <button
          className="p-2 rounded-3xl  transition-all duration-300 bg-black border border-gray-300 flex items-center justify-center md:p-3"
          onClick={handleMenuClick}
          aria-label={open ? "Close menu" : "Open menu"}
          disabled={animating}
          style={{
            boxShadow:
              "inset 4px -2px 5px -5px #96968bcf, inset -3px 2px 5px -2px #e6e6e6, 0 8px 30px rgba(123,92,250,0.2)",
          }}
        >
          <span
            className={`transition-all duration-300 ease-in-out ${
              iconOut
                ? "animate-scale-fade-out"
                : animating
                ? "animate-scale-fade-in"
                : ""
            }`}
            style={{
              display: "inline-block",
              transition: "transform 0.22s, opacity 0.22s",
            }}
          >
            {!open ? (
              <Menu className="w-7 h-7 md:w-8 md:h-8 text-gray-500" />
            ) : (
              <X className="w-7 h-7 md:w-8 md:h-8 text-gray-500" />
            )}
          </span>
        </button>
      </div>
      {/* Modal Menu with smooth transition */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 bottom-21 z-[70] flex flex-col items-center lg:hidden transition-all duration-300 rounded-4xl  ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        style={{
          boxShadow:
            "inset 4px -2px 5px -5px #96968bcf, inset -3px 2px 5px -2px #e6e6e6, 0 8px 30px rgba(123,92,250,0.2)",
        }}
      >
        <div className="relative w-fit max-w-xs sm:max-w-sm md:max-w-[40vw] lg:max-w-[32vw] xl:max-w-[28vw] 2xl:max-w-[24vw]  border border-blue-100 p-4 flex flex-col items-center shadow-sm bg-white/70 rounded-4xl backdrop-blur-sm ">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-normal text-black hover:text-emerald-500 transition text-lg md:text-xl mb-3 mx-16 whitespace-nowrap"
              onClick={(e) => handleNavClick(e, item.href)}
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
          @keyframes spinFade {
                    0% { opacity: 1; transform: rotate(0deg) scale(1);}
                    80% { opacity: 0; transform: rotate(90deg) scale(0.7);}
                    100% { opacity: 0; transform: rotate(90deg) scale(0.7);}
                }
                .animate-spin-fade {
                    animation: spinFade 0.25s cubic-bezier(.4,0,.2,1);
                }
                @keyframes scaleFadeOut {
            0% { opacity: 1; transform: scale(1);}
            100% { opacity: 0; transform: scale(0.7);}
          }
          @keyframes scaleFadeIn {
            0% { opacity: 0; transform: scale(0.7);}
            100% { opacity: 1; transform: scale(1);}
          }
          .animate-scale-fade-out {
            animation: scaleFadeOut 0.22s cubic-bezier(.4,0,.2,1);
          }
          .animate-scale-fade-in {
            animation: scaleFadeIn 0.22s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
    </nav>
  );
}
