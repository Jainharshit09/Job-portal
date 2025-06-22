import React from 'react'
import { IconMapPin } from '@tabler/icons-react'
import Utilites from '../../Services/Utilites'
import CompanyLogo from '../CompanyLogo'


const ExpCard= (props:any) => {
    return (
      <div className='flex flex-col gap-2'>
          <div className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0'>
              <div className='flex gap-2  items-center'>
                  <div className='p-2 bg-mine-shaft-600 rounded-md flex-shrink-0'>
                  <CompanyLogo company={props.company} />
                  </div>
                  <div className='p-1'>
                      <div className='font-semibold text-base sm:text-lg '>{props.title}</div>
                      <div className='text-sm sm:text-md text-mine-shaft-300 flex gap-1 flex-wrap items-center'>
                          {props.company}
                          <IconMapPin className='h-5 w-5' />
                          {props.location}
                      </div>
                  </div>
              </div>
              <div className='text-xs sm:text-sm text-mine-shaft-300 mt-1 sm:mt-0 text-right min-w-max'>
              {Utilites.formatDate((props.startDate))} -{" "}
              {props.endDate ? Utilites.formatDate((props.endDate)) : "Present"}
              </div>
          </div>
          <div className='text-justify text-xs sm:text-sm text-mine-shaft-300'>
            {props.description}
          </div>
      </div>
    )
  }

export default ExpCard