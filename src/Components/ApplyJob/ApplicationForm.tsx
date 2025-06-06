import { TextInput, NumberInput, FileInput, Textarea, Button, LoadingOverlay } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form';
import { IconPaperclip } from '@tabler/icons-react'
import React, { useState } from 'react'
import Utilites from '../../Services/Utilites';
import { useNavigate, useParams } from 'react-router-dom';
import jobService from '../../Services/JobService';
import NotificationClass from '../../Services/NotificationClass';
import { useSelector } from 'react-redux';

const ApplicationForm = () => {
    const navigate=useNavigate();
    const { id } = useParams();
    const user=useSelector((state:any)=>state.user);
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);

    const handlePreview = () => {
        form.validate();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (!form.isValid()) return;
        setPreview(!preview);
    };

    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            name: '',
            email: '',
            phone: '',
            website: '',
            github: '',
            linkedin: '',
            resume: null,
            coverLetter: '',
        },
        validate: {
            name: isNotEmpty('Name is required'),
            email: isNotEmpty('Email is required'),
            phone: isNotEmpty('Phone number is required'),
            website: isNotEmpty('Website is required'),
            github: isNotEmpty('GitHub is required'),
            linkedin: isNotEmpty('LinkedIn is required'),
            resume: isNotEmpty('Resume is required'),
        },
    });

    const handleSubmit = async () => {
        setSubmit(true);
        let resume: any = await Utilites.getBase64(form.getValues().resume);
        let applicant = { ...form.getValues(),applicantId:user.id, resume: resume.split(',')[1] };
        jobService.applyJob(id, applicant).then((res: any) => {
            setSubmit(false);
            NotificationClass.successNotification("Success", 'Application Submitted Successfully');
            navigate("/job-history")
        }).catch((err: any) => {
            setSubmit(false);
            NotificationClass.errorNotification("Failed", err.response.data.errorMessage);
        });
    };

    return (
        <div>
            <LoadingOverlay
                className='!fixed'
                visible={submit}
                zIndex={1000}
                overlayProps={{ radius: 'xs', blur: 2 }}
                loaderProps={{ color: 'bright-sun.3', type: 'bars' }}
            />
            <div className='text-xl font-semibold mb-5'>Submit Your Application</div>
            <div className='flex flex-col p-2 gap-5 justify-center'>
                <div className='flex gap-10 [&>*]:w-1/2 xs-mx:flex-wrap xs-mx:[&>*]:w-full xs-mx:gap-5'>
                    <TextInput
                        {...form.getInputProps('name')}
                        readOnly={preview}
                        variant={preview ? 'unstyled' : 'default'}
                        className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                        withAsterisk
                        label='Full Name'
                        placeholder='Enter Full Name'
                    />
                    <TextInput
                        {...form.getInputProps('email')}
                        readOnly={preview}
                        variant={preview ? 'unstyled' : 'default'}
                        className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                        withAsterisk
                        label='Email ID'
                        placeholder='Enter Your Email ID'
                    />
                </div>
                <div className='flex gap-10  [&>*]:w-1/2 xs-mx:flex-wrap xs-mx:[&>*]:w-full xs-mx:gap-5'>
                    <NumberInput
                        {...form.getInputProps('phone')}
                        readOnly={preview}
                        variant={preview ? 'unstyled' : 'default'}
                        className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                        label='Contact Number'
                        withAsterisk
                        hideControls
                        min={0}
                        max={9999999999}
                        clampBehavior='strict'
                        placeholder='Enter your Contact Number'
                    />
                    <TextInput
                        {...form.getInputProps('website')}
                        readOnly={preview}
                        variant={preview ? 'unstyled' : 'default'}
                        className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                        label='Personal Website'
                        placeholder='Personal Website'
                    />
                </div>
                <div className='flex gap-10  [&>*]:w-1/2 xs-mx:flex-wrap xs-mx:[&>*]:w-full xs-mx:gap-5'>
                    <TextInput
                        {...form.getInputProps('github')}
                        readOnly={preview}
                        variant={preview ? 'unstyled' : 'default'}
                        className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                        label='GitHub'
                        withAsterisk
                        placeholder='Enter your GitHub ID'
                    />
                    <TextInput
                        {...form.getInputProps('linkedin')}
                        readOnly={preview}
                        variant={preview ? 'unstyled' : 'default'}
                        className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                        label='LinkedIn'
                        withAsterisk
                        placeholder='Enter your LinkedIn ID'
                    />
                </div>
                <div className='gap-10 flex flex-col'>
                    <FileInput
                        {...form.getInputProps('resume')}
                        accept='application/pdf'
                        readOnly={preview}
                        variant={preview ? 'unstyled' : 'default'}
                        className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                        withAsterisk
                        leftSection={<IconPaperclip />}
                        label='Attach your CV'
                        placeholder='Your CV'
                        leftSectionPointerEvents='none'
                    />
                </div>
                <div className='gap-10 flex flex-col'>
                    <Textarea
                        {...form.getInputProps('coverLetter')}
                        readOnly={preview}
                        variant={preview ? 'unstyled' : 'default'}
                        className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                        placeholder='Tell about yourself'
                        label='Cover Letter'
                        autosize
                        minRows={5}
                    />
                </div>
                <div>
                    {!preview && <Button onClick={handlePreview} color='bright-sun.4' variant='light'>Preview</Button>}
                    {preview && (
                        <div className='flex gap-10'>
                            <Button onClick={handlePreview} color='bright-sun.4' variant='outline'>Edit</Button>
                            <Button onClick={handleSubmit} color='bright-sun.4' variant='light'>Submit</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm
