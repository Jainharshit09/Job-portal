import React from 'react';
import { Button, TextInput } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { useForm, isNotEmpty } from '@mantine/form';
import SelectInput from './SelectInput';
import fields from '../../Data/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../../Slice/ProfileSlice';
import NotificationClass from '../../Services/NotificationClass';

const CertInput = (props: any) => {
    const dispatch = useDispatch();
    const profile = useSelector((state: any) => state.profile);
    const form = useForm({
        initialValues: { name: '', issuer: '', issueDate: new Date(), certificateId: '' },
        validate: {
            name: isNotEmpty('Title required'),
            issuer: isNotEmpty('Issuer required'),
            issueDate: isNotEmpty('Issue Date required'),
            certificateId: isNotEmpty('Certificate ID required'),
        },
    });
    const handleSave = () => {
        form.validate();
        if (!form.isValid()) return;
        let cert = [...profile.certifications];
        cert.push(form.getValues());
        cert[cert.length-1].issueDate = form.getValues().issueDate.toISOString();
        const updatedProfile = { ...profile, certifications: cert };
        dispatch(changeProfile(updatedProfile));
        NotificationClass.successNotification('Success', 'Certifications Updated Successfully');
        props.setEdit(false);
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Add Certificate</div>
            <form className="flex flex-col gap-3" onSubmit={form.onSubmit(handleSave)}>
                <div className="flex gap-10 sm-mx:gap-4 xsm-mx:gap-2 [&>*]:w-1/2 sm-mx:flex-col sm-mx:[&>*]:w-full">
                    <TextInput label="Title" withAsterisk {...form.getInputProps('name')} placeholder="Enter Title" />
                    <SelectInput {...fields[1]} form={form} name="issuer" />
                </div>
                <div className="flex gap-10 sm-mx:gap-4 xsm-mx:gap-2 [&>*]:w-1/2 sm-mx:flex-col sm-mx:[&>*]:w-full">
                    <MonthPickerInput
                        clearable
                        maxDate={new Date()}
                        label="Issued Date"
                        placeholder="Pick Date"
                        {...form.getInputProps('issueDate')}
                    />
                    <TextInput label="Certificate Id" withAsterisk {...form.getInputProps('certificateId')} placeholder="Enter ID" />
                </div>
                <div className="flex gap-5 sm-mx:gap-3 xsm-mx:gap-2 sm-mx:flex-col">
                    <Button color="green.8" variant="light" type="submit" className="sm-mx:w-full">
                        Update
                    </Button>
                    <Button color="red.8" variant="light" onClick={() => props.setEdit(false)} className="sm-mx:w-full">
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CertInput;
