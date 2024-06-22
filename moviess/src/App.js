import React, { useState } from 'react'
import './App.css';
import Login from './component/Login';
import Home from './component/Home';
import Navbar from './component/Navbar';
import MovieList from './component/MovieList';


const App = () => {
  const [page, setpage] = useState(0)
  return (
    <div>
      {page==0?<Login setpage={setpage} />:<Home setpage={setpage}/>}
      
      
     
      

    </div>
  )
}

export default App
