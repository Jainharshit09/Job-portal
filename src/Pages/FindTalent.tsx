import { Divider } from '@mantine/core'
import React from 'react'
import SearchBar from '../FindTalent/SearchBar'
import Talents from '../FindTalent/Talents'

const FindTalent = () => {
    return (
        <div className='min-h-[100vh] bg-mine-shaft-900 font-[popins]'>
            <Divider mx="md" size='xs' color='mine-shaft.6' orientation="horizontal" />
            <SearchBar />
             <Divider mx="md" size='xs' color='mine-shaft.6' orientation="horizontal" />
            <Talents />
    </div>
      )
}

export default FindTalent