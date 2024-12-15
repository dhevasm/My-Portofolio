import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { useSpring, animated, config } from '@react-spring/web';
import Particle from "../particles/Particle";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const formRef = useRef();

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

  const inputSpring = useSpring({
    from: { width: '0%' },
    to: { width: '100%' },
    config: { tension: 120, friction: 14 },
    delay: 800,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,    
      process.env.REACT_APP_TEMPLATE_ID,    
      formRef.current,
      process.env.REACT_APP_PUBLIC_KEY     
    )
    .then((result) => {
      setSubmitStatus('Message sent successfully!');
      formRef.current.reset();
    }, (error) => {
      setSubmitStatus('Failed to send message. Please try again.');
      console.error('Email send error:', error);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-black to-gray-900 text-white py-20 md:py-32 min-h-screen"
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
                <Link to={'https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=dhevapkl123@gmail.com'} target="_blank">dhevapkl123@gmail.com</Link>
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
                className="flex items-center space-x-4  mb-6 hover:transform hover:translate-x-2 transition-transform duration-300"
                style={useSpring({
                  from: { opacity: 0, transform: 'translateX(-20px)' },
                  to: { opacity: 1, transform: 'translateX(0)' },
                  delay: 1000,
                })}
              >
                <FaMapMarkerAlt size={24} className="text-gray-400" />
                <span>SimoJawar, Surabaya</span>
              </animated.div>

              <h3 className="text-2xl font-bold mb-6">Social Media</h3>
              <animated.div 
                className="flex items-center space-x-4  mb-4 hover:transform hover:translate-x-2 transition-transform duration-300"
                style={useSpring({
                  from: { opacity: 0, transform: 'translateX(-20px)' },
                  to: { opacity: 1, transform: 'translateX(0)' },
                  delay: 1100,
                })}
              >
                <FaInstagram size={24} className="text-gray-400" />
                <Link to={"https://www.instagram.com/ardiansyahd19"} target="_blank">ardiansyahd19</Link>
              </animated.div>
              <animated.div 
                className="flex items-center space-x-4  mb-4 hover:transform hover:translate-x-2 transition-transform duration-300"
                style={useSpring({
                  from: { opacity: 0, transform: 'translateX(-20px)' },
                  to: { opacity: 1, transform: 'translateX(0)' },
                  delay: 1200,
                })}
              >
                <FaLinkedin size={24} className="text-gray-400" />
                <Link to={"https://www.linkedin.com/in/ardiansyah-dheva-3139a82b9"} target="_blank">Ardiansyah Dheva</Link>
              </animated.div>
              <animated.div 
                className="flex items-center space-x-4 hover:transform hover:translate-x-2 transition-transform duration-300"
                style={useSpring({
                  from: { opacity: 0, transform: 'translateX(-20px)' },
                  to: { opacity: 1, transform: 'translateX(0)' },
                  delay: 1300,
                })}
              >
                <FaGithub size={24} className="text-gray-400" />
                <Link to={"https://github.com/dhevasm"} target="_blank">dhevasm</Link>
              </animated.div>
            </animated.div>
          </animated.div>

          <animated.div 
            style={formSpring}
            className="bg-gray-900 rounded-lg p-8 shadow-lg z-10 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form 
              ref={formRef} 
              onSubmit={sendEmail} 
              className="space-y-4"
            >
              <animated.div style={inputSpring}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full bg-transparent border-b border-gray-600 focus:border-gray-300 outline-none px-2 py-2 text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-400"
                />
              </animated.div>
              <animated.div style={{...inputSpring, delay: 900}}>
                <input
                  type="email"
                  name="email "
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-b border-gray-600 focus:border-gray-300 outline-none px-2 py-2 text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-400"
                />
              </animated.div>
              <animated.div style={{...inputSpring, delay: 1000}}>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full overflow-hidden bg-transparent border-b border-gray-600 focus:border-gray-300 outline-none px-2 py-2 text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-400"
                ></textarea>
              </animated.div>
              
              {submitStatus && (
                <div className={`
                  text-center py-2 rounded-md 
                  ${submitStatus.includes('successfully') 
                    ? 'bg-green-600/20 text-green-400' 
                    : 'bg-red-600/20 text-red-400'}
                `}>
                  {submitStatus}
                </div>
              )}

              <animated.button
                type="submit"
                disabled={isSubmitting}
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
                  ${isPressed || isSubmitting ? 'scale-95' : ''}
                  group
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                `}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onMouseLeave={() => setIsPressed(false)}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && (
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
                  )}
                </span>
                
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