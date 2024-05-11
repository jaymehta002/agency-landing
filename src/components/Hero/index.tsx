import Image from "next/image";
import data from "../../Data.json";
import Clients from "./Clients";
const HeroPage = () => {
  return (
    <>
    <div className="hero-wave"></div>
    <div className="background-design px-28">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="hero-blob"></div>
          <h1 className="text-6xl max-w-1/2 font-grifter font-bold text-gray-800 mb-4">
            Fluttering Your <br /> Ideas Into Digital Reality
          </h1>
          <div className="">
            <ul className="list-none text-lg font-semibold flex flex-cols gap-6">
              <li>Innovate</li>
              <li className="list-disc">Design</li>
              <li className="list-disc">Develop</li>
            </ul>
          </div>

          <div className="flex mt-4 flex-wrap">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-md mr-4 mb-4">
              Book Free Consultation
            </button>
            <button className="border-2 border-blue-200 hover:bg-gray-400 text-sm text-gray-800 py-2 px-8 rounded-md mb-4">
              Learn More
            </button>
          </div>
          <div className="flex relative mt-4">
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
          </div>
        </div>
        <div className="2xl:block xl:block hidden">
          <Image src="/images/bigScreen.png" className="" alt="hero" height={600} width={600} />
        </div>
        <div className="2xl:hidden xl:hidden md:block justify-center flex flex-col gap-4">
          <div className="flex gap-4">
            <img
              src={data.hero.images[0]}
              alt="Image 1"
              className="w-auto h-64"
            />
            <img
              src={data.hero.images[1]}
              alt="Image 2"
              className="w-auto h-64"
            />
          </div>
          <img src={data.hero.images[2]} alt="Image 3" className="h-64" />
        </div>
      </div>
      <Clients data={data.hero.clients} />
    </div>
    </>
  );
};

export default HeroPage;
