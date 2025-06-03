import React from "react";

const skills = [
  {
    name: "JavaScript",
    icon: "/js.svg", // Place your SVGs in public/skills/
  },
  {
    name: "React JS",
    icon: "/react.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/tailwind.svg",
  },
  {
    name: "Flutter",
    icon: "/flutter.svg",
  },
  {
    name: "Node JS",
    icon: "/nodejs.svg",
  },
  {
    name: "Mongo DB",
    icon: "/mongodb.svg",
  },
  {
    name: "TypeScript",
    icon: "/js.svg",
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      {/* Skills Pill */}
      <span className="mb-4 py-1 text-center text-2xl md:text-3xl font-bold Instrument Sans leading-tight bg-gradient-to-b from-gray-700 via-gray-900 to-gray-500 px-5 bg-clip-text text-transparent">
        Skills
      </span>
      {/* Skills Grid */}
      <div className="bg-white/40 backdrop-blur-2xl rounded-3xl  shadow-amber-100 border border-gray-200 px-6 py-10 max-w-lg w-full">
        <div className="grid grid-cols-3 gap-y-10 gap-x-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-2"
                loading="lazy"
              />
              <span className="text-gray-800 dark:text-gray-900 text-sm font-medium mt-1 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
