import { ArrowDownCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Particle from "../particles/Particle";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-20 bg-gradient-to-br from-black to-gray-900 text-white h-full md:h-screen overflow-hidden"
    >
        <Particle />
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full relative z-10">
        <div className="space-y-10 text-center md:text-left">
          <div> 
            <h1 className="text-3xl my-5 md:text-5xl font-bold tracking-tight">
              HI, I'm Ardiansyah Dheva <br />
              Front End Web Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              As a passionate Frontend Web Developer, I specialize in building captivating user experiences that engage and delight your audience.
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-x-8">
            <a
              href="#"
              className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white px-10 py-5 rounded-md font-medium shadow-lg transition-colors duration-300"
            >
              View Portfolio
            </a>
            <a
              href="https://www.linkedin.com/in/ardiansyah-dheva-3139a82b9/"
              className="text-gray-300 hover:text-white flex items-center space-x-2 transition-colors duration-300"
            >
              <ArrowDownCircle size={32} />
              <span className="text-xl">Hire Me</span>
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-8">
            <a
              href="https://github.com/dhevasm"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/ardiansyah-dheva-3139a82b9/"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://www.instagram.com/ardiansyahd19/"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={32} />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/img/hero-image.png"
            alt="Hero Image"
            className="w-1/2 md:w-2/3 relative max-w-md rounded-lg transform translate-x-6 -translate-y-6 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;