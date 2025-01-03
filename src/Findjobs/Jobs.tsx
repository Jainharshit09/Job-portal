import React from 'react'
import Sort from './Sort'
import JobCard from './JobCard'
import { jobList } from '../Data/JobsData'

const Jobs = () => {
  return (
    <div className='p-5'>
        <div className='flex justify-between'>
          <div className='text-2xl font-semibold'>  Recommended Jobs</div>
            <Sort />
        </div>
        
        <div className=' justify-center flex flex-wrap gap-5 pt-10'>
        {
          jobList.map((job,index) => (
            <JobCard key={index} {...job} />
          ))
        }
        </div>

    </div>
  )
}

export default Jobs