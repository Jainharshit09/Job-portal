import React from 'react'
import { jobList } from '../../Data/JobsData'
import JobCard from '../Findjobs/JobCard'

const CompanyJob = () => {
  return (
    <div>
                
                <div className='flex flex-wrap gap-5 pt-10'>
        {
          jobList.map((job,index) => (
            <JobCard key={index} {...job} />
          ))
        }
        </div>
    </div>
  )
}

export default CompanyJob