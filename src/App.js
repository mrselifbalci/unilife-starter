import React,{useState} from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
const [email,setEmail]=useState('')


const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(email)
}

  return (
    <div>
    <Header />
       <form onSubmit={handleSubmit}>
        <input
          onChange={(e)=>setEmail(e.target.value)}
        />
       </form>
    </div>
  );
}

export default App;
