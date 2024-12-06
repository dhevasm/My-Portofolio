import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useSpring, animated, config } from '@react-spring/web';
import Particle from "../particles/Particle";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [isPressed, setIsPressed] = useState(false);

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.gentle,
    delay: 200,
  });

  const contactInfoSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: config.gentle,
    delay: 400,
  });

  const formSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: config.gentle,
    delay: 400,
  });

  const contactItemsSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.gentle,
    delay: 600,
  });

  const [buttonProps, buttonApi] = useSpring(() => ({
    scale: 1,
    shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    config: { mass: 1, tension: 300, friction: 20 },
  }));

  const inputSpring = useSpring({
    from: { width: '0%' },
    to: { width: '100%' },
    config: { tension: 120, friction: 14 },
    delay: 800,
  });

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-black to-gray-900 text-white py-20 md:py-32 h-full md:h-screen"
    >
      <Particle/>
      <div className="max-w-6xl mx-auto px-4 z-10">
        <animated.h2 
          style={titleSpring}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          Get in Touch
        </animated.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <animated.div 
            style={contactInfoSpring}
            className="bg-gray-900 rounded-lg p-8 shadow-lg z-10 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <animated.div style={contactItemsSpring}>
              <animated.div 
                className="flex items-center space-x-4 mb-4 hover:transform hover:translate-x-2 transition-transform duration-300"
                style={useSpring({
                  from: { opacity: 0, transform: 'translateX(-20px)' },
                  to: { opacity: 1, transform: 'translateX(0)' },
                  delay: 800,
                })}
              >
                <FaEnvelope size={24} className="text-gray-400" />
                <Link to={'mailto:dhevasmpkl123@gmail.com'} target="_blank">dhevapkl123@gmail.com</Link>
              </animated.div>
              <animated.div 
                className="flex items-center space-x-4 mb-4 hover:transform hover:translate-x-2 transition-transform duration-300"
                style={useSpring({
                  from: { opacity: 0, transform: 'translateX(-20px)' },
                  to: { opacity: 1, transform: 'translateX(0)' },
                  delay: 900,
                })}
              >
                <FaPhoneAlt size={24} className="text-gray-400" />
                <Link to={'https://wa.me/6288994107529'} target="_blank">+6288994107529</Link>
              </animated.div>
              <animated.div 
                className="flex items-center space-x-4 hover:transform hover:translate-x-2 transition-transform duration-300"
                style={useSpring({
                  from: { opacity: 0, transform: 'translateX(-20px)' },
                  to: { opacity: 1, transform: 'translateX(0)' },
                  delay: 1000,
                })}
              >
                <FaMapMarkerAlt size={24} className="text-gray-400" />
                <span>SimoJawar, Surabaya</span>
              </animated.div>
            </animated.div>
          </animated.div>

          <animated.div 
            style={formSpring}
            className="bg-gray-900 rounded-lg p-8 shadow-lg z-10 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <animated.div style={inputSpring}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-gray-300 outline-none px-2 py-2 text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-400"
                />
              </animated.div>
              <animated.div style={{...inputSpring, delay: 900}}>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-gray-300 outline-none px-2 py-2 text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-400"
                />
              </animated.div>
              <animated.div style={{...inputSpring, delay: 1000}}>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full overflow-hidden bg-transparent border-b border-gray-600 focus:border-gray-300 outline-none px-2 py-2 text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-400"
                ></textarea>
              </animated.div>
              <animated.button
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
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
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
              </animated.button>
            </form>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;