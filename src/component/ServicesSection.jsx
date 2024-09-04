import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const ServicesSection = () => {
  return (
   <div className='w-full h-[90vh] bg-black px-[3rem] py-[5rem]'>
   <div className='flex justify-between item-center'>
   <div className='flex-col w-[50%]'>
    <button className='bg-red-500 text-xs text-white px-4 py-[0.4rem] rounded-full'>
      the benefit we offer
    </button>
     <div className='mt-2'>
      <h1 className='font-[Futura-bold] uppercase text-4xl text-white'>
        paint your imagination to your relality,what are you waiting for
      </h1>
     </div>
   </div>
   <div   className='flex item-center flex-end justify-end '>
        <p className='text-white w-[60%]  mt-16 uppercase font-[futura] text-sm'>OUR SERVICES SERVE AS A CATALYST FOR UNBRIDLED IMAGINATION, GIVING YOU THE TOOLS TO TAKE YOUR PROJECT TO THE NEXT LEVEL.
        </p>
   </div>
   </div>
   <div className='w-full mt-40 flex justify-between item-center '>
    <div className='w-[30%]  flex-col justify-center item-center bg-black'>
         <div className='flex w-full justify-between gap-16'>
          <div>
            <img className='w-10' src="src/assets/image.png" alt="" />
          </div>
         <div className='flex'>
          <h1 className='mt-1.5 font-[Futura] text-white uppercase' >
            ai image generator
          </h1>
         </div>
         </div>
         <div className='text-white  mt-[2rem] text-justify'>
  AI image generators use machine learning models, like GANs and diffusion models, to create images from text or data. Trained on large datasets, they can generate new visuals by understanding patterns and relationships. These tools are transforming fields like design, advertising, and gaming by enabling rapid content creation and visualization with minimal input.
</div>



    </div>

  <div className='w-[30%] flex-col justify-center item-center bg-black'>
         <div className='flex w-full justify-between gap-16'>
          <div>
            <img className='w-10' src="src/assets/image.png" alt="" />
          </div>
         <div className='flex'>
          <h1 className='mt-1.5 font-[futura] text-white uppercase' >
            realistic image trending
          </h1>
         </div>
         </div>
         <div className='text-white mt-[2rem] text-justify'>
  AI image generators use machine learning models, like GANs and diffusion models, to create images from text or data. Trained on large datasets, they can generate new visuals by understanding patterns and relationships. These tools are transforming fields like design, advertising, and gaming by enabling rapid content creation and visualization with minimal input.
</div>



    </div>
    <div className='w-[30%] flex-col justify-center item-center bg-black'>
         <div className='flex w-full justify-between gap-16'>
          <div>
            <img className='w-10' src="src/assets/image.png" alt="" />
          </div>
         <div className='flex'>
          <h1 className='mt-1.5 font-[futura] text-white uppercase' >
            custom style generation
          </h1>
         </div>
         </div>
         <div className='text-white mt-[2rem] text-justify'>
         A custom style generator uses AI to create personalized designs based on user preferences and inputs. By analyzing factors like color schemes, typography, and layout styles, it generates tailored visuals that match individual tastes or brand guidelines. This tool simplifies design processes, allowing users to quickly prototype or create unique assets.
</div>



    </div>



  
   </div>
   </div>
  );
};

export default ServicesSection;
