import React, { useEffect, useState } from 'react'
import JobCard from '../Findjobs/JobCard'

import { useParams } from 'react-router-dom'
import jobService from '../../Services/JobService'


const RecommendedJobs = () => {
  const {id}=useParams()
  const [jobList, setJobList] = useState<any>(null);
  useEffect(() => {
      jobService.getAllJobs().then((res) => {
          setJobList(res);
      }).catch((err) => {
          console.log(err);
      }); 
  }, []); 
  return (
    <div className='flex flex-col '>
    <div className='text-xl font-semibold  mb-5 '>
        Recommended Jobs
    </div>
    <div  className='flex bs:flex-col bs-mx:justify-start bs-mx:m-2 sm-mx:justify-between flex-wrap  gap-5 justify-between'>
    {
        jobList?.map((talent:any, index:number) => 
            index <  4 && id!==talent.id && <JobCard key={index} {...talent} />
        )
    }
    </div> 
</div>
  )
}

export default RecommendedJobs