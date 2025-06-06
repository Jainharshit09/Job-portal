import { Button, Divider } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import ExpCard from './ExpCard'
import CertfCard from './CertfCard'
import { useParams } from 'react-router-dom'
import ProfileService from '../../Services/ProfileService'

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
        <div className='w-2/3'>
            <div className='relative'>
                <img className='rounded-t-2xl' src='/Profile/banner.jpg' alt='banner'></img>
                <img
                    className='h-40 w-40 rounded-full -bottom-1/3 absolute left-3 border-8 border-mine-shaft-950 text-justify'
                    src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : '/avatar.png'}
                    alt="it's me"
                ></img>
            </div>
            <div className='px-3 mt-16'>
                <div className='flex justify-between text-3xl font-semibold'>{profile?.name}
                    <Button color="bright-sun.4" variant="light">
                        Message
                    </Button>
                </div>
                <div className='text-xl flex gap-1 items-center  '><IconBriefcase className="h-5 w-5" /> {profile?.jobTitle} &bull; {profile?.company}</div>
                <div className="flex gap-1 text-s items-center text-mine-shaft-300">
                    <IconMapPin className="h-5 w-5" />{profile?.location}
                </div>
                <div className="flex gap-1 text-xs items-center text-mine-shaft-300">
                                        <IconBriefcase className="h-5 w-5" /> Experience: {profile.experience} Yrs
                </div>
            </div>
            <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
            <div className='px-3'>
                <div className='text-2xl font-bold mb-3'>About</div>
                <div className='text-s text-mine-shaft-300 text-justify'>{profile?.about}
                </div>
            </div>
            <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
            <div className='px-3'>
                <div className='text-2xl font-bold mb-3'>Skills</div>
                <div className="flex flex-wrap gap-2">
                    {profile?.skills.map((skill: any, index: any) => (
                        <div
                            key={index}
                            className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
            <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
            <div className='px-3 '>
                <div className='text-2xl font-bold mb-5'>Experience</div>
                <div className='flex flex-col gap-8'>
                    {
                        profile?.experiences?.map((exp: any, index: any) => <ExpCard key={index} {...exp} />)
                    }
                </div>
            </div>
            <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
            <div className='px-3'>
                <div className='text-2xl font-bold mb-5'>Certification</div>
                <div className='flex flex-col gap-8'>
                    {
                        profile?.certifications?.map((cert: any, index: any) => <CertfCard key={index} {...cert} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile