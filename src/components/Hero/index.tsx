'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import data from "../../Data.json";
import Clients from "./Clients";

const HeroPage = () => {
  return (
    <>
      <div className="z-10">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay:0.2}} className="hero-blob z-10"></motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay:0.2}}  className="hero-wave z-10"></motion.div>
      </div>
      <div className="px-28 z-100">
        <div className="container z-100 mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl z-100 max-w-1/2 font-grifter font-bold text-gray-800 mb-4"
            >
              Fluttering Your <br /> Ideas Into Digital Reality
            </motion.h1>
            <div className="">
              <ul className="list-none text-lg font-semibold flex flex-cols gap-6">
                <li>Innovate</li>
                <li className="list-disc">Design</li>
                <li className="list-disc">Develop</li>
              </ul>
            </div>

            <div className="flex mt-4 flex-wrap">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 w-48 rounded-md mr-4 mb-4"
              >
                Book Free Consultation
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="border-2 border-blue-200 hover:bg-gray-400 text-sm text-gray-800 w-48 py-2 px-8 rounded-md mb-4"
              >
                Learn More
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex relative mt-4"
            >
              <Image
                src={data.hero.profile[0]}
                className="h-10 w-10 absolute top-0 left-0 z-10 hover:z-50 hover:scale-105"
                alt="Logo"
                width={200}
                height={200}
              />
              <Image
                src={data.hero.profile[1]}
                className="h-10 w-10 absolute top-0 left-7 z-20 hover:z-50 hover:scale-105"
                alt="Logo"
                width={200}
                height={200}
              />
              <Image
                src={data.hero.profile[2]}
                className="h-10 w-10 absolute top-0 left-14 z-30 hover:z-50 hover:scale-105"
                alt="Logo"
                width={200}
                height={200}
              />
              <Image
                src={data.hero.profile[3]}
                className="h-10 w-10 absolute top-0 left-20 z-40 hover:z-50 hover:scale-105 "
                alt="Logo"
                width={200}
                height={200}
              />
              <p className="ml-32">
                15+ clients already <br /> launched their MVP
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="2xl:block xl:block hidden"
          >
            <Image src="/images/bigScreen.png" className="" alt="hero" height={600} width={600} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="2xl:hidden xl:hidden z-20 grid mx-auto justify-center grid-cols-1 gap-4"
          >
            <div className="flex gap-4">
              <Image height={1080} width={1080}
                src={data.hero.images[0]}
                alt="Image 1"
                className="w-1/2 "
              />
              <Image height={1080} width={1080}
                src={data.hero.images[1]}
                alt="Image 2"
                className="w-1/2"
              />
            </div>
            <Image height={1080} width={1080} src={data.hero.images[2]} alt="Image 3" className="w-full" />
          </motion.div>
        </div>
        <div className="lg:block 2xl:block hidden">
        <Clients data={data.hero.clients} />
        </div>
      </div>
    </>
  );
};

export default HeroPage;