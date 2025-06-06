import { ActionIcon, NumberInput } from "@mantine/core";
import { IconPencil, IconBriefcase, IconMapPin, IconCheck, IconX } from "@tabler/icons-react";
import SelectInput from "./SelectInput";
import React, { useState } from "react";
import fields from "../../Data/Profile";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slice/ProfileSlice";
import NotificationClass from "../../Services/NotificationClass";

const Info = () => {
    const select = fields;
    const profile = useSelector((state: any) => state.profile);
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const handleClick = () => {
        if (!edit) {
            setEdit(true);
            form.setValues({ jobTitle: profile.jobTitle, company: profile.company, location: profile.location,experience:profile.experience });
        }
        else{
            setEdit(false);
        }
    };
    const form = useForm({
        mode: 'controlled',
        initialValues: { jobTitle: '', company: '', location: '', experience: 1,},
    });

    const handleSave = () => {
        setEdit(false);
        let update = { ...profile, ...form.getValues() };
        dispatch(changeProfile(update));
        console.log(update);
        NotificationClass.successNotification("Success", "Profile Updated Successfully");
    };

    return (
        <>
            <div className="flex justify-between text-3xl font-semibold">
                {user.name}
                <div>
                    {edit && <ActionIcon color="green.8" size="lg" variant="subtle" onClick={handleSave}>
                        <IconCheck color="green" className="h-4/5 w-4/5 " />
                    </ActionIcon>}
                    <ActionIcon color={edit ?'red.5':'bright-sun.3'} size="lg" variant="subtle" onClick={handleClick}>
                        {edit ? <IconX color="red" className="h-4/5 w-4/5 " /> : <IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>
            </div>
            {edit ? (
                <><div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput form={form} name="jobTitle" {...select[0]} />
                    <SelectInput form={form} name="company"  {...select[1]} />
                </div>
                <div className="flex mt-10 gap-10 [&>*]:w-1/2">
                    <SelectInput form={form} name="location"  {...select[2]} />
                    <NumberInput withAsterisk min={0} {...form.getInputProps("experience")}  label="Experience" />
                    </div>
                </>
            ) : (
                <>
                    <div className="text-xl flex gap-1 items-center">
                        <IconBriefcase className="h-5 w-5" /> {profile.jobTitle} &bull; {profile.company}
                    </div>
                    <div className="flex gap-1 text-s items-center text-mine-shaft-300">
                        <IconMapPin className="h-5 w-5" />{profile.location} 
                    </div>
                    <div className="flex gap-1 text-xs items-center text-mine-shaft-300">
                        <IconBriefcase className="h-5 w-5" /> Experience: {profile.experience} Yrs
                    </div>
                </>
            )}
        </>
    );
};

export default Info;