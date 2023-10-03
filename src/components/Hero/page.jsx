import React from 'react'

const Hero = () => {
      return (
            <section className='flex px-4 lg:px-0 flex-col lg:space-y-0 lg:flex-row  space-y-24 relative my-28 justify-between items-center'>
                  
                  <div className=''>
                        <h1 className='text-4xl md:text-5xl font-[Sora] font-bold text-slate-900'>Show Them <span className='block'>Don’t Just Tell</span></h1>
                        <p className='font-medium  md:w-[60%] mt-4 text-slate-600/90'>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                        <button className='bg-[#120B48] mt-8  py-3 px-5 text-[16px] rounded-[8px] text-white font-semibold'><a href="chrome://extensions/?id=bagknogjjgehngopbkdnfmpgeebjimdo" className='py-3 px-5'>Install HelpMeOut</a></button>
                  </div>
                  <div className=''>
                        <div className="grid relative grid-cols-2 gap-3">
                              <img className='rounded-lg h-[13rem]' src="/.png" alt="" />
                              <img className='rounded-lg   z-100  row-span-2' src="/img1.png" alt="" />
                              <img className='rounded-lg min-h-[12rem] bg-black' src="/image2.png" alt="" />
                              <img src="/grid.png" className='absolute hidden md:flex -z-20 -top-12 -right-10 h-[14rem]' alt="" />
                        </div>
                  </div>
            </section>
      )
}

export default Hero