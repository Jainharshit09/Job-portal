import React from 'react';
import { createTheme, Divider, MantineProvider } from '@mantine/core';
import './App.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/notifications/styles.css';

import '@mantine/dates/styles.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/LeandingPage/Footer';
import AppRoutes from './Pages/AppRoutes';
import { Notifications } from '@mantine/notifications';

// Create custom theme with Mantine
const theme = createTheme({
  colors: {
    'mine-shaft': [
      '#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888',
      '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#2d2d2d',
    ],
    'bright-sun': [
      '#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20',
      '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902',
    ],
  },
  focusRing: "never",
  fontFamily: 'Poppins, sans-serif',
  primaryColor: "bright-sun", // Set custom primary color
  primaryShade: 4,
});

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}> {/* Add this provider */}
        <Notifications />
        <BrowserRouter>
          <div className="relative">
            <Header />
            <Divider mx="md" size="xs" color="mine-shaft.7" />
            <Routes>{AppRoutes()}</Routes>
            <Footer />
          </div>
        </BrowserRouter>
    </MantineProvider>
  );
}


export default App;