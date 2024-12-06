import React from 'react';
import { FaGithub, FaLink } from "react-icons/fa";
import { useSpring, animated, useTrail } from '@react-spring/web';
import projects from "../json/projects.json";
import Particle from "../particles/Particle";

const Projects = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 300, friction: 20 }
  });

  const trail = useTrail(projects.length, {
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { mass: 1, tension: 280, friction: 20 }
  });

  const [props, api] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 10 }
  }));

  return (
    <section
      id="portfolio"
      className="relative bg-gradient-to-br from-black to-gray-900 text-white py-20 md:py-32 min-h-screen"
    >
      <Particle />
      <div className="max-w-6xl mx-auto px-4 z-10">
        <animated.h2 
          style={fadeIn}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          My Projects
        </animated.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trail.map((style, index) => (
            <animated.div
              key={projects[index].id}
              style={style}
              onMouseEnter={() => api.start({ scale: 1.05 })}
              onMouseLeave={() => api.start({ scale: 1 })}
              className="z-10 bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={projects[index].image}
                alt={projects[index].title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{projects[index].title}</h3>
                <p className="text-gray-300">{projects[index].description}</p>
                <div className="flex justify-between items-center">
                  <animated.a
                    href={projects[index].demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaLink size={24} />
                    <span>Live Demo</span>
                  </animated.a>
                  <animated.a
                    href={projects[index].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub size={24} />
                    <span>GitHub</span>
                  </animated.a>
                </div>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;