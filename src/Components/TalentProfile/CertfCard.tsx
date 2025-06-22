import React from 'react'
import CompanyLogo from '../CompanyLogo';
import Utilites from '../../Services/Utilites';

const CertfCard = (props:any) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 py-2">
            <div className="flex gap-3 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md flex-shrink-0">
                    <CompanyLogo company={props.name.split(" ")[0]} />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold text-base sm:text-lg">{props.name}</div>
                    <div className='text-sm sm:text-md text-mine-shaft-300 flex gap-1'>{props.issuer}</div>
                    {/* Show date and ID below issuer on mobile */}
                    <div className="flex flex-col mt-1 sm:hidden">
                        <span className="text-xs text-mine-shaft-300">{Utilites.formatDate(props.issueDate)}</span>
                        <span className="text-xs text-mine-shaft-300">{props.certificateId}</span>
                    </div>
                </div>
            </div>
            {/* On desktop, show date and ID on the right */}
            <div className="hidden sm:flex flex-col items-end mt-2 sm:mt-0">
                <div className="text-xs sm:text-sm text-mine-shaft-300">{Utilites.formatDate(props.issueDate)}</div>
                <div className="text-xs sm:text-sm text-mine-shaft-300">{props.certificateId}</div>
            </div>
        </div>
      );
}

export default CertfCard