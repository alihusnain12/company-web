"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#170057] text-gray-400 p-10 shadow-2xl shadow-gray-700">
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"></div>
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse text-2xl font-extrabold">J.A Tech</h2>
          <p className="text-gray-400 mb-4">
            Elevating your business with cutting-edge software solutions and unparalleled expertise. Join us on a journey to transform the digital world.
          </p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-blue-500">
              <FaFacebook size={30} />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-blue-400">
              <FaTwitter size={30} />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-blue-600">
              <FaLinkedin size={30} />
            </Link>
            <Link href="https://github.com" aria-label="GitHub" className="text-white hover:text-gray-600">
              <FaGithub size={30} />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#home" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white">Services</Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-white">About Us</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Contact Information</h3>
          <ul className="space-y-2">
            <li>Email: Jabbar540@gmail.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Tech Avenue, Ali Puc City</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-500 relative">
        © {new Date().getFullYear()} CodeMaster Technologies. All rights reserved.
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
