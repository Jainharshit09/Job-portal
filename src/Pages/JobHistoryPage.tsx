import { Divider } from '@mantine/core'
import React from 'react'

import JobHistory from '../Components/JobHistory/JobHistory'

const JobHistoryPage = () => {
    return (
        <div className='min-h-[100vh] bg-mine-shaft-900 font-[poppins] px-4'>
             <Divider size="xs"   />
        <div className=' gap-5 mt-5'>
            <JobHistory/>
        </div>
    </div>
      )
}

export default JobHistoryPage