import { Link } from "react-router-dom";
import { useSpring, animated, config } from '@react-spring/web';
import Particle from "../particles/Particle";

const Resume = () => {
  // Animasi untuk gambar profil
  const imageSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8) rotate(-5deg)' },
    to: { opacity: 1, transform: 'scale(1) rotate(0deg)' },
    config: config.wobbly,
    delay: 200,
  });

  // Animasi untuk teks dan konten
  const contentSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.gentle,
    delay: 400,
  });

  // Animasi untuk tombol
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
              style={buttonProps}
              onMouseEnter={() => handleButtonHover(true)}
              onMouseLeave={() => handleButtonHover(false)}
            >
              <Link
                to="/contact"
                className="z-10 bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white px-10 py-5 rounded-md font-medium transition-colors duration-300 inline-block"
              >
                Get in Touch
              </Link>
            </animated.div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Resume;