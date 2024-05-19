import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <>
      {/* <div className='footer-blob object-contain'>
          <Image src='/images/footer-blob.png' className='h-20 w-20' alt='Footer Blob' height={500} width={500} />
      </div> */}
      <footer >
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center mb-4">
            <Image height={1080} width={1080} src="/logo/logo.png" alt="Logo" className="h-12 w-12" />
          </div>
          <div className="grid md:grid-cols-6 grid-cols-3 place-items-center justify-center mb-12">
            <a href="#" className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out">
              Home
            </a>
            <a href="#whyus" className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out">
              Why Us
            </a>
            <a href="#services" className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out">
              Services
            </a>
            <a href="#projects" className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out">
              Projects
            </a>
            <a href="#culture" className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out">
              Culture
            </a>
            <a href="#contact" className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out">
              Contact Us
            </a>
          </div>
          <hr className="border-gray-900 mb-4" />
          <div className="flex flex-col md:flex-row items-center text-center md:text-left justify-between">
            <p className="text-gray-900 font-bold text-sm">
              &copy; 2024 Flutteryourway. All Rights Reserved
            </p>
            <div className='flex gap-4'>
              <a href="#" className="text-gray-900 hover:font-bold text-sm underline hover:text-gray-900 transition duration-300 ease-in-out">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-900 hover:font-bold text-sm underline hover:text-gray-900 transition duration-300 ease-in-out">
                Terms Of Service
              </a>
              <a href="#" className="text-gray-900 hover:font-bold text-sm underline hover:text-gray-900 transition duration-300 ease-in-out">
                Cookies Setting
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
