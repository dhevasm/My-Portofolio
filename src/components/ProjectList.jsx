import { FaGithub, FaLink } from "react-icons/fa";
import projects from "../json/projects.json";
import Particle from "../particles/Particle";

const ProjectList = () => {
  return (
    <section
      id="portfolio"
      className="relative bg-gradient-to-br from-black to-gray-900 text-white py-20 md:py-32"
    >
        <Particle/>
      <div className="max-w-6xl mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="z-10 bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <FaLink size={24} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <FaGithub size={24} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;