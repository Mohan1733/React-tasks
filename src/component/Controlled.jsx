import React from 'react'
import { useState } from 'react'

const Controlled = () => {
    const[data,setData]=useState('')
  return (
    <>
    <input type="text" placeholder='search...' className='border p-2 m-3' onChange={(e)=>setData(e.target.value)} />
    <p>{data}</p>
    </>
  )
}

export default Controlled