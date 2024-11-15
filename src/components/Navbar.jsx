import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Skills", href: "/skills" },
    { title: "Contact", href: "/contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300">
              My Portofolio
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? 
                <X size={24} className="transition-transform duration-300 rotate-90" /> : 
                <Menu size={24} className="transition-transform duration-300" />
              }
            </button>
          </div>
        </div>

        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <Link
                key={item.title}
                to={item.href}
                className={`block text-white hover:text-gray-300 hover:bg-gray-900 px-3 py-2 rounded-md text-base font-medium 
                  transition-all duration-300 transform
                  ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                  `}
                style={{
                  transitionDelay: `${index * 75}ms`
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;