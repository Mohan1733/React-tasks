import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Fetch = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((result)=>setData(result))
    },[]);
  return (
    <div>
        <ul>
            {data.map((user,index)=>(
                <li key={index}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Fetch