import React from 'react'
import code from '../assets/code.jpg'
import { checklistItems } from '../constants';
import { CircleCheck } from 'lucide-react';
function Workflow() {
  return (
    <div>
    <div className="mt-20">
        <h2 className="text-3xl text-center tracking-wide sm:text-5xl lg-text-6xl mt-6">
        Accelerate Your <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
        Coding flow
            </span>
        </h2>
        <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
        <div className="p-2 w-full lg:w-1/2">
        <img src={code}/>
        </div>
        <div className="pt-12  w-full lg:w-1/2">
        {
            checklistItems.map((item,index)=>(
                <div className="flex mb-12">
                    <div className="text-green-500 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                    <CircleCheck />
                    </div>
                    <div >
                       <h5 className="mt-1 mb-2 text-xl">
                        {item.title}
                        </h5> 
                        <p className="text-md text-neutral-500">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))
            
        }
        </div>
        </div>
    </div>
    </div>
  )
}

export default Workflow;
