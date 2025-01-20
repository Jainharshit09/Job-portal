import React from 'react';
import { companyData } from '../Data/Company';

const AboutComp = () => {
    const company: { [key: string]: any } = companyData;

    return (
        <div className="flex flex-col gap-6">
            {Object.keys(company).map((key, index) =>
                key !== 'Name' && (
                    <div key={index}>
                        <div className="text-xl mb-2 font-semibold">{key}</div>
                        {key !== 'Website' && (
                            <div className="text-sm text-mine-shaft-300 text-justify">
                                {key !== 'Specialties' ? (
                                    company[key]
                                ) : (
                                    <div className="flex flex-wrap gap-4">
                                        {company[key]?.map((item: string, index: number) => (
                                            <div className="flex flex-wrap text-sm" key={index}>
                                                &bull; {item}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                        {key === 'Website' && (
                            <a
                                href={company[key]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-bright-sun-300 text-justify"
                            >
                                {company[key]}
                            </a>
                        )}
                    </div>
                )
            )}
        </div>
    );
};

export default AboutComp;
