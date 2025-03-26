import React, { useEffect } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom'; //Navigate
import * as ROUTES from './constants/routes'
import "./css/Swiper.css"
import "./css/Popup.css"
import "./css/Animations.css"
import "./css/Style.css"
import "./css/Calculator.css"
import "./css/Dashboard.css"
import "./css/SuccessLoanForm.css"
import "./css/BecomeMemberForm.css"
import "./css/TransitionPage.css"

import { ThemeProvider } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
import './font-awesome-4.7.0/css/font-awesome.min.css'
import './font-awesome-4.7.0/css/font-awesome.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import LoadApplication from './pages/LoadApplication';
import Notfound404 from './pages/NotFound404';



const App: React.FC =()=> {


  let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // Extra small
        sm: 600, // Small
        md: 1000, // Medium
        lg: 1200, // Large
        xl: 1536, // Extra large
        // Add custom breakpoints here (e.g., xxl: 1800)
      }
    },
  });


  /*
=============================================================== 
//* AOS iNIT
===============================================================
*/
useEffect(()=> {
  AOS.init({
    duration: 400,
    easing: 'ease-in-sine',
    delay: 0,
    once: true,
  })
  AOS.refresh()

  return () => {
    AOS.refresh()
  }
}, [])


  return (
      <ThemeProvider theme={theme}>
        <div className="App">
      
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoadApplication />}/>
              <Route path='*' element={<Notfound404 />}/>
            </Routes>
          </BrowserRouter>

        </div>
      </ThemeProvider>
  );
}

export default App;
