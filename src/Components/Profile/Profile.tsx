import { Avatar, Divider, FileInput, Overlay } from '@mantine/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Info from './Info'
import { changeProfile } from '../../Slice/ProfileSlice';
import About from './About';
import Skill from './Skill';
import Experience from './Experience';
import Certificate from './Certificate';
import { useHover } from '@mantine/hooks';
import { IconEdit } from '@tabler/icons-react';
import NotificationClass from '../../Services/NotificationClass';
import Utilites from '../../Services/Utilites';
const Profile = (props: any) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const { hovered, ref } = useHover();



  const handleFileChange = async (image:any) => {
    let picture:any=await Utilites.getBase64(image);
    let update = {...profile, picture:picture.split(',')[1]};
    dispatch(changeProfile(update));
    NotificationClass.successNotification('Success', 'Profile Image Updated Successfully');
  }
  return (
    <div className='w-4/5 mx-auto'>
      <div>
      <div className='relative'>
        <img className='rounded-t-2xl' src='/Profile/banner.jpg' alt='banner'></img>
        <div ref={ref} className='-bottom-1/3 absolute flex items-center justify-center left-3 '>
        <Avatar className='!h-48 !w-48 rounded-full  border-8 border-mine-shaft-950' src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : '/avatar.png'} alt='banner' />
        {hovered && <Overlay  className="!rounded-full" color="#000" backgroundOpacity={0.75} />}
        {hovered &&<IconEdit className='absolute z-[300] !w-16 !h-16'/>}
        {hovered && (
        <FileInput
          className="absolute [&_*]:!h-full !h-full z-[301] w-full [&_*]:rounded-full "
          variant='transparent'
          onChange={handleFileChange}
          accept="image/png,image/jpeg"
        />
      )}

        </div>
      </div>
      </div>
      <div className='px-3 py-8 mt-12'>
        <Info/>
      </div>
      <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
      <div className='px-3'>
        <About/>
      </div>
      <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
      <div className='px-3'>
        <Skill/>
      </div>
      <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
      <div className='px-3 '>
        <Experience/>
      </div>
      <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
      <div className='px-3 mb-5'>
         <Certificate/>  
      </div>
    </div>
  );
};

export default Profile;