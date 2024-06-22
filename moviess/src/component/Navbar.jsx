import React, { useState } from 'react'
import AddMovie from './AddMovie'
import { useNavigate } from 'react-router-dom'

const Navbar = ({addmovie,newmovie,setnewmovie,setpage,setsearch}) => {
  const [showAdd, setshowAdd] = useState(false)
  const navigate=useNavigate()
  return (
    <div className='nav'>
      {showAdd?<AddMovie addmovie={addmovie} newmovie={newmovie} setnewmovie={setnewmovie} setshowAdd={setshowAdd} />:null}
      
      <h1>Logo</h1>

      <ul>

        <li>Search:<input type="text" onChange={(e)=>setsearch(e.target.value)}  /></li>

        <li onClick={()=>navigate("/")} >Logout</li>

        <li onClick={()=>setshowAdd(true)} >Add Movie</li>

      </ul>

    </div>
  )
}

export default Navbar