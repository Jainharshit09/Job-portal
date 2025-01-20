import { Button } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Applyjob from '../ApplyJob/Applyjob'

const ApplyJobPage = () => {
    return (
        <div className='min-h-[100vh] bg-mine-shaft-900 font-[poppins] p-4' >
            <Link className='my-4 inline-block' to="/jobs">
            <Button leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light">
                Back
            </Button>
        </Link>
        <Applyjob/>
    </div>
    )
}

export default ApplyJobPage