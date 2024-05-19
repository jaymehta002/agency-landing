'use client';
import React from 'react';
import { motion } from 'framer-motion';
import data from '../../data.json';
import Image from 'next/image';

const Index = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className="container mx-auto overflow-hidden lg:px-40 px-4 py-8">
      <motion.h2
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4"
      >
        Our Happy Clients say About us
      </motion.h2>
      <motion.h3
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-lg font-semibold mb-4"
      >
        Here&#39;s a significant proof of our work, the testimonials, that we have received from our previous clients.
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial Boxes */}
        {data.testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-4xl text-gray-400 mb-4">&#8220;</div>
            <p className="text-lg mb-4">{testimonial.quote}</p>
            <div className="flex items-center mb-4">
              <Image
                height={1080}
                width={1080}
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
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
