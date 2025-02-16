import React from 'react'
import {IconMapPin } from '@tabler/icons-react'


const ExpCard= (props:any) => {
    return (
      <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
              <div className='flex gap-2  items-center'>
                  <div className='p-2 bg-mine-shaft-600 rounded-md'>
                      <img className='h-7' src={`/Icons/${props.company}.png`} alt={props.company} />
                  </div>
                  <div className='p-1'>
                      <div className='font-semibold text-lg '>{props.title}</div>
                      <div className='text-md text-mine-shaft-300 flex gap-1'>{props.company}<IconMapPin className='flex h-5 w-5'/> {props.location}</div>
                  </div>
              </div>
              <div className='text-sm text-min-shaft-300'>
               {props.startDate}-{props.endDate}
              </div>
          </div>
          <div className='text-justify text-sm text-mine-shaft-300'>
            {props.description}
          </div>
      </div>
    )
  }

export default ExpCard