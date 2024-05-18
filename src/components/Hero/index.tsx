"use client";
import Image from "next/image";
import data from "../../data.json";
import Clients from "./Clients";

const HeroPage = () => {
  return (
    <>
      <div className="relative z-0">
        <div className="hero-blob z-10"></div>
        <div className="md:hero-wave hidden z-10"></div>
      </div>
      <div className="px-4 lg:px-28 relative z-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl z-100 max-w-full md:text-left text-center md:max-w-1/2 font-grifter font-bold text-gray-800 mb-4">
              Fluttering Your <br /> Ideas Into Digital Reality
            </h1>
            <div>
              <ul className="list-none items-center justify-center md:items-start md:justify-start text-base md:text-lg font-semibold flex flex-cols gap-4 md:gap-6">
                <li>Innovate</li>
                <li className="list-disc">Design</li>
                <li className="list-disc">Develop</li>
              </ul>
            </div>

            <div className="flex items-center justify-center md:items-start md:justify-start gap-4 mt-4 flex-wrap">
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 w-48 rounded-md">
                Book Free Consultation
              </button>
              <button className="border-2 border-blue-200 hover:bg-gray-400 text-sm text-gray-800 w-48 py-2 px-8 rounded-md">
                Learn More
              </button>
            </div>

            <div className="flex lg:gap-6 md:gap-4 gap-2 lg:justify-start items-center justify-center mt-4">
              <div className="flex flex-row -space-x-4">
                <Image
                  src="/images/clients/client1.png"
                  alt="Client 1"
                  width={1080}
                  height={1080}
                  className="w-12 h-12 object-contain grayscale hover:z-10 hover:scale-105 "
                />
                <Image
                  src="/images/clients/client2.png"
                  alt="Client 2"
                  width={1080}
                  height={1080}
                  className="w-12 h-12 object-contain grayscale hover:z-10 hover:scale-105"
                />
                <Image
                  src="/images/clients/client3.png"
                  alt="Client 3"
                  width={1080}
                  height={1080}
                  className="w-12 h-12 object-contain grayscale hover:z-10 hover:scale-105"
                />
                <Image
                  src="/images/clients/client4.png"
                  alt="Client 4"
                  width={1080}
                  height={1080}
                  className="w-12 h-12 object-contain grayscale hover:z-10 hover:scale-105 "
                />
              </div>
              <div className=" flex lg:w-48 w-32 my-2">
                <span className="text-gray-600 font-bold">
                  Served 20 happy clients
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <Image
              src="/images/bigScreen.png"
              alt="hero"
              height={1080}
              width={1080}
              className=""
            />
          </div>
        </div>
        <Clients data={data.hero.clients} />
      </div>
    </>
  );
};

export default HeroPage;

// import Image from "next/image";
// import React from "react";

// const HomePage = () => {
//   return (
//     <div className="flex flex-col mx-20 lg:flex-row md:items-center lg:justify-between p-6">
//       {/* Left Section */}
//       <div className="md:w-1/2 mb-8 md:mb-0">
//         <h1 className="text-5xl md:text-6xl font-grifter text-center lg:text-left font-bold mb-4">
//           Fluttering Your Ideas Into Digital Reality
//         </h1>
//         <ul className="list-none items-center justify-center md:items-start md:justify-start text-base md:text-lg font-semibold flex flex-cols gap-8 md:gap-8 mb-4">
//           <li>Innovate </li>
//           <li className="list-disc">Design</li>
//           <li className="list-disc">Develop</li>
//         </ul>
//         <div className="flex gap-4  items-center justify-center lg:justify-start">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
//             Book Free Consultation
//           </button>
//           <button className=" text-gray-800 border-2 border-blue-200 font-semibold py-2 px-4 rounded">
//             Learn More
//           </button>
//         </div>
//         <div className="flex  lg:justify-start items-center justify-center mt-4">
//           <div className="flex flex-row">
//               <Image src="/images/clients/client1.png" alt="Client 1" width={1080} height={1080} className="w-12 h-12 object-contain grayscale hover:z-10 hover:scale-105 relative" />
//               <Image src="/images/clients/client2.png" alt="Client 2" width={1080} height={1080} className="w-12 h-12 object-contain grayscale hover:z-10 hover:scale-105 relative -left-6" />
//               <Image src="/images/clients/client3.png" alt="Client 3" width={1080} height={1080} className="w-12 h-12 object-contain grayscale hover:z-10 hover:scale-105 relative -left-12" />
//               <Image src="/images/clients/client4.png" alt="Client 4" width={1080} height={1080} className="w-12 h-12 object-contain grayscale hover:z-10 hover:scale-105 relative -left-16" />
//           </div>
//           <div className=" flex items-center relative left-4 lg:-left-14   justify-center m-2">
//             <span className="text-gray-600 font-bold">15+ clients already launched their MVP</span>
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="md:w-1/2">
//         <Image
//           src="/images/bigScreen.png"
//           alt="Placeholder"
//           width={1080}
//           height={1080}
//           className="w-[614px] h-auto rounded-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
