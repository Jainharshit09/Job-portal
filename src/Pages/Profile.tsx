import { Divider } from '@mantine/core'
import React from 'react'
import ProfilePage  from '../Components/Profile/Profile'
import { profile } from '../Data/TalentData';

const Profile = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-900 font-[poppins] overflow-hidden">
        <Divider mx="md"  mb="xl" size="xs" color="mine-shaft.7"/>
        <ProfilePage {...profile}/>
    </div>
  )
}

export default Profile