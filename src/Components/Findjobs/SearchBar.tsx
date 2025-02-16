import React, { useState } from 'react'
import MultiSelectCreatable from './MultiSelectCreatable'
import { dropdownData } from '../../Data/JobsData'
import { Divider, RangeSlider } from '@mantine/core'

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([2, 100]);
  return (
    <div className='flex  px-5 py-8'>
        {
            dropdownData.map((item, index) =><>
            <div key={index} className='w-1/5'>
            <MultiSelectCreatable{...item} />
        </div>
        <Divider mr="xs" size='xs' color='mine-shaft.1' orientation="vertical" />
        </>)
        }
        <div className='w-1/5 text-sm text-mine-shaft-300 [&_.mantine-Slider-label]:!translate-y-10 '>
        <div className='flex justify-between'>
            <div>Salary</div>
            <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
        </div>
        <RangeSlider size="xs" color='bright-sun.4'
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 200,
          timingFunction: 'ease',
        }} value={value}  onChange={setValue} />
        </div>
    </div>
  )
}

export default SearchBar