import { Divider } from '@mantine/core';
import React from 'react'
import PostedJobs from '../PostedJob/PostedJobs';
import PostedJobDesc from '../PostedJob/PostedJobDesc';

const PostedJob = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-900 font-[poppins] px-4'>
         <Divider size="xs"   />
    <div className='flex gap-5'>
        <PostedJobs/>
        <PostedJobDesc/>
    </div>
</div>
  )
}

export default PostedJob