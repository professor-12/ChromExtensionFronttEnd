import { useState } from 'react'
import Header from './components/Header/page'
import './App.css'
import Footer from './components/Footer/page';
import { Route , Routes } from 'react-router-dom';
import LandingPage from './components/LandingPAge/page';
import Login from './pages/LoginPage/page';
import Home from './pages/Home/page';

function App() {
  return (
    <>
        <Header></Header>
      <div className='container md:w-[80%] font-[Work Sans] mx-auto'>
        
          <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          </Routes>
       
      </div>
        <Footer/>
    </>
  )
}

export default App
