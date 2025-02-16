import { Button, Divider, FileInput, NumberInput, Textarea, TextInput, Notification, rem, LoadingOverlay } from '@mantine/core';
import { IconCheck, IconPaperclip } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const ApplyJob: React.FC = () => {
    const [preview, setPreview] = useState(true);
    const [submit, setSubmit] = useState(false);
    const[sec,setSec]=useState(5);
    const navigate=useNavigate();

    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSubmit = () => {
        setSubmit(true);
        let x=5;
        setInterval(()=>{
            x--;
            setSec(x);
            if(x===0){
                navigate('/find-job')
            }
        },1000)
    };

    return (
        <>
            <div className='w-2/3 mx-auto'>
                <LoadingOverlay
                className='!fixed'
                visible={submit}
                zIndex={1000}
                overlayProps={{ radius: 'xs', blur: 2 }}
                loaderProps={{ color: 'bright-sun.3', type: 'bars' }}
                />

                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <div className='p-3 bg-mine-shaft-600 rounded-xl'>
                            <img className='h-14' src={`/Icons/Google.png`} alt='Google' />
                        </div>
                        <div className='p-1'>
                            <div className='font-semibold text-2xl'>Job Title</div>
                            <div className='text-lg text-mine-shaft-300'>Company &bull; 3 Days Ago &bull; 48 Applicants</div>
                        </div>
                    </div>
                </div>
                <Divider size='xs' my='xl' color='mine-shaft.7' orientation='horizontal' />
                <div className='text-xl font-semibold mb-5'>Submit Your Application</div>
                <div className='flex flex-col p-2 gap-5 justify-center'>
                    <div className='flex gap-10 [&>*]:w-1/2'>
                        <TextInput
                            readOnly={preview}
                            variant={preview ? 'unstyled' : 'default'}
                            className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                            withAsterisk
                            label='Full Name'
                            placeholder='Enter Full Name'
                        />
                        <TextInput
                            readOnly={preview}
                            variant={preview ? 'unstyled' : 'default'}
                            className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                            withAsterisk
                            label='Email ID'
                            placeholder='Enter Your Email ID'
                        />
                    </div>
                    <div className='flex gap-10 [&>*]:w-1/2'>
                        <NumberInput
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
                            readOnly={preview}
                            variant={preview ? 'unstyled' : 'default'}
                            className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                            label='Personal Website'
                            placeholder='Personal Website'
                        />
                    </div>
                    <div className='flex gap-10 [&>*]:w-1/2'>
                        <TextInput
                            readOnly={preview}
                            variant={preview ? 'unstyled' : 'default'}
                            className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                            label='GitHub'
                            placeholder='Enter your GitHub ID'
                        />
                        <TextInput
                            readOnly={preview}
                            variant={preview ? 'unstyled' : 'default'}
                            className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                            label='LinkedIn'
                            placeholder='Enter your LinkedIn ID'
                        />
                    </div>
                    <div className='gap-10 flex flex-col'>
                        <FileInput
                            readOnly={preview}
                            variant={preview ? 'unstyled' : 'default'}
                            className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                            withAsterisk
                            leftSection={<IconPaperclip />}
                            label='Attach your CV'
                            placeholder='Your CV'
                            error='Upload in correct format (PDF, DOCs)'
                            leftSectionPointerEvents='none'
                        />
                    </div>
                    <div className='gap-10 flex flex-col'>
                        <Textarea
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
            {submit && (
                <Notification
                    className={`!border-bright-sun-400 z-[1001] !fixed top-0 items-center justify-center -translate-y-20 left-[35%] transition duration-300 ease-in-out ${submit ? "translate-y-0" : ""}`}
                    icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
                    color="teal"
                    title="Application Submitted!"
                    withBorder
                    withCloseButton={false}
                    mt="md">
                    Redirecting to find Jobs in {sec} seconds...
                </Notification>
            )}
        </>
    )
};

export default ApplyJob;
