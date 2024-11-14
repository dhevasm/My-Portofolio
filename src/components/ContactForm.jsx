import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useSpring, animated, config } from '@react-spring/web';
import Particle from "../particles/Particle";

const ContactForm = () => {
  // Animasi untuk judul
  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.gentle,
    delay: 200,
  });

  // Animasi untuk card contact info
  const contactInfoSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: config.gentle,
    delay: 400,
  });

  // Animasi untuk card form
  const formSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: config.gentle,
    delay: 400,
  });

  // Animasi untuk contact items
  const contactItemsSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.gentle,
    delay: 600,
  });

  // Hover animation untuk button
  const [buttonProps, buttonApi] = useSpring(() => ({
    scale: 1,
    shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    config: { mass: 1, tension: 300, friction: 20 },
  }));

  // Animasi untuk input fields
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
                <span>ardiansyahdheva@example.com</span>
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
                <span>+6288994107529</span>
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
                type="submit"
                style={buttonProps}
                onMouseEnter={() => buttonApi.start({ 
                  scale: 1.05,
                  shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
                })}
                onMouseLeave={() => buttonApi.start({ 
                  scale: 1,
                  shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                })}
                className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white px-10 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Send Message
              </animated.button>
            </form>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;