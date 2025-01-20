import React from 'react'
import JobCard from '../Findjobs/JobCard'
import { jobList } from '../Data/JobsData'


const RecommendedJobs = () => {
  return (
    <div className='flex flex-col'>
    <div className='text-xl font-semibold  mb-5'>
        Recommended Jobs
    </div>
    <div  className='flex flex-col flex-wrap gap-5 justify-between'>
    {
        jobList.map((talent, index) => 
            index <  6 ? <JobCard key={index} {...talent} /> : null
        )
    }
    </div>
</div>
  )
}

export default RecommendedJobs