import React from 'react'
import DreamJob from '../Components/LeandingPage/DreamJob';
import Companies from '../Components/LeandingPage/Companies';
import JobCategory from '../Components/LeandingPage/JobCategory';
import Working from '../Components/LeandingPage/Working';
import Testimonials from '../Components/LeandingPage/Testimonials';
import Subscribe from '../Components/LeandingPage/Subscribe';
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