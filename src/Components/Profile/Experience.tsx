// Experience.tsx
import { ActionIcon } from '@mantine/core';
import { IconPlus, IconPencil, IconX } from '@tabler/icons-react';
import React, { useState } from 'react';
import ExpCard from './ExpCard';
import ExpInput from './ExpInput';
import { useSelector } from 'react-redux';

const Experience = () => {
  const profile = useSelector((state: any) => state.profile);
  const [edit, setEdit] = useState(false);
  const [addExp, setAddExp] = useState(false);

  const handleClick = () => setEdit((prev) => !prev);

  const experiences = Array.isArray(profile.experiences) ? profile.experiences : [];

  return (
    <div className="w-full">
      <div className="text-2xl sm:text-xl xsm:text-lg font-bold mb-5 flex flex-wrap justify-between items-center gap-2">
        <span>Experience</span>
        <div className="flex gap-2">
          <ActionIcon
            color="bright-sun.3"
            size="lg"
            variant="subtle"
            onClick={() => setAddExp(true)}
          >
            <IconPlus className="h-4/5 w-4/5" />
          </ActionIcon>
          <ActionIcon
            color={edit ? 'red.5' : 'bright-sun.3'}
            size="lg"
            variant="subtle"
            onClick={handleClick}
          >
            {edit ? <IconX color="red" className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
          </ActionIcon>
        </div>
      </div>
      <div className="flex flex-col gap-8 sm-mx:gap-5 xsm-mx:gap-3">
        {experiences.map((exp: any, index: number) => (
          <ExpCard key={index} index={index} {...exp} edit={edit} />
        ))}
        {addExp && <ExpInput add setEdit={setAddExp} />}
      </div>
    </div>
  );
};

export default Experience;

