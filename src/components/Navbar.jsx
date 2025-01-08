import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'
import { Link } from 'react-router-dom'
import { Menu , X } from 'lucide-react'
function Navbar() {
  const [mobileDrawerOpen , setMobileDrawerOpen] = useState(false)

  const toggleNavbar = ()=>{
    setMobileDrawerOpen(!mobileDrawerOpen)
  }
  return (
    <div>
      <div className="stick py-5 border border-b border-neutral-700 back-drop-blur">
        <div className="container max-w-auto px-4 relative text-sm">
            <div className="flex justify-evenly items-center ">
                <div className="flex items-center flex-shrink-0 ">
                    <img src={logo} className=' h-10 w-10' />
                    <span className='text-xl tracking-tighter'>VirtualR</span>
                </div>

                <ul className=' hidden lg:flex lg:flex-row space-x-12 '>
                  {navItems.map((item,index)=>(                  <li  key={index}>{item.label}</li>
))}
                </ul>

                <div className="hidden lg:flex space-x-12">
                  <a className='border px-3 py-2 rounded-md' href='#'>SignIn</a>
                  <a className=' bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md' href='#'>Create an account</a>
                </div>
                <div onClick={toggleNavbar}  className='lg:hidden md:flex flex-col justify-end '>
                  <button>
                  {mobileDrawerOpen ? <X/>: <Menu />}
                  </button>
                </div>
               
            </div>
            {mobileDrawerOpen && (
                  <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden
                  ">
                    <ul  >
                      {navItems.map((item,index)=>(
                        <li  className='py-4' key={index}>
                       <Link>{item.label}</Link>
                        </li>
                      ))}
                    
                     
                    </ul>
                    <div className="flex space-x-6">
                      <button className="py-2 px-3 border rounded-md">
                        SignIn
                      </button>
                      <button className="py-2 px-3  rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Create and account</button>
                    </div>
                  </div>
    
                )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
