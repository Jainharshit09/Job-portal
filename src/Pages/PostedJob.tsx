import { Divider } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import PostedJobs from '../Components/PostedJob/PostedJobs';
import PostedJobDesc from '../Components/PostedJob/PostedJobDesc';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jobService from '../Services/JobService';

const PostedJob = () => {
  const {id}=useParams();  
  const user=useSelector((state:any)=>state.user);
  const[jobList,setJobList]=useState<any[]>([]);
  const [job,setJob]=useState<any>({});
  const navigate=useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    jobService.getJobPostedBy(user.id).then((res) => { 
      const foundJob = res.find((item: any) => String(item.id) === String(id));
      setJobList(res);
      if(res.length>0 && Number(id)===0){
        navigate(`/posted-job/${res[0].id}`);
      }
      setJob(foundJob || {});
    }).catch((err) => {
      console.log('Error fetching jobs:', err);
    });
  }, [user, id,navigate]); 
  
  
  return (
    <div className='min-h-[100vh] bg-mine-shaft-900 font-[poppins] px-4'>
         <Divider size="xs"   />
    <div className='flex gap-5'>
        <PostedJobs job={job} jobList={jobList}/>
        <PostedJobDesc {...job}/>
    </div>
</div>
  )
}

export default PostedJob