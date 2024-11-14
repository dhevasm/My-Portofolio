import { ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <>
    <Navbar/>
    <div className="relative bg-gradient-to-br from-[#1e3a8a] to-[#6366f1] text-white h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
        <h1 className="text-6xl font-bold tracking-tight">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold">Oops! Page not found.</h2>
        <p className="text-xl md:text-2xl text-gray-300">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] hover:from-[#4338ca] hover:to-[#6d28d9] text-white px-10 py-5 rounded-md font-medium shadow-lg transition-colors duration-300 flex items-center space-x-3"
        >
          <ArrowLeftCircle size={32} />
          <span className="text-xl">Back to Home</span>
        </Link>
      </div>
    </div>
    </>
  );
};

export default NotFound;