import React from 'react'
import { Badge, Tabs } from '@mantine/core'

import JobDesc from '../JobDesc/JobDesc'
import { talents } from '../../Data/TalentData'
import TalentCard from '../FindTalent/TalentCard'

const PostedJobDesc = () => {
  return (
    <div className='mt-5 w-3/4 px-5'>
        <div className='text-2xl font-semibold flex items-center mt-5 '>Software Engineer  <Badge variant="light" ml="sm" size='sm' color="bright-sun.4">Badge</Badge></div>
        <div className='font-medium text-mine-shaft-300 mb-5'>New York United States</div>
        <div>
        <Tabs variant="outline" color='mine-shaft.8' defaultValue="overview" radius="lg">
        <Tabs.List  className='[&_button]:!text-xl [&_button]:!font-semibold mb-3 [&_button[data-active="true"]]:text-bright-sun-400 '>
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
        <Tabs.Tab value="invited">Invited</Tabs.Tab>
        
          </Tabs.List>
          <Tabs.Panel value="overview" className='[&>div]:w-full p-5'><JobDesc edit/></Tabs.Panel>
          <Tabs.Panel value="applicants">
            {
                    <div className="flex justify-around flex-wrap gap-5 pt-10">
                    {talents.map((talent, index) => index<6 && (
                      <TalentCard key={index} {...talent} posted/>
                    ))}
                  </div>
            }
          </Tabs.Panel>
          <Tabs.Panel value="invited">
          {
                    <div className="flex justify-around flex-wrap gap-5 pt-10">
                    {talents.map((talent, index) => index<6 && (
                    <TalentCard key={index} {...talent} invited/>
                    ))}
                  </div>
            }
          </Tabs.Panel>
      </Tabs>
        </div>
    </div>
  )
}

export default PostedJobDesc