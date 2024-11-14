import { Link } from "react-router-dom";
import Particle from "../particles/Particle";

const Resume = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-black to-gray-900 text-white py-20 md:py-32 min-h-screen h-full md:h-screen"
    >
        <Particle/>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10">
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/img/profile-picture.jpg"
            alt="Ardiansyah Dheva"
            className="w-2/3 md:w-full max-w-md rounded-lg shadow-lg z-10"
          />
        </div>
        <div className="md:w-1/2 space-y-8">
          <div>
            <h2 className="text-3xl text-center md:text-start md:text-4xl font-bold tracking-tight">
              About Ardiansyah Dheva
            </h2>
            <p className="text-gray-300 text-center md:text-start text-xl md:text-2xl mt-4">
              As a passionate Frontend Web Developer, I specialize in building
              captivating user experiences that engage and delight your
              audience. With a strong focus on clean code, responsive design,
              and user-centric development, I strive to create visually
              appealing and highly interactive websites that exceed my
              clients' expectations.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/contact"
              className="z-10 bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white px-10 py-5 rounded-md font-medium shadow-lg transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;