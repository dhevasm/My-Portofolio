import { ArrowDownCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { useSpring, animated } from '@react-spring/web';
import Particle from "../particles/Particle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isPressed, setIsPressed] = useState(false);
  const Navigate = useNavigate();

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const slideIn = useSpring({
    from: { opacity: 0, transform: 'translate(100px, -100px)' },
    to: { opacity: 1, transform: 'translate(24px, -24px)' },
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const socialIconsSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 600,
  });

  const [buttonProps, buttonApi] = useSpring(() => ({
    scale: 1,
    config: { mass: 1, tension: 300, friction: 20 },
  }));

  const handlePortoClick = () => {
    Navigate('/projects');
  };

  const downloadCV = () => {
    fetch("pdf/cv.pdf").then((response) => {
        response.blob().then((blob) => {
        
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "CV-Ardiansyah Dheva.pdf";
            alink.click();
        });
    });
};

  return (
    <section
      id="home"
      className="relative pt-20 bg-gradient-to-br from-black to-gray-900 text-white h-full md:h-screen overflow-hidden"
    >
      <Particle />
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full relative z-10">
        <animated.div style={fadeIn} className="space-y-10 text-center md:text-left">
          <div>
            <animated.h1 className="text-3xl my-5 md:text-5xl font-bold tracking-tight">
              Hi, I'm Ardiansyah Dheva
            </animated.h1>
            <TypeAnimation
              sequence={[
                'Front End Web Developer',
                1000,
                'React.js Developer',
                1000,
                'UI/UX Enthusiast',
                1000,
                'Web Designer',
                1000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl md:text-4xl font-bold text-gray-300"
              repeat={Infinity}
            />
            <animated.p className="text-xl md:text-2xl text-gray-300 mt-4">
              As a passionate Frontend Web Developer, I specialize in building captivating user experiences that engage and delight your audience.
            </animated.p>
          </div>
          <div className="flex justify-center md:justify-start space-x-8">
            <animated.a
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
            onClick={handlePortoClick}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Portfolio
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
            </span>
            
              {/* Ripple effect overlay */}
             <div className="absolute inset-0 bg-white/20 transform scale-0 transition-transform duration-500 rounded-lg group-hover:scale-100" />
            </animated.a>
            <animated.a
              onClick={downloadCV}
              style={buttonProps}
              onMouseEnter={() => buttonApi.start({ scale: 1.05 })}
              onMouseLeave={() => buttonApi.start({ scale: 1 })}
              className="text-gray-300 hover:text-white flex items-center space-x-2 transition-colors duration-300"
            >
              <ArrowDownCircle size={20} />
              <span className="text-lg">Download CV</span>
            </animated.a>
          </div>
          <animated.div style={socialIconsSpring} className="flex justify-center md:justify-start space-x-8">
            <a
              href="https://github.com/dhevasm"
              className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110 "
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/ardiansyah-dheva-3139a82b9/"
              className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://www.instagram.com/ardiansyahd19/"
              className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={32} />
            </a>
          </animated.div>
        </animated.div>

        <animated.div style={slideIn} className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/img/hero-image.png"
            alt="Hero Image"
            className="w-1/2 md:w-2/3 relative max-w-md rounded-lg"
          />
        </animated.div>
      </div>
    </section>
  );
};

export default Home;