
import React from 'react'
import CompanyLogo from '../CompanyLogo';
import Utilites from '../../Services/Utilites';

const CertfCard = (props:any) => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
            <div className="p-2 bg-mine-shaft-800 rounded-md">
            <CompanyLogo company={props.name.split(" ")[0]} />
            </div>
            <div className="flex flex-col">
                <div className="font-semibold">{props.name}</div>
                <div className='text-md text-mine-shaft-300 flex gap-1'>{props.issuer}</div>
            </div>
            </div>
            <div className="flex flex-col items-end ">
            <div className="text-sm text-mine-shaft-300">{Utilites.formatDate(props.issueDate)}</div>
            <div className="text-sm text-mine-shaft-300">{props.certificateId}</div>
            </div>
        </div>
      );
      
}

export default CertfCard