import React from 'react'
import SearchBar from '../Findjobs/SearchBar'
import { Divider } from '@mantine/core'
import Jobs from '../Findjobs/Jobs'


const FindJobs = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-900 font-[popins]'>
        <Divider mx="md" size='xs' color='mine-shaft.6' orientation="horizontal" />
        <SearchBar />
        <Divider mx="md" size='xs' color='mine-shaft.6' orientation="horizontal" />
        <Jobs />
</div>
  )
}

export default FindJobs