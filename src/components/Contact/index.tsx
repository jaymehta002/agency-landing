'use client'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";
import data from "../../data.json";
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_USER_ID'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitted(true);
    })
    .catch((err) => {
      console.error('FAILED...', err);
    });
  };

  return (
    <section id="contact" className="mt-20 lg:px-40 flex flex-col justify-center items-center">
      {/* Title and Description */}
      <motion.div className="text-center mb-8"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h1 className="font-grifter text-4xl md:text-6xl mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl">Here&#39;s how you can contact us and take your business to new heights.</p>
      </motion.div>

      {/* Contact Form and Illustration */}
      <motion.div className="flex flex-col lg:flex-row justify-center items-center w-full px-4"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Contact Form */}
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <form className="p-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                id="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-md" type="submit">
              Send
            </button>
            {isSubmitted && <p className="text-green-500 mt-4">Message sent successfully!</p>}
          </form>
        </div>

        {/* Illustration */}
        <div className="w-full lg:w-1/2 px-4 mb-4 md:mb-0">
          <Image
            src="/images/contactus.svg"
            alt="Illustration"
            className="w-full h-auto"
            height={1080}
            width={1080}
          />
        </div>
      </motion.div>

      {/* Social Profiles */}
      <div className="whyus-bg flex flex-col md:flex-row justify-around items-center w-11/12 px-6 md:px-20 py-20 h-80 rounded-2xl mt-12">
        <h1 className="font-grifter text-4xl md:text-6xl mb-4">Social Profiles</h1>
        <div className="flex flex-wrap justify-center">
          <a href={data.facebook} className="mx-2"><CiFacebook className="h-8 w-8" /> </a>
          <a href={data.twitter} className="mx-2"><CiTwitter  className="h-8 w-8"/> </a>
          <a href={data.instagram} className="mx-2"><CiInstagram className="h-8 w-8" /> </a>
          <a href={data.linkedin} className="mx-2"><CiLinkedin className="h-8 w-8" /></a>
          <a href={data.youtube} className="mx-2"><CiYoutube  className="h-8 w-8"/></a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
