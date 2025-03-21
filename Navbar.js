import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white text-gray-800 shadow-md" 
          : "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <span className="text-2xl transform group-hover:rotate-12 transition-transform duration-300">🚀</span>
            <span className={`font-bold text-xl ${
              scrolled ? "text-blue-600" : "text-white"
            }`}>
              Project Manager
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" label="Dashboard" scrolled={scrolled} />
            <NavLink to="/projects" label="Projects" scrolled={scrolled} />
            <NavLink to="/tasks" label="Tasks" scrolled={scrolled} />
            <NavLink to="/team" label="Team" scrolled={scrolled} />
            
            <Link 
              to="/login" 
              className={`ml-4 px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                scrolled 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-800" : "bg-white"} ${isOpen ? "transform rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-800" : "bg-white"} ${isOpen ? "opacity-0 w-0" : "opacity-100 w-5"}`}></span>
              <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-800" : "bg-white"} ${isOpen ? "transform -rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 py-3" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-2 pb-3">
            <MobileLink to="/" label="Dashboard" scrolled={scrolled} />
            <MobileLink to="/projects" label="Projects" scrolled={scrolled} />
            <MobileLink to="/tasks" label="Tasks" scrolled={scrolled} />
            <MobileLink to="/team" label="Team" scrolled={scrolled} />
            <div className="pt-2 pb-1">
              <Link 
                to="/login" 
                className={`block py-2 px-4 text-center rounded-lg font-medium ${
                  scrolled 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-blue-600"
                }`}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop navigation link component
const NavLink = ({ to, label, scrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
    (to !== "/" && location.pathname.startsWith(to));
  
  return (
    <Link 
      to={to} 
      className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
        isActive 
          ? scrolled 
            ? "text-blue-600" 
            : "text-white bg-white/20" 
          : scrolled 
            ? "text-gray-700 hover:text-blue-600" 
            : "text-white/90 hover:text-white hover:bg-white/10"
      }`}
    >
      {label}
      {isActive && (
        <span 
          className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full ${
            scrolled ? "bg-blue-600" : "bg-white"
          }`}
        ></span>
      )}
    </Link>
  );
};

// Mobile navigation link component
const MobileLink = ({ to, label, scrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
    (to !== "/" && location.pathname.startsWith(to));
  
  return (
    <Link 
      to={to} 
      className={`py-2 px-4 rounded-lg font-medium ${
        isActive 
          ? scrolled 
            ? "bg-blue-50 text-blue-600" 
            : "bg-white/10 text-white" 
          : scrolled 
            ? "text-gray-700 hover:bg-gray-50" 
            : "text-white/90 hover:bg-white/5"
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
