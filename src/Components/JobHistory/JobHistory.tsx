import { Tabs } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import JobService from '../../Services/JobService'
import { useSelector } from 'react-redux'

const JobHistory = () => {
    const profile = useSelector((state: any) => state.profile)
    const user = useSelector((state: any) => state.profile)
    const [activeTab, setActiveTab] = useState<any>('APPLIED')
    const [jobList, setJobList] = useState<any>([])
    const [showList, setShowList] = useState<any>([])

    useEffect(() => {
        JobService.getAllJobs().then((res) => {
            setJobList(res)
            setShowList(res.filter((job: any) => {
                let found = false
                job.applicants?.forEach((applicant: any) => {
                    if (applicant.applicantId === user.id && applicant.applicationStatus === "APPLIED") {
                        found = true
                    }
                })
                return found
            }))
        }).catch((err) => {
            console.log(err)
        })
    }, [user.id])

    const handleTabChange = (value: string | null) => {
        setActiveTab(value)
        if (value === 'SAVED') {
            setShowList(jobList.filter((job: any) => profile.savedJobs?.includes(job.id)))
        }
        else {
            setShowList(jobList.filter((job: any) => {
                let found = false
                job.applicants?.forEach((applicant: any) => {
                    if (applicant.applicantId === user.id && applicant.applicationStatus === value) {
                        found = true
                    }
                })
                return found
            }))
        }
    }

    const getEmptyMessage = () => {
        switch(activeTab) {
            case "APPLIED":
                return "No applied jobs found."
            case "SAVED":
                return "No saved jobs found."
            case "OFFERED":
                return "No offered jobs found."
            case "INTERVIEWING":
                return "No interviewing jobs found."
            default:
                return "No jobs found."
        }
    }

    return (
        <div>
            <div className='text-2xl font-semibold mb-5'>Job History</div>
            <div>
                <Tabs 
                    variant="pills" 
                    color='mine-shaft.8' 
                    value={activeTab} 
                    onChange={handleTabChange} 
                    radius="lg">
                    <Tabs.List className='[&_button]:!text-xl [&_button]:!font-semibold mb-3 [&_button[data-active="true"]]:text-bright-sun-400 xs-mx:[&_button]:!text-sm xs-mx:[&_button]:!font-medium xs-mx:[&_button]:!px-1 xs-mx:[&_button]:!py-1.5 xs-mx:[&_button]:!mb-8'>
                        <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
                        <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
                        <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
                        <Tabs.Tab value="INTERVIEWING">In Progress</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value={activeTab} className='p-2'>
                        <div className='justify-center flex flex-wrap gap-5 pt-10'>
                            { showList.length > 0 ? (
                                showList.map((job: any, index: number) => (
                                    <Card key={index} {...job} {...{ [activeTab.toLowerCase()]: true }}/>
                                ))
                            ) : (
                                <div className='text-center text-lg font-semibold text-bright-sun-400'>
                                    {getEmptyMessage()}
                                </div>
                            )}
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default JobHistory