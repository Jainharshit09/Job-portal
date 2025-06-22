import { IconMapPin } from '@tabler/icons-react'
import { Button } from '@mantine/core'
import React, { useState } from 'react'
import ExpInput from './ExpInput'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../../Slice/ProfileSlice'
import NotificationClass from '../../Services/NotificationClass'
import CompanyLogo from './CompanyLogo'
import Utilites from '../../Services/Utilites'

const ExpCard = (props: any) => {
    const [edit, setEdit] = useState(false)
    const profile = useSelector((state: any) => state.profile)
    const dispatch = useDispatch()

    const handleDelete = async () => {
        try {
            const updatedExperiences = profile.experiences.filter((_: any, i: number) => i !== props.index)
            dispatch(changeProfile({ ...profile, experiences: updatedExperiences }))
            NotificationClass.successNotification('Deleted', 'Experience removed successfully')
        } catch (error) {
            NotificationClass.errorNotification('Error', 'Failed to delete experience')
        }
    }
    return !edit ? (
        <div className='flex flex-col gap-2 p-4 sm-mx:p-2 xsm-mx:p-1 rounded-lg'>
            <div className='flex flex-wrap justify-between gap-2 xsm-mx:flex-col'>
                <div className='flex gap-2 items-center xsm-mx:flex-col xsm-mx:items-start'>
                    <div className='p-2 bg-mine-shaft-600 rounded-md sx-mx:p-1 xsm-mx:p-0.5'>
                        <CompanyLogo company={props.company}/>
                    </div>
                    <div className='p-1'>
                        <div className='font-semibold text-lg'>{props.title}</div>
                        <div className='text-md text-mine-shaft-300 flex gap-1 items-center'>
                            {props.company}
                            <IconMapPin className='flex h-5 w-5' />
                            {props.location}
                        </div>
                    </div>
                </div>
                <div className='text-sm text-min-shaft-300'>
                    {Utilites.formatDate(props.startDate)} - {(props.working || !props.endDate) ? 'Present' : Utilites.formatDate(props.endDate)}
                </div>
            </div>
            <div className='text-justify text-sm text-mine-shaft-300'>
                {props.description}
            </div>
            {props.edit &&
                <div className='flex gap-5 sm-mx:gap-3 xsm-mx:gap-2 xsm-mx:flex-col'>
                    <Button color="green.4" onClick={() => setEdit(true)} variant="outline" className="xsm-mx:w-full">
                        Edit
                    </Button>
                    <Button color="red.8" onClick={handleDelete} variant="light" className="xsm-mx:w-full">
                        Delete
                    </Button>
                </div>
            }
        </div>
    ) :
        <ExpInput {...props} setEdit={setEdit} isWorking={props.working} />
}

export default ExpCard