import { ActionIcon, TagsInput } from '@mantine/core';
import { IconCheck, IconX, IconPencil } from '@tabler/icons-react';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import NotificationClass from '../../Services/NotificationClass';
import { changeProfile } from '../../Slice/ProfileSlice';

const Skill = () => {
    const profile = useSelector((state: any) => state.profile);
    const dispatch = useDispatch();
    
    const [edit, setEdit] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);
        const handleClick = () => {
            if (!edit) {
                setEdit(true);
                setSkills( profile.skills);
            }
            else{
                setEdit(false);
            }
        };
    
    const handleSave = () => {
        setEdit(false);
        let update = { ...profile,skills:skills };
        dispatch(changeProfile(update));
        console.log(update);
        NotificationClass.successNotification("Success", "Skills Updated Successfully");
    };
  return (
    <div>
                <div className='text-2xl font-bold mb-3 flex justify-between'>
          Skills
          <div>
                    {edit && <ActionIcon color="green.8" size="lg" variant="subtle" onClick={handleSave}>
                        <IconCheck color="green" className="h-4/5 w-4/5 " />
                    </ActionIcon>}
                    <ActionIcon color={edit ?'red.5':'bright-sun.3'} size="lg" variant="subtle" onClick={handleClick}>
                        {edit ? <IconX color="red" className="h-4/5 w-4/5  " /> : <IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>
        </div>
        {edit ? (
          <div className='flex p-3 gap-10 '>
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
  )
}

export default Skill