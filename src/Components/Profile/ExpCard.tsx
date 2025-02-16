import {IconMapPin } from '@tabler/icons-react'
import { Button } from '@mantine/core'
import React, { useState } from 'react'
import ExpInput from './ExpInput'
import formatDate from '../../Services/Utilites'


    const ExpCard= (props:any) => {
        const [edit,setEdit]=useState(false)
        return !edit? (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
                <div className='flex gap-2  items-center'>
                    <div className='p-2 bg-mine-shaft-600 rounded-md'>
                        <img className='h-7' src={`/Icons/${props.company}.png`} alt={props.company} />
                    </div>
                    <div className='p-1'>
                        <div className='font-semibold text-lg '>{props.title}</div>
                        <div className='text-md text-mine-shaft-300 flex gap-1'>{props.company}<IconMapPin className='flex h-5 w-5'/> {props.location}</div>
                    </div>
                </div>
                <div className='text-sm text-min-shaft-300'>
                {formatDate(props.startDate)}-{formatDate(props.endDate)}
                </div>
            </div>
            <div className='text-justify text-sm text-mine-shaft-300'>
                {props.description}
            </div>
            {props.edit &&
                <div className='flex  gap-5'>
                    <Button color="bright-sun.4" onClick={()=>setEdit(true )} variant="outline">
                        Edit
                    </Button>
                    <Button color="red.8" variant="light">
                        Delete
                    </Button>
                </div>
            }
        </div>
        ):
        <ExpInput {...props} setEdit={setEdit}/>
    }

    export default ExpCard