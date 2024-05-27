'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface FirstBlockProps {
  title: string;
  description: string;
  link: string;
  googlePlayImgSrc: string;
  phoneImgSrc: string;
  background: string;
  appleStoreImgSrc: string;
  appleStoreLink: string;
}

const FirstBlock: React.FC<FirstBlockProps> = ({
  title,
  description,
  link,
  googlePlayImgSrc,
  phoneImgSrc,
  background,
  appleStoreImgSrc,
  appleStoreLink,
}) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <motion.div
      id="#"
      className="p-4 lg:p-8 rounded-xl flex flex-col lg:flex-row items-center justify-between lg:mx-12 md:mx-8 mx-6 px-4 lg:px-8"
      style={{ backgroundColor: background }}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      {/* Text and Heading Section */}
      <motion.div
        className="flex flex-col items-start justify-center space-y-4 lg:w-1/2 mb-6 lg:mb-0"
        variants={fadeInUp as any}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <h1 className="text-3xl lg:text-4xl font-grifter font-bold text-black">
          {title}
        </h1>
        <p className="text-base lg:text-lg text-black">{description}</p>
        <div className="lg:w-1/2 w-64 flex flex-row gap-4 ">
          {link && (
            <Link href={link}>
            <Image
              src={googlePlayImgSrc}
              alt="Google Play Store"
              width={192}
              height={64}
              className="w-full"
            />
          </Link>
          )}
          {appleStoreLink && (
            <Link href={appleStoreLink}>
            <Image
              src={appleStoreImgSrc}
              alt="Apple Store"
              width={192}
              height={64}
              className="w-full"
            />
          </Link>
          )}
        </div>
      </motion.div>
      {/* Phone Image Section */}
      <motion.div
        className="flex items-center justify-center lg:w-1/2"
        variants={fadeInUp as any}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <Image
          src={phoneImgSrc}
          alt="Phone Screenshot"
          width={6400}
          height={4800}
          className="w-full h-full max-w-md"
        />
      </motion.div>
    </motion.div>
  );
};

export default FirstBlock;
