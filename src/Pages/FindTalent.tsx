import { Divider } from '@mantine/core'
import React from 'react'
import SearchBar from '../Components/FindTalent/SearchBar'
import Talents from '../Components/FindTalent/Talents'

const FindTalent = () => {
    return (
        <div className='min-h-[100vh] bg-mine-shaft-900 font-[poppins]'>
            <SearchBar />
             <Divider mx="md" size='xs' color='mine-shaft.7' orientation="horizontal" />
            <Talents />
    </div>
      )
}

export default FindTalent