import './App.css';
import Home from "./view/home/home"
import Create from './view/create/create';
import Detail from './view/details/detail';
import LandingPage from './view/landing/landingPage';
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";

function App() {
   return (
    <div>
      <Routes> 
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/dogs' element={<Home/>}/>
        <Route path='/dogs' element={<Create/>}/>
        <Route path='/dogs/name' element={<Detail/>}/>
        <Route path='/dogs/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
