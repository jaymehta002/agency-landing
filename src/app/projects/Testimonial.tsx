import Image from "next/image";
import React from "react";

interface TestimonialProps {
  name: string;
  message: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, message }) => {
  return (
    <section id="testimonial" className="flex flex-col lg:flex-row md:p-8 p-2 min-h-screen">
      {/* Right Blocks */}
      <div className="flex flex-col flex-1 px-4 space-y-4  ">
        {/* Upper Right Block */}
        <div className="flex flex-col items-center bg-[#ACEBE2] p-4 rounded-lg flex-1">
          <Image
            src="/images/phone.png"
            alt="Safe and easy"
            width={300}
            height={650}
          />
        </div>

        {/* Lower Right Block */}
        <div className="bg-[#ACEBE2] rounded-lg p-6 flex-1">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold font-grifter mb-2 p-2">
              Testimonial
            </h2>
            <p className="mb-2 font-medium text-lg p-4">{message}</p>
            <div className="flex items-center">
              <Image
                src="/images/hug.png"
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-2 p-2">
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-500">Location</p>
              </div>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.396.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696 2.184-4.413c.183-.37.73-.37.914 0l2.184 4.413 4.898.696c.441.062.612.63.283.95l-3.523 3.356.83 4.73c.078.443-.35.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Left Block (only visible on large screens) */}
      <div className="hidden lg:flex flex-1 space-y-4 bg-[#ACEBE2] rounded-lg items-center justify-center p-4">
        <Image
          src="/images/testimonialphone.png"
          alt="Phones"
          width={300}
          height={649}
          className="h-[650px] w-[480px] object-contain"
        />
      </div>
    </section>
  );
};

export default Testimonial;
