import React, { useEffect }  from 'react'
import { useRouteError } from 'react-router-dom'
import Header from '../Header/page'
import { useState } from 'react'
const ErrorElement = () => {
      const Error = useRouteError()
      const [data, setdata] = useState({ title: '', message: "" })

      useEffect(() => {
            switch (Error.status) {
                  case 400:
                        setdata({ title: "Unexpected error", message: "Please check your connection and try again." })
                        break;
                        default:
                        setdata({
                              title: "Page not Found", message: "404 Not Found! The requested URL was not found on this server." })
                              break;
            }

      },[data,Error])
      return (
            <>
                  <Header />
                  <div className='container lg:w-[80%] mx-auto  bg-gray-200/50 p-8 h-[100vh]'>
                        <div className='bg-white space-y-12 rounded-lg p-6'>
                              <h1 className='font-bold text-4xl text-slate-700 text-center'>{data.title}</h1>
                              <p className='text-gray-500 text-lg text-center'>{data.message}</p>
                        </div>

                  </div>

            </>
      )
}

export default ErrorElement