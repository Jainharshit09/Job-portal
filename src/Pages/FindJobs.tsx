import React from 'react'
import SearchBar from '../Components/Findjobs/SearchBar'
import { Divider } from '@mantine/core'
import Jobs from '../Components/Findjobs/Jobs'


const FindJobs = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-900 font-[poppins]'>
        <SearchBar />
        <Divider mx="md" size='xs' color='mine-shaft.7' orientation="horizontal" />
        <Jobs />
</div>
  )
}

export default FindJobs