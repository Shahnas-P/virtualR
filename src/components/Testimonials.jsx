import React from 'react'
import { testimonials } from '../constants';
function Testimonials() {
  return (
    <div>
      <div className="mt-10 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-20">
        What people are saying
        </h2>
        <div className="flex flex-wrap justify-center">
            {
                testimonials.map((item,index)=>(
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
                        <div className="rounded-md bg-neutral-900 p-6 border border-neutral-800 font-thin ">
                            <p>{item.text}</p>
                            <div className="flex  mt-8 item-center">
                            <img className='h-10 w-10 mr-6 rounded-full border-neutral-300 ' src={item.image} alt={item.user} />
                            <div>
                            <h6 >{item.user}</h6>
                            <span className='text-sm font-normal italic text-neutral-600'>{ item.company}</span>
                                </div>

                        </div>
                        </div>
                       
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
