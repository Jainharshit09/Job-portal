import React, { useState } from 'react'

const CompanyLogo = ({ company }: { company: string }) => {
  const [imgError, setImgError] = useState(false)
  const domain = `${company.replace(/\s+/g, '').toLowerCase()}.com`
  const logoUrl = `https://logo.clearbit.com/${domain}`

  return !imgError ? (
    <img
      className='h-7 w-7 object-contain'
      src={logoUrl}
      alt={company}
      onError={() => setImgError(true)}
    />
  ) : (
    <div className='h-7 w-7 flex items-center justify-center bg-blue-500 rounded-md text-white font-semibold uppercase'>
      {company.charAt(0)}
    </div>
  )
}

export default CompanyLogo
