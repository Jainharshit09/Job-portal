import React from 'react';
import {createTheme,  Divider,  MantineProvider } from '@mantine/core';
import './App.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import HomePage from './Pages/HomePage';
import FindJobs from './Pages/FindJobs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './LeandingPage/Footer';
import FindTalent from './Pages/FindTalent';
import TalentProfileMatch from './Pages/TalentProfileMatch';
import PostJobs from './Pages/PostJobs';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJob from './Pages/PostedJob';
import AboutUs from './Pages/AboutUs';
import '@mantine/dates/styles.css';
// Define your custom theme here
const theme = createTheme({
  colors: {
    'mine-shaft': [
      '#f6f6f6', // 50
      '#e7e7e7', // 100
      '#d1d1d1', // 200
      '#b0b0b0', // 300
      '#888888', // 400
      '#6d6d6d', // 500
      '#5d5d5d', // 600
      '#4f4f4f', // 700
      '#454545', // 800
      '#3d3d3d', // 900
      '#2d2d2d', // 950
    ],
    'bright-sun': [
      '#fffbeb', // 50
      '#fff3c6', // 100
      '#ffe588', // 200
      '#ffd149', // 300
      '#ffbd20', // 400
      '#f99b07', // 500
      '#dd7302', // 600
      '#b75006', // 700
      '#943c0c', // 800
      '#7a330d', // 900
      '#461902', // 950
    ],
    // 'java': [
    //     '#effefc',
    //     '#c7fff8',
    //     '#90fff1',
    //     '#51f7e9',
    //     '#1de4d9',
    //     '#04c8c0',
    //     '#00b2af',
    //     '#05807f',
    //     '#0a6465',
    //     '#0d5454',
    //     '#003033',
    // ],
  },
  focusRing:"never",
  fontFamily: 'poppins, sans-serif',
  primaryColor:"bright-sun",
  primaryShade:4,
});

function App() {
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
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
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
