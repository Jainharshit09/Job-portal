import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconBookmark, IconBookmarkFilled} from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { card } from '../../Data/JobDescData'
import DOMPurifiy from 'dompurify';
import Utilites from '../../Services/Utilites'
import CompanyLogo from '../Findjobs/CompanyLogo'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../../Slice/ProfileSlice'
import jobService from '../../Services/JobService'
import NotificationClass from '../../Services/NotificationClass'
const   JobDesc = (props:any) => {
    const data=DOMPurifiy.sanitize(props.description);  
    const dispatch=useDispatch();
    const [applied,setApplied]=useState(false);
    const profile=useSelector((state: any) => state.profile);
    const user=useSelector((state:any)=>state.user);

    const handleSaveJob = () => {
        let savedJobs = Array.isArray(profile.savedJobs) ? [...profile.savedJobs] : [];
        
        if (savedJobs.includes(props.id)) {
            savedJobs = savedJobs.filter((id) => id !== props.id);
        } else {
            savedJobs.push(props.id);
        }

        const updateProfile = { ...profile, savedJobs };
        dispatch(changeProfile(updateProfile));
    };

    useEffect(()=>{
        if(props.applicants?.filter((applicant:any)=>applicant.applicantId===user.id).length>0){
            setApplied(true);
        }
        else{
            setApplied(false);
        }
    },[props,user.id])

    const handleClose = () => {
       jobService.postJob({...props,jobStatus:"CLOSED"}).then((res:any)=>{
          NotificationClass.successNotification("Success","Job Closed Successfully");
          console.log("Job Closed Successfully");
          console.log(res);
            }).catch((err:any)=>{
                NotificationClass.errorNotification("Failed",err.response.data.errorMessage);
            })
    }

return (
    <div className="w-2/3 bs-mx:w-full">
            <div className='flex flex-wrap sx-mx:gap-3  items-center justify-between mb-5'>
            <div className='flex gap-2 flex-wrap items-center '>
                <div className='p-3 bg-mine-shaft-600 rounded-xl'>
                   <CompanyLogo company={props.company} />
                </div>
                <div className='p-1'>
                    <div className='font-semibold text-2xl'>{props.jobTitle}</div>

                    <div className='text-lg sx-mx:text-sm text-mine-shaft-300'>{props.company} &bull; {Utilites.timeAgo(props.postTime)} &bull;{props.applicants?props.applicants.length:0} Applicants</div>
                </div>
            </div>
           
            <div className='flex flex-col  gap-2 items-center sx-mx:gap-3 sx-mx:flex-row sx-mx:w-full sx-mx:[&>button]:!w-[90%]'>
                {(props.edit || !applied) && <Link className='sx-mx:[&>button]:!w-full' to={props.edit ? `/post-job/${props.id}` : `/apply-job/${props.id}`}>

                <Button  color="bright-sun.4" size="sm" variant="light">{props.closed?"Reopen":props.edit?"Edit":"Apply"}</Button>
                </Link>}
                {
                   !props.edit && applied && <Button color="green.8" size="sm" variant="light">Applied</Button>
                }
                {props.edit  && !props.closed? <Button color="red.5" onClick={handleClose} size="sm" variant="outline">Close</Button> :profile.savedJobs?.includes(props.id)?
            <IconBookmarkFilled className='hover:cursor-pointer text-bright-sun-400 ' onClick={handleSaveJob} />
            :<IconBookmark className='text-mine-shaft-300 hover:cursor-pointer hover:text-bright-sun-400    'onClick={handleSaveJob}  />}
            </div>
        </div>
        <Divider size='xs' my="xl" color='mine-shaft.7' orientation="horizontal" />
        <div className='flex flex-wrap bs-mx:gap-3 justify-between mb-5'>
            {card.map((item, index) => (
                <div key={index} className='flex flex-col items-center gap-1'>
                    <ActionIcon color='bright-sun.4' className='!h-12 !w-12 xs-ms:!w-8 xs-ms:!h-8' variant="light" radius="xl" aria-label={item.name}>
                        <item.icon className='h-4/5 w-4/5' stroke={1.5} />
                    </ActionIcon>
                    <div className='text-sm text-mine-shaft-300 xs-ms:text-xs'>
                        {item.name}
                    </div>
                    <div className='font-semibold'>
                        {props?props[item.id]:"NA"}{item.id==="packageOffered"?" LPA":""}
                    </div>
                </div>
            ))}
        </div>
        <Divider size='xs' my="xl" color='mine-shaft.7' orientation="horizontal" />
        <div className='flex flex-col p-1'>
            <div className='text-xl font-semibold mb-5'>Required Skills</div>
            <div className='flex flex-wrap gap-4'>
                {(props.skillsRequired || []).map((skill: string, index: number) => (
                    <ActionIcon
                    key={index}
                    color="bright-sun.4"
                    className="!h-fit !text-sm !font-medium !w-fit xs-mx:text-xs"
                    p="xs"
                    variant="light"
                    radius="xl"
                    aria-label={skill}
                    >
                    {skill}
                    </ActionIcon>
                    ))
                }
            </div>
        </div>
        <Divider size='xs' my="xl" color='mine-shaft.7' orientation="horizontal" />
        <div className='[&_h4]:text-xl [&_h4]:font-semibold [&_h4]:my-5 [&_h4]:text-mine-shaft-200 [&_li]:mb-1 [&_li]:marker:text-bright-sun-400 [&_*]:text-mine-shaft-300 [&_p]:text-justify [&_p]:text-sm [&_li]:text-sm' dangerouslySetInnerHTML={{__html:data}}>
        </div>
        <Divider size='xs' my="xl" color='mine-shaft.7' orientation="horizontal" />
        <div>
        <div className='text-xl font-semibold mb-5'>About Company</div>
            <div>
            <div className='flex justify-between mb-2 flex-wrap xs-mx:gap-3 '>
            <div className='flex gap-2 items-center flex-wrap'>
                <div className='p-3 bg-mine-shaft-600 rounded-xl'>
                    <CompanyLogo company={props.company} />
                </div>
                <div className='p-1'>
                    <div className='font-medium text-lg'>{props.company}</div>

                    <div className='text-mine-shaft-300'>10k+ Employee</div>
                </div>
            </div>
                <Link to={`/company-page/${props.company}`} >
                <Button color="bright-sun.4" size="sm" variant="light">Company Page</Button>
                </Link>
            </div>
            <div className='text-mine-shaft-300 mb-2 p-1 text-justify xs-mx:text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo, aut vero dolorem dicta eaque. Maiores aliquam eveniet autem mollitia voluptatibus aut assumenda? Sequi at quas doloribus quos blanditiis magni eveniet quod perferendis non in inventore deleniti, tempora exercitationem aperiam.
            </div>
            </div>
        </div>
    </div>
    )
}

export default JobDesc