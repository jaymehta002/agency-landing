'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Culture = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section 
      id='culture' 
      className='flex md:flex-row flex-col lg:px-10 mt-20 justify-center overflow-hidden'
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 0.5 }}
    >
      {/* Left Side */}
      <motion.div 
        className='w-full md:w-1/2 p-6'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className='md:text-6xl text-4xl font-grifter font-bold mb-4'>Culture</h2>
        <p className='mb-4 font-semibold'>At Flutter Your Way, we don&#39;t just code, we collaborate. We believe in fostering a creative and supportive environment where teamwork comes together and build amazing things.</p>
        <div className="flex flex-wrap">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 w-48 rounded-md mr-4 mb-4"
          >
            Book Free Consultation
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-2 border-blue-200 hover:bg-gray-400 text-sm text-gray-800 w-48 py-2 px-8 rounded-md mb-4"
          >
            Learn More
          </motion.button>
        </div>
        <motion.img 
          src='/images/culture1.png' 
          alt='Culture' 
          className='w-full object-cover' 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </motion.div>

      {/* Right Side */}
      <motion.div 
        className='w-full md:w-1/2 p-6'
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <motion.div 
              className='relative mb-4 overflow-hidden'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image height={1080} width={1080} src='/images/culture2.png' alt='Image 1' className='w-full object-cover' />
              <h1 className='absolute inset-0 bottom-24 left-5 flex md:text-6xl text-4xl font-bold text-white items-end'>30K+</h1>
              <div className='absolute inset-5 flex items-end justify-start text-3xl text-white font-bold'>Instagram Followers </div>
            </motion.div>
            <motion.div 
              className='relative mb-4 overflow-hidden'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Image height={1080} width={1080} src='/images/culture3.png' alt='Image 2' className='w-full object-cover' />
              <h1 className='absolute inset-0 bottom-24 left-5 flex md:text-6xl text-4xl font-bold text-white items-end'>40+</h1>
              <div className='absolute inset-5 flex items-end justify-start text-3xl text-white font-bold'>Apps <br /> Deployed</div>
            </motion.div>
          </div>
          <div>
            <motion.div 
              className='relative mb-4 overflow-hidden'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Image height={1080} width={1080} src='/images/culture4.png' alt='Image 3' className='w-full object-cover' />
              <h1 className='absolute inset-0 bottom-24 left-5 flex md:text-6xl text-4xl font-bold text-white items-end'>45+</h1>
              <div className='absolute inset-5 flex items-end justify-start text-3xl text-white font-bold'>Happy <br /> Clients</div>
            </motion.div>
            <motion.div 
              className='relative mb-4 overflow-hidden'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Image height={1080} width={1080} src='/images/culture5.png' alt='Image 4' className='w-full object-cover' />
            </motion.div>
          </div>    
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Culture;
