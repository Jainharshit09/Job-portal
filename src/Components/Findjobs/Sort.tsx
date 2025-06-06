import React, { useState } from 'react';
import { Combobox, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { updateSort } from '../../Slice/SortSlice';

const opt = ['Relevance', 'Most Recent', 'Salary(Low to High)', 'Salary(High to Low)'];
const tanlent_sort=['Relevance', 'Experience(Low to High)', 'Experience(High to Low)'];

function Sort(props:any) {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
  const dispatch = useDispatch();
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = props.sort==="job"?opt.map((item) => (
    <Combobox.Option className='!text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  )):tanlent_sort.map((item) => (
    <Combobox.Option className='!text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>));


  // Toggle dropdown
  function handleinput() {
    combobox.toggleDropdown(); // Add parentheses to call the function
  } 

  return (
    <>
      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          dispatch(updateSort(val));
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div>
            <div 
              onClick={handleinput} 
              className='gap-2 text-sm border border-bright-sun-400 flex px-2 py-1 items-center rounded-xl justify-between hover:cursor-pointer'
            >
              {selectedItem} <IconAdjustments className='h-5 w-5 text-bright-sun-400' size={14} />
            </div>
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}

export default Sort;
