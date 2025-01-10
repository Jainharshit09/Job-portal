import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react';
import React from 'react'
import { Link } from 'react-router-dom';
import Profile from '../TalentProfile/Profile';
import { profile } from '../Data/TalentData';
import RecommendTalent from '../TalentProfile/RecommendTalent';



const TalentProfileMatch = () => {
    return (
        <div className='min-h-[100vh] bg-mine-shaft-900 font-[popins] p-4' >
            <Divider size='xs' color='mine-shaft.8' orientation="horizontal" />
            <Link className='my-4 inline-block' to="/find-talent">
                <Button leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light">
                    Back
                </Button>
            </Link>
            <div className='flex gap-5'>
                <Profile {...profile}/>
                <RecommendTalent/>
            </div>
    </div>
    )
}

export default TalentProfileMatch;