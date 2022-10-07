import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CitiesDetailsPage from './pages/CitiesDetailsPage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage';
import HomeDetailPage from './pages/HomeDetailPage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/citydetails' element={<CitiesDetailsPage/>}/>
            <Route path='/allcities' element={<SeeAllCitiesPage/>}/>
            <Route path='/homedetails' element={<HomeDetailPage/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
