"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { FaCode } from 'react-icons/fa';  // Importing an icon to represent technology

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`flex justify-between items-center p-5 fixed w-full top-0 ${
          isScrolled ? 'bg-gray-800 bg-opacity-75 backdrop-blur-lg' : 'bg-transparent'
        } transition-colors duration-300 text-white z-50`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <div className="flex items-center text-2xl font-bold ml-2">
          <FaCode className="text-blue-500 mr-2 animate-pulse" />  {/* Adding a gradient color to the icon and animation */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse">
            J.A Tech
          </span>
        </div>
        <div className="hidden md:flex space-x-8 mx-auto">
          <a href="#" className="text-lg hover:text-gray-500 transition-colors duration-300">Home</a>
          <a href="#" className="text-lg hover:text-gray-500 transition-colors duration-300">About</a>
          <a href="#" className="text-lg hover:text-gray-500 transition-colors duration-300">Portfolio</a>
          <a href="#" className="text-lg hover:text-gray-500 transition-colors duration-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <XIcon className="h-6 w-6 text-white" /> : <MenuIcon className="h-6 w-6 text-white" />}
          </button>
        </div>
      </motion.nav>

      {isOpen && (
        <motion.div 
          className="fixed top-0 right-0 w-2/3 h-full bg-gray-800 bg-opacity-95 backdrop-blur-lg z-20 flex flex-col items-center justify-center space-y-10"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-5 right-5 text-white focus:outline-none"
          >
            <XIcon className="h-6 w-6" />
          </button>
          <a href="#" className="text-white text-xl hover:text-gray-500 transition-colors duration-300">Home</a>
          <a href="#" className="text-white text-xl hover:text-gray-500 transition-colors duration-300">About</a>
          <a href="#" className="text-white text-xl hover:text-gray-500 transition-colors duration-300">Portfolio</a>
          <a href="#" className="text-white text-xl hover:text-gray-500 transition-colors duration-300">Contact</a>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
