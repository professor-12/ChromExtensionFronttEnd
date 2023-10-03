import React from "react";
import { Link } from 'react-router-dom'
import { useCloseandOpenMenu } from "../../store/context";
const Header = () => {

      const { state, dispatcher } = useCloseandOpenMenu()
    
      return (
            <nav className="shadow-b px-10 md:px-0 shadow w-full shadow-slate-300 font-[Work Sans] font-semibold text-lg text-slate-800 py-8 flex justify-between">

                  <div className="container mx-auto md:w-[80%] flex justify-between items-center">
                        <div className="space-x-6 flex font-bold text-xl  text-[#100A42] items-center">
                              <span className="h-10 mr-2 flex items-center">
                                    <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g clip-path="url(#clip0_502_2183)">
                                                <path d="M62.2807 33.6842C61.1612 29.8244 59.1246 26.2927 56.3447 23.3906C53.5647 20.4884 50.1238 18.3018 46.3158 17.0175C42.5535 15.9224 38.5991 15.6533 34.7232 16.2286C30.8473 16.804 27.1415 18.2101 23.8596 20.3508C23.5896 20.6215 23.2509 20.8134 22.88 20.9062C22.5091 20.9989 22.12 20.9889 21.7544 20.8772C21.0172 20.6384 20.3531 20.2157 19.8245 19.6491C19.4398 18.9549 19.3154 18.1462 19.4737 17.3684C19.5742 16.9951 19.7507 16.6465 19.9922 16.3447C20.2337 16.0428 20.535 15.794 20.8772 15.614C30.1754 10.1754 39.2982 8.7719 48.0701 11.5789C52.3888 13.0154 56.3315 15.3993 59.6099 18.5562C62.8882 21.7131 65.4192 25.5632 67.0175 29.8245H78.7719C76.3684 20.3438 70.5746 12.0722 62.4858 6.57366C54.3971 1.07513 44.5741 -1.26925 34.874 -0.0162374C25.1739 1.23678 16.2691 6.00035 9.84313 13.3738C3.41716 20.7473 -0.0845866 30.2197 -2.95414e-05 40C-2.95414e-05 41.5789 0.175409 42.9824 0.175409 44.5614H15.0877C15.6572 44.5291 16.2218 44.6827 16.6964 44.9991C17.1711 45.3155 17.53 45.7776 17.7193 46.3158C18.8651 50.1622 20.9109 53.6804 23.6873 56.5787C26.4636 59.4771 29.8905 61.6723 33.6842 62.9824C37.4464 64.0775 41.4009 64.3466 45.2767 63.7713C49.1526 63.196 52.8584 61.7898 56.1403 59.6491C56.4104 59.3785 56.749 59.1865 57.1199 59.0938C57.4908 59.0011 57.88 59.0111 58.2456 59.1228C58.9827 59.3616 59.6469 59.7842 60.1754 60.3508C60.5602 61.0451 60.6846 61.8538 60.5263 62.6315C60.4258 63.0049 60.2492 63.3534 60.0077 63.6553C59.7662 63.9572 59.4649 64.2059 59.1228 64.3859C53.8344 67.9443 47.6021 69.8384 41.228 69.8245C38.0777 69.8008 34.9468 69.3282 31.9298 68.421C27.5931 67.0189 23.6328 64.647 20.3498 61.4856C17.0667 58.3241 14.5472 54.4562 12.9824 50.1754H1.40348C3.93972 59.5002 9.76597 67.5917 17.8053 72.954C25.8446 78.3163 35.5534 80.587 45.137 79.3462C54.7206 78.1055 63.531 73.4373 69.9397 66.2044C76.3484 58.9716 79.922 49.6632 80 40C80.0326 38.5358 79.974 37.0709 79.8245 35.614H65.0877C64.4895 35.5745 63.9131 35.3744 63.4191 35.0347C62.9251 34.6951 62.5318 34.2285 62.2807 33.6842Z" fill="#100A42" />
                                                <path d="M40.1692 57.4989C43.623 57.4657 46.9897 56.4112 49.8454 54.4682C52.701 52.5252 54.9178 49.7806 56.2166 46.5801C57.5154 43.3796 57.838 39.8664 57.1439 36.4829C56.4498 33.0994 54.7699 29.9969 52.3159 27.5663C49.8619 25.1357 46.7436 23.4856 43.3536 22.8239C39.9636 22.1622 36.4536 22.5184 33.2657 23.8478C30.0778 25.1771 27.3545 27.4201 25.4389 30.2942C23.5233 33.1683 22.5011 36.545 22.5009 39.999C22.5008 42.3113 22.959 44.6008 23.8489 46.735C24.7389 48.8692 26.043 50.8059 27.6859 52.4332C29.3288 54.0604 31.2779 55.3459 33.4205 56.2154C35.5632 57.0849 37.8569 57.5212 40.1692 57.4989Z" fill="white" />
                                          </g>
                                          <defs>
                                                <clipPath id="clip0_502_2183">
                                                      <rect width="80" height="80" fill="white" />
                                                </clipPath>
                                          </defs>
                                    </svg>
                              </span>HelpMeOut</div>

                        <ul className="lg:flex hidden space-x-12 font-[Work Sans] font-[500]">
                              <li><a href="/#features">Features</a></li>
                              <li className="tracking-tighter"><a href="/#howitworks">How it Works</a></li>
                        </ul>
                        <Link className="hidden md:inline-block" to="/login">Get Started</Link>
                  </div>

                  <div className="md:hidden">
                        <div onClick={() => { state == "close" ? dispatcher("open") : dispatcher('close') }} className="flex flex-col space-y-[7px] z-[132332232] cursor-pointer">
                              <div className="h-[4px] z-auto rounded w-7 bg-blue-800"></div>
                              <div className="h-[4px] rounded w-9 bg-blue-800"></div>
                              <div className="h-[4px] rounded w-12 bg-blue-800"></div>
                        </div>
                        <div className={`${state == 'close' ? "hidden" : ""} fixed overflow-hidden z-[11]   right-0  top-0 bottom-0 w-64 space-y-12 p-8   bg-gray-400 bg-opacity-70"`}>
                              <div onClick={() => { state == "close" ? dispatcher("open") : dispatcher('close') }} className="flex absolute right-1 -space-y-1 flex-col  cursor-pointer">
                                    <div className="h-[4px] z-auto rotate-45 rounded w-8 bg-blue-800"></div>
                                    <div className="h-[4px] z-auto  -rotate-45 rounded w-8 bg-blue-800"></div>

                              </div>
                              <ul className="relative space-y-12 font-[Work Sans] font-[500]">
                                    <li onClick={() => { dispatcher('close') }} ><a href="/#features">Features</a></li>
                                    <li onClick={() => { dispatcher('close') }} className="tracking-tighter"><a href="/#howitworks">How it Works</a></li>
                              </ul>


                              <Link onClick={() => { dispatcher('close') }} className="mt-12" to="/login">Get Started</Link>

                              <a href="/">Home</a>
                        </div>

                  </div>
            </nav>
      );
};

export default Header;
