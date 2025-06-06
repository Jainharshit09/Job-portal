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
                }
                else{
                    setEdit(false);
                }
            };
        
        const handleSave = () => {
            setEdit(false);
            let update = { ...profile, ...form.getValues() };
            dispatch(changeProfile(update));
            console.log(update);
            NotificationClass.successNotification("Success", "About Updated Successfully");
        };

    return (
        <div>
        <div className='text-2xl font-bold mb-3 flex justify-between'>
        About
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
        <div className='flex p-3 gap-10'>
            <Textarea
            className='w-full'
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
        <div className='text-s text-mine-shaft-300 text-justify'>{profile.about}</div>
        )}
    </div>
    )
    }

    export default About


