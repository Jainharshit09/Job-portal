    import { Tabs } from '@mantine/core'
    import React from 'react'
    import { jobList } from '../../Data/JobsData'
    import Card from './Card'

    const JobHistory = () => {
    return (
        <div>
            <div className='text-2xl font-semibold mb-5'>Job History</div>
            <div>
            <Tabs variant="pills" color='mine-shaft.8' defaultValue="applied" radius="lg">
            <Tabs.List  className='[&_button]:!text-xl [&_button]:!font-semibold mb-3 [&_button[data-active="true"]]:text-bright-sun-400 '>
            <Tabs.Tab value="applied">Applied</Tabs.Tab>
            <Tabs.Tab value="saved">Saved</Tabs.Tab>
            <Tabs.Tab value="offered">Offereds</Tabs.Tab>
            <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="applied" className='p-2'>
            <div className=' justify-center flex flex-wrap gap-5 pt-10'>
            {
            jobList.map((job,index) => (
                <Card key={index} {...job} applied/>
            ))
            }
            </div>
            </Tabs.Panel>
            <Tabs.Panel value="saved">
            <div className=' justify-center flex flex-wrap gap-5 pt-10'>
            {
            jobList.map((job,index) => (
                <Card key={index} {...job} saved />
            ))
            }
            </div>
            </Tabs.Panel>
            <Tabs.Panel value="offered">
                <div className=' justify-center flex flex-wrap gap-5 pt-10'>
            {
            jobList.map((job,index) => (
                <Card key={index} {...job} offered />
            ))
            }
            </div>
            </Tabs.Panel>
            <Tabs.Panel value="interviewing">        
                <div className=' justify-center flex flex-wrap gap-5 pt-10'>
            {
            jobList.map((job,index) => (
                <Card key={index} {...job} interviewing/>
            ))
            }
            </div>
            </Tabs.Panel>
        </Tabs>
            </div>
        </div>
    )
    }

    export default JobHistory