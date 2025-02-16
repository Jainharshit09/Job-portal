import { ActionIcon } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import React from 'react';
import formatDate from '../../Services/Utilites';

const CertfCard = (props: any) => {
    return (
        <div className="flex justify-between w-full">
            <div className="flex gap-10 items-center w-full">
                <div className="p-2 bg-mine-shaft-950 rounded-md">
                    <img className="h-7" src={`/Icons/${props.name.split(" ")[0]}.png`} alt={props.name.split(" ")[0]} />
                </div>
                
                <div className="flex flex-col">
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-md text-mine-shaft-300 flex gap-1">{props.issuer}</div>
                </div>
            </div>

            <div className="flex justify-between items-center gap-4 w-full max-w-[250px]">
                <div className="flex flex-col items-end">
                    <div className="text-sm text-mine-shaft-300">{formatDate(props.issueDate)}</div>
                    <div className="text-sm text-mine-shaft-300">{props.certificateId}</div>
                </div>

                {props.edit &&<ActionIcon color="red.8" size="lg" variant="subtle">
                    <IconTrash className="h-4/5 w-4/5" />
                </ActionIcon>}
            </div>
        </div>
    );
};

export default CertfCard;
