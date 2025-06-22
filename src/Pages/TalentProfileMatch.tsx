import { Button } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Profile from '../Components/TalentProfile/Profile';
import { profile } from '../Data/TalentData';
import RecommendTalent from '../Components/TalentProfile/RecommendTalent';
import ProfileService from '../Services/ProfileService';

const TalentProfileMatch = () => {
    const navigate = useNavigate();
    const [talentId, setTalentId] = React.useState<any[]>([]);
    useEffect(() => { 
        ProfileService.getAllProfiles().then((res: any) => {
            setTalentId(res);
        }).catch((err: any) => {
            console.log(err);
        })
    }, []);

    return (
        <div className='min-h-[100vh] bg-mine-shaft-900 font-[poppins] p-4'>
            <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={20} />} my="sm" color="bright-sun.4" variant="light">
                Back
            </Button>
            {/* Responsive layout: column on mobile, row on desktop */}
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className="w-full lg:w-2/3">
                    <Profile {...profile} />
                </div>
                <div className="w-full lg:w-1/3">
                    <RecommendTalent talents={talentId} />
                </div>
            </div>
        </div>
    )
}

export default TalentProfileMatch;