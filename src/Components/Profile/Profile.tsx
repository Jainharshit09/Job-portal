import { ActionIcon, Divider, Textarea, TagsInput } from '@mantine/core';
import {  IconDeviceFloppy,  IconPencil, IconPlus } from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';
import CertfCard from './CertfCard';
import ExpCard from './ExpCard';
import ExpInput from './ExpInput';
import CertInput from './CertInput';
import { useDispatch, useSelector } from 'react-redux';
import ProfileService from '../../Services/ProfileService';
import Info from './Info';
import { setProfile } from '../../Slice/ProfileSlice';

const Profile = (props: any) => {
  const dispatch = useDispatch();
  const user=useSelector((state:any)=>state.user);
  const profile=useSelector((state:any)=>state.profile);
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [value, setValue] = useState<string>(props.about || '');
  const [skills, setSkills] = useState<string[]>(props.skills || []);
  const [addExp, setAddExp] = useState(false);
  const[addCeti,setAddCert]=    useState(false)
  useEffect(() => {
    if (props.about) {
      setValue(props.about);
    }
    if (props.skills) {
      setSkills(props.skills);
    }
  }, [props.about, props.skills]);

  const handleEdit = (index: number) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
  useEffect(() => {
    ProfileService.getProfile(user.id).then((data: any) => {
      dispatch(setProfile(data));
    }).catch((err: any) => {
        console.log(err);
    });
  }, [user.id, dispatch]); 
  return (
    <div className='w-4/5 mx-auto'>
      <div className='relative'>
        <img className='rounded-t-2xl' src='/Profile/banner.jpg' alt='banner'></img>
        <img className='h-48 w-48 rounded-full -bottom-1/3 absolute left-3 border-8 border-mine-shaft-950 text-justify' src='/avatar.png' alt='banner'></img>
      </div>
      <div className='px-3 py-8 mt-12'>
        <Info/>
      </div>
      <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
      <div className='px-3'>
        <div className='text-2xl font-bold mb-3 flex justify-between'>
          About
          <ActionIcon color='bright-sun.3' size='lg' variant="subtle" onClick={() => handleEdit(1)}>
            {edit[1] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
          </ActionIcon>
        </div>
        {edit[1] ? (
          <div className='flex p-3 gap-10'>
            <Textarea
              className='w-full'
              value={value}
              autosize={true}
              minRows={3}
              maxRows={12}
              placeholder="Tell us about yourself"
              onChange={(event) => setValue(event.currentTarget.value)}
            />
          </div>
        ) : (
          <div className='text-s text-mine-shaft-300 text-justify'>{profile.about}</div>
        )}
      </div>
      <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
      <div className='px-3'>
        <div className='text-2xl font-bold mb-3 flex justify-between'>
          Skills
          <ActionIcon color='bright-sun.3' size='lg' variant="subtle" onClick={() => handleEdit(2)}>
            {edit[2] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
          </ActionIcon>
        </div>
        {edit[2] ? (
          <div className='flex p-3 gap-10 [&>*]:w-1/2'>
            <TagsInput
              value={skills}
              onChange={setSkills}
              data={[]}
              placeholder="Add Skill"
              splitChars={[',','|']}
            />
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {profile?.skills?.map((skill:any, index:number) => (
              <div
                key={index}
                className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
      <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
      <div className='px-3 '>
        <div className='text-2xl font-bold mb-5 flex justify-between'>
          Experience
          <div className='flex gap-2'>
          <ActionIcon color='bright-sun.3' size='lg' variant="subtle" onClick={() => setAddExp(true)}>
            <IconPlus className='h-4/5 w-4/5'/>
          </ActionIcon>
          <ActionIcon color='bright-sun.3' size='lg' variant="subtle" onClick={() => handleEdit(3)}>
            {edit[3] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
          </ActionIcon>
        </div>
        </div>
          <div className='flex flex-col gap-8'>
            {profile?.experiences?.map((exp: any, index: number) => <ExpCard key={index} {...exp} edit={edit[3]}/>)}
            {addExp &&<ExpInput add setEdit={setAddExp} />}
          </div>
      </div>
      <Divider size='xs' my="xl" color='mine-shaft.8' orientation="horizontal" />
      <div className='px-3 mb-5'>
        <div className='text-2xl font-bold mb-5 flex justify-between'>
          Certification
          <div className='flex gap-2'>
          <ActionIcon color='bright-sun.3' size='lg' variant="subtle" onClick={() => setAddCert (true)}>
            <IconPlus className='h-4/5 w-4/5'/>
          </ActionIcon>
          <ActionIcon color='bright-sun.3' size='lg' variant="subtle" onClick={() => handleEdit(4)}>
            {edit[4] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
          </ActionIcon>
          </div>
        </div> 
          <div className='flex flex-col gap-8'>
            {profile?.certifications?.map((cert: any, index: number) => <CertfCard key={index} edit={edit[4]} {...cert} />)}
            {
              addCeti && <CertInput setEdit={setAddCert}/>
            }
          </div>
        
      </div>
    </div>
  );
};

export default Profile;