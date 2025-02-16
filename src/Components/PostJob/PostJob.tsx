import React from 'react'
import SelectInput from './SelectInput'
import { fields } from '../../Data/PostJob'
import { Button, TagsInput } from '@mantine/core';
import TextEditor from './TextEditor';

const PostJob = () => {
    const select = fields;
  return (
    <div className='w-4/5 mx-auto'>
        <div className='text-2xl font-semibold mb-5 '>Post a Job</div>
        <div className='font-normal p-1'>
            <div className='flex p-3 gap-10 [&>*]:w-1/2'>
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
            <div className='flex p-3 gap-10 [&>*]:w-1/2'>
                <SelectInput {...select[2]} />
                <SelectInput {...select[3]} />
            </div>
            <div className='flex p-3 gap-10 [&>*]:w-1/2'>
                <SelectInput {...select[4]} />
                <SelectInput {...select[5]} />
            </div>
            
            <div className="font-medium p-3">
                <TagsInput
                    withAsterisk
                    label="Skills" 
                    placeholder="Enter Skills" 
                    clearable 
                    acceptValueOnBlur 
                    splitChars={[',', ' ', '|']}
                />
            </div>
            <div className='p-3 [&_button[data-active="true"]]:!text-bright-sun-400 [&_button[data-active="true"]]:bg-bright-sun-400/20 '>
                <div className='font-medium text-sm'>Description</div>
                <TextEditor/>
            </div>
            <div className='flex gap-4 p-3'>
            <Button color="bright-sun.4" variant="light">Publish Job</Button>
            <Button color="bright-sun.4" variant="outline">Save as Draft</Button>
            </div>
        </div>
    </div>
  )
}

export default PostJob
