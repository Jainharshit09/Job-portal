import React from 'react';
import {  Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import ApplyJobPage from './ApplyJobPage';
import CompanyPage from './CompanyPage';
import FindJobs from './FindJobs';
import FindTalent from './FindTalent';
import HomePage from './HomePage';
import JobDescPage from './JobDescPage';
import JobHistoryPage from './JobHistoryPage';
import PostedJob from './PostedJob';
import PostJobs from './PostJobs';
import Profile from './Profile';
import SignupPage from './SignupPage';
import TalentProfileMatch from './TalentProfileMatch';
import ProtectedRoutes from '../Services/ProtectedRoutes';
import PublicRoutes from '../Services/PublicRoutes';

const AppRoutes = () => {

  return (
    <>
      <Route path="/find-job" element={<FindJobs />} />
      <Route path="/find-talent" element={<FindTalent />} />
      <Route path="/talent-profile/:id" element={<TalentProfileMatch />} />
      <Route path="/post-job/:id" element={<ProtectedRoutes   allowedRoles={['EMPLOYEER']} childern={<PostJobs />} />} />
      <Route path="/jobs/:id" element={<JobDescPage />} />
      <Route path="/apply-job/:id" element={<ApplyJobPage />} />
      <Route path="/company-page/:company" element={<CompanyPage />} />
      <Route path="/posted-job/:id" element={<ProtectedRoutes   allowedRoles={['EMPLOYEER']} childern={<PostedJob />} />} />
      <Route path="/job-history" element={<ProtectedRoutes   allowedRoles={['APPLICANT']} childern={<JobHistoryPage />} />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/signup" element={<PublicRoutes children={<SignupPage />} />} />
      <Route path="/login" element={<PublicRoutes children={<SignupPage />} />} /> 
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<HomePage />} />
    </>
  );
};

export default AppRoutes;
