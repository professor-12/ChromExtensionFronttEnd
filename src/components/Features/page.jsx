import React from 'react'

const Features = () => {
      return (
            <section id="features">
                  <div className='text-center space-y-4'><h1 className='text-4xl font-bold'>Features</h1><p className='text-gray-700  font-sans font-medium'>Key Highlights of Our Extension</p></div>
                  <div className='mt-[64px] flex px-10 lg:p-0 xl:flex-row space-y-9 lg:space-y-0 flex-col lg:justify-between'>
                        <div className='flex flex-col space-y-8'>
                              <div className='flex space-x-3'>

                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect width="48" height="48" rx="24" fill="#413C6D" />
                                          <path d="M29.5202 11.9467L17.4802 15.9467C9.38682 18.6534 9.38682 23.0667 17.4802 25.7601L21.0535 26.9467L22.2402 30.5201C24.9335 38.6134 29.3602 38.6134 32.0535 30.5201L36.0668 18.4934C37.8535 13.0934 34.9202 10.1467 29.5202 11.9467ZM29.9468 19.1201L24.8802 24.2134C24.6802 24.4134 24.4268 24.5067 24.1735 24.5067C23.9202 24.5067 23.6668 24.4134 23.4668 24.2134C23.0802 23.8267 23.0802 23.1867 23.4668 22.8001L28.5335 17.7067C28.9202 17.3201 29.5602 17.3201 29.9468 17.7067C30.3335 18.0934 30.3335 18.7334 29.9468 19.1201Z" fill="white" />
                                    </svg>
                                    <div className='space-y-3'>
                                          <h1 className='text-[#1B233D] font-bold text-xl'>Simple Screen Recording</h1>
                                          <p className='text-[#616163] font-semibold w-[60%]'>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                                    </div>
                              </div>
                              <div className='flex space-x-3'>

                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect width="48" height="48" rx="24" fill="#413C6D" />
                                          <path d="M23.9603 10.6667C16.6003 10.6667 10.627 16.6401 10.627 24.0001C10.627 31.3601 16.6003 37.3334 23.9603 37.3334C31.3203 37.3334 37.2936 31.3601 37.2936 24.0001C37.2936 16.6401 31.3336 10.6667 23.9603 10.6667ZM24.0003 29.6401C20.8803 29.6401 18.3603 27.1201 18.3603 24.0001C18.3603 20.8801 20.8803 18.3601 24.0003 18.3601C27.1203 18.3601 29.6403 20.8801 29.6403 24.0001C29.6403 27.1201 27.1203 29.6401 24.0003 29.6401Z" fill="white" />
                                    </svg>

                                    <div className='space-y-3'>
                                          <h1 className='text-[#1B233D] font-bold text-xl'>Easy-to-Share URL</h1>
                                          <p className='text-[#616163] font-semibold w-[60%]'>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                                    </div>
                              </div>
                              <div className='flex space-x-3'>

                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect width="48" height="48" rx="24" fill="#413C6D" />
                                          <path d="M29.587 10.6667H18.4137C13.5603 10.6667 10.667 13.5601 10.667 18.4134V29.5734C10.667 34.4401 13.5603 37.3334 18.4137 37.3334H29.5737C34.427 37.3334 37.3203 34.4401 37.3203 29.5867V18.4134C37.3337 13.5601 34.4403 10.6667 29.587 10.6667ZM15.0003 23.8534C15.0403 21.5067 15.9737 19.2934 17.627 17.6401C19.3337 15.9334 21.6003 15.0001 24.0003 15.0001C26.4003 15.0001 28.667 15.9334 30.3603 17.6401C30.4003 17.6801 30.4403 17.7334 30.4803 17.7867V16.6401C30.4803 16.0934 30.9337 15.6401 31.4803 15.6401C32.027 15.6401 32.4803 16.0934 32.4803 16.6401V20.1734C32.4803 20.7201 32.027 21.1734 31.4803 21.1734H27.947C27.4003 21.1734 26.947 20.7201 26.947 20.1734C26.947 19.6267 27.4003 19.1734 27.947 19.1734H29.0537C29.0137 19.1334 28.987 19.0934 28.947 19.0534C27.627 17.7334 25.867 17.0001 24.0003 17.0001C22.1337 17.0001 20.3737 17.7334 19.0537 19.0534C17.7603 20.3467 17.0403 22.0667 17.0137 23.8934C17.0003 24.4267 16.547 24.8667 16.0003 24.8667H15.987C15.4403 24.8667 15.0003 24.4001 15.0003 23.8534ZM30.3603 30.3601C28.667 32.0534 26.4003 33.0001 24.0003 33.0001C21.6003 33.0001 19.3337 32.0667 17.6403 30.3601C17.6003 30.3201 17.5603 30.2667 17.5203 30.2134V31.3467C17.5203 31.8934 17.067 32.3467 16.5203 32.3467C15.9737 32.3467 15.5203 31.8934 15.5203 31.3467V27.8134C15.5203 27.2667 15.9737 26.8134 16.5203 26.8134H20.0537C20.6003 26.8134 21.0537 27.2667 21.0537 27.8134C21.0537 28.3601 20.6003 28.8134 20.0537 28.8134H18.947C18.987 28.8534 19.0137 28.8934 19.0537 28.9334C20.3737 30.2534 22.1337 30.9867 24.0003 30.9867C25.867 30.9867 27.627 30.2534 28.947 28.9334C30.2537 27.6267 30.987 25.8801 30.987 24.0134C30.987 23.4667 31.4403 23.0134 31.987 23.0134C32.5337 23.0134 32.987 23.4667 32.987 24.0134C32.987 26.4267 32.0537 28.6801 30.3603 30.3601Z" fill="white" />
                                    </svg>

                                    <div className='space-y-3'>
                                          <h1 className='text-[#1B233D] font-bold text-xl'>Revisit Recordings</h1>
                                          <p className='text-[#616163] font-semibold w-[60%]'>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                                    </div>
                              </div>
                        </div>
                        <img src="/Video.png" alt="" />
                  </div>
            </section>
      )
}

export default Features