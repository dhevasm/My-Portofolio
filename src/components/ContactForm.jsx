import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Particle from "../particles/Particle";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-black to-gray-900 text-white py-20 md:py-32 h-full md:h-screen"
    >
        <Particle/>
      <div className="max-w-6xl mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" >
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg z-10">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="flex items-center space-x-4 mb-4">
              <FaEnvelope size={24} className="text-gray-400" />
              <span>ardiansyahdheva@example.com</span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaPhoneAlt size={24} className="text-gray-400" />
              <span>+6288994107529</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt size={24} className="text-gray-400" />
              <span>SimoJawar, Surabaya</span>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg z-10">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-gray-600 focus:border-gray-300 outline-none px-2 py-2 text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-600 focus:border-gray-300 outline-none px-2 py-2 text-white placeholder-gray-400"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border-b border-gray-600 focus:border-gray-300 outline-none px-2 py-2 text-white placeholder-gray-400"
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white px-10 py-3 rounded-md font-medium shadow-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;