import React from 'react'
import { work } from '../../Data/Data'
import { Avatar } from '@mantine/core'

const Working = () => {
  return (
    <div className='mt-10 pb-5'>
      <div className='text-2xl sm:text-3xl md:text-4xl mb-3 font-semibold text-mine-shaft-100 text-center [&>span]:text-bright-sun-400'>
        How it <span>Works</span>
      </div>
      <div className="text-base sm:text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%]">
        Effortlessly navigate through the process and land your dream job
      </div>
      <div className='flex flex-col lg:flex-row px-2 sm:px-6 md:px-10 lg:px-16 justify-between items-center gap-10'>
        <div className='relative mb-8 lg:mb-0 flex-shrink-0 flex justify-center w-full lg:w-auto'>
          <img src="/Working/Girl.png" alt="girl" className='w-60 sm:w-80 md:w-[22rem] lg:w-[30rem] mx-auto' />
          <div className='w-32 sm:w-36 right-2 sm:right-7 top-[18%] absolute flex flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-2 sm:py-3 px-1 backdrop-blur-md'>
            <Avatar className='!h-12 !w-12 sm:!h-16 sm:!w-16' src="avatar2.png" alt="it's me" />
            <div className='text-xs font-semibold text-mine-shaft-100 text-center'>Complete your Profile</div>
            <div className='text-xs text-mine-shaft-200'>70% Completed</div>
          </div>
        </div>
        <div className='flex flex-col gap-6 sm:gap-8 md:gap-10 w-full lg:w-auto'>
          {
            work.map((item, index) =>
              <div key={index} className='flex items-center gap-3 sm:gap-4'>
                <div className='p-2 bg-bright-sun-300 rounded-full'>
                  <img src={`/Working/${item.name}.png`} alt={item.name} className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' />
                </div>
                <div>
                  <div className='text-mine-shaft-200 font-semibold text-base sm:text-lg md:text-xl'>{item.name}</div>
                  <div className='text-mine-shaft-300 text-sm sm:text-base'>{item.desc}</div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Working