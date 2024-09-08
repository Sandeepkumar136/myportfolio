import React from 'react'
import Navbar from './components/Navbar';
import './Style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './components/Education';
import Contributors from './components/Contributors';
import Project from './components/Project';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gear from './components/Gear';

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/education'element={<Education/>}/>
          <Route path='/gear' element={<Gear/>}/>
          <Route path='/contributor' element={<Contributors/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
