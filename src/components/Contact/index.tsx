'use client'
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="font-grifter text-4xl md:text-6xl mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl">Here's how you can contact us and take your business to new heights.</p>
      </div>

      {/* Contact Form and Illustration */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full px-4">
        {/* Contact Form */}
        <motion.div
          className="w-full md:w-1/2 px-4 mb-4 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.form
            className="p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4">
              <input
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <input
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <textarea
                className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
                id="message"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-md">
              Send
            </button>
          </motion.form>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="w-full md:w-1/2 px-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.img
            src="/images/contactus.svg"
            alt="Illustration"
            className="w-full h-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </motion.div>
      </div>

      {/* Social Profiles */}
      <div className="whyus-bg flex flex-col items-center justify-center w-full md:w-11/12 px-4 h-48 rounded-2xl mt-12">
        <h1 className="font-grifter text-4xl md:text-6xl mb-4">Social Profiles</h1>
        <div className="flex flex-wrap justify-center">
          <p className="mx-2">Facebook</p>
          <p className="mx-2">Twitter</p>
          <p className="mx-2">LinkedIn</p>
          <p className="mx-2">Instagram</p>
          <p className="mx-2">YouTube</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
