    import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from '@tabler/icons-react'
    import React from 'react'
    import { Button, Divider, Text } from '@mantine/core'
    import { Link } from 'react-router-dom'
import CompanyLogo from '../CompanyLogo'
import Utilites from '../../Services/Utilites'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../../Slice/ProfileSlice'

    const Card =(props: any) => {
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
        <div className='bg-mine-shaft-950 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400'>
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
            <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:rounded-lg [&>div]:text-bright-sun-400 text-xs'>
                <div>{props.experience}</div>
                <div>{props.jobType}</div>
                <div>{props.location}</div>
            </div>
            <Text lineClamp={3} className='!text-xs !text-justify !text-mine-shaft-300'>
                {props.about}
            </Text>
            <Divider size='xs' color='mine-shaft.8' orientation="horizontal" />
            <div className='flex justify-between p-1'>
                <div className='font-semibold text-mineshaft-200'>&#8377; {props.packageOffered} LPA</div>
                <div className="text-xs flex gap-1 items-center text-mine-shaft-400">
                    <IconClockHour3 className="h-5 w-5" stroke={1.5} />
                    {props.applied || props.interviewing ? "Applied " : props.offered ? "Interviewed " : "Posted "}
                    {Utilites.timeAgo(props.postTime)}
                </div>
            </div>
            {(props.offered || props.interviewing) && (
                <Divider size="xs" color="mine-shaft.8" orientation="horizontal" />
            )}

            {
            props.offered &&  <div className='flex gap-2 justify-between'>
                    <Button color='bright-sun.4' variant='outline'>Accept</Button>
                    <Button color='bright-sun.4' variant='outline'> Reject </Button>
                </div>
            }
            {
                props.interviewing &&<div className='flex gap-1  text-sm items-center'>
                <IconCalendarMonth stroke={1.5} className="w-5 h-5 text-bright-sun-400" />
                Sunday, 27th August &bull; <span className='text-mine-shaft-400'>10:00 AM</span>
            </div>
            }
            <Link to={`/jobs/${props.id}`}>
                <Button  color='bright-sun.4' variant='outline' fullWidth>View Job</Button>
            </Link>
        </div>
        )
    }

    export default Card