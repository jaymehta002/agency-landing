// 'use client'
// import Image from "next/image";
// import data from "../../Data.json";
// import Clients from "./Clients";
// const HeroPage = () => {
//   return (
//     <>
//     <div className="hero-wave"></div>
//     <div className="background-design px-28">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <div className="hero-blob"></div>
//           <h1 className="text-6xl max-w-1/2 font-grifter font-bold text-gray-800 mb-4">
//             Fluttering Your <br /> Ideas Into Digital Reality
//           </h1>
//           <div className="">
//             <ul className="list-none text-lg font-semibold flex flex-cols gap-6">
//               <li>Innovate</li>
//               <li className="list-disc">Design</li>
//               <li className="list-disc">Develop</li>
//             </ul>
//           </div>

//           <div className="flex mt-4 flex-wrap">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-md mr-4 mb-4">
//               Book Free Consultation
//             </button>
//             <button className="border-2 border-blue-200 hover:bg-gray-400 text-sm text-gray-800 py-2 px-8 rounded-md mb-4">
//               Learn More
//             </button>
//           </div>
//           <div className="flex relative mt-4">
//             <Image
//               src={data.hero.profile[0]}
//               className="h-10 w-10 absolute top-0 left-0 z-10 hover:z-50"
//               alt="Logo"
//               width={200}
//               height={200}
//             />
//             <Image
//               src={data.hero.profile[1]}
//               className="h-10 w-10 absolute top-0 left-7 z-20 hover:z-50"
//               alt="Logo"
//               width={200}
//               height={200}
//             />
//             <Image
//               src={data.hero.profile[2]}
//               className="h-10 w-10 absolute top-0 left-14 z-30 hover:z-50"
//               alt="Logo"
//               width={200}
//               height={200}
//             />
//             <Image
//               src={data.hero.profile[3]}
//               className="h-10 w-10 absolute top-0 left-20 z-40 hover:z-50"
//               alt="Logo"
//               width={200}
//               height={200}
//             />
//             <p className="ml-32">
//               15+ clients already <br /> launched their MVP
//             </p>
//           </div>
//         </div>
//         <div className="2xl:block xl:block hidden">
//           <Image src="/images/bigScreen.png" className="" alt="hero" height={600} width={600} />
//         </div>
//         <div className="2xl:hidden xl:hidden md:block justify-center flex flex-col gap-4">
//           <div className="flex gap-4">
//             <img
//               src={data.hero.images[0]}
//               alt="Image 1"
//               className="w-auto h-64"
//             />
//             <img
//               src={data.hero.images[1]}
//               alt="Image 2"
//               className="w-auto h-64"
//             />
//           </div>
//           <img src={data.hero.images[2]} alt="Image 3" className="h-64" />
//         </div>
//       </div>
//       <Clients data={data.hero.clients} />
//     </div>
//     </>
//   );
// };

// export default HeroPage;

'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import data from "../../Data.json";
import Clients from "./Clients";

const HeroPage = () => {
  return (
    <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay:0.2}}  className="md:hero-wave hidden"></motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay:0.2}} className="hero-blob"></motion.div>
      <div className="background-design px-28">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl z-10 max-w-1/2 font-grifter font-bold text-gray-800 mb-4"
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
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-md mr-4 mb-4"
              >
                Book Free Consultation
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="border-2 border-blue-200 hover:bg-gray-400 text-sm text-gray-800 py-2 px-8 rounded-md mb-4"
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
                className="h-10 w-10 absolute top-0 left-0 z-10 hover:z-50"
                alt="Logo"
                width={200}
                height={200}
              />
              <Image
                src={data.hero.profile[1]}
                className="h-10 w-10 absolute top-0 left-7 z-20 hover:z-50"
                alt="Logo"
                width={200}
                height={200}
              />
              <Image
                src={data.hero.profile[2]}
                className="h-10 w-10 absolute top-0 left-14 z-30 hover:z-50"
                alt="Logo"
                width={200}
                height={200}
              />
              <Image
                src={data.hero.profile[3]}
                className="h-10 w-10 absolute top-0 left-20 z-40 hover:z-50"
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

          {/* <div className="xl:hidden 2xl:hidden md:block col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Whiskey</h3>
					</a>
					<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Vodka</h3>
					</a>
				</div>
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Gin</h3>
				</a>
			</div> */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="2xl:hidden xl:hidden grid mx-auto justify-center grid-cols-1 gap-4"
          >
            <div className="flex gap-4">
              <img
                src={data.hero.images[0]}
                alt="Image 1"
                className="w-1/2 "
              />
              <img
                src={data.hero.images[1]}
                alt="Image 2"
                className="w-1/2"
              />
            </div>
            <img src={data.hero.images[2]} alt="Image 3" className="w-full" />
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