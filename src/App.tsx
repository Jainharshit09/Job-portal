import React from 'react';
import {createTheme,  MantineProvider } from '@mantine/core';
import './App.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from './Pages/HomePage';
import FindJobs from './Pages/FindJobs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './LeandingPage/Footer';
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
  },
  fontFamily: 'poppins, sans-serif',
});

function App() {
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/find-job" element={<FindJobs />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
