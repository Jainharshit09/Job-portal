import { Avatar, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';

const DreamJob = () => {
  return (
    <div className='flex flex-col md:flex-row items-center px-4 md:px-16'>
      {/* Left side */}
      <div className='flex flex-col w-full md:w-[45%] mb-8 md:mb-0'>
        <div 
          className='text-4xl md:text-6xl font-bold text-mine-shaft-100 leading-tight [&>span]:text-bright-sun-500'>
          Find Your <span>Dream</span> <span>Job</span> With us
        </div>

        <div className='text-base md:text-lg text-mine-shaft-200 mt-4'>
        Good life begins with a good company. Start explore thousands of jobs in one place.
        </div>

        <div className='flex gap-3 mt-5 '>
        <TextInput
            className='bg-mine-shaft-800 rounded-lg p-1 px-2 text-mine-shaft-100 [&__input]:text-mine-shaft-100'
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer, etc."
        />
        <TextInput
            className='bg-mine-shaft-800 rounded-lg p-1 px-2 text-mine-shaft-100 [&__input]:text-mine-shaft-100'
            variant="unstyled"
            label="Job Type"
            placeholder="Full Time"
        />
        <div className='flex justify-center items-center h-full w-20 bg-bright-sun-500 hover:bg-bright-sun-600 cursor-pointer rounded-lg text-mine-shaft-100 p-2'>
            <IconSearch className='h-[80%] w-[80%]'/>
         </div>
        </div>
    </div>

      {/* Right side */}
      <div className='w-full md:w-[55%] flex justify-center items-center'>
        <div className='w-full md:w-[30rem] relative'>
          <img src="/Boy.png" alt="boy"/>
          <div className='absolute -right-10 w-fit top-[50%] border border-bright-sun-400 rounded-lg p-2 backdrop-blur-md '>
          <div className='text-center mb-1 text-sm text-mine-shaft-100'> 10k+ got job</div>
          <Avatar.Group>
            <Avatar src="avatar.png" />
            <Avatar src="avatar1.png" />
            <Avatar src="avatar2.png" />
            <Avatar>+5</Avatar>
          </Avatar.Group>
          </div>
          <div  className='absolute -left-8 w-fit top-[25%] border border-bright-sun-400 rounded-lg p-3 backdrop-blur-md '>
            <div className='flex items-center gap-2 mt-2'>
                <div className='w-10 h-10 p-1 bg-mine-shaft-800 rounded-lg flex justify-center items-center bg-opacity-100'>
                    <img src="/Google.jpeg" alt="ellipse" className=' bg- mix-blend-multiply'/>
                </div>
                <div className=' h-10 w-30 text-sm text-mine-shaft-100'>
                    <div>Software Engineer</div>
                    <div text-mine-shaft-200 text-xs>New York </div>
                </div>
            </div>
            <div className='flex gap-2 justify-around mt-3 text-mine-shaft-200 text-xs'>
                <span>1 day ago</span>
                <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;