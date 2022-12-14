import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import Socialize from './Components/Socialize/Socialize';
import SeeAllCities from './Pages/SeeAllCities/SeeAllCities';
import CityDetails from './Pages/CityDetails/CityDetails';




function App() {
// const [email,setEmail]=useState('')
// const handleSubmit=(e)=>{
//   e.preventDefault()
//   console.log(email)
// }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/seeallcities' element={<SeeAllCities />} />
          <Route path='/citydetails/:cityId' element={<CityDetails />} />
        </Routes>
        <Socialize />
        <Footer />
      </BrowserRouter>
       {/* <form onSubmit={handleSubmit}>
        <input
          onChange={(e)=>setEmail(e.target.value)}
        />
       </form> */}
    </div>
  );
}

export default App;
