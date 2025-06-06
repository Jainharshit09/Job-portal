import React, { useEffect, useRef, useState } from 'react'
import SelectInput from './SelectInput'
import { content, fields } from '../../Data/PostJob'
import { Button, NumberInput, TagsInput, Textarea } from '@mantine/core';
import TextEditor from './TextEditor';
import { isNotEmpty, useForm } from '@mantine/form';
import jobService from '../../Services/JobService';
import NotificationClass from '../../Services/NotificationClass';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostJob = () => {
    const {id}=useParams();
    const[editMode,setEditMode]=useState(content);
    const select = fields;
    const user=useSelector((state:any)=>state.user);
    const  navigate  = useNavigate();
    const form=useForm({
        mode:"controlled",
        validateInputOnChange:true,
        initialValues: {
            jobTitle: '',
            company:'',
            experience: '',
            jobType:'',
            location: '',
            packageOffered:'',
            skillsRequired:[],
            about:'',
            description:content,
        },
        validate:{
            jobTitle:isNotEmpty('Job title is required'),
            company:isNotEmpty('Company name is required'),
            experience:isNotEmpty('Experience is required'),
            jobType:isNotEmpty('Job type is required'),
            location:isNotEmpty('Location is required'),
            packageOffered: isNotEmpty('Package offered is required'),
            skillsRequired: isNotEmpty('Skills required is required'),
            about: isNotEmpty('About is required'),
            description: isNotEmpty('Description is required'),
            }
    });   
    const formRef = useRef(form);

    formRef.current = form;
    useEffect(() => {
        if (id !== "0") {
            jobService.getJobs(id).then((res) => {
            formRef.current.setValues(res);
            setEditMode(res.description);
        }).catch((err) => {
            NotificationClass.errorNotification("Error", err.response.data.message);
        });
        } else {
            formRef.current.reset();
            setEditMode(content);
        }
    }, [id]);

    const handlePostJob = () => {
        form.validate();
        if(!form.isValid()) return;
        jobService.postJob({...form.getValues(),id,postedBy:user.id,jobStatus:"ACTIVE"}).then((res) => {
            NotificationClass.successNotification("Success",'Job Posted Successfully'); 
            navigate(`/posted-job/${res.id}`);;
        }
        ).catch((err) => {

            NotificationClass.errorNotification("Error",err.response.data.message);
        });
    }

    const handelDraft = () => {
        jobService.postJob({...form.getValues(),postedBy:user.id,jobStatus:"DRAFT"}).then((res) => {
            NotificationClass.successNotification("Success",'Job DRAFT Successfully'); 
            navigate(`/posted-job/${res.id}`);
        }
        ).catch((err) => {

            NotificationClass.errorNotification("Error",err.response.data.message);
        });

    }

    return (
        <div className='w-4/5 mx-auto'>
            <div className='text-2xl font-semibold mb-5 '>Post a Job</div>
            <div className='font-normal p-1 xs-mx:w-full'>
                <div className='flex p-3 gap-10 [&>*]:w-1/2 xs-mx:flex-wrap xs-mx:[&>*]:w-full xs-mx:gap-5'>
                    <SelectInput form={form} name="jobTitle" {...select[0]} />
                    <SelectInput form={form} name="company" {...select[1]} />
                </div>
                <div className='flex p-3 gap-10 [&>*]:w-1/2 xs-mx:flex-wrap xs-mx:[&>*]:w-full xs-mx:gap-5'>
                    <SelectInput form={form} name="experience" {...select[2]} />
                    <SelectInput form={form} name="jobType" {...select[3]} />
                </div>
                <div className='flex p-3 gap-10 [&>*]:w-1/2 xs-mx:flex-wrap xs-mx:[&>*]:w-full xs-mx:gap-5'>
                    <SelectInput form={form} name="location" {...select[4]} />
                    <NumberInput
                        label="Salary"
                        withAsterisk
                        min={1}
                        max={300}
                        clampBehavior='strict'
                        placeholder='Enter Salary'
                        hideControls
                        {...form.getInputProps('packageOffered')}
                    />
                </div>
    
                <div className="font-medium p-3 xs-mx:w-full">
                    <TagsInput
                        withAsterisk
                        label="Skills"
                        placeholder="Enter Skills"
                        clearable
                        acceptValueOnBlur
                        splitChars={[',', ' ', '|']}
                        {...form.getInputProps('skillsRequired')}
                    />
                </div>
                <div className="font-medium p-3 xs-mx:w-full">
                    <Textarea
                        className="w-full text-lg"
                        withAsterisk
                        autosize
                        label="About"
                        minRows={3}
                        placeholder="About the Job..."
                        {...form.getInputProps('about')}
                    />
                </div>
                <div className='p-3 [&_button[data-active="true"]]:!text-bright-sun-400 [&_button[data-active="true"]]:bg-bright-sun-400/20 xs-mx:w-full'>
                    <div className='font-medium text-sm'>
                        Description <span className="text-red-500">*</span>
                    </div>
                    <TextEditor form={form} data={editMode} />
                </div>
    
                <div className='flex gap-4 p-3 xs-mx:flex-wrap xs-mx:gap-5'>
                    <Button color="bright-sun.4" onClick={handlePostJob} variant="light">
                        Publish Job
                    </Button>
                    <Button color="bright-sun.4" variant="outline" onClick={handelDraft}>
                        Save as Draft
                    </Button>
                </div>
            </div>
        </div>
    )};

export default PostJob;
