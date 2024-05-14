import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <>
    {/* <div className='footer-blob object-contain'>
        <Image src='/images/footer-blob.png' className='h-20 w-20' alt='Footer Blob' height={500} width={500} />
    </div> */}
    <footer className="pt-32  ">
      <div className="container mx-auto p-8">
        <div className="flex justify-center mb-4">
          <img src="/logo/logo.png" alt="Logo" className="h-12 w-12" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <a href="#" className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out mr-4">
            Home
          </a>
          <a href="#" className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out mr-4">
            Why Us
          </a>
          <a href="#" className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out mr-4">
            Services
          </a>
          <a href="#" className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out mr-4">
            Projects
          </a>
          <a href="#" className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out mr-4">
            Culture
          </a>
          <a href="#" className="text-gray-700 font-bold text-sm hover:text-gray-900 transition duration-300 ease-in-out mr-4">
            Contact Us
          </a>
        </div>
        <hr className="border-gray-900  mb-4" />
        <div className="flex justify-between mb-4">
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