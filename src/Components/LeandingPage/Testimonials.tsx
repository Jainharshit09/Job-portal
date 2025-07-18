import React from "react"
import { testimonials } from "../../Data/Data"
import { Avatar, Rating } from "@mantine/core"

const Testimonials = () => {
    return (
      <div className='mt-10 pb-5 bg-mine-shaft-900 px-2 sm:px-0'>
        <div className='text-2xl sm:text-3xl md:text-4xl mb-5 font-semibold text-mine-shaft-100 text-center [&>span]:text-bright-sun-400'>
          What <span>User</span> says about us?
        </div>
        <div className="flex flex-wrap justify-center gap-5">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className='flex flex-col gap-3 w-full sm:w-[48%] md:w-[30%] lg:w-[23%] border border-bright-sun-400 p-3 sm:p-4 md:p-5 mt-10 rounded-xl'
          >
            <div className='flex gap-5 items-center'>
              <Avatar className='!h-14 !w-14' src="avatar.png" alt={item.name} />
              <div>
                <div className='text-base sm:text-lg text-mine-shaft-100 font-semibold'>{item.name}</div>
                <div>
                  <Rating value={item.rating} fractions={2} readOnly />
                </div>
              </div>
            </div>
            <div className='text-xs sm:text-sm text-mine-shaft-300'>{item.testimonial}</div>
          </div>
        ))}
        </div>
      </div>
    )
  }
  
  export default Testimonials