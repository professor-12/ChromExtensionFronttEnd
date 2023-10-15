import React, { useEffect, useState } from 'react'
import { json, useLoaderData } from 'react-router-dom'
import '../../App.css'
const Home = () => {
      const { video } = useLoaderData()
      console.log(video)
      const [videoData, setvideoData] = useState([])
      useEffect(() => {
            setvideoData(video)

      }, [video])
      return (
            <div className='space-y-4 '>
                  <div className='flex justify-between items-center'>
                        <div>
                              <h1 className='text-4xl font-bold'>Hello , John Mark</h1>
                              <p className='text-gray-400 font-normal'>Here are your recorded videos</p>
                        </div>
                        <div>Profile img</div>
                  </div>
                        {videoData && 
                  <div className='grid sm:grid-cols-2  gap-4 md:grid-cols-3 lg:grid-cols-4'>
                              {videoData.map((items) =>
                              (<div className='border  flex  flex-col  h-[20rem] rounded-xl'>
                                    <video src={`http://127.0.0.1:8000/${items.video}`} controls className='w-full h-[70%] bg-black rounded-t-xl' about='Video' loop></video>

                                    <div className='bg-gradient-to-r  from-purple-700   mx-2 justify-end items-end p-2 my-auto rounded-full text-white from-35% via-orange-00 to-50% border-t-indigo-400 text-center to-red-300 cursor-copy'>
                                          <button>Download</button>
                                    </div>

                              </div>))
                                    
                              }
                       
                  </div>
                        } 
                        {
                              !videoData && <div className='space-y-4 h-[75.89vh] w-full bg-gradient-to-r  from-purple-500/70 py-12 pl-12 via-orange-200 to-transpaent'>
                              <h1 className='font-medium text-4xl w-full  text-gray-700'>No Video Found..</h1>
                              <p className='text-gray-600'>Click on the Button to download the extension if you haven't and enjoy.</p>
                              <button className='bg-gradient-to-r from-pink-500 to-red-700  mt-8  py-3 px-5 text-[16px] rounded-[8px] text-white font-semibold'><a download href="https://drive.google.com/drive/folders/1cXr27GFvpjTIxPjyt-1ODXFcl5vCY0QC" target="_blank" className='py-3 px-5'>Install HelpMeOut</a></button>
                        </div>
                        
                        }
            </div>
      )
}

export default Home


export const loader = async () => {
      const response = await fetch("http://127.0.0.1:8000/")
      if (!response.ok) {
            throw json({ message: "Error" }, { status: 400})
      }
      return response
}



