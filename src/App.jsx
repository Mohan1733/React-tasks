import React from 'react';
import Navbar from './component/Navbar'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employee from './component/Employee'
import Fetch from './component/Fetch';


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
    <Fetch />
  );
};

export default App;