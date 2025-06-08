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
			<div className="hidden lg:flex justify-center items-between py-3 bg-[#2E2E2E]/90 backdrop-blur-md rounded-full fixed top-4 left-1/2 -translate-x-1/2 border border-[#393A40] z-50 px-5 pl-3 shadow-lg">
				{/* Logo */}
				<img src="/logo.svg" alt="Cyril" className="lg:mr-25" />
				<ul className="flex-1 flex gap-8 font-bold w-fit ">
					{navItems.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="hover:text-emerald-200 font-light text-gray-100 transition-colors duration-300 Instrument Sans"
							 
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</div>
			{/* Mobile/Tablet Navbar (md and below) */}
			<div
				className={`lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#2E2E2E]/90 backdrop-blur-md rounded-full p-2 flex items-center justify-between z-50 border border-[#393A40] w-fit px-2 transition-all duration-300 ${
					open ? "shadow-xl scale-95" : "shadow-md scale-100"
				} md:p-3`}
			>
				{/* Logo */}
				<img
					src={"/logo.svg"}
					className="tracking-widest md:w-12 md:h-12 w-11 h-10"
					alt="Cyril"
				/>
				{/* Menu/X Icon */}
				<button
					className="ml-4 p-2 rounded-full hover:bg-[#393A40] transition-all duration-300 bg-[#2E2E2E] border border-[#393A40] flex items-center justify-center md:p-3"
					onClick={handleMenuClick}
					aria-label={open ? "Close menu" : "Open menu"}
					disabled={animating}
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
							<Menu className="w-7 h-7 md:w-8 md:h-8 text-gray-300 stroke-[2.5]" />
						) : (
							<X className="w-7 h-7 md:w-8 md:h-8 text-gray-300 stroke-[2.5]" />
						)}
					</span>
				</button>
			</div>
			{/* Modal Menu with smooth transition */}
			<div
				className={`fixed left-1/2 -translate-x-1/2 bottom-21 z-[70] flex flex-col items-center lg:hidden transition-all duration-300 ${
					open
						? "opacity-100 translate-y-0 pointer-events-auto"
						: "opacity-0 translate-y-10 pointer-events-none"
				}`}
			>
				<div className="relative w-fit max-w-xs sm:max-w-sm md:max-w-[40vw] lg:max-w-[32vw] xl:max-w-[28vw] 2xl:max-w-[24vw] rounded-[2rem] border border-[#393A40] p-4 flex flex-col items-center shadow-lg bg-[#2E2E2E]/95 backdrop-blur-md ">
					{navItems.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="text-gray-100 hover:text-emerald-300 transition text-lg md:text-xl mb-3 mx-16 whitespace-nowrap"
							 
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
