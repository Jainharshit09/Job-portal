import React, { useState } from 'react';
import { Button, Collapse, Divider, Input, RangeSlider } from '@mantine/core';
import MultiSelectCreatable from '../Findjobs/MultiSelectCreatable';
import { searchFields } from '../../Data/TalentData';
import { IconUserCircle } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../Slice/FilterSlice';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

const SearchBar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [value, setValue] = useState<[number, number]>([0, 50]);
  const[name,setName]=useState<string>('');
  const dispatch=useDispatch();
  const matches = useMediaQuery('(max-width:450px)');
  const handleChange=(name:any,event:any)=>{
    if(name==='exp'){
      dispatch(updateFilter({exp:event}));
    }
    else{
      setName(event.currentTarget.value);
      dispatch(updateFilter({name:event.currentTarget.value}));
    }
  }
  return (
     <div>
        <div className='flex justify-end'>
          { matches &&<Button variant='outline' m="sm" radius="md" color='bright-sun.4'  onClick={toggle}>{opened?"Filters":"Close"}</Button>}
        </div>
      <Collapse in={!(opened && matches)}>
      <div className="flex llg-mx:flex-wrap gap-1 items-center px-5 py-8 text-mine-shaft-300 ">
      <div className='flex ml-1 items-center gap-2 w-1/5 llg--mx:w-1/4 md-mx:w-[31%]  sm-mx:w-[48%] xsm-mx:w-full'>
        <div className='text-bright-sun-400 bg-mine-shaft-700  rounded-full'>
          <IconUserCircle size={20} />
        </div>
        <Input
          className='text-mine-shaft-300 placeholder-mine-shaft-200'
          variant="unstyled"
          defaultValue={name}
          onChange={(e) => handleChange('name',e)}
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
          <div className="w-1/5 llg-mx:w-1/4 md-mx:w-[31%]  sm-mx:w-[48%] xsm-mx:w-full">
            <MultiSelectCreatable
              title={item.title}
              icon={item.icon}
              options={item.options} // Ensure 'options' instead of 'option'
            />
          </div>
          <Divider className='sm-mx:hidden' orientation="vertical" size="xs" color="mine-shaft.1" />
        </React.Fragment>
      ))}
      <div className="w-1/5 mt-1  llg-mx:w-1/4 md-mx:w-[31%]  sm-mx:w-[48%] xsm-mx:w-full text-sm text-mine-shaft-300">
        <div className="flex justify-between">
          <div>Experience (Year)</div>
          <div>
            {value[0]}  - {value[1]} 
          </div>
        </div>
        <RangeSlider
        onChangeEnd={(e) => handleChange("exp",e)}
          size="xs"
          color="bright-sun.4"
          labelTransitionProps={{
            transition: 'skew-down',
            duration: 100,
            timingFunction: 'ease',
          }}
          min={1}
          max={50}
          minRange={1}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
   </Collapse>
    </div>
  );
};

export default SearchBar;