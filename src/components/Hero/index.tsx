"use client";
import Image from "next/image";
import data from "../../data.json";
import Clients from "./Clients";
import { motion } from "framer-motion";

const HeroPage = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-0"
      >
        <div className="hero-blob z-10"></div>
        <div className="md:hero-wave hidden z-10"></div>
      </motion.div>
      <div className="px-4 lg:px-28 relative z-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <motion.h1
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-6xl z-100 max-w-full md:text-left text-center md:max-w-1/2 font-grifter font-bold text-gray-800 mb-4"
            >
              Launch Your App <br />
              In Days, Not Months.
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ul className="list-none items-center justify-center md:items-start md:justify-start text-base md:text-lg font-semibold flex flex-cols gap-4 md:gap-6">
                <li>Innovate</li>
                <li className="list-disc">Design</li>
                <li className="list-disc">Develop</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center md:items-start md:justify-start gap-4 mt-4 flex-wrap"
            >
              <a href="#contact">
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 w-48 rounded-md">
                  Book Free Consultation
                </button>
              </a>
              <a href="#contact">
                <button className="border-2 border-blue-200 hover:bg-gray-400 text-sm text-gray-800 w-48 py-2 px-8 rounded-md">
                  Learn More
                </button>
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex lg:gap-6 md:gap-4 gap-2 lg:justify-start items-center justify-center mt-4"
            >
              <div className="flex flex-row -space-x-4">
                <div className="relative  hover:z-10 group">
                  <Image
                    src="/images/testimonials/boomjournal_matt.jpg"
                    alt="Boom Journal"
                    width={1080}
                    height={1080}
                    className="w-12 h-12 rounded-full object-contain hover:scale-105 border-white border-2"
                  />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Boom Journal
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-white rotate-45"></div>
                  </div>
                </div>
                <div className="relative  hover:z-10 group">
                  <Image
                    src="/images/testimonials/ashish_techland.jpg"
                    alt="Tech Land"
                    width={1080}
                    height={1080}
                    className="w-12 h-12 rounded-full object-contain  hover:scale-105 border-white border-2"
                  />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Tech Land
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-white rotate-45"></div>
                  </div>
                </div>
                <div className="relative  hover:z-10 group">
                  <Image
                    src="/images/testimonials/anurag_tossnbet.jpg"
                    alt="Toss n Bet"
                    width={1080}
                    height={1080}
                    className="w-12 h-12 rounded-full object-contain  hover:scale-105 border-white border-2"
                  />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Toss n Bet
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-white rotate-45"></div>
                  </div>
                </div>
                <div className="relative  hover:z-10 group">
                  <Image
                    src="/images/testimonials/yato_wolfTech.png"
                    alt="Wolf Tech"
                    width={1080}
                    height={1080}
                    className="w-12 h-12 rounded-full mr-4 object-contain  hover:scale-105 border-white border-2"
                  />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Wolf Tech
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-white rotate-45"></div>
                  </div>
                </div>
              </div>

              <div className=" flex lg:w-48 w-32 my-2">
                <span className="text-gray-600 font-bold">
                  Served 12 happy clients
                </span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-10/12 md:w-5/12"
          >
            <Image
              src="/images/hero/screen.png"
              alt="hero"
              height={1080}
              width={1080}
              className=""
            />
          </motion.div>
        </div>
        <Clients data={data.hero.clients} />
      </div>
    </>
  );
};

export default HeroPage;
