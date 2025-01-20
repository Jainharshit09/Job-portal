import React from 'react'
import DreamJob from '../LeandingPage/DreamJob';
import Companies from '../LeandingPage/Companies';
import JobCategory from '../LeandingPage/JobCategory';
import Working from '../LeandingPage/Working';
import Testimonials from '../LeandingPage/Testimonials';
import Subscribe from '../LeandingPage/Subscribe';
const HomePage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-900 font-[poppins]'>
        <DreamJob/>
        <Companies/>  
        <JobCategory/>
        <Working/>
        <Testimonials/>
        <Subscribe/>
    </div>
  )
}

export default HomePage;