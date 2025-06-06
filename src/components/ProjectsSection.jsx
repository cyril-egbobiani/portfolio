import React from "react";
import { Link2 } from "lucide-react";

const projects = [
  {
    name: "Finderr",
    logo: "/finder.svg",
    logoBg: "bg-orange-50",
    logoText: "text-orange-400",
    image: "/image.png",
    description:
      "This web app serves as an attendance serves as an attendance system for children",
    stack: ["TypeScript", "Node.Js"],
    link: "#",
  },
  {
    name: "Safe",
    logo: "/safe.svg",
    logoBg: "bg-green-100",
    logoText: "text-green-600",
    image: "/image.png",
    description:
      "This web app serves as an attendance serves as an attendance system for children",
    stack: ["Flutter", "Node.Js"],
    link: "#",
  },
  {
    name: "Profellit",
    logo: "/profellit.svg",
    logoBg: "bg-blue-100",
    logoText: "text-blue-400",
    image: "/image.png",
    description:
      "This mobile app serves as an attendance serves as an attendance system for children",
    stack: ["TypeScript", "Node.Js"],
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-16 px-2"
    >
      {/* Section Pill */}
      <span className="mb-6 px-6 py-1 rounded-full bg-white border-blue-200 text-blue-500 font-semibold text-base shadow select-none">
        Featured Projects
      </span>
      <div className="flex flex-col gap-8  w-full max-w-md">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-[#fafafa] rounded-4xl p-3 overflow-hidden"
            style={{
              boxShadow:
                "0 4px 24px 0 rgba(123,92,250,0.07), 0 1.5px 8px 0 rgba(249,203,166,0.07)",
            }}
          >
            {/* Project Screenshot */}
            <div className="rounded-t-3xl overflow-hiddn bg-gray-50">
              <img
                src={project.image}
                alt={project.name}
                className="w-full object-cover"
              />
            </div>

            {/* Project Card */}
            <div
              className="flex flex-col  gap-4   border-gray-50  shadow-none hover:shadow-sm shadow-blue-100 transition-shadow duration-300  transform-gpu will-change-transform  rounded-3xl
             bg-white p-4 mt-2"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold text-lg ${project.logoBg}`}
                >
                  <img
                    src={project.logo}
                    alt={project.name}
                    className={`w-6 h-6 ${project.logoText}`}
                  />
                </span>
                <span className="font-semibold text-base text-gray-700">
                  {project.name}
                </span>
              </div>
              <p className="text-gray-800 text-left font-medium mb-2 leading-snug">
                {project.description}
              </p>
              <div className="flex  justify-end mb-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-gray-400 text-sm font-medium"
                  >
                    {tech}
                    {tech !== project.stack[project.stack.length - 1] && ","}
                  </span>
                ))}
              </div>
              <div className="flex justify-end">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex  items-center  gap-2 px-4 py-2 rounded-full border w-fit border-gray-50 text-gray-900 font-semibold text-base bg-gray-50 hover:bg-gray-100 transition"
                >
                  <Link2 className="w-5 h-5 stroke-2" />
                  Visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
