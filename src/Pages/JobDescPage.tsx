import React, { useEffect } from 'react'
import { IconArrowLeft } from '@tabler/icons-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mantine/core';
import JobDesc from '../Components/JobDesc/JobDesc';
import RecommendedJobs from '../Components/JobDesc/RecommendedJobs';
import jobService from '../Services/JobService';
const JobDescPage = () => {
  const {id}=useParams();
  const [job, setJob] = React.useState<any>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    jobService.getJobs(id).then((res) => {
      setJob(res);
    }).catch((err: any) => {
      console.log(err);
    });
  }, [id]);
  return (
    <div className='min-h-[100vh] bg-mine-shaft-900 font-[poppins] p-4' >
        <Link className='my-4 inline-block' to="/find-job">
            <Button leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light">
                Back
            </Button>
        </Link>
        <div className='flex gap-5 justify-around bs-mx:flex-wrap'>
          <JobDesc {...job}/>
          <RecommendedJobs/>
        </div>
</div>
)
}

export default JobDescPage