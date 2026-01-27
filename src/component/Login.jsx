import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [isLogged, setIsLogged] = useState(false);

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (form.username === "admin" || form.password === "admin")
      setIsLogged(true);
    else {
      alert("error invalid");
    }
  };

  const handleLogout=(e)=>{
    setIsLogged(false);
    setForm({username:'',password:''});
  }

  return (
    <>
      {isLogged ? (
        <div>
          <h2>welcome,{form.username}</h2>
        <button onClick={handleLogout}>logout</button>
        </div>
      ) : (
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="enter username"
            name="username"
            value={form.username}
            onChange={handlechange}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="enter password"
            name="password"
            value={form.password}
            onChange={handlechange}
          />
          <br />
          <br />
          <button type="submit">login</button>
        </form>
      )}
    </>
  );
};

export default Login;
