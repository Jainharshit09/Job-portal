import { IconBookmark, IconBookmarkFilled, IconClockHour3 } from '@tabler/icons-react'
import React from 'react'
import { Button, Divider, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import Utilites from '../../Services/Utilites'
import CompanyLogo from './CompanyLogo'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../../Slice/ProfileSlice'

const JobCard = (props: any) => {
    const dispatch=useDispatch();
    const profile=useSelector((state: any) => state.profile);
    const handleSaveJob = () => {
        let savedJobs = Array.isArray(profile.savedJobs) ? [...profile.savedJobs] : [];
        
        if (savedJobs.includes(props.id)) {
            savedJobs = savedJobs.filter((id) => id !== props.id);
        } else {
            savedJobs.push(props.id);
        }

        const updateProfile = { ...profile, savedJobs };
        dispatch(changeProfile(updateProfile));
    };
  return (
    <div  className='bg-mine-shaft-950 min-h-[3.2rem]  p-4 w-72 sm-mx:w-full flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400'>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                <div className='p-2 bg-mine-shaft-900 rounded-md'>
                    <CompanyLogo company={props.company} />
                </div>
                <div className='p-1'>
                    <div className='font-semibold'>{props.jobTitle}</div>
                    <div className='text-xs text-mine-shaft-300'>{props.company} &bull; {props.applicants?props.applicants.length:0} Applicants</div>
                </div>
            </div>
            {profile.savedJobs?.includes(props.id)?
            <IconBookmarkFilled className='hover:cursor-pointer text-bright-sun-400 ' onClick={handleSaveJob} />
            :<IconBookmark className='text-mine-shaft-300 hover:cursor-pointer hover:text-bright-sun-400'onClick={handleSaveJob}  />}
        </div>
        <div className='flex sm-mx:flex-wrap  gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:rounded-lg [&>div]:text-bright-sun-400 text-xs'>
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        <Text lineClamp={3} className=' min-h-[3.1rem] !mt-3 !text-xs !text-justify !text-mine-shaft-300'>
            {props.about}
        </Text>
        <Divider size='xs' mt="md" color='mine-shaft.7' orientation="horizontal" />
        <div className='flex justify-between p-1'>
            <div className='font-semibold text-mineshaft-200'>&#8377; {props.packageOffered} LPA</div>
            <div className='flex gap-1 text-xs items-center text-mine-shaft-400'>
                <IconClockHour3 className='h-5 w-5' />Posted {Utilites.timeAgo(props.postTime)}
            </div>
        </div>
        <Link to={`/jobs/${props.id}`}>
            <Button  color='bright-sun.4' variant='outline' fullWidth>View Job</Button>
        </Link>
    </div>
  )
}

export default JobCard
