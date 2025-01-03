import { IconBookmark, IconClockHour3 } from '@tabler/icons-react'
import React from 'react'
import { Divider, Text } from '@mantine/core'

const JobCard = ({ jobTitle, company, applicants, experience, jobType, location, package: salary, postedDaysAgo, description }: any) => {
  return (
    <div className='bg-mine-shaft-950 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400'>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                <div className='p-2 bg-mine-shaft-900 rounded-md'>
                    <img className='h-7' src={`/Icons/${company}.png`} alt={company} />
                </div>
                <div className='p-1'>
                    <div className='font-semibold'>{jobTitle}</div>
                    <div className='text-xs text-mine-shaft-300'>{company} &#x2022; {applicants} Applicants</div>
                </div>
            </div>
            <IconBookmark className='text-mine-shaft-300 hover:cursor-pointer' />
        </div>
        <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:rounded-lg [&>div]:text-bright-sun-400 text-xs'>
            <div>{experience}</div>
            <div>{jobType}</div>
            <div>{location}</div>
        </div>
        <Text lineClamp={3} className='!text-xs !text-hustify !text-mine-shaft-300'>
            {description}
        </Text>
        <Divider size='xs' color='mine-shaft.7' orientation="horizontal" />
        <div className='flex justify-between p-1'>
            <div className='font-semibold text-mineshaft-200'>&#8377; {salary}</div>
            <div className='flex gap-1 text-xs items-center text-mine-shaft-400'>
                <IconClockHour3 className='h-5 w-5' />
                {postedDaysAgo} days ago
            </div>
        </div>
    </div>
  )
}

export default JobCard
