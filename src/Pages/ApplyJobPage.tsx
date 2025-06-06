import { Button } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Applyjob from '../Components/ApplyJob/Applyjob'
import jobService from '../Services/JobService'

const ApplyJobPage = () => {
    const navigate = useNavigate();
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
            <Link className='my-4 inline-block' to="/jobs">
            <Button onClick={()=>navigate(-1)} leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light" mb="xs">
                Back
            </Button>
        </Link>
        <Applyjob {...job}/>
    </div>
    )
}

export default ApplyJobPage