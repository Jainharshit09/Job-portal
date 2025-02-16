    import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from '@tabler/icons-react'
    import React from 'react'
    import { Button, Divider, Text } from '@mantine/core'
    import { Link } from 'react-router-dom'

    const Card =({ jobTitle, company,saved,applicants,offered,interviewing, experience, jobType, location, package: salary, postedDaysAgo, description,applied }: any) => {
        return (
        <Link to='/jobs' className='bg-mine-shaft-950 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400'>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='p-2 bg-mine-shaft-900 rounded-md'>
                        <img className='h-7' src={`/Icons/${company}.png`} alt={company} />
                    </div>
                    <div className='p-1'>
                        <div className='font-semibold'>{jobTitle}</div>
                        <div className='text-xs text-mine-shaft-300'>{company} &bull; {applicants} Applicants</div>
                    </div>
                </div>
                {saved?<IconBookmarkFilled  className='text-bright-sun-400 hover:cursor-pointer'/>:<IconBookmark  className='text-mine-shaft-300 hover:cursor-pointer'/>}
            </div>
            <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:rounded-lg [&>div]:text-bright-sun-400 text-xs'>
                <div>{experience}</div>
                <div>{jobType}</div>
                <div>{location}</div>
            </div>
            <Text lineClamp={3} className='!text-xs !text-justify !text-mine-shaft-300'>
                {description}
            </Text>
            <Divider size='xs' color='mine-shaft.8' orientation="horizontal" />
            <div className='flex justify-between p-1'>
                <div className='font-semibold text-mineshaft-200'>&#8377; {salary}</div>
                <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
                    <IconClockHour3 className="h-5 w-5" />
                    {applied
                        ? `Applied ${postedDaysAgo} days ago`
                        : offered
                        ? `Offered ${postedDaysAgo} days ago`
                        : `${postedDaysAgo} days ago`}
                    </div>
            </div>
            {(offered || interviewing) && (
                <Divider size="xs" color="mine-shaft.8" orientation="horizontal" />
            )}

            {
            offered &&  <div className='flex gap-2 justify-between'>
                    <Button color='bright-sun.4' variant='outline'>Accept</Button>
                    <Button color='bright-sun.4' variant='outline'> Reject </Button>
                </div>
            }
            {
                interviewing &&<div className='flex gap-1  text-sm items-center'>
                <IconCalendarMonth stroke={1.5} className="w-5 h-5 text-bright-sun-400" />
                Sunday, 27th August &bull; <span className='text-mine-shaft-400'>10:00 AM</span>
            </div>
            }
        </Link>
        )
    }

    export default Card