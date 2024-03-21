import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Facebook from '../Components/Main/Facebook/facebook';
import Home from '../Components/Main/Home/Home';

import Google from '../Components/Main/Google/google';

import Ugc from '../Components/Main/Ugc/Ugc';
const Router = () => {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Facebook/>} />
        <Route path="/facebook" element={<Facebook/>} />
        <Route path="/google" element={<Google/>} />
        <Route path="/ugc" element={<Ugc/>} />
       
      </Routes>
    
    </BrowserRouter>
  );
};

export default Router;
