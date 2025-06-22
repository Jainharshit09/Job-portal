import { ActionIcon, Textarea } from '@mantine/core'
import { IconCheck, IconPencil, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NotificationClass from '../../Services/NotificationClass'
import { changeProfile } from '../../Slice/ProfileSlice'
import { useForm } from '@mantine/form'

const About = () => {
    const profile = useSelector((state: any) => state.profile);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const form = useForm({
        mode: 'controlled',
        initialValues: { about: '' },
    });

    const handleClick = () => {
        if (!edit) {
            setEdit(true);
            form.setValues({ about: profile.about });
        } else {
            setEdit(false);
        }
    };

    const handleSave = () => {
        setEdit(false);
        let update = { ...profile, ...form.getValues() };
        dispatch(changeProfile(update));
        NotificationClass.successNotification("Success", "About Updated Successfully");
    };

    return (
        <div className="w-full">
            <div className='text-2xl font-bold mb-3 flex flex-wrap justify-between items-center gap-2'>
                <span>About</span>
                <div className="flex gap-2">
                    {edit && (
                        <ActionIcon color="green.8" size="lg" variant="subtle" onClick={handleSave}>
                            <IconCheck color="green" className="h-4/5 w-4/5" />
                        </ActionIcon>
                    )}
                    <ActionIcon color={edit ? 'red.5' : 'bright-sun.3'} size="lg" variant="subtle" onClick={handleClick}>
                        {edit ? (
                            <IconX color="red" className="h-4/5 w-4/5" />
                        ) : (
                            <IconPencil className="h-4/5 w-4/5" />
                        )}
                    </ActionIcon>
                </div>
            </div>
            {edit ? (
                <div className='flex p-3 gap-10 sm-mx:p-2 sm-mx:gap-4 xsm-mx:p-1 xsm-mx:gap-2'>
                    <Textarea
                        className='w-full text-base'
                        autosize={true}
                        value={form.values.about}
                        onChange={(event) => form.setFieldValue('about', event.currentTarget.value)}
                        name="about"
                        minRows={3}
                        maxRows={12}
                        placeholder="Tell us about yourself"
                    />
                </div>
            ) : (
                <div className='text-base text-mine-shaft-300 text-justify break-words'>{profile.about}</div>
            )}
        </div>
    )
}

export default About


