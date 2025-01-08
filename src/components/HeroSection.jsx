import React from 'react'
import { Link } from 'react-router-dom'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
function HeroSection() {
  return (
    <div>
   <div className="flex flex-col item-center mt-5 lg:mt-7">
    <h1 className="text-3xl sm:text-6xl lg:text-7xl text-center tracking-wide">
    VirtualR build tools <span className='bg-gradient-to-r text-transparent bg-clip-text from-orange-500 to-orange-800'>for developers</span> 
    </h1>
    <div className=' lg:flex lg:justify-center'>
    <p className="mt-5  text-lg text-center text-neutral-500 max-w-4xl ">
    Empower your craetivity and bring your VR app ideas to life with our initiative development tools.Get started today and turn your imagination into impressive reality
    </p>
    </div>
    <div className=" flex justify-center my-10">
        <Link className='py-3 px-2 bg-gradient-to-r from bg-orange-500 to-orange-800 mx-3 rounded-md' >Start for Free</Link>
        <Link className="py-3 border px-2 mx-3 rounded-md">Documentation</Link>
    </div>
    <div className="mt-10 flex justify-center">
        <video autoPlay muted loop  className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 ">
        <source 
        src={video1} type='video/mp4'
         />
        </video>
        <video autoPlay muted loop  className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 ">
        <source 
        src={video2} type='video/mp4'
         />
        </video>
    </div>
   
   
   </div>
    </div>
  )
}

export default HeroSection
