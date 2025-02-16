import React, { useState } from 'react';
import { Divider, Input, RangeSlider } from '@mantine/core';
import MultiSelectCreatable from '../Findjobs/MultiSelectCreatable';
import { searchFields } from '../../Data/TalentData';
import { IconUserCircle } from '@tabler/icons-react';

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([2, 100]);

  return (
    <div className="flex items-center px-5 py-8 text-mine-shaft-300 space-x-4">
      <div className='flex items-center space-x-2'>
        <div className='text-bright-sun-400 bg-mine-shaft-700 p-1 rounded-full'>
          <IconUserCircle size={20} />
        </div>
        <Input
          className='text-mine-shaft-300 placeholder-mine-shaft-200'
          variant="unstyled"
          placeholder="Talent Name"
          styles={{
            input: {
                '::placeholder': {
                  color: '#d1d1d1', // mine-shaft-200 color
                },
              },
            }}
        />
      </div>
      {searchFields.map((item, index) => (
        <React.Fragment key={index}>
          <div className="w-1/5">
            <MultiSelectCreatable
              title={item.title}
              icon={item.icon}
              options={item.options} // Ensure 'options' instead of 'option'
            />
          </div>
          <Divider orientation="vertical" size="xs" color="mine-shaft.1" />
        </React.Fragment>
      ))}
      <div className="w-1/5 text-sm text-mine-shaft-300">
        <div className="flex justify-between">
          <div>Salary</div>
          <div>
            &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
          </div>
        </div>
        <RangeSlider
          size="xs"
          color="bright-sun.4"
          labelTransitionProps={{
            transition: 'skew-down',
            duration: 200,
            timingFunction: 'ease',
          }}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default SearchBar;