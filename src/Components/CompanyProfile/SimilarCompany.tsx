import React from 'react'
import { similar } from '../../Data/Company'
import CompanyCard from './CompanyCard'

const SimilarCompany = () => {
  return (
    <div className='w-1/4'>
    <div className='text-xl font-semibold mb-5'>
        Similar Companies
    </div>
    <div className='flex flex-col flex-wrap gap-5'>
    {
        similar.map((talent, index) => 
            <CompanyCard key={index} {...talent} /> 
        )
    }
    </div>
</div>
  )
}

export default SimilarCompany