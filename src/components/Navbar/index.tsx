'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      className='hero-bg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/"><Image height={1080} width={1080} className="h-8 sm:h-12 w-8 sm:w-12" src="/logo/logo.png" alt="Logo" /></a>
          </div>

          {/* Navigation */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="ml-10 flex items-baseline space-x-4"
            >
              <a
                href="/ "
                className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#whyus"
                className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Why Us
              </a>
              <a
                href="#services"
                className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-gray-900 hover:text-blue-500  px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#culture"
                className="text-gray-900 hover:text-blue-500  px-3 py-2 rounded-md text-sm font-medium"
              >
                Culture
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:text-blue-500  px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* Button */}
          <div className="hidden lg:block">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="nav-button hover:bg-blue-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-md text-sm sm:text-base"
            >
              Book Free Consultation
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="-mr-2 flex lg:hidden">
            <motion.button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <a
            href="#home"
            className="text-gray-900 hover:text-blue-500  block px-3 py-2  rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#whyus"
            className="text-gray-900 hover:text-blue-500  block px-3 py-2 rounded-md text-base font-medium"
          >
            Why Us
          </a>
          <a
            href="#serices"
            className="text-gray-900 hover:text-blue-500  block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-gray-900 hover:text-blue-500  block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#culture"
            className="text-gray-900 hover:text-blue-500  block px-3 py-2 rounded-md text-base font-medium"
          >
            Culture
          </a>
          <a
            href="#contact"
            className="text-gray-900 hover:text-blue-500  block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </a>
        </div>
        <div className=" pb-3 flex flex-col items-center justify-center">
          <motion.button
            className="block w-11/12 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Free Consultation
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;