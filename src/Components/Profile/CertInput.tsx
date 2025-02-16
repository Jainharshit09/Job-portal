import React, { useState } from 'react'
import SelectInput from './SelectInput'
import { Button, TextInput } from '@mantine/core'
import fields from '../../Data/Profile'
import { MonthPickerInput } from '@mantine/dates'

const CertInput = (props:any) => {
    const select=fields;
     const[endDate,setEndDate]=useState<Date | null>(new Date());  
return (
    <div className='flex flex-col gap-3 '>
        <div className='text-lg font-semibold'>Add Certificate</div>
        <div className='flex gap-10 [&>*]:w-1/2'>
        <TextInput label="Title" withAsterisk placeholder="Enter Title"/>
        <SelectInput {...select[1]} />       
        </div>
        <div className='flex gap-10 [&>*]:w-1/2'>
            <MonthPickerInput
                        clearable
                        withAsterisk
                        maxDate={new Date()}
                        value={endDate}
                        onChange={setEndDate}
                        label="Issued Date"
                        placeholder="Pick Date"
                    />
                    <TextInput label="Certificate Id" withAsterisk placeholder="Enter Id"/>
        </div>
        <div className='flex  gap-5'>
                    <Button color="green.8" onClick={()=>props.setEdit(false)} variant="light">Update</Button>
                    <Button color="red.8" variant="light">Cancel</Button>
        </div>
    </div>
)   
}
export default CertInput