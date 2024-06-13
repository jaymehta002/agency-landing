'use client';
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  message: string;
  image: string;
  position: string;
  background: string;
  imageSrc1: string;
  imageSrc2: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, message, image, position, background, imageSrc1, imageSrc2 }) => {
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section id="testimonial" className="flex flex-col lg:flex-row md:p-8 p-2 min-h-screen">
      {/* Right Blocks */}
      <div className="flex flex-col flex-1 px-4 space-y-4">
        {/* Upper Right Block */}
        <motion.div
          className="flex flex-col items-center p-4 rounded-lg flex-1"
          style={{ backgroundColor: background }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <Image
            src={imageSrc1}
            alt="Safe and easy"
            width={6400}
            height={4800}
            className="h-96 w-auto"
          />
        </motion.div>

        {/* Lower Right Block */}
        <motion.div
          className="rounded-lg p-6 flex-1"
          style={{ backgroundColor: background }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold font-grifter mb-2 p-2">
              Testimonial
            </h2>
            <p className="mb-2 font-medium text-lg p-4">{message}</p>
            <div className="flex items-center">
              <Image
                src={image}
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-2 p-2">
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-500">{position}</p>
              </div>
              {/* <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-500"
                    viewBox="0 0 16 16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={starVariants}
                  >
                    <path d="M3.612 15.443c-.396.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696 2.184-4.413c.183-.37.73-.37.914 0l2.184 4.413 4.898.696c.441.062.612.63.283.95l-3.523 3.356.83 4.73c.078.443-.35.79-.746.592L8 13.187l-4.389 2.256z" />
                  </motion.svg>
                ))}
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
      {/* Left Block (only visible on large screens) */}
      <motion.div
        className="hidden lg:flex flex-1 space-y-4 rounded-lg items-center justify-center"
        style={{ backgroundColor: background }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariants}
      >
        <Image
          src={imageSrc2}
          alt="Phones"
          width={1400}
          height={1200}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Testimonial;
