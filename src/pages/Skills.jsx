import React from 'react';
import { useSpring, animated, useTrail, config } from '@react-spring/web';
import skills from "../json/skills.json";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGit, FaPhp, FaLaravel } from "react-icons/fa";
import { RiNextjsLine } from 'react-icons/ri';
import Particle from "../particles/Particle";

const Skills = () => {
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.molasses
  });

  const trail = useTrail(skills.length, {
    from: { 
      opacity: 0, 
      transform: 'translateY(20px)',
      scale: 0.9
    },
    to: { 
      opacity: 1, 
      transform: 'translateY(0)',
      scale: 1
    },
    config: { tension: 280, friction: 20 }
  });

  const [iconProps, iconApi] = useSpring(() => ({
    transform: 'rotate(0deg)',
    config: { tension: 300, friction: 10 }
  }));

  const getIcon = (iconName, size) => {
    const icons = {
      FaHtml5: <FaHtml5 size={size} />,
      FaCss3: <FaCss3 size={size} />,
      FaJs: <FaJs size={size} />,
      FaPhp: <FaPhp size={size} />,
      FaLaravel: <FaLaravel size={size} />,
      FaReact: <FaReact size={size} />,
      FaNodeJs: <FaNodeJs size={size} />,
      FaNextJs: <RiNextjsLine size={size} />,
      FaGit: <FaGit size={size} />
    };
    return icons[iconName];
  };

  return (
    <section
      id="skills"
      className="relative bg-gradient-to-br from-black to-gray-900 text-white py-20 md:py-32 min-h-screen"
    >
      <Particle />
      <div className="max-w-6xl mx-auto px-4 z-10">
        <animated.h2 
          style={titleAnimation}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          My Skills
        </animated.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trail.map((style, index) => (
            <animated.div
              key={skills[index].id}
              style={style}
              className="z-10 bg-gray-900 rounded-lg p-6 shadow-lg group"
              onMouseEnter={() => {
                iconApi.start({
                  transform: 'rotate(360deg)',
                  config: { tension: 120, friction: 14 }
                });
              }}
              onMouseLeave={() => {
                iconApi.start({
                  transform: 'rotate(0deg)',
                  config: { tension: 120, friction: 14 }
                });
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <animated.div 
                  style={iconProps}
                  className="text-gray-400 group-hover:text-white transition-colors duration-300"
                >
                  {getIcon(skills[index].icon, 48)}
                </animated.div>
                <h3 className="text-2xl font-bold">{skills[index].title}</h3>
              </div>
              <animated.p 
                style={{
                  opacity: style.opacity,
                  transform: style.transform
                }}
                className="text-gray-300"
              >
                {skills[index].description}
              </animated.p>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;