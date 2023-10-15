import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/page'
import Footer from '../components/Footer/page'

const root = () => {
      return (
            <>
                  <Header/>
                  <div className='container mx-auto lg:w-[80%] px-6 '>
                        <Outlet />
                  </div>
                  <Footer />

            </>
      )
}

export default root