import React, { useState } from 'react'

const Navbar = ({setpage,setsearch}) => {
  return (
    <div className='nav'>
      <h1>Logo</h1>
      
      <ul>
        <li>Search:<input type="text" onChange={(e)=>setsearch(e.target.value)}  /></li>

        <li onClick={()=>setpage(0)} >Logout</li>
        
        <li>Add Movie</li>

      </ul>

    </div>
  )
}

export default Navbar