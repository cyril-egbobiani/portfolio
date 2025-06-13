import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";

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
  const [showTalkButton, setShowTalkButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTalkButton(window.scrollY > 100); // Try a low value for testing
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIconOut(true);
    setAnimating(true);
    setTimeout(() => {
      setOpen((prev) => !prev);
      setIconOut(false);
      setAnimating(false);
    }, 220);
  };

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
      <div
        className="hidden lg:flex lg:border justify-center items-between py-3 bg-[#eeeef300] backdrop-blur-sm rounded-full fixed top-4 left-1/2 -translate-x-1/2 border border-gray-200 z-50 px-5 pl-3"
        style={{
          boxShadow:
            "inset 1px -1px 1px -5px #96968bcf, inset -1px 1px 3px -1px 0 8px 10px rgba(123,92,250,0.2)",
        }}
      >
        {/* Logo */}
        <img src="/logo.svg" alt="Cyril" className="lg:mr-25" />
        <ul className="flex-1 flex gap-8 font-normal w-fit">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
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
        className={`lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#eeeef300] backdrop-blur-sm rounded-3xl p-2 flex items-center justify-between z-50 border border-gray-200 w-fit px-2 transition-all duration-300 ${
          open ? "shadow-xl scale-95" : "shadow-md scale-100"
        } md:p-3`}
        style={{
          boxShadow:
            "inset 1px -1px 1px -5px #96968bcf, inset -1px 1px 3px -1px 0 8px 10px rgba(123,92,250,0.2)",
        }}
      >
        {/* Message/Let's talk icon button for mobile */}
        <a
          href="#contact"
          className="mr-2 p-2 rounded-2xl transition-all duration-300 bg-black/90 flex items-center justify-center md:p-3"
          style={{
            boxShadow:
              "inset 4px -2px 5px -2px #96968b, inset -3px 2px 5px -2px #e6e6e6, 0 8px 30px rgba(123,92,250,0.2)",
          }}
          aria-label="Message"
        >
          <Mail className="w-7 h-7 md:w-8 md:h-8 text-gray-200" />
        </a>
        {/* Logo */}
        <img
          src={"/logo.svg"}
          className="tracking-widest md:w-12 md:h-12 w-11 h-10"
          alt="Cyril"
        />

        {/* Menu/X Icon */}
        <button
          className="ml-2 p-2 rounded-2xl transition-all duration-300 bg-black/90 flex items-center justify-center md:p-3"
          onClick={handleMenuClick}
          aria-label={open ? "Close menu" : "Open menu"}
          disabled={animating}
          style={{
            boxShadow:
              "inset 4px -2px 5px -2px #96968b, inset -3px 2px 5px -2px #e6e6e6, 0 8px 30px rgba(123,92,250,0.2)",
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
              <Menu className="w-7 h-7 md:w-8 md:h-8 text-gray-200" />
            ) : (
              <X className="w-7 h-7 md:w-8 md:h-8 text-gray-400" />
            )}
          </span>
        </button>
      </div>
      {/* Modal Menu with smooth transition */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 bottom-21 z-[70] flex flex-col bg-transparent   border-[#e2e2e2] items-center lg:hidden transition-all duration-300 rounded-3xl  ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div
          style={{
            boxShadow:
              "inset -2px -2px 3px -2px #b6b6b666, inset 2px 2px 3px -2px #b6b6b666, 0 8px 30px rgba(123,92,250,0.2)",
          }}
          className="relative  w-fit max-w-xs sm:max-w-sm md:max-w-[40vw] lg:max-w-[32vw] xl:max-w-[28vw] 2xl:max-w-[24vw] bg-[#ffffff] p-4 flex flex-col items-end shadow-sm rounded-3xl backdrop-blur-2xl"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="ml-15 text-black/80 hover:text-emerald-400 text-right  font-medium transition text-2xl md:text-2xl mb-3 mx-0 whitespace-nowrap"
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
                @keyframes tapButton {
                    0% { transform: scale(1); }
                    50% { transform: scale(0.95); }
                    100% { transform: scale(1); }
                }
                .animate-tap-button {
                    animation: tapButton 0.008s cubic-bezier(.4,0,.2,1);
                }
                `}
      </style>
    </nav>
  );
}
