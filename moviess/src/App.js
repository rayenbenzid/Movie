import React, { useState } from 'react'
import './App.css';
import Login from './component/Login';
import Home from './component/Home';
import Navbar from './component/Navbar';
import MovieList from './component/MovieList';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  const [page, setpage] = useState(0)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/rayen' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
