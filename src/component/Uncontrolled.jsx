import React, { useRef } from 'react'

const Uncontrolled = () => {
  const name=useRef('');

  const handleSubmit=()=>{
    alert(name.current.value);
  }
  return (
    <>
    <div>
      <input type="text" ref={name} className='border p-2 m-2' placeholder='enter...'/>
      <button onClick={handleSubmit} className='bg-black text-white p-2 rounded'>submit</button>
    </div>
    </>
  )
}

export default Uncontrolled