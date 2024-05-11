import React from 'react';

type Props = {
    data: string[];
};

const Clients = (props: Props) => {
  return (
    <>
      <h2 className="text-3xl text-gray-400 text-center mb-6">Our Trusted Clients</h2>
      <div className="flex justify-between flex-wrap">
        <div className="m-4 flex items-center">
          <img src={props.data[0]} alt="Client 1" className="w-12 h-12 object-contain grayscale" />
          <p className="text-gray-400 font-bold text-center">Contract wise</p>
        </div>
        <div className="m-4 flex items-center">
          <img src={props.data[1]} alt="Client 2" className="w-12 h-12 object-contain grayscale" />
          <p className="text-gray-400 font-bold text-center ml-2">Boom Journal</p>
        </div>
        <div className="m-4 flex items-center">
          <img src={props.data[2]} alt="Client 3" className="w-12 h-12 object-contain grayscale" />
          <p className="text-gray-400 font-bold text-center">Techland</p>
        </div>
        <div className="m-4 flex items-center">
          <img src={props.data[3]} alt="Client 4" className="w-12 h-12 object-contain grayscale" />
          <p className="text-gray-400 font-bold text-center ml-3">Wolf Technologies</p>
        </div>
        <div className="m-4 flex items-center">
          <img src={props.data[4]} alt="Client 5" className="w-12 h-12 object-contain grayscale" />
          <p className="text-gray-400 font-bold text-center">TossnBet</p>
        </div>
      </div>
    </>
  );
};

export default Clients;
