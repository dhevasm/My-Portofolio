import skills from "../json/skills.json";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import Particle from "../particles/Particle";

const SkillList = () => {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-br from-black to-gray-900 text-white py-20 md:py-32"
    >
        <Particle/>
      <div className="max-w-6xl mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          My Skills 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="z-10 bg-gray-900 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-gray-400 hover:text-white transition-colors duration-300">
                  {skill.icon === "FaHtml5" && <FaHtml5 size={48} />}
                  {skill.icon === "FaCss3" && <FaCss3 size={48} />}
                  {skill.icon === "FaJs" && <FaJs size={48} />}
                  {skill.icon === "FaReact" && <FaReact size={48} />}
                  {skill.icon === "FaNodeJs" && <FaNodeJs size={48} />}
                  {skill.icon === "FaGit" && <FaGit size={48} />}
                </div>
                <h3 className="text-2xl font-bold">{skill.title}</h3>
              </div>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillList;