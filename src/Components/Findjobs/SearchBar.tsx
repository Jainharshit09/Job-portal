import React, { useState } from 'react'
import MultiSelectCreatable from './MultiSelectCreatable'
import { dropdownData } from '../../Data/JobsData'
import { Button, Collapse, Divider, RangeSlider } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { updateFilter } from '../../Slice/FilterSlice'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

const SearchBar = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const [value, setValue] = useState<[number, number]>([1, 300]);
    const dispatch=useDispatch();
    const handleChange=(event:any)=>{
        dispatch(updateFilter({salary:event}));
    }
    const matches = useMediaQuery('(max-width:450px)');
    return (
        <div>
            <div className='flex justify-end'>
            { matches &&<Button variant='outline' m="sm" radius="md" color='bright-sun.4'  onClick={toggle}>{opened?"Filters":"Close"}</Button>}
            </div>
        <Collapse in={!(opened && matches)}>
        <div className='flex  lg-mx:flex-wrap lg-mx:gap-1   px-5 py-8'>
            {
                dropdownData.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className='w-1/5 lg-mx:w-1/4 md-mx:w-[31%]  sm-mx:w-[48%] xsm-mx:w-full'>
                            <MultiSelectCreatable {...item} />
                        </div>
                        <Divider className='sm-mx:hidden' mr="xs" size='xs' color='mine-shaft.1' orientation="vertical" />
                    </React.Fragment>
                ))
            }
            <div className='w-1/5 lg-mx:w-1/4 md-mx:w-1/3 sm-mx:w-[50%] xsm-mx:w-full text-sm text-mine-shaft-300 [&_.mantine-Slider-label]:!translate-y-10'>
                <div className='flex  mb-1 justify-between'>
                    <div>Salary</div>
                    <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
                </div>
                <RangeSlider size="xs" color='bright-sun.4'
                    labelTransitionProps={{
                        transition: 'skew-down',
                        duration: 200,
                        timingFunction: 'ease',
                    }} value={value} onChange={setValue} onChangeEnd={(e) => handleChange(e)} min={1} max={300} minRange={10}/>
            </div>
        </div>
        </Collapse>
        </div>
    )
}

export default SearchBar
