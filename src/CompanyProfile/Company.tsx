import { Avatar, Divider, Tabs } from '@mantine/core'
import {  IconMapPin } from '@tabler/icons-react'
import React from 'react'
import AboutComp from './AboutComp'
import CompanyJob from './CompanyJob'
import CompanyEmployee from './CompanyEmployee'

const Company = (props:any) => {
  
  return (
    <div className='w-3/4'>
        <div className='relative'>
            <img className='rounded-t-2xl' src='/Profile/banner.jpg' alt='banner'></img>
            <img className='h-36 w-36 bg-mine-shaft-900 rounded-3xl -bottom-1/4 p-2 absolute left-5 border-8 border-mine-shaft-900 text-justify' src='/Icons/Google.png' alt='banner'></img>
        </div>
        <div className='px-3 mt-12'>
                <div className='flex justify-between text-3xl font-semibold'>{props.name}
                <Avatar.Group>
                <Avatar src="Avatar.png" />
                <Avatar src="Avatar1.png" />
                <Avatar src="Avatar2.png" />
                <Avatar>+7k</Avatar>
              </Avatar.Group>
                </div>
                <div className="flex gap-1 text-xs items-center text-mine-shaft-300">
                <IconMapPin className="h-5 w-5" />{props.location}</div>
            </div>
            <Divider size='xs' my="xl" color='mine-shaft.5' orientation="horizontal" />
        <div>
        <Tabs variant="pills" color='mine-shaft.8' defaultValue="about" radius="lg">
        <Tabs.List  className='[&_button]:!text-xl [&_button]:!font-semibold mb-3 [&_button[data-active="true"]]:text-bright-sun-400 '>
        <Tabs.Tab value="about">About</Tabs.Tab>
        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
        <Tabs.Tab value="employee">Employees</Tabs.Tab>
        
          </Tabs.List>
          <Tabs.Panel value="about" className='p-2'><AboutComp/></Tabs.Panel>
          <Tabs.Panel value="jobs"><CompanyJob/></Tabs.Panel>
          <Tabs.Panel value="employee"><CompanyEmployee/></Tabs.Panel>
      </Tabs>
        </div>
    </div>
  )
}

export default Company