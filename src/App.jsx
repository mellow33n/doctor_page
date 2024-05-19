import { createTheme } from '@mui/system';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {ukUA } from '@mui/material/locale';
import './App.css';
import Calendar from './pages/calendar/calendar';
import { ukUA as dataGridUkUA } from '@mui/x-data-grid';
import { ukUA as coreDeukUA } from '@mui/material/locale';
import RegistrationForm from './pages/registration/registration';
import PostRegistrationPage from './pages/registration/registrationSucces';
import Main from './pages/main/main';

import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Routes from './routes/routes';
import RoutesList from './routes/RoutesList';


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
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },

])

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        <RoutesList/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
