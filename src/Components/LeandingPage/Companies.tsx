import React from 'react';
import { companies } from '../../Data/Data';
import Marquee from 'react-fast-marquee';

const Companies = () => {
  return (
    <div className='mt-32 pb-5'>
      <div className='text-4xl mb-5 font-semibold text-mine-shaft-100 text-center [&>span]:text-bright-sun-400'>
        Trusted by <span>1000+</span> companies
      </div>
      <Marquee pauseOnHover={true} gradient={false} speed={20}>
        {companies.map((company, index) => (
          <div key={index} className='mx-8 px-2 py-1 hover:bg-mine-shaft-800 rounded-xl cursor-pointer'> 
            <img src={`/companies/${company}.png`} alt={company} className='h-14 w-20 ' />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
