import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconBookmark} from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { card, desc, skills } from '../Data/JobDescData'
import DOMPurifiy from 'dompurify';
const JobDesc = (props:any) => {
    const data=DOMPurifiy.sanitize(desc);
return (
    <div className="w-2/3">
            <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                <div className='p-3 bg-mine-shaft-600 rounded-xl'>
                    <img className='h-14' src={`/Icons/Google.png`} alt="Google" />
                </div>
                <div className='p-1'>
                    <div className='font-semibold text-2xl'>Job Title</div>

                    <div className='text-lg text-mine-shaft-300'>Company &bull; 3 Days Ago &bull;  48 Applicants</div>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <Link to="/apply-job" >
                <Button color="bright-sun.4" size="sm" variant="light">{props.edit?"Edit":"Apply"}</Button>
                </Link>
                {props.edit ? <Button color="red.5" size="sm" variant="outline">Delete</Button> : <IconBookmark className='text-bright-sun-400 hover:cursor-pointer'  stroke={1.5}/>}
            </div>
        </div>
        <Divider size='xs' my="xl" color='mine-shaft.7' orientation="horizontal" />
        <div className='flex justify-between mb-5'>
            {card.map((item, index) => (
                <div key={index} className='flex flex-col items-center gap-1'>
                    <ActionIcon color='bright-sun.4' className='!h-12 !w-12' variant="light" radius="xl" aria-label={item.name}>
                        <item.icon className='h-4/5 w-4/5' stroke={1.5} />
                    </ActionIcon>
                    <div className='text-sm text-mine-shaft-300'>
                        {item.name}
                    </div>
                    <div className='font-semibold'>
                        {item.value}
                    </div>
                </div>
            ))}
        </div>
        <Divider size='xs' my="xl" color='mine-shaft.7' orientation="horizontal" />
        <div className='flex flex-col p-1'>
            <div className='text-xl font-semibold mb-5'>Required Skills</div>
            <div className='flex flex-wrap gap-4'>
                {
                    skills.map((item, index) => (
                        <ActionIcon key={index} color='bright-sun.4' className='!h-fit !text-sm !font-medium !w-fit' p="xs" variant="light" radius="xl" aria-label={item}>
                            {item}
                        </ActionIcon>
                    ))
                }
                </div>
        </div>
        <Divider size='xs' my="xl" color='mine-shaft.7' orientation="horizontal" />
        <div className='[&_h4]:text-xl [&_h4]:font-semibold [&_h4]:my-5 [&_h4]:text-mine-shaft-200 [&_li]:mb-1 [&_li]:marker:text-bright-sun-400 [&_*]:text-mine-shaft-300 [&_p]:text-justify' dangerouslySetInnerHTML={{__html:data}}>
        </div>
        <Divider size='xs' my="xl" color='mine-shaft.7' orientation="horizontal" />
        <div>
        <div className='text-xl font-semibold mb-5'>About Company</div>
            <div>
            <div className='flex justify-between mb-2'>
            <div className='flex gap-2 items-center'>
                <div className='p-3 bg-mine-shaft-600 rounded-xl'>
                    <img className='h-8' src={`/Icons/Google.png`} alt="Google" />
                </div>
                <div className='p-1'>
                    <div className='font-medium text-lg'>Google</div>

                    <div className='text-mine-shaft-300'>10k+ Employee</div>
                </div>
            </div>
                <Link to="/company-page" >
                <Button color="bright-sun.4" size="sm" variant="light">Company Page</Button>
                </Link>
            </div>
            <div className='text-mine-shaft-300 mb-2 p-1 text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo, aut vero dolorem dicta eaque. Maiores aliquam eveniet autem mollitia voluptatibus aut assumenda? Sequi at quas doloribus quos blanditiis magni eveniet quod perferendis non in inventore deleniti, tempora exercitationem aperiam.
            </div>
            </div>
        </div>
    </div>
    )
}

export default JobDesc