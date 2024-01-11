import { createTheme } from '@mui/system';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {ukUA } from '@mui/material/locale';
import './App.css';
import Calendar from './pages/calendar/calendar';
import { ukUA as dataGridUkUA } from '@mui/x-data-grid';
import { ukUA as coreDeukUA } from '@mui/material/locale';
import RegistrationForm from './pages/registration/registration';



const theme = createTheme({
  palette: {
    primary: {
      main: '#00203F',
    },
    secondary: {
      main: '#ADF0D1'
    }
  },
  ukUA,
  dataGridUkUA,
  coreDeukUA
})

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <RegistrationForm></RegistrationForm>
      {/* <Calendar/> */}
    </ThemeProvider>
  )
}

export default App;
