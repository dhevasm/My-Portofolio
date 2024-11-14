import { Link } from "react-router-dom";
import { useSpring, animated, config } from '@react-spring/web';
import Particle from "../particles/Particle";
import { useState } from "react";

const Resume = () => {

  const [isPressed, setIsPressed] = useState(false);

  const imageSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8) rotate(-5deg)' },
    to: { opacity: 1, transform: 'scale(1) rotate(0deg)' },
    config: config.wobbly,
    delay: 200,
  });

  const contentSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.gentle,
    delay: 400,
  });

  const [buttonProps, buttonApi] = useSpring(() => ({
    scale: 1,
    shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    config: { mass: 1, tension: 300, friction: 20 },
  }));

  // Hover effect untuk tombol
  const handleButtonHover = (hovering) => {
    buttonApi.start({
      scale: hovering ? 1.05 : 1,
      shadow: hovering 
        ? '0 20px 25px -5px rgba(0, 0, 0, 0.2)' 
        : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    });
  };

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-black to-gray-900 text-white py-20 md:py-32 min-h-screen h-full md:h-screen"
    >
      <Particle />
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10">
        <animated.div 
          style={imageSpring} 
          className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
          <img
            src="/img/profile-picture.jpg"
            alt="Ardiansyah Dheva"
            className="w-2/3 md:w-full max-w-md rounded-lg shadow-lg z-10 hover:shadow-2xl transition-shadow duration-300"
          />
        </animated.div>

        <animated.div 
          style={contentSpring} 
          className="md:w-1/2 space-y-8"
        >
          <div>
            <animated.h2 
              style={useSpring({
                from: { opacity: 0, transform: 'translateX(-20px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
                delay: 600,
              })}
              className="text-3xl text-center md:text-start md:text-4xl font-bold tracking-tight"
            >
              About Ardiansyah Dheva
            </animated.h2>
            
            <animated.p 
              style={useSpring({
                from: { opacity: 0, transform: 'translateX(-20px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
                delay: 800,
              })}
              className="text-gray-300 text-center md:text-start text-xl md:text-2xl mt-4"
            >
              As a passionate Frontend Web Developer, I specialize in building
              captivating user experiences that engage and delight your
              audience. With a strong focus on clean code, responsive design,
              and user-centric development, I strive to create visually
              appealing and highly interactive websites that exceed my
              clients' expectations.
            </animated.p>
          </div>
          
          <div className="flex justify-center md:justify-start">
            <animated.div 
              className={`
                hover:cursor-pointer
                relative overflow-hidden
                px-8 py-4 rounded-lg
                bg-gradient-to-r from-purple-600 to-indigo-600
                hover:from-purple-500 hover:to-indigo-500
                text-white font-medium
                transform transition-all duration-300
                hover:scale-105 active:scale-95
                shadow-[0_0_20px_rgba(147,51,234,0.3)]
                hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]
                ${isPressed ? 'scale-95' : ''}
                group
              `}
              onMouseDown={() => setIsPressed(true)}
              onMouseUp={() => setIsPressed(false)}
              onMouseLeave={() => setIsPressed(false)}
            >
              <Link to={'/contact'} className="relative z-10 flex items-center justify-center gap-2">
                Get In Touch
                <svg 
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              
              <div className="absolute inset-0 bg-white/20 transform scale-0 transition-transform duration-500 rounded-lg group-hover:scale-100" />
            </animated.div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Resume;