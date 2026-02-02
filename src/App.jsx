import React from 'react';
import Navbar from './component/Navbar'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employee from './component/Employee'
import Fetch from './component/Fetch';
import Controlled from './component/Controlled';
import Uncontrolled from './component/Uncontrolled';
import Todo from './component/Todo';
import EmployeeFetch from './component/EmployeeFetch'


const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

const App = () => {
  return (
    // <BrowserRouter>
    //   <Navbar />  
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
    // <Employee />
    // <Fetch />
    // <Controlled />
    // <Uncontrolled />
    // <Todo />
    <EmployeeFetch />
  );
};

export default App;