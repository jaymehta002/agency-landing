import data from "../../Data.json";
const HeroPage = () => {
  return (
    <div className="background-design py-16 px-28">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-6xl max-w-1/2 font-grifter font-bold text-gray-800 mb-4">
            Fluttering Your <br /> Ideas Into Digital Reality
          </h1>
          <div className="">
          <ul className="list-none text-lg font-bold flex flex-cols gap-6">
            <li>Innovate</li>
            <li className="list-disc">Design</li>
            <li className="list-disc">Develop</li>
          </ul>
          </div>

          <div className="flex mt-4 flex-wrap">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4">
              Book Free Consultation
            </button>
            <button className="outline outline-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-4">
              Learn More
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
          <img src={data.hero.images[2]} alt="Image 3" className="h-64" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
