import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants'

function Footer() {
  return (
 <footer>
    <div className="mt-20  flex justify-evenly border-t py-10 border-neutral-700">
        <div className="grid grid-col-2 lg:grid-col-3 px-2">
            <h3 className='text-md font-semibold mb-4'>Resources</h3>
            <ul className="space-y-2">
                {resourcesLinks.map((link,index)=>( 
                    <li  key={index}>
                        <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                    </li>
                 ))}
            </ul>
            
        </div>

        <div className="grid grid-col-2 lg:grid-col-3 gap-4">
            <h3 className='text-md font-semibold mb-4'>Platform</h3>
            <ul className="space-y-2">
                {platformLinks.map((link,index)=>( 
                    <li  key={index}>
                        <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                    </li>
                 ))}
            </ul>
        </div>

        <div className="grid grid-col-2 lg:grid-col-3 gap-4">
            <h3 className='text-md font-semibold mb-4'>Community</h3>
            <ul className="space-y-2">
                {communityLinks.map((link,index)=>( 
                    <li  key={index}>
                        <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>
                    </li>
                 ))}
            </ul>
        </div>

    </div>
   
 </footer>
  )
}

export default Footer
