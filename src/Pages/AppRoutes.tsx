import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header/Header'
import { Divider } from '@mantine/core'
import Footer from '../Components/LeandingPage/Footer'
import AboutUs from './AboutUs'
import ApplyJobPage from './ApplyJobPage'
import CompanyPage from './CompanyPage'
import FindJobs from './FindJobs'
import FindTalent from './FindTalent'
import HomePage from './HomePage'
import JobDescPage from './JobDescPage'
import JobHistoryPage from './JobHistoryPage'
import PostedJob from './PostedJob'
import PostJobs from './PostJobs'
import Profile from './Profile'
import SignupPage from './SignupPage'
import TalentProfileMatch from './TalentProfileMatch'
import { useSelector } from 'react-redux'

const AppRoutes = () => {
    const user=useSelector((state:any)=>state.user);
  return (
    <BrowserRouter>
    <div className='relative'>
    <Header/>
    <Divider mx="md" size="xs" color="mine-shaft.7"/>
      <Routes>
        <Route path="/find-job" element={<FindJobs />} />
        <Route path="/find-talent" element={<FindTalent />} />
        <Route path="/talent-profile" element={<TalentProfileMatch/>} />
        <Route path="/post-job" element={<PostJobs/>} />
        <Route path="/jobs" element={<JobDescPage/>} />
        <Route path="/apply-job" element={<ApplyJobPage/>} />
        <Route path="/company-page" element={<CompanyPage/>} />
        <Route path="/posted-job" element={<PostedJob/>} />
        <Route path="/job-history" element={<JobHistoryPage/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/signup" element={user ?<Navigate to="/"/>:<SignupPage/>} />
        <Route path="/login" element={user ?<Navigate to="/"/>:<SignupPage/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default AppRoutes