import { Tabs } from '@mantine/core'
import React from 'react'
import { activeJobs } from '../Data/PostedJob'
import PostedJobCard from './PostedJobCard'

const PostedJobs = () => {
  return (
    <div className='w-1/6 mt-4'>
        <div className='text-2xl font-semibold mb-5 mt-5 '>Jobs</div>
        <div>
          <Tabs autoContrast variant='pills' defaultValue="active">
            <Tabs.List className='[&_button[aria-selected="false"]] font-medium'>
              <Tabs.Tab value="active">Active [4]</Tabs.Tab>
              <Tabs.Tab value="drafts">Drafts [1]</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="active">
              <div className='flex flex-col p-3 mt-3 gap-5'>
              {
                activeJobs.map((item,index)=><PostedJobCard key={index}{...item}/>)
              }
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="drafts">Drafts</Tabs.Panel>
          </Tabs>
        </div>
    </div>
  )
}

export default PostedJobs