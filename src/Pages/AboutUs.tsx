import { Divider } from '@mantine/core'
import React from 'react'
import AboutPage from '../Components/About/AboutPage'

const AboutUs = () => {
  return (
        <div className='min-h-[100vh] bg-mine-shaft-900 font-[poppins]'>
         <Divider mx="md" size='xs' color='mine-shaft.7' orientation="horizontal" />
         <AboutPage />
    </div>
  )
}

export default AboutUs