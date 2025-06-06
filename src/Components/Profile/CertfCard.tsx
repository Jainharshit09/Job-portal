import { ActionIcon } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import React from 'react';
import CompanyLogo from './CompanyLogo';
import { useDispatch, useSelector } from 'react-redux';
import NotificationClass from '../../Services/NotificationClass';
import { changeProfile } from '../../Slice/ProfileSlice';
import Utilites from '../../Services/Utilites';

const CertfCard = (props: any) => {
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const updatedCerts = profile.certifications.filter((_: any, i: number) => i !== props.index);
    dispatch(changeProfile({ ...profile, certifications: updatedCerts }));
    NotificationClass.successNotification('Success', 'Certification deleted successfully');
  };
  

  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-10 items-center w-full">
        <div className="p-2 bg-mine-shaft-950 rounded-md">
          <CompanyLogo company={props.issuer} />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold">{props.name}</div>
          <div className="text-md text-mine-shaft-300">{props.issuer}</div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 w-full max-w-[250px]">
        <div className="flex flex-col items-end">
          <div className="text-sm text-mine-shaft-300">{Utilites.formatDate(props.issueDate)}</div>
          <div className="text-sm text-mine-shaft-300">{props.certificateId}</div>
        </div>
        {props.edit && (
          <ActionIcon color="red.8" size="lg" variant="subtle" onClick={handleDelete}>
            <IconTrash className="h-4/5 w-4/5" />
          </ActionIcon>
        )}
      </div>
    </div>
  );
};

export default CertfCard;
