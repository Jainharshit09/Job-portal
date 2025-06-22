import React from 'react';
import { companies } from '../../Data/Data';
import Marquee from 'react-fast-marquee';

const Companies = () => {
  return (
    <div className='mt-32 pb-5'>
      <div className='text-4xl mb-5 font-semibold text-mine-shaft-100 text-center [&>span]:text-bright-sun-400 sm-mx:text-3xl xsm-mx:text-2xl'>
        Trusted by <span>1000+</span> companies
      </div>
      <Marquee pauseOnHover={true} gradient={false} speed={20}>
        {companies.map((company, index) => (
          <div
            key={index}
            className='mx-8 px-2 py-1 hover:bg-mine-shaft-800 rounded-xl cursor-pointer sm-mx:mx-4 xsm-mx:mx-2'
          >
            <img
              src={`/companies/${company}.png`}
              alt={company}
              className='h-14 w-20 sm-mx:h-10 sm-mx:w-14 xsm-mx:h-8 xsm-mx:w-10'
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
