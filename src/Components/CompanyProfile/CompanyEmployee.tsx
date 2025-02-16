import React from 'react'
import { talents } from '../../Data/TalentData'
import TalentCard from '../FindTalent/TalentCard'

const CompanyEmployee = () => {
  return (
    <div className="flex justify-center flex-wrap gap-5 pt-10">
        {talents.map((talent, index) => index<6 && (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
  )
}

export default CompanyEmployee