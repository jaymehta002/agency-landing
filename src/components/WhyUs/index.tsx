'use client'
import { motion } from 'framer-motion';

const Index = () => {
 return (
   <div className="flex flex-col justify-center items-center min-h-screen">
    {/* <div className='zigzag-1'></div> */}
    {/* <div className='zigzag-2'></div> */}
     <motion.div
       initial={{ opacity: 0, y: -50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       className="max-w-2xl w-full h-full p-8"
     >
       <h1 className="text-6xl font-grifter text-center font-bold mb-4">Why Us</h1>
       <p className="text-gray-900 text-center mb-4">
         At Flutter Your Way, we are a team of passionate and experienced app developers and software engineers driven by a shared mission: to empower businesses with innovative technology solutions.
       </p>
     </motion.div>

     <motion.div
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.3 }}
       className="flex w-11/12 px-20 py-20 rounded-2xl whyus-bg justify-between"
     >
       <motion.div
         initial={{ opacity: 0, y: -50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.5 }}
         className="text-center"
       >
         <h2 className="text-4xl font-grifter font-bold">15+</h2>
         <p>Projects Completed</p>
       </motion.div>

       <motion.div
         initial={{ opacity: 0, y: -50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.7 }}
         className="text-center"
       >
         <h2 className="text-4xl font-grifter font-bold">20</h2>
         <p>Happy Clients</p>
       </motion.div>

       <motion.div
         initial={{ opacity: 0, y: -50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.9 }}
         className="text-center"
       >
         <h2 className="text-4xl font-grifter font-bold">30K+</h2>
         <p>Member Community</p>
       </motion.div>

       <motion.div
         initial={{ opacity: 0, y: -50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 1.1 }}
         className="text-center"
       >
         <h2 className="text-4xl font-grifter font-bold">4+</h2>
         <p>Years of Experience</p>
       </motion.div>
     </motion.div>
   </div>
 );
};

export default Index;