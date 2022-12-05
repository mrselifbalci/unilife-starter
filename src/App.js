import React,{useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import Socialize from './Components/Socialize/Socialize';




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
