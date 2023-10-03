import React from 'react'
import '../../App.css'
const Home = () => {
      return (
            <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                        <div>
                              <h1 className='text-4xl font-bold'>Hello , John Mark</h1>
                              <p className='text-gray-400 font-normal'>Here are your recorded videos</p>
                        </div>
                        <div>Profile img</div>
                  </div>
                  <div className='border-t p-3 grid gap-4 md:grid-cols-2'>
                        <div className='border border-gray-300 h-[20rem] rounded-xl'></div>
                        <div className='border border-gray-300 h-[20rem] rounded-xl'></div>
                        <div className='border border-gray-300 h-[20rem] rounded-xl'></div>
                        <div className='border border-gray-300 h-[20rem] rounded-xl'></div>
                        <div className='border border-gray-300 h-[20rem] rounded-xl'></div>
                        <div className='border border-gray-300 h-[20rem] rounded-xl'></div>
                  </div>
            </div>
      )
}

export default Home