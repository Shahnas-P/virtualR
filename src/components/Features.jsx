import React from 'react'
import { features } from '../constants'
function Features() {
  return (
    <div>
<div className="relative mt-20 border-b border-neutral-800 min-h-[800px] text-center">
<span className='bg-neutral-700 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
    feature
</span>
<h2 className="text-3xl sm:text-5xl lg:6xl  mt-10">
Easily build  <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text lg:mt-20 tracking-wide'>your code</span> 
</h2>
<div className="flex flex-wrap mt-10 lg:mt-20 ">
{features.map((feature,index)=>(
    <div className=" w-full  sm:w-1/2 lg:w-1/3">
  <div className="flex ">
    <div className="flex  mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 rounded-full items-center justify-center  ">
    {feature.icon}
    </div>

<div  >
<h5 className="mt-1 mb-6 text-xl text-start">
        {feature.text}
    </h5>
    <p className="text-md p-2 text-start mb-20 text-neutral-500">
        {feature.description}
    </p>
</div>

   
    
  </div>
    </div>
))}
</div>
</div>
    </div>
  )
}

export default Features
