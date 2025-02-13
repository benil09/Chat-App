import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          <a href="/">eduSync</a>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="/" className="hover:text-gray-400 transition duration-300">Home</a>
          <a href="/about" className="hover:text-gray-400 transition duration-300">About Us</a>
          <a href="/contact" className="hover:text-gray-400 transition duration-300">Contact</a>
          <a href="/privacy" className="hover:text-gray-400 transition duration-300">Privacy Policy</a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-xl hover:text-gray-400 transition duration-300"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-xl hover:text-gray-400 transition duration-300"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-xl hover:text-gray-400 transition duration-300"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400 mt-4">
        © {new Date().getFullYear()} eduSync. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;