import {  Divider} from '@mantine/core';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import CompanyLogo from '../CompanyLogo';
import Utilites from '../../Services/Utilites';
import ApplicationForm from './ApplicationForm';

const ApplyJob: React.FC = (props:any) => {

    return (
        <>
            <div className='w-2/3 bs-mc:4/5 sm-mx:w-full mx-auto'>
                <div className='flex flex-wrap justify-between'>
                    <div className='flex flex-wrap gap-2 items-center'>
                        <div className='p-3 bg-mine-shaft-600    rounded-xl'>
                        <CompanyLogo company={props.company} />
                        </div>
                        <div className='p-1'>
                            <div className='font-semibold text-2xl'>Job Title</div>
                            <div className='text-lg text-mine-shaft-300 flex-wrap sx-mx:text-sm'>{props.company} &bull;{Utilites.timeAgo(props.postTime)}  &bull; {props.applicants?props.applicants.length:0}</div>
                        </div>
                    </div>
                </div>
                <Divider size='xs' my='xl' color='mine-shaft.7' orientation='horizontal' />
                <ApplicationForm />
            </div>
        </>
    )
};

export default ApplyJob;
