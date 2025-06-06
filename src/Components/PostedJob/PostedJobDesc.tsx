import React, { useEffect, useState, useCallback } from 'react'
import { Badge, Tabs } from '@mantine/core'

import JobDesc from '../JobDesc/JobDesc'
import TalentCard from '../FindTalent/TalentCard'

const PostedJobDesc = (props: any) => {
  const [arr, setArr] = useState<any>([]); 
  const [tab, setTab] = useState('overview');

  const handleTabChange = useCallback((value: any) => {
    setTab(value);
    if (value === 'applicants') {
      setArr(props.applicants?.filter((x: any) => x.applicationStatus === "APPLIED") || []); // Default to empty array
    } else if (value === 'invited') {
      setArr(props.applicants?.filter((x: any) => x.applicationStatus === "INTERVIEWING") || []);
    } else if (value === 'offered') {
      setArr(props.applicants?.filter((x: any) => x.applicationStatus === "OFFERED") || []);
    } else if (value === 'rejected') {
      setArr(props.applicants?.filter((x: any) => x.applicationStatus === "REJECTED") || []);
    } else {
      setArr([]); // Clear the array for other tabs like "overview"
    }
  }, [props.applicants]);

  useEffect(() => { 
    setTab("overview");
    handleTabChange("overview");
  }, [props.jobTitle, props.jobStatus, handleTabChange]);

  return (
    <div className='mt-5 w-3/4 px-5'>
      {props.jobTitle ? (
        <>
          <div className='text-2xl font-semibold flex items-center mt-5'>
            {props.jobTitle}  
            <Badge variant="light" ml="sm" size='sm' color="bright-sun.4">{props.jobStatus}</Badge>
          </div>

          <div className='font-medium text-mine-shaft-300 mb-5'>{props.location}</div>

          <div>
            <Tabs variant="outline" color='mine-shaft.8' value={tab} onChange={handleTabChange} radius="lg">
              <Tabs.List className='[&_button]:!text-xl [&_button]:!font-semibold mb-3 [&_button[data-active="true"]]:text-bright-sun-400 '>
                <Tabs.Tab value="overview">Overview</Tabs.Tab>
                <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                <Tabs.Tab value="invited">Invited</Tabs.Tab>
                <Tabs.Tab value="offered">Offered</Tabs.Tab>
                <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="overview" className='[&>div]:w-full p-5'>
                <JobDesc {...props} edit={props.jobStatus !== "CLOSED"} closed={props.jobStatus === "CLOSED"} />
              </Tabs.Panel>

              <Tabs.Panel value="applicants">
                <div className="flex justify-around flex-wrap gap-5 pt-10">
                  {arr.length ? arr.map((talent: any, index: any) => (
                    <TalentCard key={index} {...talent} posted />
                  )) : (
                    <div className='text-2xl font-semibold items-center justify-center text-bright-sun-400'>NO Applicants</div>
                  )}
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="invited">
                <div className="flex justify-around flex-wrap gap-5 pt-10">
                  {arr.length ? arr.map((talent: any, index: any) => (
                    <TalentCard key={index} {...talent} invited />
                  )) : (
                    <div className='text-2xl font-semibold items-center justify-center text-bright-sun-400'>NO Invited Candidates</div>
                  )}
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="offered">
                <div className="flex justify-around flex-wrap gap-5 pt-10">
                  {arr.length ? arr.map((talent: any, index: any) => (
                    <TalentCard key={index} {...talent} offered />
                  )) : (
                    <div className='text-2xl font-semibold items-center justify-center text-bright-sun-400'>NO Offered Candidates</div>
                  )}
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="rejected">
                <div className="flex justify-around flex-wrap gap-5 pt-10">
                  {arr.length ? arr.map((talent: any, index: any) => (
                    <TalentCard key={index} {...talent} rejected />
                  )) : (
                    <div className='text-2xl font-semibold items-center justify-center text-bright-sun-400'>NO Rejected Candidates</div>
                  )}
                </div>
              </Tabs.Panel>

            </Tabs>
          </div>
        </>
      ) : ( 
        <div className='text-2xl font-semibold flex min-h-[70vh] justify-center items-center text-bright-sun-400'>No Job Selected</div>
      )}
    </div>
  )
}

export default PostedJobDesc
