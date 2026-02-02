import React, { useEffect, useState } from 'react'

const EmployeeFetch = () => {
  const [employee,setEmployee]=useState([]);
  const [form,setForm]=useState({id:null,name:"",department:"",email:""})
  const [edit,setEdit]=useState(false)

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleAdd=()=>{
    if(!form.name || !form.department || !form.email) return;
    setEmployee([...employee,{...form,id:Date.now()}]);
  }

  const handleEdit=(emp)=>{
    setForm(emp);
    setEdit(true)
  }
  const handleUpdate=()=>{
    setEmployee(employee.map((emp)=>(emp.id === form.id ?form:emp)))
  }
  const handleDelete=(id)=>{
    setEmployee(employee.filter((emp)=> emp.id !== id))
  }

 useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((user) => ({
          id: user.id,
          name: user.name,
          department: user.company?.name || "General",
          email: user.email,
        }));
        setEmployee(formattedData);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
    <div className='p-4'>
      <h2 className='text-center text-xl font-bold mb-4'>employee management system</h2>
      <div className='mb-6 flex gap-2 justify-center'>
        <input type="text" placeholder='name...' className='p-2 border' name='name' value={form.name} onChange={handleChange} />
        <input type="text" placeholder='department...' className='p-2 border' name='department' value={form.department} onChange={handleChange}/>
        <input type="email" placeholder='email...' className='p-2 border' name='email' value={form.email} onChange={handleChange}/>
        {edit? (<button className='p-1 border bg-yellow-500' onClick={handleUpdate}>update</button>):(
        <button className='p-1 border bg-red-500' onClick={handleAdd}>add</button>)}
      </div>

      <table className='w-full border-collapse border'>
        <thead>
          <tr>
            <th>name</th>
            <th>department</th>
            <th>email</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody className='px-2'>
        {employee.map((emp)=>(
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>{emp.email}</td>
            <td>
              <button className='p-1 border bg-green-500 m-2' onClick={()=>handleEdit(emp)}>edit</button>
              <button className='p-1 border bg-red-500' onClick={()=>handleDelete(emp.id)}>delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default EmployeeFetch