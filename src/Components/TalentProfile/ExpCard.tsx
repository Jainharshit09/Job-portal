import React from 'react'
import {IconMapPin } from '@tabler/icons-react'
import Utilites from '../../Services/Utilites'
import CompanyLogo from '../CompanyLogo'


const ExpCard= (props:any) => {
    return (
      <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
              <div className='flex gap-2  items-center'>
                  <div className='p-2 bg-mine-shaft-600 rounded-md'>
                  <CompanyLogo company={props.company} />
                  </div>
                  <div className='p-1'>
                      <div className='font-semibold text-lg '>{props.title}</div>
                      <div className='text-md text-mine-shaft-300 flex gap-1'>{props.company}<IconMapPin className='flex h-5 w-5'/> {props.location}</div>
                  </div>
              </div>
              <div className='text-sm text-min-shaft-300'>
              {Utilites.formatDate((props.startDate))} -{" "}
              {props.endDate ? Utilites.formatDate((props.endDate)) : "Present"}
              </div>
          </div>
          <div className='text-justify text-sm text-mine-shaft-300'>
            {props.description}
          </div>
      </div>
    )
  }

export default ExpCard