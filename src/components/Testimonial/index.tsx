'use client'
import React from 'react';
import { motion } from 'framer-motion';
import data from '../../data.json';
import Image from 'next/image';

const Index = () => {
  return (
    <div className="container mx-auto md:px-40 px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Our Happy Clients say About us</h2>
      <h3 className="text-lg font-semibold mb-4">Here&#39;s a significant proof of our work, the testimonials, that we have received from our previous clients.</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial Boxes */}
        {data.testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg"
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', transition: { duration: 0.3 } }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-4xl text-gray-400 mb-4">&#8220;</div>
            <p className="text-lg mb-4">{testimonial.quote}</p>
            <div className="flex items-center mb-4">
              <Image height={1080} width={1080} src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Index;
