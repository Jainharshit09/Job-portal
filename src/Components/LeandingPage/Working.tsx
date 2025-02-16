import React from 'react'
import { work } from '../../Data/Data'
import { Avatar } from '@mantine/core'
const Working = () => {
  return (
    <div className='mt-10 pb-5'>
      <div className='text-4xl mb-3 font-semibold text-mine-shaft-100 text-center [&>span]:text-bright-sun-400'>
        How it <span>Works</span>
      </div>
      <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-[40%]">
      Effortlessly navigate through the process and land your dream job
      </div>
      <div className='flex  px-16 justify-between items-center'>
        <div className='relative'>
            <img src="/Working/Girl.png" alt="girl" className='w-[30rem] '/>
            <div className='w-36 right-7 top-[18%] absolute flex flex-col items-center gap-1 border border-bright-sun-400 rounded-xl  py-3 px-1 backdrop-blur-md '>   
                <Avatar className='!h-16 !w-16' src="avatar2.png" alt="it's me" />
                <div className='text-xs font-semibold text-mine-shaft-100 text-center'>Complete your Profile</div>
                <div className='text-xs  text-mine-shaft-200 '>70% Completed</div>
            </div>
        </div>
        <div className='flex flex-col gap-10'>
            {
                work.map((item, index) =>            
                <div key={index} className='flex items-center gap-4'>
                <div className='p-2 bg-bright-sun-300 rounded-full'>
                <img src={`/Working/${item.name}.png`} alt={item.name} className='w-12 h-12'/>
                </div>
                <div>
                    <div className='text-mine-shaft-200 text-semibold text-xl'>{item.name}</div>
                    <div className='text-mine-shaft-300'>{item.desc}</div>
                </div>
            </div> )
            }
        </div>
      </div>
    </div>
  )
}

export default Working