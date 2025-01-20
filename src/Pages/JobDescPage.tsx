import React from 'react'
import { IconArrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import JobDesc from '../JobDesc/JobDesc';
import RecommendedJobs from '../JobDesc/RecommendedJobs';
const JobDescPage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-900 font-[poppins] p-4' >
        <Link className='my-4 inline-block' to="/find-job">
            <Button leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light">
                Back
            </Button>
        </Link>
        <div className='flex gap-5 justify-around'>
          <JobDesc/>
          <RecommendedJobs/>
        </div>
</div>
)
}

export default JobDescPage