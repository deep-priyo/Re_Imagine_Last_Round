import React from 'react';
import Imagecar from './Imagecar';

// MagicInput Component
const MagicInput = () => {
    return (
      <div className=" flex-col items-center w-[50%] m-auto mt-8">
        <div className="flex items-center justify-center w-full">
          <input 
            type="text" 
            placeholder="INPUT YOUR PROMPT" 
            className="flex-1 py-4 px-10 text-sm text-gray-300 bg-white-800 rounded-l-full outline-none"
          />
          <button 
            className="py-4 px-6 text-xs font-bold text-white bg-red-500 rounded-r-full hover:bg-orange-600 transition-colors"
          >
            CLICK TO MAGIC
          </button>
        </div>
        <div className="flex justify-center mt-5 space-x-4">
          <button 
            className="py-1 px-4 text-xs font-bold text-white bg-red-500 rounded-full hover:bg-red-900 transition-colors"
          >
            A 3-D Render Of A Tree
          </button>
          <button 
            className="py-1 px-4 text-sm font-bold text-white bg-red-500 rounded-full hover:bg-red-900 transition-colors"
          >
            An abstract painting of a...
          </button>
        </div>
      </div>
    );
  };
  

// Generate Component
const Generate = () => {
  return (
    <div className="w-full bg-black pt-[5vw]  flex-col justify-center px-[4vw]">
      <h1 className="font-bold font-[futura-bold] leading-tight text-5xl md:text-6xl text-center text-white ">
        GENERATE HIGH QUALITY <br /> IMAGES IN SECONDS
      </h1>
      <MagicInput />
      {/* Example buttons underneath the input field */}
    <Imagecar/>
    </div>
  );
}

export default Generate;
