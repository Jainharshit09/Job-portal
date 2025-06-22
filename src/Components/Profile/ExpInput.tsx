import React, { useMemo, useCallback } from 'react';
import SelectInput from './SelectInput';
import fields from '../../Data/Profile';
import { Button, Checkbox, Textarea } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { isNotEmpty, useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../../Slice/ProfileSlice';
import NotificationClass from '../../Services/NotificationClass';

const ExpInput = ({
  add,
  index,
  setEdit,
  title = '',
  company = '',
  location = '',
  description = '',
  startDate,
  endDate,
  working = false,
}: any) => {
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
  const select = fields;

  const initialValues = useMemo(() => ({
    title,
    company,
    location,
    description,
    startDate: startDate ? new Date(startDate) : new Date(),
    endDate: endDate ? new Date(endDate) : new Date(),
    working,
  }), [title, company, location, description, startDate, endDate, working]);

  const form = useForm({
    mode: 'controlled',
    validateInputOnChange: true,
    initialValues,
    validate: {
      title: isNotEmpty('Title is required'),
      company: isNotEmpty('Company is required'),
      location: isNotEmpty('Location is required'),
      description: isNotEmpty('Description is required'),
    },
  });

  const handleSave = useCallback(() => {
    form.validate();
    if (!form.isValid()) return;

    const { startDate, endDate, working, ...rest } = form.getValues();

    const newExp = {
      ...rest,
      startDate: startDate.toISOString(),
      endDate: working ? null : endDate.toISOString(),
      working,
    };

    const updatedExperiences = add
      ? [...(profile.experiences || []), newExp]
      : profile.experiences.map((exp: any, i: number) => (i === index ? newExp : exp));

    dispatch(changeProfile({ ...profile, experiences: updatedExperiences }));
    NotificationClass.successNotification('Success', 'Experience Updated Successfully');
    setEdit(false);
  }, [form, profile, add, index, dispatch, setEdit]);

  return (
    <div className="flex flex-col gap-5 p-3 sm-mx:p-2 xsm-mx:p-1">
      <div className="text-lg sm:text-base xsm:text-sm font-semibold">{add ? 'Add' : 'Edit'} Experience</div>

      <div className="flex gap-10 sm-mx:gap-4 xsm-mx:gap-2 [&>*]:w-1/2 sm-mx:flex-col sm-mx:[&>*]:w-full">
        <SelectInput name="title" form={form} {...select[0]} />
        <SelectInput name="company" form={form} {...select[1]} />
      </div>

      <SelectInput name="location" form={form} {...select[2]} />
      <Textarea
        className="w-full text-lg sm:text-base xsm:text-sm"
        withAsterisk
        autosize
        label="Job Summary"
        minRows={3}
        placeholder="Tell us about your previous experience"
        {...form.getInputProps('description')}
      />

      <div className="flex gap-10 sm-mx:gap-4 xsm-mx:gap-2 [&>*]:w-1/2 sm-mx:flex-col sm-mx:[&>*]:w-full">
        <MonthPickerInput
          {...form.getInputProps('startDate')}
          maxDate={form.values.endDate || undefined}
          withAsterisk
          label="Start Date"
          placeholder="Pick date"
        />

        <MonthPickerInput
          {...form.getInputProps('endDate')}
          disabled={form.values.working}
          minDate={form.values.startDate || undefined}
          maxDate={new Date()}
          withAsterisk
          label="End Date"
          placeholder={form.values.working ? 'Present' : 'Pick date'}
        />
      </div>

      <Checkbox
        label="Currently working here"
        autoContrast
        checked={form.values.working}
        onChange={(e) => form.setFieldValue('working', e.currentTarget.checked)}
        className="text-base sm:text-sm xsm:text-xs"
      />

      <div className="flex gap-5 sm-mx:gap-3 xsm-mx:gap-2 sm-mx:flex-col">
        <Button color="green.8" onClick={handleSave} variant="light" className="sm-mx:w-full">
          Update
        </Button>
        <Button color="red.8" variant="light" onClick={() => setEdit(false)} className="sm-mx:w-full">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ExpInput;
