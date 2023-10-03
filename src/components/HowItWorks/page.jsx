import React from 'react'

const How = () => {
  return (
    <section id='howitworks' className='my-32'>
      <h1 className=' text-center font-bold text-4xl'>How it Works</h1>
      <div className='grid  p-10 md:p-0 md:grid-flow-dense md:grid-cols-2 lg:grid-cols-3 gap-28 mt-12'>
        <div className='min-h-20 flex items-center flex-col '>
          <div className='text-center flex justify-center items-center text-white font-semibold text-3xl w-12 h-12  bg-[#120B48]  rounded-full'>1</div>
          <div className='text-xl text-[#1B233D] mt-3 font-bold'>Record Screen</div>
          <p className='text-center mt-5 font-medium text-gray-700/70'>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
          <img src="/Rec.png" className='mt-6' alt="" />
        </div>
        <div className='min-h-20 flex flex-shrink-0 items-center flex-col '>
          <div className='text-center flex justify-center items-center text-white font-semibold text-3xl w-12 h-12  bg-[#120B48]  rounded-full'>2</div>
          <div className='text-xl text-[#1B233D] mt-3 font-bold'>Share Your Recording</div>
          <p className='text-center mt-5 font-medium text-gray-700/70'>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
          <img src="/Rec.png" className='mt-6' alt="" />
        </div>
        <div className='min-h-20 flex flex-shrink-0 items-center flex-col '>
          <div className='text-center flex justify-center items-center text-white font-semibold text-3xl w-12 h-12  bg-[#120B48]  rounded-full'>3</div>
          <div className='text-xl text-[#1B233D] mt-3 font-bold'>Learn Effortlessly</div>
          <p className='text-center mt-5 font-medium text-gray-700/70'>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
          <img src="/Rec.png" className='mt-6' alt="" />
        </div>
         
     
    
        </div>
    </section>
  )
}

export default How