import React from 'react'

const AddMovie = ({setshowAdd,setnewmovie,newmovie,addmovie}) => {
  return (
    <div className='modal'>

        <div className='box'>
        <button onClick={()=>setshowAdd(false)}>X</button>
      <input type="text" onChange={(e)=>setnewmovie({...newmovie,name:e.target.value})}placeholder='name' />
      <input type="text" onChange={(e)=>setnewmovie({...newmovie,description:e.target.value})}placeholder='description' />
      <input type="text" onChange={(e)=>setnewmovie({...newmovie,image:e.target.value})}placeholder='image' />
      <input type="number" onChange={(e)=>setnewmovie({...newmovie,rate:e.target.value})}placeholder='rate' />
      <button onClick={()=>{setshowAdd(false);addmovie()}}>Add</button>
        </div>
      
    </div>
  )
}

export default AddMovie
