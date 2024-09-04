import React from 'react'

const AstroVideo = () => {
  return (
    <div className='w-full bg-black px-[4vw] pb-[2vw]'>
      <div className='w-full relative flex items-center'>
        <video className='w-full h-full object-cover' autoPlay loop muted>
          <source src='src/assets/videos/astro.mp4' />
        </video>
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1 className='font-[futura-bold] uppercase leading-[4rem] text-white text-[5vw] text-center'>
            Create more efficient <br />
            and accurately by <br />
            flux.1
          </h1>
        </div>
      </div>
      <div className='flex justify-start mt-[2rem]'>
        <button className='bg-white text-black py-[0.5vw] mr-5 text-xs px-4 rounded-full'>
          Magic prompt template
        </button>
    
        <button className='bg-white text-black py-[0.5vw] text-xs px-4 rounded-full'>
          Edit masterpiece
        </button>
      </div>
      <div className='mt-6 w-[50%] '>
  <p className='text-white opacity-50 text-justify'>
    Flux.1 is an advanced platform for AI-driven image generation, enabling users to create detailed visuals with precision and real-time control. Its powerful algorithms streamline the creative process, making image creation faster and more efficient across various industries.
  </p>
</div>

    </div>
  )
}

export default AstroVideo
