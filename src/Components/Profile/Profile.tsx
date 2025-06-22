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

  const handleFileChange = async (image: any) => {
    let picture: any = await Utilites.getBase64(image);
    let update = { ...profile, picture: picture.split(',')[1] };
    dispatch(changeProfile(update));
    NotificationClass.successNotification('Success', 'Profile Image Updated Successfully');
  }

  return (
    <div className='w-4/5 bs-mx:w-11/12 sm-mx:w-full mx-auto'>
      <div className='p-5 sm-mx:p-3 xsm-mx:p-1'>
        <div className='relative'>
          <img className='rounded-t-2xl w-full h-56 sm-mx:h-40 xsm-mx:h-28 object-cover' src='/Profile/banner.jpg' alt='banner' />
          <div
            ref={ref}
            className='absolute flex items-center justify-center left-3 sm-mx:left-1 xsm-mx:left-0 w-auto
              -bottom-1/3 bs-mx:-bottom-1/4 sm-mx:-bottom-10 sx-mx:-bottom-6 xsm-mx:-bottom-4'
          >
            <Avatar
              className='
                !h-48 !w-48 rounded-full
                bs-mx:!h-40 bs-mx:!w-40
                sm-mx:!h-32 sm-mx:!w-32
                sx-mx:!h-24 sx-mx:!w-24
                xsm-mx:!h-16 xsm-mx:!w-16
                border-8 border-mine-shaft-950
              '
              src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : '/avatar.png'}
              alt='banner'
            />
            {hovered && <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.75} />}
            {hovered && <IconEdit className='absolute z-[300] !w-16 !h-16 sm-mx:!w-10 sm-mx:!h-10 xsm-mx:!w-8 xsm-mx:!h-8' />}
            {hovered && (
              <FileInput
                className="absolute [&_*]:!h-full !h-full z-[301] w-full [&_*]:rounded-full"
                variant='transparent'
                onChange={handleFileChange}
                accept="image/png,image/jpeg"
              />
            )}
          </div>
        </div>
      </div>
      <div className='px-3 py-8 mt-12 sm-mx:mt-8 sx-mx:mt-4 xsm-mx:mt-2 sm-mx:px-2 xsm-mx:px-1'>
        <Info />
      </div>
      <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
      <div className='px-3 sm-mx:px-2 xsm-mx:px-1'>
        <About />
      </div>
      <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
      <div className='px-3 sm-mx:px-2 xsm-mx:px-1'>
        <Skill />
      </div>
      <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
      <div className='px-3 sm-mx:px-2 xsm-mx:px-1'>
        <Experience />
      </div>
      <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
      <div className='px-3 mb-5 sm-mx:px-2 xsm-mx:px-1'>
        <Certificate />
      </div>
    </div>
  );
};

export default Profile;