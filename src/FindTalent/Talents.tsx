import React from 'react';
import Sort from '../Findjobs/Sort';
import TalentCard from './TalentCard';
import { talents } from '../Data/TalentData';

const Talents = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Talents</div>
        <Sort />
      </div>
      <div className="flex justify-center flex-wrap gap-5 pt-10">
        {talents.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default Talents;
