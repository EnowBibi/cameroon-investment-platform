import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";

import App from './App.jsx'
import FindIvestors from './FindIvestors.jsx';

import SignUp from './SignUp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>} />

        <Route path="/findInvestors" element={<FindIvestors/>} />


      </Routes>
    </BrowserRouter>
  </StrictMode>,
)


