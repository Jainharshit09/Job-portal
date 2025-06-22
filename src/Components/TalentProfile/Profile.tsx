import { Button, Divider } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import ExpCard from './ExpCard'
import CertfCard from './CertfCard'
import { useParams } from 'react-router-dom'
import ProfileService from '../../Services/ProfileService'
import RecommendTalent from './RecommendTalent';

const Profile = (props: any) => {
    const { id } = useParams();
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true); 

    useEffect(() => {
        window.scrollTo(0, 0);
        ProfileService.getProfile(id)
            .then((res: any) => {
                setProfile(res);
                setLoading(false); 
            })
            .catch((err: any) => {
                console.log(err);
                setLoading(false); 
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (!profile) {
        return <div>Profile not found</div>; 
    }

    return (
        <div className='w-full max-w-4xl mx-auto bg-transparent'>
            <div className='relative'>
                <img className='rounded-t-2xl w-full h-40 sm:h-56 md:h-64 object-cover' src='/Profile/banner.jpg' alt='banner' />
                <img
                    className='h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 rounded-full -bottom-14 sm:-bottom-16 md:-bottom-20 absolute left-4 sm:left-8 md:left-12 border-8 border-mine-shaft-950 bg-white object-cover'
                    src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : '/avatar.png'}
                    alt="it's me"
                />
            </div>
            <div className='px-3 mt-20 sm:mt-24 md:mt-28'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-2xl sm:text-3xl font-semibold'>
                    <span>{profile?.name}</span>
                    <Button color="bright-sun.4" variant="light" className="w-full sm:w-auto mt-2 sm:mt-0">
                        Message
                    </Button>
                </div>
                <div className='text-lg sm:text-xl flex flex-wrap gap-1 items-center mt-2'>
                    <IconBriefcase className="h-5 w-5" /> {profile?.jobTitle} &bull; {profile?.company}
                </div>
                <div className="flex gap-1 text-xs sm:text-sm items-center text-mine-shaft-300 mt-1">
                    <IconMapPin className="h-5 w-5" />{profile?.location}
                </div>
                <div className="flex gap-1 text-xs items-center text-mine-shaft-300 mt-1">
                    <IconBriefcase className="h-5 w-5" /> Experience: {profile.experience} Yrs
                </div>
            </div>
            <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
            <div className='px-3'>
                <div className='text-xl sm:text-2xl font-bold mb-3'>About</div>
                <div className='text-xs sm:text-sm text-mine-shaft-300 text-justify'>{profile?.about}</div>
            </div>
            <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
            <div className='px-3'>
                <div className='text-xl sm:text-2xl font-bold mb-3'>Skills</div>
                <div className="flex flex-wrap gap-2">
                    {profile?.skills.map((skill: any, index: any) => (
                        <div
                            key={index}
                            className="bg-bright-sun-300 text-xs sm:text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
            <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
            <div className='px-3'>
                <div className='text-xl sm:text-2xl font-bold mb-5'>Experience</div>
                <div className='flex flex-col gap-8'>
                    {
                        profile?.experiences?.map((exp: any, index: any) => <ExpCard key={index} {...exp} />)
                    }
                </div>
            </div>
            <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
            <div className='px-3'>
                <div className='text-xl sm:text-2xl font-bold mb-5'>Certification</div>
                <div className='flex flex-col gap-8'>
                    {
                        profile?.certifications?.map((cert: any, index: any) => <CertfCard key={index} {...cert} />)
                    }
                </div>
            </div>
            {/* Recommended Talent Section */}
           
        </div>
    )
}

export default Profile