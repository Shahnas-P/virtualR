import React from "react";
import { pricingOptions } from "../constants";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
function Pricing() {
  return (
    <div>
      <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wider my-8">
          Pricing
        </h2>
        <div className="flex flex-wrap mx-3">
          {pricingOptions.map((item, index) => (
            <div key={index} className=" w-full sm:w-1/2 lg:w-1/3">
              <div className="p-10 border border-neutral-700 rounded-xl mx-2 my-3">
                <p className="text-4xl mb-8">
                  {item.title}
                  {item.title === "Pro" && (
                    <span className="text-xl bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text mb-4 ml-2">
                      (Most Popular)
                    </span>
                  )}
                </p>

                <p className="mb-8">
                    <span className="text-5xl mt-6 mr-2">{item.price}</span>
                    <span className="text-neutral-400 tracking-tight">/Month</span>
                </p>

                <ul>
                    {item.features.map((feature,index)=>(
                        <li key={index} className="mt-8 text-base flex item-center"><Check/> <span className=" ml-2">{feature} </span> </li>

                    ))
                    }
                </ul>
                <Link className=" inline-flex w-full border justify-center items-center mt-20 h-12 p-5 rounded-lg border-orange-900 hover:bg-orange-900 transition duration-200  ">
                Subscribe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
