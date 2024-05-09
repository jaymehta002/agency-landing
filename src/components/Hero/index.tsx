import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import data from "../../Data.json";

const HeroPage = () => {
  return (
    <div className="background-design py-16 px-28">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-6xl w-64 font-grifter font-bold text-gray-800 mb-4">
            Fluttering Your Ideas Into Digital Reality
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            risus vel sapien posuere bibendum. Fusce ac purus eu risus faucibus
            tincidunt.
          </p>
          <div className="flex flex-wrap">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4">
              Learn More
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-4">
              Get Started
            </button>
          </div>
        </div>
        <div className=" justify-center flex flex-col gap-4">
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
          <img
            src={data.hero.images[2]}
            alt="Image 3"
            className="h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
