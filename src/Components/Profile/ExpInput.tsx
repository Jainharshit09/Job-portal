    import React, { useState } from 'react'
    import SelectInput from './SelectInput'
    import fields from '../../Data/Profile'
    import { Button, Checkbox, Textarea } from '@mantine/core';
    import { MonthPickerInput } from '@mantine/dates';

    const ExpInput = (props:any) => {
        const select = fields;
        const[startDate,setStartDate]=useState<Date | null>(new Date());
        const [checked, setChecked] = useState(false);
        const[endDate,setEndDate]=useState<Date | null>(new Date());  
        const [description, setDescription] = useState(
        "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
        ); 
    return (
        <div className='flex flex-col gap-5  p-3 '>
            <div className='text-lg font-semibold'>{props.add?"Add":"Edit"} Experience</div>
                <div className='flex gap-10 [&>*]:w-1/2'>
                <SelectInput l {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
            <Textarea
                className='w-full text-lg'
                withAsterisk        
                value={description}
                autosize={true}
                label="Job Summary"
                minRows={3}
                maxRows={50}
                placeholder="Tell us about Previous Experience"
                onChange={(event) => setDescription(event.currentTarget.value)}
            />
            <div className='flex gap-10 [&>*]:w-1/2'>
            <MonthPickerInput
            clearable
            withAsterisk
            value={startDate}
            onChange={setStartDate}
            maxDate={endDate || undefined}
            label="Start date"
            placeholder="Start date"
            />
            <MonthPickerInput
            clearable
            disabled={checked}
            withAsterisk
            minDate={startDate||undefined}
            maxDate={new Date()}
            value={endDate}
            onChange={setEndDate}
            label="End date"
            placeholder="End date"
        />
        </div>
        <Checkbox
            autoContrast
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
            label="Currently working here"
            />
        <div className='flex  gap-5'>
            <Button color="green.8" onClick={()=>props.setEdit(false)} variant="light">Update</Button>
            <Button color="red.8" variant="light">Cancel</Button>
        </div>
        </div>
    )   
    }

    export default ExpInput