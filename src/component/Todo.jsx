import React, { useState } from 'react'

const Todo = () => {
    const[todo,setTodo]=useState([]);
    const[data,setData]=useState('');
   
    const handleAdd=()=>{
        if(data){
            setTodo([...todo,{data,completed:false}])
            setData('')
        }
    }

    const handleDelete=(index)=>{
        const newTodo=[...todo];
        newTodo.splice(index,1);
        setTodo(newTodo)
    }


  return (
    <>
    <div className='mx-auto text-center my-7'>
        <h1 className='text-2xl font-semibold'>todolist</h1>
        <input type="text" placeholder='Enter...' className='border p-2 m-2 font-bold mb-5' value={data} onChange={(e)=>setData(e.target.value)} />
        <button className='bg-black text-white p-2 rounded' onClick={handleAdd}>add</button>
        <ul>
            {todo.map((todos,index)=>(
                <li key={index} className='mb-2'>{todos.data}
                <button className='bg-red-500 text-white p-2 rounded mx-2' onClick={()=>handleDelete(index)}>delete</button>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default Todo