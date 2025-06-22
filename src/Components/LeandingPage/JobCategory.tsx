import { Carousel } from '@mantine/carousel';
import React, { useRef } from 'react';
import { jobCategory } from '../../Data/Data'; // Ensure this path is correct
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

import Autoplay from 'embla-carousel-autoplay';

const JobCategory = () => {
    const autoplay = useRef(Autoplay({ delay: 1000 }));
  return (
    <div className='mt-10 pb-5'>
      <div className='text-2xl sm:text-3xl md:text-4xl mb-3 font-semibold text-mine-shaft-100 text-center [&>span]:text-bright-sun-400'>
        Browse <span>Job</span> category
      </div>
      <div className="text-base sm:text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%]">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>
      <Carousel  slideSize="20.333333%" slidesToScroll={1} slideGap="md" loop
      className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-80 [&_button]:opacity-0 hover:[&_button]:opacity-100"     
      nextControlIcon={<IconArrowRight className='h-8  w-8 '/>}
      previousControlIcon={<IconArrowLeft className='h-8  w-8  ' />}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className='flex flex-col items-center w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 gap-2 border border-bright-sun-400 p-3 sm:p-4 md:p-5 hover:cursor-pointer my-3 hover:shadow-[0_0_10px_4px_rgba(255,215,0,0.5)] transition duration-500 ease-in-out rounded-lg'>
              <div className='p-2 bg-bright-sun-300 rounded-full'>
                <img src={`Category/${category.name}.png`} alt={category.name} className='h-10 w-10 sm:h-12 sm:w-12' />
              </div>
              <div className='text-mine-shaft-100 text-base sm:text-lg md:text-xl font-semibold'>{category.name}</div>
              <div className='text-xs sm:text-sm text-center text-mine-shaft-300'>{category.desc}</div>
              <div className='text-sm sm:text-base md:text-lg text-bright-sun-300'>{category.jobs}</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;